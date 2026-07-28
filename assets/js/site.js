const LANGUAGE_STORAGE_KEY = "homepage-language-v2";

let currentLanguage = null;

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text !== undefined && text !== null) {
    element.textContent = text;
  }

  return element;
}

function clearElement(target) {
  const element = typeof target === "string" ? document.getElementById(target) : target;

  if (element) {
    element.replaceChildren();
  }

  return element;
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (element && value !== undefined && value !== null) {
    element.textContent = value;
  }
}

function hideIfEmpty(id, value) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const isEmpty = value === undefined || value === null || value === "";
  element.hidden = isEmpty;
}

function getLocalizedValue(value, language) {
  if (value === undefined || value === null) {
    return "";
  }

  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.prototype.hasOwnProperty.call(value, language)
  ) {
    return value[language];
  }

  return value;
}

function setLink(id, link) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  if (!link || !link.href || !link.label) {
    element.hidden = true;
    return;
  }

  element.href = link.href;
  element.textContent = link.label;
  element.hidden = false;
}

function appendLink(parent, item) {
  const link = createElement("a", "link-chip", item.label);
  link.href = item.href;

  if (item.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  parent.appendChild(link);
}

function appendFormattedAuthors(parent, authorsText) {
  const ownNamePattern = /^(Kong D\.?|Dezhang Kong)$/;
  const tokens = authorsText.split(",");

  tokens.forEach((rawToken, index) => {
    const token = rawToken.trim();
    const hasCorrespondingMark = token.endsWith("*");
    const cleanToken = hasCorrespondingMark ? token.slice(0, -1).trim() : token;

    if (index > 0) {
      parent.appendChild(document.createTextNode(", "));
    }

    const match = cleanToken.match(ownNamePattern);

    if (!match) {
      parent.appendChild(document.createTextNode(cleanToken));

      if (hasCorrespondingMark) {
        parent.appendChild(createElement("sup", "corresponding-mark", "*"));
      }

      return;
    }

    const strong = createElement("strong", "own-author", match[1]);

    if (hasCorrespondingMark) {
      const sup = createElement("sup", "corresponding-mark", "*");
      strong.appendChild(sup);
    }

    parent.appendChild(strong);
  });
}

function getPublicationLevel(item, language) {
  if (item.level) {
    return getLocalizedValue(item.level, language);
  }

  if (!item.tags) {
    return "";
  }

  return item.tags.find((tag) => tag !== "Accepted" && tag !== "Published") || "";
}

function getPublicationStatus(item, language) {
  if (item.status) {
    return getLocalizedValue(item.status, language);
  }

  if (!item.tags) {
    return "";
  }

  return item.tags.find((tag) => tag === "Accepted" || tag === "Published") || "";
}

function appendPublicationNote(parent, label, text) {
  if (!text) {
    return;
  }

  const paragraph = createElement("p", "publication-note");
  paragraph.appendChild(createElement("span", "publication-note-label", label));
  paragraph.appendChild(document.createTextNode(text));
  parent.appendChild(paragraph);
}

function renderChrome(content, language) {
  const { site, ui } = content;
  document.documentElement.lang = language;
  document.title = site.title;

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute("content", site.description);
  }

  const brand = document.querySelector(".brand");
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const languageToggle = document.getElementById("language-toggle");

  if (brand) {
    brand.setAttribute("aria-label", ui.brandAriaLabel);
  }

  if (nav) {
    nav.setAttribute("aria-label", ui.navAriaLabel);
  }

  if (navToggle) {
    navToggle.textContent = ui.menuLabel;
  }

  if (languageToggle) {
    languageToggle.textContent = ui.languageToggleLabel;
    languageToggle.setAttribute("aria-label", ui.languageToggleAriaLabel);
  }

  setText("nav-about", ui.nav.about);
  setText("nav-education", ui.nav.education);
  setText("nav-news", ui.nav.news);
  setText("nav-publications", ui.nav.publications);
  setText("nav-projects", ui.nav.projects);
  setText("nav-experience", ui.nav.experience);

  setText("about-kicker", ui.sections.about.kicker);
  setText("about-title", ui.sections.about.title);
  setText("education-kicker", ui.sections.education.kicker);
  setText("education-title", ui.sections.education.title);
  setText("news-kicker", ui.sections.news.kicker);
  setText("news-title", ui.sections.news.title);
  setText("publications-kicker", ui.sections.publications.kicker);
  setText("publications-title", ui.sections.publications.title);
  setText("projects-kicker", ui.sections.projects.kicker);
  setText("projects-title", ui.sections.projects.title);
  setText("experience-kicker", ui.sections.experience.kicker);
  setText("experience-title", ui.sections.experience.title);
}

function renderProfile(content) {
  const { profile } = content;
  const avatar = document.getElementById("profile-avatar");

  if (avatar) {
    avatar.src = profile.avatar;
    avatar.alt = profile.avatarAlt || `${profile.name} portrait`;
  }

  setText("brand-initials", profile.initials);
  setText("profile-role", profile.role);
  setText("profile-name", profile.name);
  setText("profile-affiliation", profile.affiliation);
  setText("profile-location", profile.location);
  setText("profile-contact", profile.contactLine);
  setLink("profile-scholar", profile.scholarLink);
  setText("profile-short-bio", profile.shortBio);

  hideIfEmpty("profile-role", profile.role);
  hideIfEmpty("profile-location", profile.location);
  hideIfEmpty("profile-contact", profile.contactLine);
  hideIfEmpty("profile-short-bio", profile.shortBio);

  const linkContainer = clearElement("profile-links");

  if (linkContainer && profile.links.length > 0) {
    profile.links.forEach((item) => appendLink(linkContainer, item));
  }

  const factGrid = clearElement("fact-grid");

  if (factGrid && profile.facts.length > 0) {
    profile.facts.forEach((fact) => {
      const card = createElement("div", "fact-card");
      card.appendChild(createElement("strong", "", fact.label));
      card.appendChild(createElement("span", "", fact.value));
      factGrid.appendChild(card);
    });
  }
}

function renderAbout(paragraphs, language) {
  const container = clearElement("about-content");

  if (!container) {
    return;
  }

  paragraphs.forEach((paragraph) => {
    container.appendChild(createElement("p", "", getLocalizedValue(paragraph, language)));
  });
}

function renderNews(items, language) {
  const container = clearElement("news-list");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const article = createElement("article", "timeline-item");
    const dateText = getLocalizedValue(item.date, language);

    if (dateText) {
      article.appendChild(createElement("p", "timeline-date", dateText));
    } else {
      article.classList.add("no-date");
    }

    const body = createElement("div", "timeline-body");
    body.appendChild(createElement("h3", "", getLocalizedValue(item.title, language)));

    const detailText = getLocalizedValue(item.detail, language);

    if (detailText) {
      body.appendChild(createElement("p", "", detailText));
    }

    article.appendChild(body);
    container.appendChild(article);
  });
}

function renderPublications(items, language) {
  const container = clearElement("publication-list");

  if (!container) {
    return;
  }

  const sortedItems = items
    .map((item, index) => ({ item, index }))
    .sort((left, right) => {
      const leftYear = Number.parseInt(getLocalizedValue(left.item.year, language), 10) || 0;
      const rightYear = Number.parseInt(getLocalizedValue(right.item.year, language), 10) || 0;

      if (rightYear !== leftYear) {
        return rightYear - leftYear;
      }

      return left.index - right.index;
    })
    .map(({ item }) => item);

  sortedItems.forEach((item) => {
    const article = createElement("article", "publication-card");
    const body = createElement("div", "publication-body");
    const title = getLocalizedValue(item.title, language);
    const authorsText = getLocalizedValue(item.authors, language);
    const venue = getLocalizedValue(item.venue, language);
    const year = getLocalizedValue(item.year, language);

    body.appendChild(createElement("h3", "", title));

    const authors = createElement("p", "publication-authors");
    appendFormattedAuthors(authors, authorsText);
    body.appendChild(authors);

    body.appendChild(createElement("p", "publication-venue", `${venue}, ${year}`));

    const level = getPublicationLevel(item, language);
    const status = getPublicationStatus(item, language);
    const problemText = getLocalizedValue(item.intro?.problem, language);
    const solutionText = getLocalizedValue(item.intro?.solution, language);

    if (problemText || solutionText) {
      appendPublicationNote(
        body,
        language === "zh" ? "问题：" : "Problem: ",
        problemText
      );
      appendPublicationNote(
        body,
        language === "zh" ? "本文解决方案：" : "Our solution: ",
        solutionText
      );
    }

    if (level || status) {
      const tagRow = createElement("div", "tag-row");

      if (level) {
        tagRow.appendChild(createElement("span", "tag", level));
      }

      if (status) {
        tagRow.appendChild(createElement("span", "tag status-tag", status));
      }

      body.appendChild(tagRow);
    }

    article.appendChild(body);
    container.appendChild(article);
  });
}

function renderProjects(items, language) {
  const container = clearElement("project-list");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const article = createElement("article", "project-card");
    const heading = createElement("h3");
    const titleText = getLocalizedValue(item.title, language);

    if (item.link && item.link.href) {
      const titleLink = createElement("a", "project-title-link", titleText);
      titleLink.href = item.link.href;
      titleLink.target = "_blank";
      titleLink.rel = "noreferrer";
      heading.appendChild(titleLink);
    } else {
      heading.textContent = titleText;
    }

    article.appendChild(heading);
    article.appendChild(createElement("p", "", getLocalizedValue(item.description, language)));

    if (item.tags && item.tags.length > 0) {
      const tagRow = createElement("div", "tag-row");

      item.tags.forEach((tag) => {
        tagRow.appendChild(createElement("span", "tag", getLocalizedValue(tag, language)));
      });

      article.appendChild(tagRow);
    }
    container.appendChild(article);
  });
}

function renderEntries(items, targetId, language) {
  const container = clearElement(targetId);

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const article = createElement("article", "entry-card");
    const body = createElement("div", "entry-body");

    if (item.logo && item.logo.src) {
      article.classList.add("has-logo");

      const logoWrap = createElement("div", "entry-logo-wrap");
      const logo = document.createElement("img");
      logo.src = item.logo.src;
      logo.alt = getLocalizedValue(item.logo.alt, language) || `${getLocalizedValue(item.org, language)} logo`;
      logo.loading = "lazy";
      logoWrap.appendChild(logo);
      article.appendChild(logoWrap);
    }

    body.appendChild(createElement("h3", "", getLocalizedValue(item.title, language)));

    const meta = createElement("div", "entry-meta");
    meta.appendChild(createElement("span", "entry-org", getLocalizedValue(item.org, language)));
    meta.appendChild(
      createElement("span", "entry-period", getLocalizedValue(item.period, language))
    );
    body.appendChild(meta);

    const descriptionText = getLocalizedValue(item.description, language);

    if (descriptionText) {
      body.appendChild(createElement("p", "", descriptionText));
    }

    if (item.bullets && item.bullets.length > 0) {
      const list = createElement("ul", "bullet-list");

      item.bullets.forEach((bullet) => {
        list.appendChild(createElement("li", "", getLocalizedValue(bullet, language)));
      });

      body.appendChild(list);
    }

    article.appendChild(body);
    container.appendChild(article);
  });
}

function getAvailableLanguages() {
  const content = window.profileContent;

  if (!content || !content.languages) {
    return [];
  }

  return Object.keys(content.languages);
}

function getLanguageContent(language) {
  const content = window.profileContent;

  if (!content || !content.languages) {
    return null;
  }

  return (
    content.languages[language] ||
    content.languages[content.defaultLanguage] ||
    content.languages[getAvailableLanguages()[0]] ||
    null
  );
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // Ignore storage failures and continue with in-memory state.
  }
}

function getInitialLanguage() {
  const availableLanguages = getAvailableLanguages();
  const storedLanguage = getStoredLanguage();
  const defaultLanguage = window.profileContent?.defaultLanguage;

  if (storedLanguage && availableLanguages.includes(storedLanguage)) {
    return storedLanguage;
  }

  if (defaultLanguage && availableLanguages.includes(defaultLanguage)) {
    return defaultLanguage;
  }

  return availableLanguages[0] || "en";
}

function renderPage(language) {
  const content = getLanguageContent(language);

  if (!content) {
    return;
  }

  renderChrome(content, language);
  renderProfile(content);
  renderAbout(content.about || [], language);
  renderNews(content.news || [], language);
  renderPublications(content.publications || [], language);
  renderProjects(content.projects || [], language);
  renderEntries(content.experience || [], "experience-list", language);
  renderEntries(content.education || [], "education-list", language);
}

function setLanguage(language) {
  const availableLanguages = getAvailableLanguages();
  const nextLanguage = availableLanguages.includes(language)
    ? language
    : window.profileContent?.defaultLanguage || availableLanguages[0];

  if (!nextLanguage) {
    return;
  }

  currentLanguage = nextLanguage;
  storeLanguage(nextLanguage);
  renderPage(nextLanguage);
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupNavigation() {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");

  if (!nav || !toggle) {
    return;
  }

  const links = Array.from(nav.querySelectorAll("a"));
  nav.dataset.open = "false";

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.dataset.open = String(!expanded);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.dataset.open = "false";
    });
  });

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeId = `#${entry.target.id}`;

        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === activeId);
        });
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupLanguageToggle() {
  const button = document.getElementById("language-toggle");

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
    setLanguage(nextLanguage);
  });
}

function initializePage() {
  if (!window.profileContent) {
    return;
  }

  setLanguage(getInitialLanguage());
  setupRevealAnimations();
  setupNavigation();
  setupLanguageToggle();
}

document.addEventListener("DOMContentLoaded", initializePage);
