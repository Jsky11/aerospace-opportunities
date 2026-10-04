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
  const sortEl = document.getElementById("sort-select");
  const filters = Array.from(document.querySelectorAll(".filter[data-filter]"));

  // State
  const urlParams = new URLSearchParams(window.location.search);
  let activeFilter = urlParams.get("filter") || "all";
  let query = urlParams.get("q") || "";
  let activeSort = urlParams.get("sort") || "default";
  
  // Load bookmarks
  let bookmarks = [];
  try {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  } catch(e) {}

  // Init UI
  if (query) searchEl.value = query;
  if (sortEl) sortEl.value = activeSort;
  filters.forEach((btn) => {
    if(btn.dataset.filter === activeFilter) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  updatedEl.textContent = "Updated " + board.updated + " · " + board.timezone;
  summaryEl.textContent = board.summary;

  statsEl.innerHTML = [
    ["Urgent", board.stats.urgent, "urgent"],
    ["Open now", board.stats.open, "open"],
    ["Forecast", board.stats.forecast, "forecast"],
    ["Excluded", board.stats.excluded, "excluded"]
  ].map(([label, value, cls]) => `<div class="stat"><strong class="${cls}">${value}</strong><span>${label}</span></div>`).join("");

  timelineEl.innerHTML = board.deadlines.map(d => `
      <article class="deadline-chip">
        <span class="date">${formatDate(d.date)}</span>
        <span class="label">${escapeHtml(d.label)}</span>
        <span class="hint">${escapeHtml(d.hint)}</span>
      </article>`).join("");

  nextEl.innerHTML = board.nextSteps.map(s => `<li><strong>${escapeHtml(s.when)}:</strong> ${escapeHtml(s.what)}</li>`).join("");

  // Timeline Scroll Logic
  const timelineLeft = document.querySelector('.timeline-nav.left');
  const timelineRight = document.querySelector('.timeline-nav.right');
  if(timelineLeft && timelineRight) {
    timelineLeft.addEventListener('click', () => timelineEl.scrollBy({ left: -300, behavior: 'smooth' }));
    timelineRight.addEventListener('click', () => timelineEl.scrollBy({ left: 300, behavior: 'smooth' }));
  }

  function allItems() {
    return board.opportunities.concat(board.excluded);
  }

  function matches(item) {
    const statusOk = activeFilter === "all" ? item.status !== "excluded" : item.status === activeFilter;
    if (!statusOk) return false;
    if (!query) return true;
    const hay = [item.name, item.destination, item.type, item.eligibility, item.aerospace, item.covers].join(" ").toLowerCase();
    return hay.includes(query);
  }

  function updateUrlState() {
    const params = new URLSearchParams();
    if (activeFilter !== "all") params.set("filter", activeFilter);
    if (query) params.set("q", query);
    if (activeSort !== "default") params.set("sort", activeSort);
    
    let newUrl = window.location.pathname;
    const qs = params.toString();
    if(qs) newUrl += "?" + qs;
    window.history.replaceState({}, "", newUrl);
  }

  function render() {
    let items = allItems().filter(matches);
    
    // Sort
    if (activeSort === "deadline") {
      items.sort((a, b) => {
        if (!a.deadline || a.deadline.toLowerCase() === 'rolling' || a.deadline.toLowerCase() === 'tbd') return 1;
        if (!b.deadline || b.deadline.toLowerCase() === 'rolling' || b.deadline.toLowerCase() === 'tbd') return -1;
        // Parse dates roughly
        const da = new Date(a.deadline);
        const db = new Date(b.deadline);
        if (isNaN(da)) return 1;
        if (isNaN(db)) return -1;
        return da - db;
      });
    }

    countEl.textContent = items.length + " shown · filter: " + (activeFilter === "all" ? "active programs" : activeFilter);

    if (!items.length) {
      cardsEl.innerHTML = `
        <div class="empty" style="grid-column: 1/-1; padding: 4rem 1rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1rem; border: none; background: transparent;">
          <svg class="empty-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <path d="M11 8v6"></path>
            <path d="M8 11h6"></path>
          </svg>
          <h3 style="margin:0; font-size: 1.25rem;">No opportunities found</h3>
          <p style="margin:0; max-width: 300px;">We couldn't find anything matching your search and filter criteria.</p>
          <button id="reset-filters-btn" class="btn btn-primary" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      return;
    }

    cardsEl.innerHTML = items.map((item, index) => {
      const primary = item.link && item.link !== "#" 
        ? `<a class="btn btn-primary" href="${escapeAttr(item.link)}" target="_blank" rel="noopener">${escapeHtml(item.linkLabel || "Official page")}</a>` 
        : "";
      
      const isBookmarked = bookmarks.includes(item.name);
      const starFilled = `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      const starOutline = `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      const bookmarkBtn = `<button class="btn btn-ghost bookmark-btn" data-name="${escapeAttr(item.name)}" aria-label="Bookmark" style="padding: 0.65rem; color: ${isBookmarked ? 'var(--forecast)' : 'inherit'}; border-color: transparent;">${isBookmarked ? starFilled : starOutline}</button>`;

      return `
      <article class="card opp" data-status="${item.status}" style="animation-delay: ${index * 0.05}s;">
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
          <div><dt>Deadline</dt><dd>${escapeHtml(item.deadline)}</dd></div>
          <div><dt>Covers</dt><dd>${escapeHtml(item.covers)}</dd></div>
          <div><dt>Eligibility</dt><dd>${escapeHtml(item.eligibility)}</dd></div>
          <div><dt>Aerospace link</dt><dd>${escapeHtml(item.aerospace)}</dd></div>
          <div><dt>Next step</dt><dd>${escapeHtml(item.next)}</dd></div>
        </dl>
        <div class="opp-actions" style="gap: 0.5rem;">
          ${primary}
          ${bookmarkBtn}
        </div>
      </article>`;
    }).join("");
  }

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      updateUrlState();
      render();
    });
  });

  searchEl.addEventListener("input", () => {
    query = searchEl.value.trim().toLowerCase();
    updateUrlState();
    render();
  });

  if (sortEl) {
    sortEl.addEventListener("change", (e) => {
      activeSort = e.target.value;
      updateUrlState();
      render();
    });
  }

  // Event delegation for cardsEl
  cardsEl.addEventListener("click", (e) => {
    // Reset filters
    if (e.target.closest('#reset-filters-btn')) {
      activeFilter = "all";
      query = "";
      activeSort = "default";
      searchEl.value = "";
      if (sortEl) sortEl.value = "default";
      filters.forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
      updateUrlState();
      render();
      return;
    }

    // Bookmarks
    const bookmarkBtn = e.target.closest('.bookmark-btn');
    if (bookmarkBtn) {
      const name = bookmarkBtn.dataset.name;
      if (bookmarks.includes(name)) {
        bookmarks = bookmarks.filter(n => n !== name);
      } else {
        bookmarks.push(name);
      }
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      // Re-render to update bookmark icons
      render();
    }
  });

  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${d} ${months[m - 1]} ${y}`;
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
