$(document).ready(function () {
	// Duhet te vendosim nje event ne trigger btn
	var triggerBtn = document.querySelector('.navigation-trigger--js');

	triggerBtn.addEventListener('click', function() {
	// 	// 1 - kap elementin menu
	// 	// 2 - shto klasen open nese menuja eshte e fshehur
	// 	// 3 - nese menuja eshte e hapur, hiq klasen open

		let menuEl = document.querySelector('.navigation-container');

		// variabel boolean
		let menuElementClasses = menuEl.getAttribute('class');
		let isOpen = menuElementClasses.includes('open');
		
		let triggerBtnClasses = this.getAttribute('class');

	// 	// zhvendos butonin ne pozicionin e duhur
		if (isOpen) {
			menuElementClasses = menuElementClasses.replace(' open', '');
			triggerBtnClasses = triggerBtnClasses.replace(' right-250', '');	
		} else {
			menuElementClasses += ' open';
			triggerBtnClasses += ' right-250';
		}

		menuEl.setAttribute('class', menuElementClasses)
		this.setAttribute('class', triggerBtnClasses)

	});

	// It changes the background of header based on bgIndex

	var backgroundsList = [
		'bg-consulting.jpeg',
		'bg-2.jpg',
		'bg-3.jpg'
	];

	var bgIndex = 0;
	var headerEl = document.getElementById('header');

	var prevBtn = document.querySelector('.prev--js');
	prevBtn.addEventListener('click', function () {
		if (bgIndex == 0) {
			bgIndex = 2;
		} else {
			bgIndex--;
		}

		changeBackground(bgIndex)
	})


	var nextBtn = document.querySelector('.next--js');
	nextBtn.addEventListener('click', function () {
		if (bgIndex == 2) {
			bgIndex = 0;
		} else {
			bgIndex++;
		}

		changeBackground(bgIndex)
	})

    function changeBackground(bgIndex) {
	let style = headerEl.getAttribute('style');

	style = ' background-image: url("../img/' + backgroundsList[bgIndex] +'")';
	headerEl.setAttribute('style', style);
}


  //strategy

	var strategyList = [
		new Strategji(1, 'Takimi i pare', 'Te kuptojme problemin', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia'),
		new Strategji(2, 'Takimi i dyte', 'Te kuptojme problemin', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia'),
		new Strategji(3, 'Takimi i trete', 'Te kuptojme problemin', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia')
	];


	var paginator = document.querySelector('.paginator--js');

	paginator.addEventListener('click', function (e) {
		let paginatorEl = e.target;
		let strategyId = paginatorEl.getAttribute('data-attr-id');
		let strategy;
		if (strategyId !== null) {
			strategy = getStrategyById(strategyList, strategyId);
		}

		if (strategy) {
			replaceStrategy(strategy);
			makeActivePaginator(strategyId)
		}
		
function replaceStrategy(strategy) {
	if (strategy !== null) {
		let stepEl = document.querySelector('.strategy-step--js');
		let titleEl = document.querySelector('.strategy-title--js');
		let subTitleEl = document.querySelector('.strategy-subtitle--js');
		let contentEl = document.querySelector('.strategy-content--js');

		stepEl.textContent = '0' + strategy.step;
		titleEl.textContent = strategy.title;
		subTitleEl.textContent = strategy.subtitle;
		contentEl.textContent = strategy.content;
	}
}

function makeActivePaginator(id) {
	let paginatorElements = document.querySelectorAll('.pagination .paginator');
	let paginatorEl;

	for (let i = 0; i < paginatorElements.length; i++) {
		paginatorEl = paginatorElements[i];
		let idOfPaginatorElement = paginatorEl.getAttribute('data-attr-id')
		let elementClasses = paginatorEl.getAttribute('class')

		if (id == idOfPaginatorElement) {
			elementClasses = elementClasses.replace('inactive-paginator', 'active-paginator')
		} else {
			elementClasses = elementClasses.replace(' active-paginator ', ' inactive-paginator ')
		}
		paginatorEl.setAttribute('class', elementClasses)
	}
}

})
	

	//Q&A

	let qaPannelContainer = document.querySelector('.qa-container--js');

	qaPannelContainer.addEventListener('click', function (event) {
		const qaTitleClass = 'qa-pannel-title--js';
		let clickedElement = event.target;
		let isTitleElement = false;
		let parentElement = clickedElement.parentNode;
		let isParentElement = false;
		
		if (clickedElement.hasAttribute('class')) {
			isTitleElement = clickedElement.getAttribute('class').includes(qaTitleClass)
		} 

		if (!isTitleElement && parentElement.hasAttribute('class')) {
			isTitleElement = parentElement.getAttribute('class').includes(qaTitleClass)
			if (isTitleElement) {
				clickedElement = parentElement;
				isParentElement = true;
			}
		}

		if (isTitleElement) {
			toggleContent(clickedElement)
		}
	});

	
function toggleContent(titleElement) {
	let contentEl = titleElement.nextElementSibling
	let contentClasses = contentEl.getAttribute('class');
	let isClosed = contentClasses.includes('d-none');
	let titleElParent = titleElement.parentElement;

	let closeIcon;
	let closeIconClasses;
	let parentElementClasses = titleElParent.getAttribute('class');

	if (isClosed) {
		contentClasses = contentClasses.replace('d-none', '')
		closeIcon = titleElement.querySelector('.fa-plus')
		closeIconClasses = closeIcon.getAttribute('class').replace('fa-plus', 'fa-minus')
		parentElementClasses += ' border-left-green main-green'
	} else {
		contentClasses +=' d-none';
		closeIcon = titleElement.querySelector('.fa-minus')
		closeIconClasses = closeIcon.getAttribute('class').replace('fa-minus', 'fa-plus')
		parentElementClasses = parentElementClasses.replace('border-left-green')
		parentElementClasses = parentElementClasses.replace('main-green')
		parentElementClasses += ' border-left-gray'
	}
	titleElParent.setAttribute('class', parentElementClasses)
	closeIcon.setAttribute('class', closeIconClasses)
	contentEl.setAttribute('class', contentClasses)

}

// contact us

$('#contact_us').validate({
	  rules: {
	    name: "required",
	    email: {
	      required: true,
	      email: true
	    },
	    mesazhi: "required"
	  },
	  messages: {
	    name: "Please specify your name",
	    email: {
	      required: "We need your email address to contact you",
	      email: "Your email address must be in the format of name@domain.com"
	    },
	    mesazhi: "Please specify a message"
	  }
	});

	$('#contact_us').on('submit', function(e) {
		e.preventDefault();

		if ($(this).valid()) {
			let data = $(this).serialize();

			$.ajax({
			type: 'POST',
			url: '/konsultim-biznesi/test.php',
			data: data,
			beforeSend: function () {
				$('#contact_us .loading').removeClass('hidden')
			},
			success: function () {
				alert('Te dhenat u derguan me sukses')
			},
			error: function (response) {
				console.log(response);
				alert(response)
			},
			complete: function () {
				$('#contact_us .loading').addClass('hidden')
			}
		});
		}
	});
});

