(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buyform-open]"),
    openModalcloneBtn: document.querySelector("[data-buyformclone-open]"),
     openModalsecondBtn: document.querySelector("[data-buyformsecond-open]"),
    closeModalBtn: document.querySelector("[data-buyform-close]"),
    modal: document.querySelector("[data-buyform]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalcloneBtn.addEventListener("click", toggleModal);
  refs.openModalsecondBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();