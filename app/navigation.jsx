"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["fitur", "Fitur"], ["bu-sari", "Bu Sari"], ["cara-kerja", "Cara kerja"],
  ["coba", "Coba"], ["bahasa", "Bahasa"], ["tanya", "Tanya jawab"]
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);

  return (
    <nav className="nav" aria-label="Navigasi utama">
      <button ref={trigger} type="button" className="nav-toggle" aria-expanded={open}
        aria-controls="menu" onClick={() => setOpen(!open)}>
        <svg aria-hidden="true"><use href="#i-menu" /></svg>
        <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
      </button>
      <ul id="menu" className={open ? "nav-list is-open" : "nav-list"}>
        {links.map(([id, label]) => (
          <li key={id}><a href={"#" + id} onClick={() => setOpen(false)}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}