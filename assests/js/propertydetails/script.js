 function fadeAndUpdateImage(targetImageId, newSrc, newAlt) {
        const targetImg = document.getElementById(targetImageId);
        targetImg.classList.add("opacity-0", "scale-95");
        setTimeout(() => {
          targetImg.src = newSrc;
          targetImg.alt = newAlt;
          targetImg.classList.remove("opacity-0", "scale-95");
        }, 400);
      }

      function swapImage(thumbnailContainer) {
        const mainImg = document.getElementById("mainImage");
        const clickedImg = thumbnailContainer.querySelector("img");

        const mainSrc = mainImg.src;
        const mainAlt = mainImg.alt;
        const clickedSrc = clickedImg.src;
        const clickedAlt = clickedImg.alt;

        mainImg.classList.add("opacity-0", "scale-95");
        clickedImg.classList.add("opacity-0", "scale-95");

        setTimeout(() => {
          mainImg.src = clickedSrc;
          mainImg.alt = clickedAlt;
          clickedImg.src = mainSrc;
          clickedImg.alt = mainAlt;

          mainImg.classList.remove("opacity-0", "scale-95");
          clickedImg.classList.remove("opacity-0", "scale-95");
        }, 400);
      }

      function selectModalImage(clickedModalImg) {
        toggleModal(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          fadeAndUpdateImage(
            "mainImage",
            clickedModalImg.src,
            clickedModalImg.alt,
          );
        }, 300);
      }

      const modal = document.getElementById("galleryModal");

      function toggleModal(show) {
        if (show) {
          modal.classList.remove("hidden");
          setTimeout(() => {
            modal.classList.remove("opacity-0");
            modal.classList.add("opacity-100");
            document.body.style.overflow = "hidden";
          }, 10);
        } else {
          modal.classList.remove("opacity-100");
          modal.classList.add("opacity-0");
          setTimeout(() => {
            modal.classList.add("hidden");
            document.body.style.overflow = "auto";
          }, 300);
        }
      }