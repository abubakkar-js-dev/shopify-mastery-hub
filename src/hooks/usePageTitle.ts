'use client';
import { useEffect } from 'react';

/**
 * Custom hook to dynamically set the page title.
 * @param title The title to set for the current page.
 * @param suffix Optional suffix to append to the title (defaults to "Shopify Mastery Hub").
 */
export function usePageTitle(title: string, suffix: string = "Shopify Mastery Hub") {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${suffix}` : suffix;
    document.title = fullTitle;
  }, [title, suffix]);
}
