import icon from "../assets/img/icon-64.png";
import touchIcon from "../assets/img/icon-180.png";
import hero from "../assets/img/hero_wave.webp";
import { siteUrl } from "./site-url";
import "../assets/css/style.css";
import "../assets/css/adat.css";

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Tuturloka · Ngobrol sopan dalam bahasa Jawa dan Sunda bersama Bu Sari",
  description: "Tuturloka melatih kamu bicara bahasa Jawa dan Sunda dengan sopan sesuai lawan bicara. Ngobrol dengan Bu Sari, tutor 3D yang memerankan simbah, guru, atau penjual, lalu menjelaskan kata yang perlu diubah dalam Bahasa Indonesia.",
  icons: { icon: icon.src, apple: touchIcon.src },
  openGraph: {
    type: "website",
    url: "/",
    title: "Tuturloka · Ngobrol sopan dalam bahasa daerah",
    description: "Latih unggah-ungguh Jawa dan undak-usuk Sunda bersama Bu Sari.",
    images: [{ url: hero.src, width: hero.width, height: hero.height }]
  }
};

export const viewport = { themeColor: "#062A49" };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="no-js">
      <body>{children}</body>
    </html>
  );
}
