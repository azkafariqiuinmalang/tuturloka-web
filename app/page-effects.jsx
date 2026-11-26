"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const html = document.documentElement;
    const header = document.querySelector("[data-header]");
    const elements = document.querySelectorAll(".reveal");
    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    let observer;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      elements.forEach((el, index) => {
        el.style.transitionDelay = (index % 4) * 70 + "ms";
        observer.observe(el);
      });
    }
    // The parang line under the header fills as the visitor reads down the page.
    const updateRead = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      html.style.setProperty("--read", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    updateRead();
    window.addEventListener("scroll", updateRead, { passive: true });

    // The download card shows once the hero is passed and hides while the closing CTA or the footer is on screen.
    const floatDownload = document.querySelector("[data-float-download]");
    const hero = document.querySelector(".hero");
    const cta = document.querySelector(".cta-band");
    const footer = document.querySelector(".site-footer");
    let floatObserver;
    if (floatDownload && hero && "IntersectionObserver" in window) {
      const seen = new Map();
      floatObserver = new IntersectionObserver(entries => {
        for (const entry of entries) seen.set(entry.target, entry.isIntersecting);
        floatDownload.classList.toggle("is-shown", !seen.get(hero) && !seen.get(cta) && !seen.get(footer));
      }, { threshold: 0 });
      floatObserver.observe(hero);
      if (cta) floatObserver.observe(cta);
      if (footer) floatObserver.observe(footer);
    }

    html.classList.remove("no-js");
    return () => {
      observer?.disconnect();
      floatObserver?.disconnect();
      window.removeEventListener("scroll", updateRead);
      window.removeEventListener("scroll", updateHeader);
      html.classList.add("no-js");
    };
  }, []);
  return null;
}