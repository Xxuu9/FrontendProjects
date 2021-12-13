var timeCircles = element.getElementsByClassName("fa-times-circle");
var arrows = element.getElementsByClassName("fa-chevron-down");
var buttons = document.getElementById("faq-toggle");




buttons.forEach(button =>{
    button.addEventListner('click', () => {
        removeActiveClasses()
    })

})

function removeActiveClasses() {
    buttons.forEach(button => {
        button.classList.remove('active')
    })
}