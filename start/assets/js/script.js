const overlay = document.getElementById("overlay");
const overlayBtn = document.getElementById("CTA_btn");
const closeBtn = document.getElementById("CTA_close");

function openOverlay() {
  overlay.removeAttribute("hidden");
  // aspetta un frame
  requestAnimationFrame(() => overlay.classList.add("open"));
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  overlay.classList.remove("open");
  // aspetta la fine del fade-out prima di nasconderlo
  setTimeout(() => overlay.setAttribute("hidden", ""), 350);
  document.body.style.overflow = "";
}

overlayBtn.addEventListener("click", openOverlay);
closeBtn.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeOverlay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeOverlay();
});