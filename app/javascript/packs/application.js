// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
window.Rails = require("@rails/ujs")
require("@hotwired/turbo-rails")
require("@rails/activestorage").start()
require("channels")
//require("trix")
//require("@rails/actiontext")
require("local-time").start()
// Start Rails UJS
Rails.start()
import $ from 'jquery';
// Stimulus
import "controllers"
// Bootstrap
import 'bootstrap'
document.addEventListener("turbo:load", () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
})
// Slides
$(document).ready(function () {
  console.log('It Works!')
  //var slides = $('#slides .slide');
 // var currentSlide = 0;
  let $activeSlide = $('slides .slide:first-child');
  $activeSlide.addClass("showing");
  $('#decline').on('click', function() {
    goToSlide('decline')
  })
  $('#approve').on('click', function() {
    goToSlide('approve')
  })
  function goToSlide(action) {
    $activeSlide.removeClass("showing");
    $activeSlide = $activeSlide.next(".slide");

    // Send data to controller
    if(action == "approve") {
      console.log('')
    } else {

    }
   
    $activeSlide.addClass("showing");

  }
  function previousSlide() {
    goToSlide(currentSlide - 1);
  }
  function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }
});
