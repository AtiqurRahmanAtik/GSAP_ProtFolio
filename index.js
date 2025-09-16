 


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





// NavBar Pages

   $(document).ready(function () {
     
      $("#pages").click(function () {
        $(".pageShow").toggleClass("hidden");
      });

    });




     $(document).ready(function () {
$('.read').click(function(){
    $('.p_hide').toggle(1000);
});

  });




   $(document).ready(function () {
$('.img').hover(function(){
    $(this).fadeToggle(1000);
})

    });





// Projects Button
  //       $(document).ready(function(){
  
  //   $('#btnPro1').click(function(){

  //     alert('click')

  //   })
  // });




  

      // project See button
      
   
 $(document).ready(function () {
      $('#btnPro1').click(function () {
        // window.location.href = 'https://careerbuilder-97259.web.app/';
        window.location.replace('https://careerbuilder-97259.web.app/');
      });

      $('#btnPro2').click(function () {
        window.location.href = 'https://painting-and-drawing-2f67c.web.app/';
      });

      $('#btnPro3').click(function () {
        window.location.href = 'https://real-estate-project-e543c.web.app/';
      });
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
gsap.from("#edu1", {x:-500, duration:0, })

let EL = gsap.timeline();

EL.from("#edu1", {x: -500, duration:3 , opacity: 0,},'ani')
.from("#edu2", {x: 500, duration:3, opacity:0,delay:2},'ani')






// Contact Section
let ML = gsap.timeline();

ML.from("msg", {x: -500, duration:3 , opacity: 0,},'ani')
.from("#msg1", {x: 500, duration:3, opacity:0,delay:2},'ani')



});


 





      // Toggle mobile menu
      // $("#menuBtn").click(function () {
      //   $("#mobileMenu").toggleClass("hidden");
      // });

      // // Toggle mobile dropdown
      // $("#mobileDropdownBtn").click(function () {
      //   $("#mobileDropdownMenu").toggleClass("hidden");
      //   $("#mobileDropdownIcon").toggleClass("rotate-180"); // rotate arrow
      // });
   




      






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

  //  if(name === "" || email === "" || message === ""){
  //   alert("Please fill up the form");
  //  }
   

   $('#show_value').text(`User Name : ${formData?.name} 
    ${formData?.email} and Message ${formData?.message}` );

    // alert(`User Name : ${formData?.name} email ${formData?.email} message ${formData?.message}` );
    // // console.log("Form Data Submitted:", formData);
})


$(".play").click(function(){
    alert("hello world");
});








// Callender Demo
   $(document).ready(function () {

      let today = new Date();
      let currentMonth = today.getMonth();
      let currentYear = today.getFullYear();

      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      console.log(monthNames[currentMonth]);




      function renderCalendar(month, year) {
        $("#calendarDays").empty();

        $("#monthYear").text(`${monthNames[currentMonth]} ${year}`);

        let firstDay = new Date(year, month).getDay();
        console.log(firstDay)
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        console.log(daysInMonth)

        
        // Empty cells before start of month
        for (let i = 0; i < firstDay; i++) {
          $("#calendarDays").append(`<div></div>`);
        }


        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
          let isToday =
            day === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth();

          $("#calendarDays").append(`
            <div class="calendar-day p-10 app rounded cursor-pointer hover:bg-green-200 ${
              isToday ? "bg-green-400 text-white font-bold" : "bg-gray-100"
            }">
              ${day}
            </div>
          `);
        }
      }


      // Initial render
      renderCalendar(currentMonth, currentYear);


      // Button events
      $("#prev").click(function () {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
      });


      $("#next").click(function () {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
      });




      // Modal 
//     $(document).on("click", ".calendar-day", function () {
//   let day = $(this).text().trim(); 
//   let message = $("#modalText").val();  
  
//   console.log(`Day is:, ${day} and message ${message}`);

//   $("#modalDate").text(day);         // show inside modal
//   $("#dateModal").removeClass("hidden");
// });




// Submit Button
  // $("#submitModal").click(function(){

  //     let day = $(this).text().trim(); 
  // let message = $("#modalText").val();  
  
  // console.log(`Day is:, ${day} and message ${message}`);

  //     $(".calendar-day").text(message);
  //     //  $("#dateModal").removeClass("hidden");
  //         $("#dateModal").addClass("hidden"); 

  // })




        // close modal
  // $("#closeModal").click(function () {

  //    $("#dateModal").addClass("hidden"); 
     
    
  //   });










let selectedDayElement = null; // global variable 


// When a calendar day is clicked
$(document).on("click", ".calendar-day", function () {

  
  let day = $(this).text().trim();   
  $("#modalDate").text(day);     
  $("#modalText").val("");         
  $("#dateModal").removeClass("hidden");

  selectedDayElement = $(this);    // store the clicked element
});




// Submit Button
$("#submitModal").click(function () {
  let day = $("#modalDate").text();     
  let message = $("#modalText").val();  

  console.log(`Day is: ${day}, message: ${message}`);

  if (selectedDayElement) {
    selectedDayElement.text(`${day} (${message})`);
  }

  $("#dateModal").addClass("hidden"); // close modal
});







        // close modal
  $("#closeModal").click(function () {

     $("#dateModal").addClass("hidden"); 
     
    
    });





//       $(document).on("click", ".calendar-day", function () {
//   let day = $(this).data("day");
//   let month = $(this).data("month");
//   let year = $(this).data("year");

//   console.log(`Day is ${day}, Full date: ${day}-${month + 1}-${year}`);
// });




      // Click event for days
  // $(document).on("click", "#calendarDays div", function () {
  //   let day = $(this).data("day");
  //   let month = $(this).data("month");
  //   let year = $(this).data("year");

  //   let fullDate = `${day} ${monthNames[month]} ${year}`;
  //   console.log(fullDate)

  //   // Show in modal
  //   $("#modalDate").text(fullDate);
  //   $("#dateModal").removeClass("hidden");
  // });


      
    });




     



    
    // $(document).ready(function () {

    //   $('.day').click(function(){
    //     var day = parseInt($(this).attr("#calendarDays"));
    //     console.log(day)
    //     // alert(`day `,day);
    //   })

    //  });
