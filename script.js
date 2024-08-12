const words = ["Frontend Designer", "Web Developer", "Web Designer", "Frontend Designer", "Software Designer"];
let currentIndex = 0;
const spanElement = document.querySelector('.text-animation');
let charIndex = 0;
let typingInterval;

function typeWord() {
    if (charIndex < words[currentIndex].length) {
        spanElement.textContent += words[currentIndex].charAt(charIndex);
        charIndex++;
    } else {
        clearInterval(typingInterval);
        setTimeout(() => {
            typingInterval = setInterval(deleteWord, 100);
        }, 1000); // Wait 2 seconds before deleting
    }
}

function deleteWord() {
    if (charIndex > 0) {
        spanElement.textContent = spanElement.textContent.slice(0, -1);
        charIndex--;
    } else {
        clearInterval(typingInterval);
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(() => {
            typingInterval = setInterval(typeWord, 150);
        }, 400); // Wait 0.5 seconds before typing next word
    }
}

typingInterval = setInterval(typeWord, 10); // Initial typing speed
// menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop -1550;
        let id =sec.getAttribute('id');
        if(top>=offset && top< offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}