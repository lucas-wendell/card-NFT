const nftImg = document.querySelector(".figure .nftImg");
const eye = document.querySelector(".eye");

nftImg.addEventListener("mouseover", e => {
	e.target.style.filter = " opacity(0.8)  drop-shadow(0 0 0 #00fff7)";
	eye.style.display = "block";
});

nftImg.addEventListener("mouseout", e => {
	e.target.style.filter = "";
	eye.style.display = "none";
});
