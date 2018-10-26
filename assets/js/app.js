$(document).on('turbolinks:load', function() {

// 1. Foundation
// --------------------

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


});

$(document).on('turbolinks:load', function() {

var s = document.createElement("script")
s.src = "https://embed.small.chat/T02TFQDESGDQQ7FB8W.js"
document.body.appendChild(s);

});