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
titleOfSection.classList.add('returnOfElements')
