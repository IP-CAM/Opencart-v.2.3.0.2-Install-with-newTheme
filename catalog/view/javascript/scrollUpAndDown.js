"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBack = document.getElementById('scroll_to_top');
    const svgRev = document.getElementById('icon-svg-rev');
    scrollToTopBack.addEventListener('click', scrollTop);
    
    async function scrollTop(e) {
        e.preventDefault();
    }
    
    window.onscroll = () => {
        if (window.scrollY > 300) {
            scrollToTopBack.classList.remove('hidden');
        }
    };
	
	window.addEventListener('scroll', function() {
        if (pageYOffset == 0) {
        svgRev.classList.add('icon-svg-rev');
        } else {
        svgRev.classList.remove('icon-svg-rev');
        }
    });
	
	let toBack;
    
    scrollToTopBack.addEventListener('click', () => {
        if (pageYOffset !==0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        toBack = window.pageYOffset;
        } else {
            window.scrollTo({
                top: toBack,
            behavior: 'smooth'
            });
        }
    });
});
    
    









