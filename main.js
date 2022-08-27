function initMap(){
    // website latitude and longitude:https://www.latlong.net/convert-address-to-lat-long.html
    const loc = {lat:32.181412 , lng:34.872669};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
    zoom:14,
    center:loc
});

const marker = new google.maps.Marker({position: loc,map:map});
}
// sticky menu background
window.addEventListener('scroll', function(){
    if (window.scrolly > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});


// smooth scrolling
$('#navbar a, .btn') .on('click' , function(event){
    if (this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100 
            },
            800
        );
    }
});
