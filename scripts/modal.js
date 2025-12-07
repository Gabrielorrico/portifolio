function openModal(imgSrc) {
    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("modal-cert").classList.add("active");

}

function closeModal() {
    document.getElementById("modal-cert").classList.remove("active");

}

window.addEventListener("click", function(e) {
    const modal = document.getElementById("modal-cert");
    if (e.target === modal) {
        closeModal();
    }
});

document.querySelectorAll(".project picture img").forEach(img => {
    img.addEventListener("click", function(e) {
        e.preventDefault();
        openModal(this.src);
    });
});
