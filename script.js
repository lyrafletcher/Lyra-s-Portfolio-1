// 1. OPEN THE MODAL WHEN A CARD OR BUTTON IS CLICKED
document.querySelectorAll("[data-modal-target]").forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    // Check if the clicked element is the button or the entire card
    // We read the #modal ID from data-modal-target attribute
    const modalId = this.dataset.modalTarget;
    const modal = document.querySelector(modalId);
    if (modal) {
      modal.style.display = "flex"; // Show as flex for center alignment
    }
  });
});

// 2. CLOSE THE MODAL WHEN THE 'X' IS CLICKED
document.querySelectorAll("[data-close]").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    const modal = this.closest(".modal");
    modal.style.display = "none";
  });
});

// 3. CLOSE THE MODAL WHEN CLICKING OUTSIDE THE MODAL CONTENT
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
