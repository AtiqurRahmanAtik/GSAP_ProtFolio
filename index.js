 


//  Swiper Slider 
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  });



// Callender Slider
  document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });




// gsap animation

 document.addEventListener("DOMContentLoaded", (event) => {

    
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      // gsap.registerPlugin(ScrollToPlugin);


 ScrollSmoother.create({
  smooth: 7, 
  effects: true, 

});




// NavBar
gsap.fromTo(".navBar",{ y: -200, duration: 1, },{y:0, duration:2, });

gsap.to(".ProfileImage",{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)", duration:1, delay:1.5, });

gsap.fromTo(".Description", {x:-900, duration:2,},{x:0, duration:2, });


gsap.fromTo(".social",{opacity:0, duration:2,delay:2}, {opacity:1,duration:2,delay:2.5});




// Staggers using Skill section
// let tl = gsap.timeline({

//     scrollTrigger: {
// 		trigger: '#skills',
//          start: "0% 70%", 
// 		end: "70% 100%",
//         duration:3,
       
//         scrub : 1,
// 		pin: true,
// }
//  });

//  tl.to("#skills ul div", {
//   duration: 1,
//   scale: 0.5,
//   y: 40,
//   ease: "bounce",
//   yoyo: true,
//     repeat: -1,
//   stagger: {
//     grid: [3,3,3],
//     from: "center",
//     amount: 1.5
//   }
// });



// project animation
// gsap.from("#pro1", {x: -500, duration:3})



// Projects
let TL = gsap.timeline();

TL.from("#pro1", {x: -500, duration:3 , opacity: 0,},'ani')
.from("#pro_2", {y: -500, duration:3, opacity:0,delay:2})
.from("#pro3", {x: 500, duration:3, opacity:0}, 'ani')



// Image Gallery



// ScrollTo Pages link
  $("a[href='#about']").click(function(e){
      e.preventDefault();

      gsap.to(window, {
          duration: 3,
          scrollTo: { y: "#about", offsetY: 120 }
      });
  });


  $("a[href='#skills']").click(function(e){
      e.preventDefault();

      gsap.to(window, {
          duration: 3,
          scrollTo: { y: "#skills", offsetY: 120 }
      });
  });

  
  
    $("a[href='#projects']").click(function(e){
        e.preventDefault();
  
        gsap.to(window, {
            duration: 3,
            scrollTo: { y: "#projects", offsetY: 120 }
        });
    });
  

    $("a[href='#education']").click(function(e){
        e.preventDefault();
  
        gsap.to(window, {
            duration: 3,
            scrollTo: { y: "#education", offsetY: 120 }
        });
    });
  

    $("a[href='#contact']").click(function(e){
        e.preventDefault();
  
        gsap.to(window, {
            duration: 3,
            scrollTo: { y: "#contact", offsetY: 120 }
        });
    });


// document.querySelector("a[href='#education']").addEventListener("click", function(e){
//         e.preventDefault();


//      gsap.to(window, {
//         duration: 3, 
//         scrollTo:{y:"#education" , offsetY:120}});
// })



// Staggers using Skill section
gsap.to("#skills ul div", {
  duration: 1,
  scale: 0.5,
  y: 40,
  ease: "bounce",
  yoyo: true,
    repeat: -1,
  stagger: {
    grid: [3,3,3],
    from: "center",
    amount: 1.5
  }
});




// Education
// gsap.from("#edu1", {x:-500, duration:0, })

let EL = gsap.timeline();

EL.from("#edu1", {x: -500, duration:3 , opacity: 0,},'ani')
.from("#edu2", {x: 500, duration:3, opacity:0,delay:2},'ani')




// Contact Section
let ML = gsap.timeline();

ML.from("msg", {x: -500, duration:3 , opacity: 0,},'ani')
.from("#msg1", {x: 500, duration:3, opacity:0,delay:2},'ani')



});








// social media link
function linkedIn() {
    window.location.href = 'https://www.linkedin.com/in/md-atiqur-rahman-atik/';
}

function github() {
    window.location.href = 'https://github.com/your-profile';
}

function twitter() {
    window.location.href = 'https://twitter.com/your-profile';
}

function facebook() {
    window.location.href = 'https://www.facebook.com/your-profile';
}




$('.read').click(function(){
    $('.p_hide').toggle(1000);
});


$('.img').hover(function(){
    $(this).fadeToggle(1000);
})




// form submission

$('#contact_form').submit(function(e){
    e.preventDefault();

    const name= $('#name').val();
    const email = $('#email').val();
    const message= $('#message').val();

    let formData = {
        name: name,
        email: email,
        message: message,
    };

   if(name === "" || email === "" || message === ""){
    alert("Please fill up the form");
   }
   

//    $('#show_value').text(`User Name : ${formData?.name} <br>
//     ${formData?.email} and Message ${formData?.message}` );

    alert(`User Name : ${formData?.name} email ${formData?.email} message ${formData?.message}` );
    // console.log("Form Data Submitted:", formData);
})


$("play".click(function(){
    alert("hello world");
}))




    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


