// Initialise and add map
function initMap() {
  // The location
  var crp = {lat: 12.9035, lng: 76.3898};
  // The map, centered at location mentioned
  var map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 4, center: crp});
  // The marker, positioned at location mentione
  var marker = new google.maps.Marker({position: crp, map: map});
}

// Sticky Menu Background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})


// Smooth scroll navbar
$('#navbar a, a.btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});