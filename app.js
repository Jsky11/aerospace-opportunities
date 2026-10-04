(function () {
  const board = window.BOARD;
  if (!board) return;

  const cardsEl = document.getElementById("cards");
  const timelineEl = document.getElementById("timeline");
  const statsEl = document.getElementById("hero-stats");
  const summaryEl = document.getElementById("summary-text");
  const updatedEl = document.getElementById("last-updated");
  const countEl = document.getElementById("result-count");
  const nextEl = document.getElementById("next-steps");
  const searchEl = document.getElementById("search");
  const filters = Array.from(document.querySelectorAll(".filter"));

  let activeFilter = "all";
  let query = "";

  updatedEl.textContent = "Updated " + board.updated + " · " + board.timezone;
  summaryEl.textContent = board.summary;

  statsEl.innerHTML = [
    ["Urgent", board.stats.urgent, "urgent"],
    ["Open now", board.stats.open, "open"],
    ["Forecast", board.stats.forecast, "forecast"],
    ["Excluded", board.stats.excluded, "excluded"]
  ]
    .map(
      ([label, value, cls]) =>
        `<div class="stat"><strong class="${cls}">${value}</strong><span>${label}</span></div>`
    )
    .join("");

  timelineEl.innerHTML = board.deadlines
    .map(
      (d) => `
      <article class="deadline-chip">
        <span class="date">${formatDate(d.date)}</span>
        <span class="label">${escapeHtml(d.label)}</span>
        <span class="hint">${escapeHtml(d.hint)}</span>
      </article>`
    )
    .join("");

  nextEl.innerHTML = board.nextSteps
    .map(
      (s) =>
        `<li><strong>${escapeHtml(s.when)}:</strong> ${escapeHtml(s.what)}</li>`
    )
    .join("");

  function allItems() {
    return board.opportunities.concat(board.excluded);
  }

  function matches(item) {
    const statusOk =
      activeFilter === "all"
        ? item.status !== "excluded"
        : item.status === activeFilter;
    if (!statusOk) return false;
    if (!query) return true;
    const hay = [
      item.name,
      item.destination,
      item.type,
      item.eligibility,
      item.aerospace,
      item.covers
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(query);
  }

  function render() {
    const items = allItems().filter(matches);
    countEl.textContent =
      items.length +
      " shown · filter: " +
      (activeFilter === "all" ? "active programs" : activeFilter);

    if (!items.length) {
      cardsEl.innerHTML =
        '<div class="empty">No matches. Clear search or switch filter.</div>';
      return;
    }

    cardsEl.innerHTML = items
      .map((item) => {
        const primary =
          item.link && item.link !== "#"
            ? `<a class="btn btn-primary" href="${escapeAttr(
                item.link
              )}" target="_blank" rel="noopener">${escapeHtml(
                item.linkLabel || "Official page"
              )}</a>`
            : "";
        return `
        <article class="card opp" data-status="${item.status}">
          <div class="opp-top">
            <h3>${escapeHtml(item.name)}</h3>
            <span class="badge ${item.status}">${item.status}</span>
          </div>
          <div class="meta">
            <span class="tag">${escapeHtml(item.type)}</span>
            <span class="tag">${escapeHtml(item.destination)}</span>
            <span class="tag">${escapeHtml(item.level)}</span>
          </div>
          <dl class="detail-list">
            <div>
              <dt>Deadline</dt>
              <dd>${escapeHtml(item.deadline)}</dd>
            </div>
            <div>
              <dt>Covers</dt>
              <dd>${escapeHtml(item.covers)}</dd>
            </div>
            <div>
              <dt>Eligibility</dt>
              <dd>${escapeHtml(item.eligibility)}</dd>
            </div>
            <div>
              <dt>Aerospace link</dt>
              <dd>${escapeHtml(item.aerospace)}</dd>
            </div>
            <div>
              <dt>Next step</dt>
              <dd>${escapeHtml(item.next)}</dd>
            </div>
          </dl>
          <div class="opp-actions">${primary}</div>
        </article>`;
      })
      .join("");
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  searchEl.addEventListener("input", () => {
    query = searchEl.value.trim().toLowerCase();
    render();
  });

  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return `${d} ${months[m - 1]} ${y}`;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  // Theme Toggling
  const themeToggle = document.getElementById("theme-toggle");
  const iconMoon = document.getElementById("theme-icon-moon");
  const iconSun = document.getElementById("theme-icon-sun");

  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
    } else {
      document.documentElement.removeAttribute("data-theme");
      iconMoon.style.display = "block";
      iconSun.style.display = "none";
    }
  }

  // Initialize theme from local storage or OS preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
  setTheme(isDarkMode);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      isDarkMode = !isDarkMode;
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      setTheme(isDarkMode);
    });
  }

  render();
})();
