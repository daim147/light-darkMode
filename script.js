const toggleSwitch = document.querySelector('input[type="checkbox"]')

const nav =  document.getElementById('nav')

const toggleIcon =  document.getElementById('toggle-icon')

const image1 =  document.getElementById('image1')

const image2 =  document.getElementById('image2')

const image3 =  document.getElementById('image3')

const textBox =  document.getElementById('text-box')

const localStorageTheme = localStorage.getItem('theme')



// dark or light image

function imgageColor(color){
    image1.src = `./img/undraw_proud_coder_${color}.svg`
    image2.src = `./img/undraw_feeling_proud_${color}.svg`
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`
}


// toogle icon changing
function toggleicons(modecolor, iconClass){
    toggleIcon.children[0].textContent = modecolor
    toggleIcon.children[1].className = iconClass
}

// nav and textbox color
function navTextBoxColor(navtext, textboxbg){
    nav.style.backgroundColor = navtext
    textBox.style.backgroundColor = textboxbg
}


// Dark Mode
function darkMode(){
    navTextBoxColor(`rgb(0 0 0 / 50%)`, `rgb(255 255 255/ 50%)` )
    toggleicons("Dark Mode", "fas fa-moon")
    imgageColor("dark")
}

// Light Mode

function lightMode(){
    navTextBoxColor(`rgb(255 255 255/ 50%)`, `rgb(0 0 0 / 50%)`)
    toggleicons("Light Mode", "fas fa-sun")
   imgageColor("light")
}
// Swicth Theme
function swicthTheme(){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkMode()
    }else{
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')

        lightMode()

    }
 
}

// Event Listner
toggleSwitch.addEventListener('change',swicthTheme)

if(localStorageTheme){
    document.documentElement.setAttribute('data-theme', `${localStorageTheme}`)
   
    if(localStorageTheme === 'dark'){
        toggleSwitch.checked = true
        darkMode()
    }

}
