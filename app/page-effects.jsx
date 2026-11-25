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
    html.classList.remove("no-js");
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateHeader);
      html.classList.add("no-js");
    };
  }, []);
  return null;
}