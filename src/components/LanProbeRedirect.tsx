"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

/**
 * Opportunistic campus-LAN detection.
 *
 * The platform lives on an internal network only, so the server-rendered notice
 * is what off-campus visitors read — and the manual "Enter Questionbank"
 * button on the page is the guaranteed way in, because a top-level navigation
 * is not subject to the browser's cross-origin / local-network restrictions.
 *
 * This component is only a convenience on top of that: when the probe image
 * does load, the visitor is already on the campus network and we hand them
 * straight over instead of making them click.
 *
 * Deliberately an <img> rather than fetch(): an image load needs no CORS
 * response headers from a purely static host, and a captive-portal or ISP
 * hijack page returned as HTML cannot be decoded as an image, so it fails the
 * check instead of producing a false positive.
 *
 * Renders nothing: the notice itself is server-rendered so it appears
 * instantly and still works with JavaScript disabled.
 */
export default function LanProbeRedirect() {
  useEffect(() => {
    const image = new Image();
    let settled = false;
    let timer = 0;

    function finish() {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      image.onload = null;
      image.onerror = null;
    }

    image.onload = () => {
      finish();
      window.location.replace(site.learnUrl);
    };
    image.onerror = finish;

    timer = window.setTimeout(finish, site.learnProbeTimeoutMs);
    // Cache-bust so an earlier failure is not remembered across visits.
    image.src = `${site.learnProbeUrl}?_=${Date.now()}`;

    return finish;
  }, []);

  return null;
}
