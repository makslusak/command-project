(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buyform-open]"),
    closeModalBtn: document.querySelector("[data-buyform-close]"),
    modal: document.querySelector("[data-buyform]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();