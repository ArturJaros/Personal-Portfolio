const dayNight = document.querySelector('.dayNight')
const body = document.querySelector('body')
const allNav = document.querySelector('.allNav')
const textElements = document.querySelectorAll(
	'.allNav, h1, h2, .introducingYourself,.myStoryDescription,  .border, .navLinks, .socialName '
)
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
const faGear = document.querySelector('.settings .fa-gear')
const buttonsLeft = document.querySelector('.buttonsLeft')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const color4 = document.querySelector('.color4')

//chat
const firstAsk = document.querySelector('.firstAsk')
const askMe1 = document.querySelector('.askMe1')
const askMe2 = document.querySelector('.askMe2')
const askMe3 = document.querySelector('.askMe3')
const guestAnswer = document.querySelector('.guestAnswer')
const guestAnswer2 = document.querySelector('.guestAnswer2')
const guestAnswer3 = document.querySelector('.guestAnswer3')
const chatAnswer = document.querySelectorAll('.chatAnswer')
const chatAnswer2 = document.querySelector('.chatAnswer2')
const chatAnswer3 = document.querySelector('.chatAnswer3')
const hidenAnswer = document.querySelector('.hidenAnswer')
const showAnswer = document.querySelector('.showAnswer')
const chatMe = document.querySelector('.chatMe')
const faCommentDots = document.querySelector('.chatMe .fa-comment-dots')
const chat = document.querySelector('.chat')
const chatOff = document.querySelector('.chatOff')
const askMeRest = document.querySelector('.askMeRest')
const introduceChatMeChatMe = document.querySelector('.introduceChatMeChatMe p')

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
const lightBgColor = '#e2e5e9'
const darkBgColor = '#1e1c1c'
const lightNavBgColor = '#e2e5e9'
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
	settings.style.backgroundColor = dark ? darkBtnBgColor : lightColor
	chatMe.style.backgroundColor = dark ? darkBtnBgColor : lightColor
	chat.style.backgroundColor = dark ? darkGrayColor : lightNavBgColor
	introduceChatMeChatMe.style.color = dark ? grayColor : darkColor
	chatOff.style.color = dark ? grayColor : darkColor
	faGear.style.color = dark ? grayColor : darkColor
	faCommentDots.style.color = dark ? grayColor : darkColor
	changeColor.style.backgroundColor = dark ? darkBtnBgColor : lightColor
	changeColor.style.borderColor = dark ? darkColor : lightColor
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

color1.addEventListener('click', () => document.documentElement.style.setProperty('--word-color', '#ff4321'))
color2.addEventListener('click', () => document.documentElement.style.setProperty('--word-color', '#455ca0'))
color3.addEventListener('click', () => document.documentElement.style.setProperty('--word-color', '#b0c223'))
color4.addEventListener('click', () => document.documentElement.style.setProperty('--word-color', '#45a049'))

//chat
function addAskMe1() {
	askMe1.classList.add('hidenAnswer')
	guestAnswer.classList.add('showAnswer')
	chatAnswer.forEach(e => e.classList.add('showAnswer'))
}
function addAskMe2() {
	askMe2.classList.add('hidenAnswer')
	guestAnswer2.classList.add('showAnswer')
	chatAnswer2.classList.add('showAnswer')
}
function addAskMe3() {
	askMe3.classList.add('hidenAnswer')
	guestAnswer3.classList.add('showAnswer')
	chatAnswer3.classList.add('showAnswer')
}
function removeAskMe1() {
	askMe1.classList.remove('hidenAnswer')
	askMe1.classList.add('showAnswer')
	chatAnswer.forEach(e => e.classList.remove('showAnswer'))
	guestAnswer.classList.remove('showAnswer')
}
function removeAskMe2() {
	askMe2.classList.remove('hidenAnswer')
	askMe2.classList.add('showAnswer')
	chatAnswer2.classList.remove('showAnswer')
	guestAnswer2.classList.remove('showAnswer')
}
function removeAskMe3() {
	askMe3.classList.remove('hidenAnswer')
	askMe3.classList.add('showAnswer')
	guestAnswer3.classList.remove('showAnswer')
	chatAnswer3.classList.remove('showAnswer')
}

function handleAskMe1Click() {
	if (guestAnswer2.classList.contains('showAnswer')) {
		removeAskMe2()
		addAskMe1()
	}
	if (guestAnswer3.classList.contains('showAnswer')) {
		removeAskMe3()
		addAskMe1()
	} else {
		addAskMe1()
	}
}
function handleAskMe2Click() {
	if (guestAnswer.classList.contains('showAnswer')) {
		removeAskMe1()
		addAskMe2()
	}
	if (guestAnswer3.classList.contains('showAnswer')) {
		removeAskMe3()
		addAskMe2()
	} else {
		addAskMe2()
	}
}
function handleAskMe3Click() {
	if (guestAnswer2.classList.contains('showAnswer')) {
		removeAskMe2()
		addAskMe3()
	}
	if (guestAnswer.classList.contains('showAnswer')) {
		removeAskMe1()
		addAskMe3()
	} else {
		addAskMe3()
	}
}
function restAllButton() {
	removeAskMe1()
	removeAskMe2()
	removeAskMe3()
}

chatMe.addEventListener('click', () => {
	restAllButton()
	chat.classList.toggle('returnOfElements')
	askMeRest.classList.remove('askMeRestLower')
})
chatOff.addEventListener('click', () => {
	chat.classList.remove('returnOfElements')
})
askMe1.addEventListener('click', () => {
	handleAskMe1Click()
	askMeRest.classList.add('askMeRestLower')
})
askMe2.addEventListener('click', () => {
	handleAskMe2Click()
	askMeRest.classList.add('askMeRestLower')
})
askMe3.addEventListener('click', () => {
	handleAskMe3Click()
	askMeRest.classList.add('askMeRestLower')
})
askMeRest.addEventListener('click', () => {
	restAllButton()
	askMeRest.classList.remove('askMeRestLower')
})
