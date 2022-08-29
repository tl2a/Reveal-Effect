const circle = document.querySelector('.black')

let mouseX = 0
let mouseY = 0

window.addEventListener('mousemove', (event) => {
    mouseY = (event.clientY / 16) - (260 / 16) + 'rem'
    mouseX = (event.clientX / 16) - (260 / 16) + 'rem'
})

const mouseMove = () => {
    circle.style.top = mouseY
    circle.style.left = mouseX

    window.requestAnimationFrame(mouseMove)
}

mouseMove()
