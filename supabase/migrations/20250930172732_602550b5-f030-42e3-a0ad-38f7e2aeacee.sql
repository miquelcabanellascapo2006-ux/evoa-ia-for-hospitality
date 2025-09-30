-- Create an enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table to store role assignments
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create a security definer function to check if a user has a specific role
-- This prevents recursive RLS issues
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Allow users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Drop the overly permissive policies on newsletter_subscribers
DROP POLICY IF EXISTS "Only authenticated users can view newsletter subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can manage newsletter subscriptions" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can delete newsletter subscriptions" ON public.newsletter_subscribers;

-- Create new admin-only policies for newsletter_subscribers
CREATE POLICY "Only admins can view newsletter subscribers"
ON public.newsletter_subscribers
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update newsletter subscriptions"
ON public.newsletter_subscribers
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete newsletter subscriptions"
ON public.newsletter_subscribers
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));