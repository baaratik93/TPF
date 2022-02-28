import './normalize.css';
import './css/style.css'
const ul = document.querySelector('#navigation ul')
ul.addEventListener("mouseover", e=>{
    e.preventDefault;
    ul.style.top =  "9%"
    ul.style.transitionProperty = "height"
    ul.style.transitionDelay= "2s"
    ul.style.transitionDuration= "1s"
    ul.style.transitionTimingFunction= "cubic-bezier(0.215, 0.610, 0.355, 1)"
})

ul.addEventListener("mouseleave", e=> {
    e.preventDefault;
    ul.style.top= "1%"
})
