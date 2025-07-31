let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  document.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  // Show the first slide initially
  showSlide(slideIndex);
});


// adding a click-to-enlarge feature for images on website
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get overlay elements
  const overlay = document.getElementById("image-overlay");
  const overlayImg = document.getElementById("overlay-image");

  // Add click event to all images with class 'image-ocean'
  document.querySelectorAll(".image-ocean").forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.classList.remove("hidden");
    });
  });

   // Add click event to all images with class 'image-surfing'
  document.querySelectorAll(".image-surfing").forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.classList.remove("hidden");
    });
  });

  // Close overlay when clicking outside the image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === overlayImg) {
      overlay.classList.add("hidden");
      overlayImg.src = "";
    }
  });

  // Optional: close overlay with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.add("hidden");
      overlayImg.src = "";
    }
  });
});
