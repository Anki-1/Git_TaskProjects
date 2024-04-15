"use strict";

const btns = document.querySelector(".btn-container");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-container");
const btnCancel = document.querySelector(".btn-cancel");

const displayModal = function (e) {
  if (e.target.classList.contains("btn-modal")) {
    overlay.classList.remove("hide");
    modal.classList.remove("hide");
  }
};

const hideModal = function () {
  overlay.classList.add("hide");
  modal.classList.add("hide");
};

btns.addEventListener("click", displayModal);
btnCancel.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideModal();
  }
});
