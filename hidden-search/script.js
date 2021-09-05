const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const search = document.querySelector('.search')

button.addEventListener('click', () => {
    search.classList.toggle('active')

    // The focused element is the element which will receive keyboard and similar events by default.
    input.focus()
})