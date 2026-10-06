"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

/**
 * Opportunistic campus-LAN detection.
 *
 * The learning platform lives on an internal network only, so the static notice
 * markup on the page is what off-campus visitors see. When the probe endpoint
 * *is* reachable — i.e. the visitor is already on the campus network — we hand
 * them straight over to the platform instead of making them read a notice.
 *
 * Renders nothing: the notice itself is server-rendered so it appears instantly
 * and still works with JavaScript disabled.
 */
export default function LanProbeRedirect() {
  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(
      () => controller.abort(),
      site.learnProbeTimeoutMs,
    );

    async function probe() {
      try {
        const response = await fetch(site.learnProbeUrl, {
          method: "GET",
          mode: "cors",
          credentials: "omit",
          cache: "no-store",
          signal: controller.signal,
        });
        if (response.ok) {
          window.location.replace(site.learnUrl);
        }
      } catch {
        // Off the campus network (or the platform is down / its certificate is
        // untrusted): keep showing the notice.
      } finally {
        window.clearTimeout(timer);
      }
    }

    void probe();

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return null;
}
