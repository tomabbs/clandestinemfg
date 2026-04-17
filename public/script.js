const loadIncludes = async () => {
  const includeTargets = Array.from(
    document.querySelectorAll("[data-include]"),
  );

  if (includeTargets.length === 0) {
    return;
  }

  await Promise.all(
    includeTargets.map(async (target) => {
      const includePath = target.getAttribute("data-include");
      if (!includePath) {
        return;
      }

      try {
        const response = await fetch(includePath);
        if (!response.ok) {
          return;
        }
        target.innerHTML = await response.text();
      } catch (error) {
        console.warn("Failed to load include:", includePath, error);
      }
    }),
  );
};

const initMobileNav = () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

  if (!hamburger || !mobileMenu || !mobileMenuOverlay) {
    return;
  }

  const toggleMobileMenu = () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  };

  hamburger.addEventListener("click", toggleMobileMenu);
  mobileMenuOverlay.addEventListener("click", toggleMobileMenu);

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
};

const initSupportDropdown = () => {
  const supportItems = Array.from(document.querySelectorAll(".nav-support"));
  if (supportItems.length === 0) {
    return;
  }

  const closeAll = () => {
    supportItems.forEach((item) => {
      item.classList.remove("is-open");
      const trigger = item.querySelector(".nav-support-trigger");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  };

  const openItem = (item) => {
    closeAll();
    item.classList.add("is-open");
    const trigger = item.querySelector(".nav-support-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "true");
    }
  };

  const closeItem = (item) => {
    item.classList.remove("is-open");
    const trigger = item.querySelector(".nav-support-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
  };

  supportItems.forEach((item) => {
    const trigger = item.querySelector(".nav-support-trigger");
    if (!trigger) {
      return;
    }

    item.addEventListener("mouseenter", () => openItem(item));
    item.addEventListener("mouseleave", () => closeItem(item));

    item.addEventListener("focusin", () => openItem(item));
    item.addEventListener("focusout", (event) => {
      const nextFocused = event.relatedTarget;
      if (nextFocused instanceof HTMLElement && item.contains(nextFocused)) {
        return;
      }
      closeItem(item);
    });

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      if (isOpen) {
        closeItem(item);
      } else {
        openItem(item);
      }
    });

    item.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }
      closeItem(item);
      trigger.focus();
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (supportItems.some((item) => item.contains(target))) {
      return;
    }

    closeAll();
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadIncludes();
  initSupportDropdown();
  initMobileNav();
  const isBannerPage =
    document.documentElement.classList.contains("banner-page") ||
    document.body.classList.contains("banner-page");
  const urlParams = new URLSearchParams(window.location.search);
  const urlOverride = isBannerPage ? urlParams.get("bg") : null;

  const applyBackground = (element) => {
    const dataUrl = element.getAttribute("data-bg-url");
    const fallbackUrl = element.getAttribute("data-bg-fallback");
    const targetUrl = urlOverride || dataUrl || fallbackUrl;

    if (!targetUrl) {
      return;
    }

    const img = new Image();
    img.onload = () => {
      element.style.backgroundImage = `url('${targetUrl}')`;
    };
    img.onerror = () => {
      if (fallbackUrl && targetUrl !== fallbackUrl) {
        element.style.backgroundImage = `url('${fallbackUrl}')`;
      }
    };
    img.src = targetUrl;
  };

  document
    .querySelectorAll(".banner, .carousel-slide")
    .forEach(applyBackground);

  window.addEventListener("message", (event) => {
    if (event?.data?.type !== "updateBackground" || !event.data.url) {
      return;
    }

    document.querySelectorAll(".banner").forEach((banner) => {
      banner.style.backgroundImage = `url('${event.data.url}')`;
    });
  });
});
