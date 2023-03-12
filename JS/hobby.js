// ---------Carousel hobby--------- \\

const allCarousels = document.querySelectorAll('.allcarousel')

allCarousels.forEach(carousel => {
	const slide = carousel.querySelector('.slides')
	const nextBtn = carousel.querySelector('.nextImg')
	const prevBtn = carousel.querySelector('.prevImg')
	let slides = carousel.querySelectorAll('.slide')

	const interval = 2000
	let index = 1
	let slideId

	const firstClone = slides[0].cloneNode(true)
	const lastClone = slides[slides.length - 1].cloneNode(true)

	firstClone.id = 'first-clone'
	lastClone.id = 'last-clone'

	slide.append(firstClone)
	slide.prepend(lastClone)

	const slideWidth = slides[index].clientWidth

	slide.style.transform = `translateX(${-slideWidth * index}px)`

	const startSlide = () => {
		slideId = setInterval(() => {
			moveToNextSlide()
		}, interval)
	}

	const getSlides = () => carousel.querySelectorAll('.slide')

	slide.addEventListener('transitionend', () => {
		slides = getSlides()
		if (slides[index].id === firstClone.id) {
			slide.style.transition = 'none'
			index = 1
			slide.style.transform = `translateX(${-slideWidth * index}px)`
		}
		if (slides[index].id === lastClone.id) {
			slide.style.transition = 'none'
			index = slides.length - 2
			slide.style.transform = `translateX(${-slideWidth * index}px)`
		}
	})

	const moveToNextSlide = () => {
		slides = getSlides()
		if (index >= slides.length - 1) return
		index++
		slide.style.transform = `translateX(${-slideWidth * index}px)`
		slide.style.transition = '.7s'
	}

	const moveToPreviousSlide = () => {
		if (index <= 0) return
		index--
		slide.style.transform = `translateX(${-slideWidth * index}px)`
		slide.style.transition = '.7s'
	}

	carousel.addEventListener('mouseenter', () => {
		clearInterval(slideId)
	})

	carousel.addEventListener('mouseleave', startSlide)

	nextBtn.addEventListener('click', moveToNextSlide)

	prevBtn.addEventListener('click', moveToPreviousSlide)

	startSlide()
})

// ---------change the order of elements --------- \\
const firstLayout = document.querySelector('.firstLayout')

const secound = document.querySelector('.secoundLayout')
const carousel = document.querySelector('.secoundLayout .allcarousel')
const myStory = document.querySelector('.secoundLayout .myStory')

const thirdLayout = document.querySelector('.thirdLayout')
const thirdLayoutcarousel = document.querySelector('.thirdLayout .allcarousel')
const thirdLayoutmyStory = document.querySelector('.thirdLayout .myStory')

function adjustLayout() {
	if (window.innerWidth < 1350) {
		secound.insertBefore(myStory, carousel)
	} else secound.insertBefore(carousel, myStory)
}
adjustLayout()

window.addEventListener('resize', adjustLayout)

// ---------Moving Elements--------- \\
const laoyoutWay = document.querySelector('.laoyoutWay')
const laoyoutWay2 = document.querySelector('.laoyoutWay2')


laoyoutWay.classList.add('layoutVisible')
firstLayout.classList.add('layoutVisible')

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 300) {
		secound.classList.add('layoutVisible')
		laoyoutWay2.classList.add('layoutVisible')
	}
})
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 900) {
		thirdLayout.classList.add('layoutVisible')
	}
})

