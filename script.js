const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc); 
    });
});
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    document.body.style.overflow = 'hidden';
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //close function
    const closeBtn = document.createElement("i");
    modal.append(newImage, closeBtn);
    modal.addEventListener('click', (e) => {
        newImage.style.animation = 'fadeout 0.4s ease-in-out, blurin 0.4s ease-in-out';
        newImage.style.opacity = '0';
        modal.style.animation = 'bluronceagain 0.4s ease-in-out';
        modal.style.backdropFilter = 'blur(0px)';
        setTimeout(function() {
            newImage.remove();
            modal.remove();
            document.body.style.overflow = '';
          }, 400);
    })
};
window.onload = function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
};
