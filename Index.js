const quote = "Don't wait for the opportunity. Create it.";
const typingSpeed = 100;
let i = 0;

// Function to perform the typewriter effect
function typeWriter() {
    const element = document.getElementById("type-writer-quote");
    
    if (i < quote.length) {
        element.innerHTML += quote.charAt(i); // Append the next character
        i++;
        setTimeout(typeWriter, typingSpeed); // Call typeWriter again after the typingSpeed
    }
}

// Start the typewriter effect when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    typeWriter(); // Call the typeWriter function to start typing
});


if (window.scrollY < 700){
    document.querySelector(".feature-cards").classList.add('ft-anim');
}
else {
    featureCards.classList.remove('ft-anim');
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", typeWriter);
