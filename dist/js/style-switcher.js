// @ts-nocheck

/* Style Switcher */
const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector('.js-style-switcher')
    const styleSwitcherToggler = document.querySelector('.js-style-switcher-toggler')

    styleSwitcherToggler.addEventListener('click', function() {
        styleSwitcher.classList.toggle('open')
        this.querySelector('i').classList.toggle('fa-times')
        this.querySelector('i').classList.toggle('fa-cog')
    })
}
styleSwitcherToggle()

/* Theme Color */
const themeColor = () => {
    const hueSlider = document.querySelector('.js-hue-slider')
    const html = document.querySelector('html')

    const setHue = (value) => {
        html.style.setProperty('--hue', value)
        document.querySelector('.js-hue').innerHTML = value
    }

    hueSlider.addEventListener('input', function() {
        setHue(this.value)
        /* Définir la préférence de l'utilisateur dans le local storage */
        localStorage.setItem('--hue', this.value)
    })

    const slider = (value) => {
        hueSlider.value = value
    }

    /* Vérifier les préférences de l'utilisateur enregistrées, le cas échéant, lors du chargement du site Web */
    if(localStorage.getItem('--hue') !== null) {
        setHue(localStorage.getItem('--hue'))
        slider(localStorage.getItem('--hue'))
    } else {
        // Default color
        const hue = getComputedStyle(html).getPropertyValue('--hue')
        // console.log(hue);
        setHue(hue)
        slider(hue.split(" ").join(""))
    }
}
themeColor()

/* Theme Light & Dark Mode */
const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector('.js-dark-mode')

    const themeMode = () => {
        if(localStorage.getItem('theme-dark') === 'false') {
            document.body.classList.remove('t-dark')
        } else {
            document.body.classList.add('t-dark')
        }
    }

    darkModeCheckbox.addEventListener('click', function() {
        /* Définir la préférence de l'utilisateur dans le local storage */
        localStorage.setItem('theme-dark', this.checked)
        themeMode()
    })

    /* Vérifier les préférences de l'utilisateur enregistrées, le cas échéant, lors du chargement du site Web */
    if(localStorage.getItem('theme-dark') !== null) {
        themeMode()
    }
    if(document.body.classList.contains('t-dark')) {
        darkModeCheckbox.checked = true
    }

}
themeLightDark()







