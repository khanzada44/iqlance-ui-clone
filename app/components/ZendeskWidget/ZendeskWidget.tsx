"use client";

import Script from "next/script";

export default function ZendeskWidget() {
  const openZendesk = () => {
    const checkZendesk = () => {
      if (typeof window !== "undefined" && window.zE) {
        window.zE("messenger", "open");
        return true;
      }

      return false;
    };

    // Try immediately
    if (checkZendesk()) return;

    // Wait until Zendesk is fully initialized
    const interval = window.setInterval(() => {
      if (checkZendesk()) {
        window.clearInterval(interval);
      }
    }, 300);

    // Stop checking after 5 seconds
    window.setTimeout(() => {
      window.clearInterval(interval);
    }, 5000);
  };

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=832e42ad-4c5d-4c97-8f07-1e27982ea22a"
      strategy="afterInteractive"
      onLoad={openZendesk}
    />
  );
}