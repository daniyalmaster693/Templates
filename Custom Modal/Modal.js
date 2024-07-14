document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const openModal = document.querySelector(".open-modal");

  function showModal() {
    modal.classList.add("visible");
    modalOverlay.classList.remove("hidden");

    document.addEventListener("keydown", keyboardCloseModal);
  }

  function hideModal() {
    modal.classList.remove("visible");
    modalOverlay.classList.add("hidden");

    document.removeEventListener("keydown", keyboardCloseModal);
  }

  function keyboardCloseModal() {
    const key = event.key;
    if (key === "Escape") {
      hideModal();
    }
  }

  hideModal();

  openModal.addEventListener("click", showModal);
  modalOverlay.addEventListener("click", hideModal);
});
