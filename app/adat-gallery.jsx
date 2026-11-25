import jawaTimurPria from "../assets/img/adat/jawa-timur-pria.webp";
import jawaTimurWanita from "../assets/img/adat/jawa-timur-wanita.webp";
import jawaBaratPria from "../assets/img/adat/jawa-barat-pria.webp";
import jawaBaratWanita from "../assets/img/adat/jawa-barat-wanita.webp";
import baliPria from "../assets/img/adat/bali-pria.webp";
import baliWanita from "../assets/img/adat/bali-wanita.webp";
import riauPria from "../assets/img/adat/riau-pria.webp";
import riauWanita from "../assets/img/adat/riau-wanita.webp";
import acehPria from "../assets/img/adat/aceh-pria.webp";
import acehWanita from "../assets/img/adat/aceh-wanita.webp";

const regions = [
  { id: "jawa-timur", name: "Jawa Timur", pria: jawaTimurPria, wanita: jawaTimurWanita },
  { id: "jawa-barat", name: "Jawa Barat", pria: jawaBaratPria, wanita: jawaBaratWanita },
  { id: "bali", name: "Bali", pria: baliPria, wanita: baliWanita },
  { id: "riau", name: "Riau", pria: riauPria, wanita: riauWanita },
  { id: "aceh", name: "Aceh", pria: acehPria, wanita: acehWanita }
];

export default function AdatGallery() {
  return (
    <section className="section adat-gallery" id="busana-adat" aria-labelledby="adat-title">
      <div className="container">
        <header className="adat-intro">
          <h2 id="adat-title">Busana adat Indonesia</h2>
          <p>Lihat detail busana pria dan wanita dari lima daerah.</p>
        </header>
        <div className="adat-viewer">
          <fieldset className="adat-regions">
            <legend>Pilih daerah</legend>
            {regions.map(({ id, name }, index) => (
              <label key={id}><input className="sr-only" type="radio" name="adat-region" value={id}
                defaultChecked={index === 0} /><span>{name}</span></label>
            ))}
          </fieldset>
          <div className="adat-scenes">
            {regions.map(region => (
              <section className="adat-pair" key={region.id} data-region={region.id} aria-labelledby={`adat-${region.id}`}>
                <h3 id={`adat-${region.id}`}>{region.name}</h3>
                <div className="adat-figures">
                  {[["pria", "Pria"], ["wanita", "Wanita"]].map(([key, label]) => (
                    <figure key={key}>
                      <img src={region[key].src} width={420} height={600} loading="lazy" alt={`Karakter ${key} mengenakan busana ${region.name}`} />
                      <figcaption>{label}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
