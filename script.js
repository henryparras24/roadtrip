
var lat;
var lng;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("cant get coordinates")
  }
}
function showPosition(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
}
getLocation();
        let queryYelp = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=Los+Angeles';
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
                coffee.append(resultBody);
              for (var i = 0; i < businesses.length; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                
                printRes(businesses[i], resultBody);
              }
            })
            .catch(function(err) {
                console.error(err);
            });

// var Userinput = document.querySelector(".card");



function printRes(businesses) {
  console.log(businesses);

  var link = document.createElement("a");
  link.setAttribute("href", businesses.url);
  link.setAttribute("target", "_blank");
  var titleEl = document.createElement('h5');
  titleEl.textContent = businesses.name;
  link.append(titleEl);
  resultBody.append(link);
}


getLocation();
        let queryYelpRestaurants = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Los+Angeles';
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
                food.append(resultBodyFood);
              for (var i = 0; i < businesses.length; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                
                printRes(businesses[i],resultBodyFood);
              }
            })
            .catch(function(err) {
                console.error(err);
            });

getLocation();
let queryYelpHotels = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotels&location=Los+Angeles';
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
        hotels.append(resultBodyHotels);
      for (var i = 0; i < businesses.length; i++) {
        // console.log(businesses[i].name);
        // console.log(businesses[i].url);
        
        printRes(businesses[i],resultBodyHotels);
      }
    })
    .catch(function(err) {
        console.error(err);
    });


getLocation();
        let queryYelpGas = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=service_stations&location=Los+Angeles';
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
                gas.append(resultBodyGas);
              for (var i = 0; i < businesses.length; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                
                printRes(businesses[i],resultBodyGas);
              }
            })
            .catch(function(err) {
                console.error(err);
            });
// var Userinput = document.querySelector(".card");



function printRes(businesses, card) {
  console.log(businesses);

  var link = document.createElement("a");
  link.setAttribute("href", businesses.url);
  link.setAttribute("target", "_blank");
  var titleEl = document.createElement('h5');
  titleEl.textContent = businesses.name;
  link.append(titleEl);
  card.append(link);
}