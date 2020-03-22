// Creating a image-change timer to cycle through the main images on my Gallery page
/*Reference for JS code 
/** I googled ideas on Javascript image sliders and came across the video referenced below. I used the skills I learnt in my lecture videos coupled with
 *  what I learnt in the referenced video regarding timeouts to get a good-looking image-timer slider**/
/*
https://www.google.com/search?q=simple+javascript+image+slider&oq=simple+javascript+ima&aqs=chrome.1.69i57j0l7.7199j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_32N3XpCfAszggweAhJiQCw19
Author - Traversy Media
Date - Feb 15, 2017
*/

/*References for images:
1st image: 
URL - https://www.hdcarwallpapers.com/caterham_superlight_r400-wallpapers.html
Author - Unknown
Date - June 06, 2014
2nd image: 
URL - https://www.wsupercars.com/car-wallpaper-download.php?title=2016%20Caterham%20Seven%20620%20S&res=1920%20x%201080&pic=wallpapers/Caterham/2016-Caterham-Seven-620-S-V1-1080.jpg
Author - Unknown
Date - Unknown
3rd image: 
URL - https://www.motoringresearch.com/car-reviews/caterham-seven-270-track-review/
Author - Tim Pitt
Date - July 4, 2019
4th image: 
URL - https://www.motor1.com/news/186179/caterham-seven-donuts-record-video/
Author - Jeff Perez
Date - NOV 09, 2017
5th image: 
URL - https://www.caricos.com/cars/c/caterham/2017_caterham_seven_sprint/
Author - Unknown
Date - 2016 Sep
6th image: 
URL - https://community.wemod.com/t/test-drive-unlimited-cars/501
Author - Unknown
Date - Unknown
7th image: 
URL - https://www.caricos.com/cars/c/caterham/2011_caterham_seven_team_lotus_special_edition/images/2.html
Author - Unknown
Date - Unknown
*/
var i = 0;
var images = [
    './images/Lotus-orange.jpg','./images/Lotus-gallery.jpg', './images/Lotus-events.jpg', 
    './images/Lotus-performance.jpg', './images/Lotus-old.jpg', './images/Lotus-white.jpg', './images/Lotus-green.jpg'
];
var time = 3000;

function changeImage(){
var ImageSlider = document.getElementById('image-slider');

if (i < images.length){
    ImageSlider.src = images[i];
    i++;
}
else{
    i = 0;
}
setTimeout("changeImage()", time)
}

window.onload = changeImage();

//This code turns the nav bar into a button for mobile use.
//Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
// I changed and incorporated this JS code to work in my website.
// I was not sure how to achieve this but have now learnt via w3schools.

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
