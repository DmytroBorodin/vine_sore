let burgerBtn = document.querySelector('.burger');
let navSectionsBlock = document.querySelector('.nav-sections ');
let closeBtn = document.querySelector('.icon-close');
let body = document.querySelector('body');
let scrollArrow = document.querySelector('.down-arrow-block');
let main = document.querySelector('main');

function scroll () {
	window.scrollTo({
		top: main.offsetTop,
    	behavior: "smooth"
	})
}

scrollArrow.addEventListener('click', scroll);

console.log(burgerBtn);

burgerBtn.addEventListener('click', () => {
	navSectionsBlock.classList.add('active');
	body.classList.add('lock');
});
burgerBtn.addEventListener('touchend', () => {
	navSectionsBlock.classList.add('active');
});


closeBtn.addEventListener('click', () => {
	navSectionsBlock.classList.remove('active');
	body.classList.remove('lock');
});
closeBtn.addEventListener('touchend', () => {
	navSectionsBlock.classList.remove('active');
	body.classList.remove('lock');
});