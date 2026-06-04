 document.addEventListener("DOMContentLoaded", () => {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const propertyCards = document.querySelectorAll(".property-card");

        filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            filterButtons.forEach((btn) => {
              btn.classList.remove("bg-[#111827]", "text-white");
              btn.classList.add("text-gray-800", "hover:bg-gray-50");
            });
            button.classList.remove("text-gray-800", "hover:bg-gray-50");
            button.classList.add("bg-[#111827]", "text-white");

            const category = button.getAttribute("data-filter");

            propertyCards.forEach((card) => {
              card.classList.remove("fade-in");
              if (
                category === "all" ||
                card.getAttribute("data-category") === category
              ) {
                card.classList.remove("hidden");
                void card.offsetWidth;
                card.classList.add("fade-in");
              } else {
                card.classList.add("hidden");
              }
            });
          });
        });
      });