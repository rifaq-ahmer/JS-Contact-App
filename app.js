const openModalButton = document.querySelector("[data-modal-target]");
const closeModalButton = document.querySelector("[data-close-button]");
const overlay = document.getElementById("overlay");
const addContactFormData = document.querySelectorAll(
	"modal-body.add-contact-form input"
);
console.log("addContactFormData", addContactFormData);

openModalButton.addEventListener("click", () => {
	const modal = document.querySelector(openModalButton.dataset.modalTarget);
	openModalFn(modal);
});
closeModalButton.addEventListener("click", () => {
	const modal = closeModalButton.closest(".modal");
	closeModalFn(modal);
});
overlay.addEventListener("click", () => {
	const modals = document.querySelectorAll(".modal.active");
	modals.forEach((modal) => {
		closeModalFn(modal);
	});
});
const openModalFn = (modal) => {
	if (modal == null) return;
	modal.classList.add("active");
	overlay.classList.add("active");
};
const closeModalFn = (modal) => {
	if (modal == null) return;
	modal.classList.remove("active");
	overlay.classList.remove("active");
};
