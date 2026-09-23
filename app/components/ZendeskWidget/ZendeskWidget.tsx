"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ZendeskWidget() {
  const openWidget = () => {
    if (typeof window === "undefined") return;

    const zE = (window as any).zE;

    if (typeof zE === "function") {
      zE(() => {
        try {
          zE("webWidget", "open");
        } catch (e) {
          console.error("[Zendesk] Open failed:", e);
        }
      });
      try {
        zE("webWidget:on", "open", () => {
        });
      } catch (e) {
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      openWidget();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=832e42ad-4c5d-4c97-8f07-1e27982ea22a"
      strategy="afterInteractive"
      onLoad={openWidget}
      onReady={openWidget}
    />
  );
}