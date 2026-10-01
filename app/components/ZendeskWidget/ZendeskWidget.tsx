"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ZendeskWidget() {
  const openedRef = useRef(false);

  const openWidget = () => {
    if (typeof window === "undefined") return false;

    const zE = (window as any).zE;

    if (typeof zE !== "function") {
      return false;
    }

    try {
      zE(() => {
        try {
          zE("webWidget", "open");
          openedRef.current = true;
        } catch (error) {
          console.error("Zendesk open error:", error);
        }
      });

      return true;
    } catch (error) {
      console.error("Zendesk initialization error:", error);
      return false;
    }
  };

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 30;

    const interval = window.setInterval(() => {
      attempts++;

      const success = openWidget();

      if (success || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 300);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=832e42ad-4c5d-4c97-8f07-1e27982ea22a"
      strategy="afterInteractive"
      onLoad={() => {
        openWidget();
      }}
    />
  );
}