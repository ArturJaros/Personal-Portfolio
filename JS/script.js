const dayNight = document.querySelector('.dayNight')
const body = document.querySelector('body')
const allNav = document.querySelector('.allNav')
const textElements = document.querySelectorAll('.allNav, h1, h2, h3, .border, .navLinks, .socialName ')
const mainText = document.querySelector('.mainText')
const moreAboutMe = document.querySelector('.moreAboutMe')
const border = document.querySelector('.border')
const moonSun = document.querySelector('.fa-moon')
const typewritter = document.querySelector('.typewritter')
const menuToggle = document.querySelector('.menu-toggle')
const textHome = document.querySelector('.textHome h2')
const textHomeAll = document.querySelector('.textHome')
const header = document.querySelector('.allNav')
const imgMe = document.querySelector('.imgMe')
const burgerMenu = document.querySelector('.burgerMenu')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const theSameEduExp = document.querySelectorAll('.theSameEduExp')
const leftUlData = document.querySelector('.leftUlData')
const rightUlData = document.querySelector('.rightUlData')
const aboutMyLife = document.querySelector('.aboutMyLife')
const buttonsCvHireme = document.querySelector('.buttonsCvHireme')
const titleOfSection = document.querySelector('.titleOfSection')
const introducingYourself = document.querySelector('.introducingYourself')
const circle = document.querySelectorAll('.circle')
const nameOfDescription = document.querySelectorAll('.nameOfDescription')
const liDescription = document.querySelectorAll('.description li')
const skillsName = document.querySelectorAll('.skillsName')
const faCalendarDays = document.querySelectorAll('.fa-calendar-days')
const liMyData = document.querySelectorAll('.liMyData')
const ulMyData = document.querySelectorAll('.myData>ul>li')
const firstPart = document.querySelectorAll('.firstPart')
const data = document.querySelectorAll('.data')
const dataDescription = document.querySelectorAll('.dataDescription')
const mailMsg = document.querySelectorAll('.contact-form label')
const textarea = document.querySelectorAll('.textarea')

//zmiana kolor
const changeColor = document.querySelector('.changeColor')
const settings = document.querySelector('.settings')
const buttonsLeft = document.querySelector('.buttonsLeft')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const color4 = document.querySelector('.color4')


// ---------writing and deleting text---------

const phrase = 'Web Developer'
let j = 0
let currentPhrase = ''
let isDeleting = false
if (typewritter) {
	function loop() {
		typewritter.textContent = currentPhrase
		if (!isDeleting && j <= phrase.length) {
			currentPhrase += phrase[j]
			j++
		}
		if (isDeleting && currentPhrase.length > 0) {
			currentPhrase = currentPhrase.slice(0, -1)
		}
		if (j == phrase.length) {
			isDeleting = true
		}
		if (isDeleting && currentPhrase.length == 0) {
			isDeleting = false
			j = 0
		}
	}
	setInterval(loop, 300)
}
// ---------change from day to night and back again---------

let dark = false

const darkColor = 'black'
const grayColor = 'Gainsboro'
const mutedTextColor = '#808080'
const lightColor = 'white'
const lightBgColor = '#eeeef4'
const darkBgColor = '#1e1c1c'
const lightNavBgColor = '#e9edf4'
const darkGrayColor = '#2b2929'
const lightIcon = 'fa-solid fa-moon'
const darkIcon = 'fa-solid fa-sun'
const darkBtnBgColor = '#2c2a2a'

function allchanges() {
	allNav.style.backgroundColor = dark ? darkGrayColor : lightNavBgColor
	if (mainText) {
		mainText.style.color = dark ? grayColor : mutedTextColor
	}
	dayNight.style.backgroundColor = dark ? darkBtnBgColor : lightColor
	moonSun.className = dark ? darkIcon : lightIcon
	dayNight.style.color = dark ? grayColor : darkColor
	if (imgMe) {
		imgMe.style.filter = dark ? 'brightness(70%)' : ''
	} else if (theSameEduExp) {
		theSameEduExp.forEach(eduExp => (eduExp.style.backgroundColor = dark ? darkGrayColor : lightColor))
	}
	firstPart.forEach(e => (e.style.color = dark ? grayColor : mutedTextColor))
	dataDescription.forEach(e => (e.style.color = dark ? grayColor : darkColor))
	textarea.forEach(e => (e.style.backgroundColor = dark ? grayColor : lightColor))
	mailMsg.forEach(e => (e.style.color = dark ? grayColor : darkColor))
	skillsName.forEach(skill => (skill.style.color = dark ? grayColor : darkColor))
	liMyData.forEach(li => (li.style.color = dark ? lightColor : darkColor))
	ulMyData.forEach(ul => (ul.style.color = dark ? grayColor : mutedTextColor))
	nameOfDescription.forEach(name => (name.style.color = dark ? lightColor : darkColor))
	liDescription.forEach(li => (li.style.color = dark ? grayColor : darkColor))
	faCalendarDays.forEach(day => (day.style.color = dark ? mutedTextColor : darkColor))
	textElements.forEach(text => (text.style.color = dark ? lightColor : darkColor))

	body.style.backgroundColor = dark ? darkBgColor : lightBgColor
}

function dayNightFunction() {
	let savedDark = localStorage.getItem('dark')
	dark = savedDark === 'true'
	allchanges()

	dayNight.addEventListener('click', function () {
		body.classList.toggle('dark')
		dark = body.classList.contains('dark')
		allchanges()

		localStorage.setItem('dark', dark.toString())
	})
}

dayNightFunction()

// ---------retractable navigation---------

let isNavOpen = false

burgerMenu.addEventListener('click', () => {
	if (!isNavOpen) {
		allNav.style.marginLeft = '0'
		allNav.style.opacity = '1'

		line1.classList.add('xBtn1')
		line2.classList.add('xBtn2')
		line3.classList.add('xBtn3')
		burgerMenu.style.marginLeft = '320px'
		isNavOpen = true
	} else {
		allNav.style.marginLeft = '-300px'
		allNav.style.opacity = '0'
		line1.classList.remove('xBtn1')
		line2.classList.remove('xBtn2')
		line3.classList.remove('xBtn3')
		burgerMenu.style.marginLeft = '20px'
		isNavOpen = false
	}
})
const mediaQuery = window.matchMedia('(min-width: 1080px)')
mediaQuery.addEventListener('change', () => {
	if (mediaQuery.matches) {
		allNav.style.marginLeft = '0'
		allNav.style.opacity = '1'
	} else {
		allNav.style.marginLeft = '-300px'
		burgerMenu.style.marginLeft = '20px'
		line1.classList.remove('xBtn1')
		line2.classList.remove('xBtn2')
		line3.classList.remove('xBtn3')
	}
})

// ---------Moving elements---------
if (imgMe) {
	const movingElementsHome = () => {
		mainText.classList.add('returnOfElements')
		introducingYourself.classList.add('returnOfElements')
		textHome.classList.add('returnOfElements')
		imgMe.classList.add('returnOfElements')
		moreAboutMe.classList.add('returnOfElements')
	}
	movingElementsHome()
}
if (buttonsCvHireme) {
	const movingElementsAboutMe = () => {
		mainText.classList.add('returnOfElements')
		introducingYourself.classList.add('returnOfElements')
		titleOfSection.classList.add('returnOfElements')
		leftUlData.classList.add('returnOfElements')
		rightUlData.classList.add('returnOfElements')
		buttonsCvHireme.classList.add('returnOfElements')
		circle.forEach(circle => {
			circle.classList.add('returnOfElements')
		})
	}
	movingElementsAboutMe()
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 600) {
			aboutMyLife.style.transform = 'scale(1)'
			aboutMyLife.style.opacity = '1'
		}
	})
}
if (titleOfSection) {
	titleOfSection.classList.add('returnOfElements')
}

//zmiana koloru
settings.addEventListener('click', () => {
	settings.classList.toggle('buttonsLeft')
	dayNight.classList.toggle('buttonsLeft')
	changeColor.classList.toggle('returnOfElements')
	
})

color1.addEventListener('click', () =>
document.documentElement.style.setProperty('--word-color', '#ff4321')
)
color2.addEventListener('click', () =>
document.documentElement.style.setProperty('--word-color', '#455ca0')
)
color3.addEventListener('click', () =>
document.documentElement.style.setProperty('--word-color', '#b0c223')
)
color4.addEventListener('click', () =>
document.documentElement.style.setProperty('--word-color', '#45a049')
)

