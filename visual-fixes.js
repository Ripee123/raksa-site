(() => {
  "use strict";

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function resolvedTheme() {
    const selected = document.documentElement.dataset.theme || "system";
    return selected === "system" ? (systemTheme.matches ? "dark" : "light") : selected;
  }

  function updateScreenshots() {
    const theme = document.documentElement.dataset.resolvedTheme || resolvedTheme();
    const language = document.documentElement.lang === "en" ? "en" : "fi";

    document.querySelectorAll(".phone-shot").forEach((picture, index) => {
      const tool = index === 0 ? "triangle" : "dimensions";
      const path = `assets/${tool}-${theme}-${language}.jpg`;
      const image = picture.querySelector("img");
      const source = picture.querySelector("source");

      if (image) image.src = path;
      if (source) source.srcset = path;
    });
  }

  function scheduleUpdate() {
    window.requestAnimationFrame(updateScreenshots);
  }

  document.addEventListener("DOMContentLoaded", scheduleUpdate);
  document.querySelector("#language")?.addEventListener("change", scheduleUpdate);
  document.querySelector("#theme")?.addEventListener("change", scheduleUpdate);
  systemTheme.addEventListener?.("change", scheduleUpdate);

  new MutationObserver(scheduleUpdate).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "data-theme", "data-resolved-theme"]
  });

  const style = document.createElement("style");
  style.textContent = `
    .triangle strong {
      right: 12px !important;
      top: 35%;
      z-index: 2;
    }
    @media (max-width: 480px) {
      .triangle strong { right: 10px !important; }
    }
  `;
  document.head.appendChild(style);

  scheduleUpdate();
})();
