const labels = document.querySelectorAll('.form-control label')

// innerHtml returns all text, including html tags, that is contained by an element.
// innerText returns all text contained by an element and all its child elements.

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})