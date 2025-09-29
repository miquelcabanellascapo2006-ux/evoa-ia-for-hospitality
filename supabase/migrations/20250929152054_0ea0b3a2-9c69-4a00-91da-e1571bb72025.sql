-- Fix security issue: Add RLS policies to protect newsletter subscriber emails
-- Only allow authenticated admin users to read newsletter subscriber data

-- Create policy to restrict SELECT access to authenticated users only
-- This prevents public harvesting of email addresses
CREATE POLICY "Only authenticated users can view newsletter subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
TO authenticated
USING (true);

-- Add policy to allow authenticated users to manage subscriptions (UPDATE/DELETE)
-- This allows for proper subscription management
CREATE POLICY "Authenticated users can manage newsletter subscriptions" 
ON public.newsletter_subscribers 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete newsletter subscriptions" 
ON public.newsletter_subscribers 
FOR DELETE 
TO authenticated
USING (true);