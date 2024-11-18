"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispChat() {
  useEffect(() => {
    window.$crisp = window.$crisp || [];
    window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID || "";
  }, []);

  return (
    <Script
      id="crisp-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var d = document;
            var s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `,
      }}
    />
  );
}
