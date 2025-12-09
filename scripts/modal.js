const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project picture img").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});


