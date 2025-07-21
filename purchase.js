document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const purchaseButtons = document.querySelectorAll(".purchase-btn");
  const quantitySelect = document.getElementById("quantity");
  const totalPriceEl = document.getElementById("totalPrice");
  const modalTitle = document.querySelector(".modal-book-title");

  let basePrice = 0;

  purchaseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const bookCard = btn.closest(".book-card");
      const title = bookCard.querySelector(".book-title").textContent;
      const price = parseInt(bookCard.querySelector(".book-price").dataset.price);

      basePrice = price;
      modalTitle.textContent = title;
      quantitySelect.value = "1";
      totalPriceEl.textContent = basePrice;

      modal.style.display = "flex";
    });
  });

  quantitySelect.addEventListener("change", () => {
    const qty = parseInt(quantitySelect.value);
    totalPriceEl.textContent = qty * basePrice;
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
