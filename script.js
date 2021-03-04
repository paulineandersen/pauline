"use strict"; 

console.log("Astra Child Theme JS is running!");

let myAudioElement;

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    initScrollToTop();
    window.onscroll = function () {
        scrollFunction();
        }
        initAudio();
});

/* adding scroll to top arrow */

function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/ `
    <a id="scrollTop" onclick="scrollToTop()">^</a>
    `;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

   }
   
   function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none"; 
    }
   }

// audio function playing in "contact" section

   function initAudio(){
    document.querySelector("#content").innerHTML += /*html*/`
      <audio id="my-audio">
        <source src="http://paulinesa.dk/wp-content/uploads/2021/02/Kim-Possible-Ringtone-1.mp3" type="audio/mpeg">
      </audio>
    `;
  
    myAudioElement = document.querySelector("#my-audio");
  }
  
  function playAudio() {
    myAudioElement.play();
  }
  





