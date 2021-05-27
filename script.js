
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
              console.log(response)
            })
            .catch(function(err) {
                console.error(err);
            });
