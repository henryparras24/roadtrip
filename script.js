var cityNameEl = document.querySelector("#cityName");
var buttonEl = document.querySelector("#submitButton");
var coffeeEl = document.querySelector("#coffee");
var foodEl = document.querySelector("#food");
var hotelsEl = document.querySelector("#hotels");
var gasEl = document.querySelector("#gas");

// var lat;
// var lng;
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("cant get coordinates")
//   }
// }
// function showPosition(position) {
//   lat = position.coords.latitude;
//   lng = position.coords.longitude;
// }
//getLocation();
        
function getCityname(event) {
  event.preventDefault();
  var cityName = cityNameEl.value
  
  console.log(cityName);
coffeeEl.innerHTML = ""
foodEl.innerHTML = ""
hotelsEl.innerHTML = ""
gasEl.innerHTML = ""

  displayYelpResults(cityName);
  displayYelpFoodResults(cityName);
  displayYelpHotelsResults(cityName);
  displayYelpGasResults(cityName);
  
  //get out text city name
  //call display yelp results
  

}

console.log(cityNameEl)
//buttonEl.addEventListener('click', function (){console.log("buttonclicked")});
//buttonEl.addEventListener("submit", function (e){e.preventDefault();console.log("buttonclicked")});
//buttonEl.on('submit', getCityname);
buttonEl.addEventListener('click', getCityname);


function displayYelpResults(citySelector){
let queryYelp = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=' + citySelector;
            console.log(queryYelp)
            $.ajax({
              'url': queryYelp,
              'method': 'GET',
              'timeout': 0,
              'async': true,
              'crossDomain': true,
              'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer PlxL-yjNZczJ04Tn4-t6nRw80dKhjWZSXbrRPFPqjdl5hT7-8ZK238x9JtWApNIkxM_T1Tr6QytqhT7WjJ5dNbLBJR6yUPX_PRZMnHjC-x8MNx-_2oThLx3GfeavYHYx'
              },
            }).then(function (response) {
              //console.log(response.businesses);
              var businesses = response.businesses;
              var coffee = document.querySelector("#coffee");

                var resultBody = document.createElement('div');
                resultBody.classList.add('card2');
                resultBody.classList.add('seaSalt');
                resultBody.classList.add('borderRadius');
                resultBody.classList.add('cardMedium');
                coffee.append(resultBody);

                var coffeeWord = document.createElement('h3');
                coffeeWord.innerHTML = `Coffee`;
                coffeeWord.classList.add('mobileee');
                resultBody.appendChild(coffeeWord);

              for (var i = 0; i < 10; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                
                printRes(businesses[i], resultBody);
              }
            })
            .catch(function(err) {
                console.error(err);
            });
          }
// var Userinput = document.querySelector(".card");



function printRes(businesses, resultBody) {
  console.log(businesses);

  var link = document.createElement("a");
  link.setAttribute("href", businesses.url);
  link.setAttribute("target", "_blank");
  var titleEl = document.createElement('h5');
  titleEl.classList.add('mobileee');
  titleEl.textContent = businesses.name;
  link.append(titleEl);
  resultBody.appendChild(link);
}


function displayYelpFoodResults(citySelector){
        let queryYelpRestaurants = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + citySelector;
            console.log(queryYelpRestaurants)
            $.ajax({
              'url': queryYelpRestaurants,
              'method': 'GET',
              'timeout': 0,
              'async': true,
              'crossDomain': true,
              'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer PlxL-yjNZczJ04Tn4-t6nRw80dKhjWZSXbrRPFPqjdl5hT7-8ZK238x9JtWApNIkxM_T1Tr6QytqhT7WjJ5dNbLBJR6yUPX_PRZMnHjC-x8MNx-_2oThLx3GfeavYHYx'
              },
            }).then(function (response) {
              //console.log(response.businesses);
              var businesses = response.businesses;
              var food = document.querySelector("#food");

                var resultBodyFood = document.createElement('div');
                resultBodyFood.classList.add('card2');
                resultBodyFood.classList.add('seaSalt');
                resultBodyFood.classList.add('borderRadius');
                resultBodyFood.classList.add('cardMedium');
                food.append(resultBodyFood);

                var foodWord = document.createElement('h3');
                foodWord.innerHTML = `Food`;
                foodWord.classList.add('mobileee');
                resultBodyFood.appendChild(foodWord);

              for (var i = 0; i < 10; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                
                printRes(businesses[i],resultBodyFood);
              }
            })
            .catch(function(err) {
                console.error(err);
            })
          };

function displayYelpHotelsResults(citySelector){
let queryYelpHotels = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotels&location=' + citySelector;
    console.log(queryYelpHotels)
    $.ajax({
      'url': queryYelpHotels,
      'method': 'GET',
      'timeout': 0,
      'async': true,
      'crossDomain': true,
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': 'Bearer PlxL-yjNZczJ04Tn4-t6nRw80dKhjWZSXbrRPFPqjdl5hT7-8ZK238x9JtWApNIkxM_T1Tr6QytqhT7WjJ5dNbLBJR6yUPX_PRZMnHjC-x8MNx-_2oThLx3GfeavYHYx'
      },
    }).then(function (response) {
      //console.log(response.businesses);
      var businesses = response.businesses;
      var hotels = document.querySelector("#hotels");

        var resultBodyHotels = document.createElement('div');
        resultBodyHotels.classList.add('card3');
        resultBodyHotels.classList.add('seaSalt');
        resultBodyHotels.classList.add('borderRadius');
        resultBodyHotels.classList.add('cardMedium');
        hotels.append(resultBodyHotels);

        var hotelWord = document.createElement('h3');
        hotelWord.innerHTML = `Hotels`;
        hotelWord.classList.add('mobileee');
        resultBodyHotels.appendChild(hotelWord);

      for (var i = 0; i < 10; i++) {
        // console.log(businesses[i].name);
        // console.log(businesses[i].url);
        
        printRes(businesses[i],resultBodyHotels);
      }
    })
    .catch(function(err) {
        console.error(err);
    })
  };


  function displayYelpGasResults(citySelector){
        let queryYelpGas = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=service_stations&location=' + citySelector;
            console.log(queryYelpGas)
            $.ajax({
              'url': queryYelpGas,
              'method': 'GET',
              'timeout': 0,
              'async': true,
              'crossDomain': true,
              'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer PlxL-yjNZczJ04Tn4-t6nRw80dKhjWZSXbrRPFPqjdl5hT7-8ZK238x9JtWApNIkxM_T1Tr6QytqhT7WjJ5dNbLBJR6yUPX_PRZMnHjC-x8MNx-_2oThLx3GfeavYHYx'
              },
            }).then(function (response) {
              //console.log(response.businesses);
              var businesses = response.businesses;
              var gas = document.querySelector("#gas");

                var resultBodyGas = document.createElement('div');
                resultBodyGas.classList.add('card4');
                resultBodyGas.classList.add('seaSalt');
                resultBodyGas.classList.add('borderRadius');
                resultBodyGas.classList.add('cardMedium');
                gas.append(resultBodyGas);

                var gasWord = document.createElement('h3');
                gasWord.innerHTML = `Gas`;
                gasWord.classList.add('mobileee');
                resultBodyGas.appendChild(gasWord);

              for (var i = 0; i < 10; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                
                printRes(businesses[i],resultBodyGas);
              }
            })
            .catch(function(err) {
                console.error(err);
            })
          };
// var Userinput = document.querySelector(".card");



// function printRes(businesses, card) {
//   //console.log(businesses);

//   var link = document.createElement("a");
//   link.setAttribute("href", businesses.url);
//   link.setAttribute("target", "_blank");
//   var titleEl = document.createElement('h5');
//   titleEl.textContent = businesses.name;
//   link.append(titleEl);
//   card.append(link);
// }