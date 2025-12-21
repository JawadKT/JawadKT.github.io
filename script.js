document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const emailEl = document.getElementById("contact-email");
  const copyBtn = document.getElementById("copy-email");
  const navToggle = document.querySelector(".site-nav__toggle");
  const navList = document.querySelector(".site-nav__list");
  const yearSpan = document.getElementById("year");

  // Footer year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("is-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("is-open");
      });
    });
  }

  // Active nav link on scroll
  const setActiveNav = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const targetId = href && href.startsWith("#") ? href.slice(1) : null;
      link.classList.toggle("is-active", targetId === id);
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveNav(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "-10% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
  } else {
    // Fallback: simple scroll listener
    window.addEventListener("scroll", () => {
      let activeId = null;
      const scrollY = window.scrollY || window.pageYOffset;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollY;
        if (scrollY >= top - 120) {
          activeId = section.id;
        }
      });

      if (activeId) {
        setActiveNav(activeId);
      }
    });
  }

  // Copy email to clipboard
  if (copyBtn && emailEl) {
    copyBtn.addEventListener("click", async () => {
      const email = emailEl.textContent?.trim();
      if (!email) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const tmp = document.createElement("textarea");
          tmp.value = email;
          document.body.appendChild(tmp);
          tmp.select();
          document.execCommand("copy");
          document.body.removeChild(tmp);
        }

        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 1700);
      } catch (err) {
        console.error("Failed to copy email", err);
      }
    });
  }
});
