const apiKey = 'ccabedb169d7480b8d084555230609';





/* Получаем название город  */


const form = document.querySelector('#form');
const input = document.querySelector('#placeSity');
const header = document.querySelector('.header');
let city;

form.onsubmit = function (e) {
	e.preventDefault();
	city = input.value.trim();
	const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {

			if (data.error) {
				

				const prevCard = document.querySelector('.main');
				const html = `<div class="main">
									<div class="mainFalse">
										<div class="error">${data.error.message}</div>
									</div>
								</div>`;
				header.insertAdjacentHTML('afterend' , html);

			} else {
				const prevCard = document.querySelector('.main');
				if (prevCard) {
					prevCard.remove();
				}



				/* разметка карточки погоды */  



					const html = `<div class="main">
						<div class="container">
							<div class="all-cart">
								<div class="title-city">
									<h1>${data.location.name}</h1>
								</div>
								<div class="icon-weather">
									<img src="img/plane.svg" alt="">
								</div>
								<div class="view-weather">
									${data.current.condition.text}
								</div>
								<div class="degrees-city">
									${data.current.temp_c}°C
								</div>
								<div class="wind">
									<h1>Ветер ${data.current.wind_mph} м/с</h1>
								</div>
							</div>
						</div>
					</div>`;




				header.insertAdjacentHTML('afterend' , html);
			};



			/* удаляем карточки  */





		});

}


/* делаем запрос на сервер  */



