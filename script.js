document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Mobile navigation toggle
  const navToggle = document.querySelector(
    '[aria-controls="primary-navigation"]'
  );
  const primaryNav = document.getElementById("primary-navigation");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !isExpanded);
    primaryNav.setAttribute("data-visible", !isExpanded);

    // Toggle icons
    menuIcon.hidden = !isExpanded;
    closeIcon.hidden = isExpanded;
  });

  // Close mobile menu when clicking on a link
  const navLinks = primaryNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      primaryNav.setAttribute("data-visible", "false");
      menuIcon.hidden = false;
      closeIcon.hidden = true;
    });
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());

      // Simulate form submission
      console.log("Form submitted with values:", formValues);

      // Show success message
      alert("Thanks for your message! I'll get back to you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
});
