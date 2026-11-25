(() => {
  const story = document.querySelector("[data-lesson-story]");
  if (!story) return;

  const stage = story.querySelector(".lesson-stage");
  const chapters = [...story.querySelectorAll(".lesson-chapter")];
  const headings = chapters.map(chapter => chapter.querySelector("h3"));
  const scenes = chapters.map(chapter => chapter.querySelector(".lesson-example").cloneNode(true));
  const counter = stage.querySelector(".lesson-count");
  const progress = stage.querySelector(".lesson-progress span");
  const motion = window.matchMedia("(prefers-reduced-motion: no-preference) and (min-height: 560px)");
  const narrow = window.matchMedia("(max-width: 760px)");
  let frame = 0;
  let active = -1;

  stage.querySelector(".lesson-scenes").replaceChildren(...scenes);

  function render() {
    frame = 0;
    const stageTop = parseFloat(getComputedStyle(stage).top);
    const stageHeight = stage.offsetHeight;
    const readingLine = stageTop + (narrow.matches ? stageHeight + 128 : stageHeight * .76);
    const headingTops = headings.map(heading => heading.getBoundingClientRect().top);
    const next = Math.max(0, headingTops.findLastIndex(top => top <= readingLine));

    if (active !== next) {
      scenes[active]?.classList.remove("is-active");
      chapters[active]?.classList.remove("is-active");
      scenes[next].classList.add("is-active");
      chapters[next].classList.add("is-active");
      counter.textContent = `${next + 1} / ${chapters.length}`;
      stage.dataset.pose = next === 1 || next === 2 ? "explaining" : "greeting";
      active = next;
    }

    const start = headingTops[0];
    const end = headingTops.at(-1);
    const fraction = Math.max(0, Math.min(1, (readingLine - start) / (end - start)));
    progress.style.transform = `scaleX(${fraction})`;
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  function updateMotion() {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    cancelAnimationFrame(frame);
    frame = 0;
    story.classList.toggle("has-scroll-story", motion.matches);
    if (motion.matches) {
      render();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
    }
  }

  motion.addEventListener("change", updateMotion);
  updateMotion();
})();
