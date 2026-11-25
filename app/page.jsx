import AdatGallery from "./adat-gallery";
import Script from "next/script";
import avatarHappy from "../assets/img/avatar_happy.webp";
import avatarSmile from "../assets/img/avatar_smile.webp";
import callHappy from "../assets/img/call_happy.webp";
import callTalkA from "../assets/img/call_talk_a.webp";
import heroWave from "../assets/img/hero_wave.webp";
import lessonGreeting from "../assets/img/sari_lesson_greeting.webp";
import lessonExplaining from "../assets/img/sari_lesson_explaining.webp";
import logoTuturloka from "../assets/img/logo-tuturloka.png";
import Navigation from "./navigation";
import Quiz from "./quiz";
import PageEffects from "./page-effects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#isi">Langsung ke isi</a>

      <svg width="0" height="0" className="sr-only" aria-hidden="true" focusable="false">
        <symbol id="i-play" viewBox="0 0 24 24"><path fill="#00D7FE" d="M3.6 1.8 13.4 12 3.6 22.2a1.6 1.6 0 0 1-.6-1.3V3.1c0-.5.2-1 .6-1.3Z"/><path fill="#FFCE00" d="m17 8.4-3.6 3.6L17 15.6l4.1-2.3c1.2-.7 1.2-1.9 0-2.6L17 8.4Z"/><path fill="#FF3A44" d="M13.4 12 3.6 22.2c.4.4 1 .4 1.7 0L17 15.6 13.4 12Z"/><path fill="#00F076" d="M13.4 12 17 8.4 5.3 1.8c-.7-.4-1.3-.4-1.7 0L13.4 12Z"/></symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
        <symbol id="i-x" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" d="M7 7l10 10M17 7 7 17"/></symbol>
        <symbol id="i-mic" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></g></symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6"/></symbol>
        <symbol id="i-back" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="m15 5-7 7 7 7"/></symbol>
        <symbol id="i-users" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/></g></symbol>
        <symbol id="i-shield" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m8.8 12 2.2 2.2 4.4-4.4"/></g></symbol>
        <symbol id="i-chat" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12.5a7.5 7.5 0 0 1-11 6.6L4 20.5l1.4-4.6A7.5 7.5 0 1 1 20 12.5Z"/><path d="M9 11h6M9 14h4"/></g></symbol>
        <symbol id="i-book" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8.5 8h7M8.5 11.5h5"/></g></symbol>
        <symbol id="i-phone" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></g></symbol>
        <symbol id="i-guest" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></g></symbol>
        <symbol id="i-sync" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11a8 8 0 0 0-14.2-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.2 4.9L20 16M20 20v-4h-4"/></g></symbol>
        <symbol id="i-lock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5"/></g></symbol>
        <symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></g></symbol>
        <symbol id="i-menu" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/></symbol>
        <symbol id="i-bulb" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.5.4.8 1 .8 1.6v.6h6v-.6c0-.6.3-1.2.8-1.6A6.5 6.5 0 0 0 12 2.5Z"/></g></symbol>
      </svg>

      <header className="site-header" data-header="">
        <div className="container header-inner">
          <a className="brand" href="#beranda" aria-label="Tuturloka, ke awal halaman">
            <img src={logoTuturloka.src} alt="" width="36" height="36" />
            <span>TuturLoka</span>
          </a>
          <Navigation />
          <a className="btn btn-navy btn-sm header-cta" href="https://play.google.com/store/apps/details?id=com.khasyaraka.scout_os&amp;pcampaignid=web_share" target="_blank" rel="noopener">
            Unduh aplikasi <svg aria-hidden="true"><use href="#i-arrow"/></svg>
          </a>
        </div>
      </header>

      <main id="isi">
        <section className="hero" id="beranda" aria-labelledby="hero-title">
          <div className="container hero-copy">
            <p className="pill">Bahasa Jawa &amp; Sunda · bersama Bu Sari</p>
            <h1 id="hero-title">Ngobrol sopan dalam bahasa daerah, <span className="hl">kepada siapa saja</span></h1>
            <p className="lead">Latih unggah-ungguh Jawa dan undak-usuk Sunda lewat obrolan dengan Bu Sari. Kamu jadi tahu kapan bilang <em>mangan</em>, <em>nedha</em>, atau <em>dhahar</em>, dan kenapa.</p>
            <div className="cta-row">
              <a className="btn-store" href="https://play.google.com/store/apps/details?id=com.khasyaraka.scout_os&amp;pcampaignid=web_share" target="_blank" rel="noopener">
                <svg aria-hidden="true"><use href="#i-play"/></svg>
                <span><small>Dapatkan di</small>Google Play</span>
              </a>
              <a className="btn btn-ghost" href="#cara-kerja">Lihat cara kerjanya</a>
            </div>
            <p className="hero-note">Bisa langsung dicoba sebagai tamu, tanpa akun.</p>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <div className="sun"></div>

            <div className="phone phone-side phone-left">
              <div className="screen screen-cards">
                <div className="scr-top"><span className="scr-time">09.41</span></div>
                <p className="scr-title">Kosakata</p>
                <div className="word-card">
                  <p className="word-meaning">makan</p>
                  <ul className="ragam-list">
                    <li><b>mangan</b><span className="tag tag-ngoko">ngoko</span></li>
                    <li><b>nedha</b><span className="tag tag-krama">krama · diri sendiri</span></li>
                    <li><b>dhahar</b><span className="tag tag-inggil">krama inggil</span></li>
                  </ul>
                </div>
                <div className="word-card word-card-su">
                  <p className="word-lang">Sunda</p>
                  <p className="word-row"><b>dahar</b> · <b>neda</b> · <b>tuang</b></p>
                </div>
                <div className="mini-stats">
                  <span><b>12</b>dilatih</span><span><b>5</b>dikuasai</span>
                </div>
              </div>
            </div>

            <div className="phone phone-main">
              <div className="screen screen-call">
                <div className="call-head">
                  <svg aria-hidden="true"><use href="#i-back"/></svg>
                  <span>Sowan Simbah</span>
                  <span className="chip-ragam">krama alus</span>
                </div>
                <img className="call-sari" src={callHappy.src} alt="" width="540" height="960" />
                <div className="call-bubbles">
                  <p className="bubble bubble-sari">Lho, putuku wis teka. Piye kabarmu?</p>
                  <p className="bubble bubble-me">Sae, Mbah. Simbah sampun dhahar?
                    <span className="bubble-ok"><svg aria-hidden="true"><use href="#i-check"/></svg>Krama alus</span>
                  </p>
                </div>
                <div className="call-controls">
                  <span className="hint-pill">Apa yang bisa kukatakan?</span>
                  <span className="mic"><svg aria-hidden="true"><use href="#i-mic"/></svg></span>
                </div>
              </div>
            </div>

            <div className="phone phone-side phone-right">
              <div className="screen screen-report">
                <div className="scr-top"><span className="scr-time">09.48</span></div>
                <p className="scr-title">Rapor bicara</p>
                <p className="scr-sub">Sowan Simbah</p>
                <div className="ring" style={{ "--p": 80 }}><span>4/5</span></div>
                <p className="ring-label">kalimat sudah pas</p>
                <div className="fix">
                  <p className="fix-title">Perlu diubah</p>
                  <p className="fix-row"><s>wis</s><svg aria-hidden="true"><use href="#i-arrow"/></svg><b>sampun</b></p>
                </div>
                <span className="mini-btn">Latihan lagi</span>
              </div>
            </div>
          </div>

          <div className="ribbon" aria-hidden="true">
            <div className="ribbon-track">
              <span>Ngobrol dengan Bu Sari</span><span>Unggah-ungguh</span><span>Undak-usuk</span><span>Ubah ke krama</span><span>Baca lantang</span><span>Kartu ragam</span><span>Rapor bicara</span>
              <span>Ngobrol dengan Bu Sari</span><span>Unggah-ungguh</span><span>Undak-usuk</span><span>Ubah ke krama</span><span>Baca lantang</span><span>Kartu ragam</span><span>Rapor bicara</span>
            </div>
          </div>
        </section>

        <section className="section lesson-feature" id="fitur" aria-labelledby="fitur-title">
          <div className="container">
            <header className="lesson-intro">
              <h2 id="fitur-title">Satu kalimat, beda rasanya.</h2>
              <p>Lihat bagaimana Bu Sari membantu kamu memilih kata saat berpamitan kepada Simbah.</p>
            </header>

            <div className="lesson-story" data-lesson-story="">
              <div className="lesson-stage" aria-hidden="true">
                <div className="lesson-stage-top">
                  <span>Latihan bahasa Jawa</span><span className="lesson-count"></span>
                </div>
                <div className="lesson-stage-body">
                  <div className="lesson-character">
                    <img src={lessonGreeting.src} className="lesson-greeting" alt="" width="416" height="532" loading="lazy" />
                    <img src={lessonExplaining.src} className="lesson-explaining" alt="" width="416" height="532" loading="lazy" />
                  </div>
                  <div className="lesson-scenes"></div>
                </div>
                <div className="lesson-progress"><span></span></div>
              </div>

              <div className="lesson-chapters">
                <article className="lesson-chapter">
                  <h3>Mulai dari lawan bicara.</h3>
                  <p>Kamu mau makan duluan dan pamit kepada Simbah. Kalimat yang biasa kamu pakai dengan teman perlu disesuaikan saat sowan.</p>
                  <div className="lesson-example lesson-context">
                    <img src={lessonGreeting.src} width="72" height="72" alt="Bu Sari berkebaya batik" loading="lazy" />
                    <div>
                      <p className="lesson-label">Situasi latihan</p>
                      <p className="lesson-context-name" lang="jv">Sowan Simbah</p>
                      <span className="lesson-register">Krama alus</span>
                    </div>
                  </div>
                </article>
                <article className="lesson-chapter">
                  <h3>Perbaiki satu kalimat.</h3>
                  <p>Latihan bersama Bu Sari memberi kamu kesempatan mencoba lagi. Di sini, kata <em lang="jv">mangan</em> berubah menjadi <em lang="jv">nedha</em>.</p>
                  <div className="lesson-example lesson-rewrite">
                    <div className="lesson-line"><span className="lesson-label">Kalimat awal</span><p lang="jv">Aku <b>mangan</b> dhisik, ya.</p></div>
                    <div className="lesson-line lesson-answer"><span className="lesson-label">Pilihan krama</span><p lang="jv">Kula <mark>nedha</mark> rumiyin, nggih.</p></div>
                  </div>
                </article>
                <article className="lesson-chapter">
                  <h3>Pahami alasan di baliknya.</h3>
                  <p>Penjelasan dalam bahasa Indonesia menunjukkan kenapa pilihan katanya berubah. Artinya sama, tetapi siapa yang makan menentukan kata yang kamu pakai.</p>
                  <div className="lesson-example lesson-note">
                    <p className="lesson-label">Catatan Bu Sari</p>
                    <p>Pakai <b lang="jv">nedha</b> untuk dirimu sendiri dan <b lang="jv">dhahar</b> untuk orang yang kamu hormati.</p>
                  </div>
                </article>
                <article className="lesson-chapter">
                  <h3>Bandingkan ragam katanya.</h3>
                  <p>Kamus TuturLoka memperlihatkan bagaimana kata “makan” berubah sesuai konteks. Sekarang coba pilih kalimatmu sendiri.</p>
                  <div className="lesson-example lesson-words">
                    <dl>
                      <div><dt lang="jv">mangan</dt><dd>Ngoko</dd></div>
                      <div><dt lang="jv">nedha</dt><dd>Krama untuk diri sendiri</dd></div>
                      <div><dt lang="jv">dhahar</dt><dd>Untuk orang yang dihormati</dd></div>
                    </dl>
                  </div>
                  <a className="lesson-cta" href="#coba">Coba kuis bahasa Jawa</a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-sari" id="bu-sari" aria-labelledby="sari-title">
          <div className="container sari-grid">
            <div className="sari-visual reveal">
              <div className="sari-halo" aria-hidden="true"></div>
              <img className="sari-img" src={heroWave.src} alt="Bu Sari, tutor 3D Tuturloka, berkebaya batik cokelat dan berkacamata, melambaikan tangan." width="720" height="900" loading="lazy" />
              <p className="float-bubble fb-1" aria-hidden="true">Halo! Ibu temani kamu latihan, ya.</p>
              <p className="float-bubble fb-2" aria-hidden="true"><em>Sugeng enjing!</em></p>
            </div>

            <div className="sari-copy reveal">
              <p className="pill">Kenalan dengan tutormu</p>
              <h2 id="sari-title">Bu Sari, teman latihan yang sabar</h2>
              <p>Bu Sari adalah tutor 3D Tuturloka. Ia memerankan lawan bicaramu, mendengarkan jawabanmu, lalu memberi tahu kata yang perlu diubah beserta alasannya.</p>

              <p className="roles-label">Hari ini Bu Sari bisa menjadi…</p>
              <ul className="roles">
                <li><img src={avatarHappy.src} alt="" width="32" height="32" loading="lazy" />Simbah</li>
                <li>Bu Guru</li>
                <li>Bakul di pasar</li>
                <li>Tetangga</li>
                <li>Calon mertua</li>
              </ul>

              <ul className="checks">
                <li><svg aria-hidden="true"><use href="#i-check"/></svg><span><b>Satu suara yang konsisten.</b> Hangat, tenang, dan sedikit lebih pelan supaya mudah diikuti.</span></li>
                <li><svg aria-hidden="true"><use href="#i-check"/></svg><span><b>Jawab dengan suara atau ketikan.</b> Pilih yang paling nyaman buatmu.</span></li>
                <li><svg aria-hidden="true"><use href="#i-check"/></svg><span><b>Buntu? Ada bantuan.</b> Ketuk "Apa yang bisa kukatakan?" untuk melihat contoh kalimat.</span></li>
                <li><svg aria-hidden="true"><use href="#i-check"/></svg><span><b>Ngobrol dengan teman sebaya?</b> Bu Sari bercerita sebagai narator: "Bayangkan temanmu berkata…"</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="cara-kerja" aria-labelledby="langkah-title">
          <div className="container">
            <header className="section-head reveal">
              <p className="pill pill-navy">Cara kerja</p>
              <h2 id="langkah-title">Empat langkah menuju obrolan yang lebih sopan</h2>
              <p>Satu pelajaran berisi satu situasi nyata. Selesai dalam beberapa menit, bisa diulang kapan saja.</p>
            </header>

            <ol className="steps">
              <li className="step reveal">
                <div className="step-copy">
                  <span className="step-num">1</span>
                  <h3>Pilih bahasa dan situasi</h3>
                  <p>Mulai dari situasi sehari-hari: sowan ke rumah Simbah, matur ke Bu Guru, atau tumbas sayur di pasar.</p>
                  <ul className="ticks">
                    <li>Situasi ditulis jelas sebelum mulai</li>
                    <li>Tahu siapa lawan bicaramu sejak awal</li>
                  </ul>
                </div>
                <div className="step-visual" aria-hidden="true">
                  <div className="card-stack">
                    <div className="scn-card"><img src={avatarHappy.src} alt="" width="44" height="44" loading="lazy" /><div><b>Sowan Simbah</b><span>Menyapa · Bertamu</span></div><span className="tag tag-inggil">krama alus</span></div>
                    <div className="scn-card"><img src={avatarSmile.src} alt="" width="44" height="44" loading="lazy" /><div><b>Matur Bu Guru</b><span>Bertanya · Minta izin</span></div><span className="tag tag-krama">krama</span></div>
                    <div className="scn-card"><img src={avatarHappy.src} alt="" width="44" height="44" loading="lazy" /><div><b>Tumbas ing Peken</b><span>Menawar · Membayar</span></div><span className="tag tag-krama">krama</span></div>
                  </div>
                </div>
              </li>

              <li className="step step-flip reveal">
                <div className="step-copy">
                  <span className="step-num">2</span>
                  <h3>Pemanasan: ubah ke krama</h3>
                  <p>Kalimat ngoko kamu ubah ke ragam yang sopan. Pelan-pelan, satu kata kunci setiap kali.</p>
                  <ul className="ticks">
                    <li>Langsung tahu benar atau perlu diubah</li>
                    <li>Tips singkat di setiap kalimat</li>
                  </ul>
                </div>
                <div className="step-visual" aria-hidden="true">
                  <div className="transform-card">
                    <p className="tf-label">Ngoko</p>
                    <p className="tf-text">Kowe arep lunga menyang ngendi?</p>
                    <span className="tf-arrow"><svg><use href="#i-arrow"/></svg></span>
                    <p className="tf-label tf-label-good">Krama alus</p>
                    <p className="tf-text tf-good">Panjenengan badhe tindak dhateng pundi?</p>
                  </div>
                </div>
              </li>

              <li className="step reveal">
                <div className="step-copy">
                  <span className="step-num">3</span>
                  <h3>Telepon Bu Sari</h3>
                  <p>Bu Sari memerankan lawan bicaramu. Kamu menjawab dengan suara atau ketikan, dan obrolannya berlanjut seperti percakapan sungguhan.</p>
                  <ul className="ticks">
                    <li>Mikrofon cukup diaktifkan sekali</li>
                    <li>Arti kalimat bisa dibuka kapan saja</li>
                  </ul>
                </div>
                <div className="step-visual" aria-hidden="true">
                  <div className="call-card">
                    <img src={callTalkA.src} alt="" width="540" height="960" loading="lazy" />
                    <div className="call-card-bar">
                      <span className="live-dot"></span><span>Bu Sari sedang berbicara…</span>
                      <span className="mic mic-sm"><svg><use href="#i-mic"/></svg></span>
                    </div>
                  </div>
                </div>
              </li>

              <li className="step step-flip reveal">
                <div className="step-copy">
                  <span className="step-num">4</span>
                  <h3>Lihat rapor, ulangi yang perlu</h3>
                  <p>Setelah obrolan, rapor bicara menunjukkan kalimat yang sudah pas, kata yang perlu diubah, dan latihan berikutnya.</p>
                  <ul className="ticks">
                    <li>Kata yang keliru ditandai beserta sarannya</li>
                    <li>Kartu kosakata ikut diperbarui</li>
                  </ul>
                </div>
                <div className="step-visual" aria-hidden="true">
                  <div className="report-card">
                    <p className="rc-title">Rapor · Sowan Simbah</p>
                    <div className="rc-line"><span>Simbah sampun <mark className="ok">dhahar</mark> dereng?</span><svg className="ok-ic"><use href="#i-check"/></svg></div>
                    <div className="rc-line"><span>Kula <mark className="bad">wis</mark> nedha, Mbah.</span><svg className="bad-ic"><use href="#i-x"/></svg></div>
                    <p className="rc-tip"><b>wis</b> adalah ngoko. Kepada Simbah gunakan <b>sampun</b>.</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section-try" id="coba" aria-labelledby="coba-title">
          <div className="container try-grid">
            <div className="try-copy reveal">
              <p className="pill">Coba 10 detik</p>
              <h2 id="coba-title">Kamu mau menanyakan apakah orang yang lebih tua sudah makan. Mana yang tepat?</h2>
              <p>Begini rasanya latihan di Tuturloka. Pilih bahasanya, lalu pilih kalimat yang paling sopan.</p>
            </div>

            <Quiz />
          </div>
        </section>

        <section className="section" id="bahasa" aria-labelledby="bahasa-title">
          <div className="container">
            <header className="section-head reveal">
              <p className="pill pill-navy">Bahasa</p>
              <h2 id="bahasa-title">Satu makna, banyak cara mengucapkannya</h2>
              <p>Bahasa Jawa dan Sunda sama-sama punya tingkat tutur. Tuturloka melatih keduanya.</p>
            </header>

            <div className="langs">
              <article className="lang-card reveal">
                <div className="lang-head">
                  <span className="lang-code">JV</span>
                  <div><h3>Bahasa Jawa</h3><p>Unggah-ungguh: ngoko, krama, krama inggil</p></div>
                  <span className="status status-on">Tersedia</span>
                </div>
                <table className="ragam-table">
                  <caption>Contoh: "makan"</caption>
                  <tbody>
                    <tr><th scope="row">mangan</th><td>ngoko, untuk teman</td></tr>
                    <tr><th scope="row">nedha</th><td>krama, untuk diri sendiri</td></tr>
                    <tr><th scope="row">dhahar</th><td>krama inggil, untuk orang yang dihormati</td></tr>
                  </tbody>
                </table>
              </article>
              <article className="lang-card reveal">
                <div className="lang-head">
                  <span className="lang-code lang-code-su">SU</span>
                  <div><h3>Bahasa Sunda</h3><p>Undak-usuk: loma dan lemes</p></div>
                  <span className="status status-soon">Segera hadir</span>
                </div>
                <table className="ragam-table">
                  <caption>Contoh: "makan"</caption>
                  <tbody>
                    <tr><th scope="row">dahar</th><td>loma, untuk teman</td></tr>
                    <tr><th scope="row">neda</th><td>lemes, untuk diri sendiri</td></tr>
                    <tr><th scope="row">tuang</th><td>lemes, untuk orang yang dihormati</td></tr>
                  </tbody>
                </table>
              </article>
            </div>

            <ul className="anywhere reveal" aria-label="Pakai Tuturloka di mana saja">
              <li><span className="icon-badge icon-badge-sm"><svg aria-hidden="true"><use href="#i-phone"/></svg></span><b>Aplikasi Android</b><span>Unduh dari Google Play</span></li>
              <li><span className="icon-badge icon-badge-sm"><svg aria-hidden="true"><use href="#i-guest"/></svg></span><b>Mulai sebagai tamu</b><span>Tanpa nama atau email</span></li>
              <li><span className="icon-badge icon-badge-sm"><svg aria-hidden="true"><use href="#i-sync"/></svg></span><b>Pindah HP dengan Google</b><span>Riwayat latihan ikut pindah</span></li>
              <li><span className="icon-badge icon-badge-sm"><svg aria-hidden="true"><use href="#i-lock"/></svg></span><b>Suaramu tetap di HP</b><span>Yang dikirim hanya teksnya</span></li>
            </ul>
          </div>
        </section>

        <AdatGallery />

        <section className="cta-band" aria-labelledby="cta-title">
          <div className="container cta-grid">
            <div className="cta-copy reveal">
              <p className="pill pill-gold">Mulai hari ini</p>
              <h2 id="cta-title">Siap sowan ke Simbah dengan krama yang pas?</h2>
              <p>Unduh Tuturloka, pilih satu situasi, dan ngobrol dengan Bu Sari. Sedikit demi sedikit, yang penting rutin: <em>alon-alon waton kelakon</em>.</p>
              <a className="btn-store btn-store-light" href="https://play.google.com/store/apps/details?id=com.khasyaraka.scout_os&amp;pcampaignid=web_share" target="_blank" rel="noopener">
                <svg aria-hidden="true"><use href="#i-play"/></svg>
                <span><small>Dapatkan di</small>Google Play</span>
              </a>
            </div>
            <div className="cta-visual" aria-hidden="true">
              <div className="cta-sun"></div>
              <img src={heroWave.src} alt="" width="720" height="900" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section" id="tanya" aria-labelledby="tanya-title">
          <div className="container faq-wrap">
            <header className="section-head reveal">
              <p className="pill pill-navy">Tanya jawab</p>
              <h2 id="tanya-title">Yang sering ditanyakan</h2>
            </header>
            <div className="faq reveal">
              <details>
                <summary>Untuk siapa Tuturloka?</summary>
                <p>Untuk siapa saja yang ingin bicara bahasa daerah dengan sopan: remaja yang ingin ngobrol dengan kakek-nenek, perantau yang rindu kampung halaman, atau kamu yang akan bertemu calon mertua.</p>
              </details>
              <details>
                <summary>Apakah saya harus sudah bisa bahasa Jawa atau Sunda?</summary>
                <p>Tidak. Semua petunjuk dan penjelasan memakai Bahasa Indonesia. Kamu mulai dari kalimat sederhana, dan arti setiap kalimat bisa dibuka kapan saja.</p>
              </details>
              <details>
                <summary>Apa bedanya dengan kamus atau aplikasi penerjemah?</summary>
                <p>Kamus memberi arti kata. Tuturloka melatih pilihan kata yang pas untuk lawan bicara tertentu, lewat obrolan, latihan ubah kalimat, dan rapor yang menunjukkan kata yang perlu diubah.</p>
              </details>
              <details>
                <summary>Apakah rekaman suara saya disimpan?</summary>
                <p>Tidak dikirim ke server. Ucapanmu diubah menjadi teks di HP, lalu hanya teksnya yang dikirim untuk diperiksa.</p>
              </details>
              <details>
                <summary>Bahasa apa saja yang tersedia?</summary>
                <p>Bahasa Jawa sudah bisa dipakai. Bahasa Sunda sedang disiapkan dan akan segera hadir.</p>
              </details>
              <details>
                <summary>Apakah harus membuat akun?</summary>
                <p>Tidak. Kamu bisa berlatih sebagai tamu. Hubungkan akun Google kalau ingin membuka riwayat latihan di HP lain. Akun dan semua data latihannya bisa kamu hapus sendiri dari Pengaturan.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand brand-light" href="#beranda"><img src={logoTuturloka.src} alt="" width="36" height="36" loading="lazy" /><span>TuturLoka</span></a>
            <p>Tahu artinya itu mudah. Tahu cara mengatakannya kepada nenek, guru, atau orang yang baru dikenal, itulah yang Tuturloka latih.</p>
          </div>
          <nav aria-label="Tautan bawah">
            <p className="footer-title">Jelajahi</p>
            <ul>
              <li><a href="#fitur">Fitur</a></li>
              <li><a href="#bu-sari">Bu Sari</a></li>
              <li><a href="#cara-kerja">Cara kerja</a></li>
              <li><a href="#busana-adat">Busana adat</a></li>
              <li><a href="#tanya">Tanya jawab</a></li>
            </ul>
          </nav>
          <div>
            <p className="footer-title">Hubungi kami</p>
            <a className="footer-mail" href="mailto:officialkhasyaraka@gmail.com"><svg aria-hidden="true"><use href="#i-mail"/></svg>officialkhasyaraka@gmail.com</a>
            <a className="btn-store btn-store-light btn-store-sm" href="https://play.google.com/store/apps/details?id=com.khasyaraka.scout_os&amp;pcampaignid=web_share" target="_blank" rel="noopener">
              <svg aria-hidden="true"><use href="#i-play"/></svg>
              <span><small>Dapatkan di</small>Google Play</span>
            </a>
          </div>
        </div>
        <details className="container motif-credits">
          <summary>Sumber motif kain</summary>
          <p>Siluet batik diolah dari foto <a href="https://commons.wikimedia.org/wiki/File:Batik_pattern_-_kawung.jpg">kawung karya Alteaven</a>. Foto dan adaptasinya berlisensi <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</p>
          <p>Siluet <a href="https://www.metmuseum.org/art/collection/search/315915">tapis Lampung</a> dan <a href="https://www.metmuseum.org/art/collection/search/308003">hinggi Sumba</a> berasal dari koleksi The Met. Siluet <a href="https://www.clevelandart.org/art/1955.307">songket Palembang</a> berasal dari Cleveland Museum of Art. Ketiga foto sumber tersedia melalui CC0.</p>
        </details>
        <div className="container footer-bottom">
          <p>© 2026 Tuturloka. Bu Sari adalah karakter milik tim Tuturloka.</p>
          <p>Google Play adalah merek dagang Google LLC.</p>
        </div>
      </footer>
      <PageEffects />
      <Script src="/feature-story.js" strategy="afterInteractive" />
    </>
  );
}
