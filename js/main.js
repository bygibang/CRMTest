document.addEventListener("DOMContentLoaded", () => {
	document.body.style.opacity = "1";
 
	const mainContainer = document.querySelector(".main__container");
	const toggleButton = document.querySelector(".main__toggle");
	const customersSection = document.querySelector(".customers");
 
	let menuOpen = false;

	slideInLeft(mainContainer, 600);
	slideInTop(customersSection, 600);
 
	const toggleMenu = () => {
	  menuOpen = !menuOpen;
	  if (menuOpen) {
		 mainContainer.style.display = "flex";
		 slideInLeft(mainContainer, 500);
		 toggleButton.innerHTML = "→";
	  } else {
		 mainContainer.style.animation = "";
		 mainContainer.style.opacity = "1";
		 slideOutLeft(mainContainer, 500);
		 toggleButton.innerHTML = "←";
	  }
	};
	toggleButton.addEventListener("click", toggleMenu);
 });
 

 function slideInLeft(element, duration = 600) {
	let start = null;
	element.style.opacity = "0";
	element.style.transform = "translateX(-100%)";
 
	function animateSlideInLeft(timestamp) {
	  if (!start) start = timestamp;
	  const elapsed = timestamp - start;
	  const progress = Math.min(elapsed / duration, 1);
	  element.style.opacity = progress;
	  element.style.transform = `translateX(${(-100 + progress * 100)}%)`;
 
	  if (progress < 1) {
		 requestAnimationFrame(animateSlideInLeft);
	  }
	}
 
	requestAnimationFrame(animateSlideInLeft);
 }
 

 function slideOutLeft(element, duration = 600) {
	let start = null;
 
	function animateSlideOutLeft(timestamp) {
	  if (!start) start = timestamp;
	  const elapsed = timestamp - start;
	  const progress = Math.min(elapsed / duration, 1);
	  element.style.opacity = 1 - progress;
	  element.style.transform = `translateX(${progress * -100}%)`;
 
	  if (progress < 1) {
		 requestAnimationFrame(animateSlideOutLeft);
	  } else {
		 element.style.display = "none";
	  }
	}
 
	requestAnimationFrame(animateSlideOutLeft);
 }
 
 function slideInTop(element, duration = 600) {
	let start = null;
	element.style.opacity = "0";
	element.style.transform = "translateY(-100%)";
 
	function animateSlideInTop(timestamp) {
	  if (!start) start = timestamp;
	  const elapsed = timestamp - start;
	  const progress = Math.min(elapsed / duration, 1);
	  element.style.opacity = progress;
	  element.style.transform = `translateY(${(-100 + progress * 100)}%)`;
 
	  if (progress < 1) {
		 requestAnimationFrame(animateSlideInTop);
	  }
	}
 
	requestAnimationFrame(animateSlideInTop);
 }
 