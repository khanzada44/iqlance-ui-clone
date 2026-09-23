"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ZendeskWidget() {
  const openZendesk = () => {
    if (typeof window === "undefined") return;

    const checkAndOpen = () => {
      const zE = (window as any).zE;
      if (zE) {
        zE("messenger", "open");
        return true;
      }
      return false;
    };

    if (checkAndOpen()) return;

    const interval = setInterval(() => {
      if (checkAndOpen()) {
        clearInterval(interval);
      }
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).zE) {
      openZendesk();
    }
  }, []);

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=832e42ad-4c5d-4c97-8f07-1e27982ea22a"
      strategy="afterInteractive"
      onLoad={openZendesk}
      onReady={openZendesk}
    />
  );
}