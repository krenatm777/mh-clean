"use client";

import { useEffect } from "react";

export function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reveal-on-scroll
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io.observe(el));

      // Hero signature draw-in
      const paths = document.querySelectorAll<SVGPathElement>(
        ".sig .draw, .sig .gem"
      );
      paths.forEach((p, i) => {
        try {
          const len = p.getTotalLength();
          p.style.strokeDasharray = String(len);
          p.style.strokeDashoffset = String(len);
          p.style.transition = `stroke-dashoffset 1.4s cubic-bezier(.22,.61,.36,1) ${
            i * 0.09
          }s`;
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              p.style.strokeDashoffset = "0";
            })
          );
        } catch {
          /* noop */
        }
      });

      return () => io.disconnect();
    }
  }, []);

  return null;
}
