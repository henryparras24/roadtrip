
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
              for (var i = 0; i < businesses.length; i++) {
                // console.log(businesses[i].name);
                // console.log(businesses[i].url);
                printRes(businesses[i]);
              }
            })
            .catch(function(err) {
                console.error(err);
            });

var Userinput = document.querySelector(".card");

var coffee = document.querySelector("#coffee");

var resultBody = document.createElement('div');
resultBody.classList.add('card-body');
coffee.append(resultBody);

function printRes(businesses) {
  console.log(businesses);

  var link = document.createElement("a");
  link.setAttribute("href", businesses.url);
  link.setAttribute("target", "_blank");
  var titleEl = document.createElement('h5');
  titleEl.textContent = businesses.name;
  link.append(titleEl);
  resultBody.append(link);

  // var bodyCont = document.createElement('p');
  // bodyCont.innerHTML = 

  // resultBody.append(titleEl, resultBody);

  // Userinput.append()
}