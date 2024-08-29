//Form Alert
document.getElementById("submit").addEventListener("click", function(){
    alert("Thank you for your message!");
});

//Review Stars

const starButtons = document.querySelectorAll(".star-btn");

starButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
           
        //Changing star icon
        document.querySelectorAll(".star").forEach(star => {
            star.classList.remove('bi-star-fill');
            star.classList.add('bi-star');
        });
        
        //Clicked Star Function
        for (let i = 0; i <= index; i++) {
            starButtons[i].querySelector(".star").classList.remove('bi-star');
            starButtons[i].querySelector(".star").classList.add('bi-star-fill');
        }
    });
});
