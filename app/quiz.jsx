"use client";

import { useState } from "react";

const exercises = {
  jv: {
    who: "Simbah",
    options: [
      { text: "Simbah wis mangan durung?", right: false,
        why: "Kalimat ini ngoko. Kepada Simbah, wis dan mangan terdengar kurang sopan." },
      { text: "Simbah sampun dhahar dereng?", right: true,
        why: "Tepat! Sampun dan dereng adalah krama, dan dhahar adalah krama inggil untuk orang yang dihormati." },
      { text: "Simbah sampun nedha dereng?", right: false,
        why: "Hampir! Nedha dipakai untuk diri sendiri. Untuk Simbah, gunakan dhahar." }
    ]
  },
  su: {
    who: "Bapa",
    options: [
      { text: "Bapa geus dahar?", right: false,
        why: "Geus dan dahar adalah basa loma. Kepada orang tua gunakan parantos dan tuang." },
      { text: "Bapa parantos neda?", right: false,
        why: "Hampir! Neda dipakai untuk diri sendiri. Untuk orang yang dihormati, gunakan tuang." },
      { text: "Bapa parantos tuang?", right: true,
        why: "Tepat! Parantos adalah basa lemes, dan tuang dipakai untuk orang lain yang dihormati." }
    ]
  }
};

export default function Quiz() {
  const [language, setLanguage] = useState("jv");
  const [answer, setAnswer] = useState(null);
  const { who, options } = exercises[language];
  const chosen = options[answer];

  return (
    <div className="quiz reveal" data-quiz="">
      <div className="lang-switch" role="group" aria-label="Pilih bahasa">
        {Object.entries({ jv: "Jawa", su: "Sunda" }).map(([key, label]) => (
          <button key={key} type="button" className={language === key ? "is-active" : ""}
            aria-pressed={language === key} data-lang={key}
            onClick={() => { setLanguage(key); setAnswer(null); }}>{label}</button>
        ))}
      </div>
      <p className="quiz-q">Kepada <b>{who}</b>:</p>
      <div className="quiz-options">
        {options.map((option, i) => (
          <button key={option.text} type="button" aria-pressed={answer === i}
            className={answer === i ? "quiz-option " + (option.right ? "is-right" : "is-wrong") : "quiz-option"}
            onClick={() => setAnswer(i)}>
            <span className="quiz-key" aria-hidden="true">{"ABC"[i]}</span><span>{option.text}</span>
          </button>
        ))}
      </div>
      <div className="quiz-feedback" role="status" aria-live="polite">
        {chosen && (
          <p className={chosen.right ? "fb-right" : "fb-wrong"}>
            <svg aria-hidden="true"><use href={chosen.right ? "#i-check" : "#i-x"} /></svg><span>{chosen.why}</span>
          </p>
        )}
      </div>
      <p className="quiz-note">Contoh dari kamus Tuturloka yang sedang ditinjau validator bahasa.</p>
    </div>
  );
}
