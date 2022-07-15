var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
breakpoints: {
    0: {
        slidesPerView: 1
    },
    500: {
        slidesPerView: 2
    },
    775: {
        slidesPerView: 3
    },
    1000: {
        slidesPerView: 4
    },


},


  });



  let sections = document.querySelectorAll('.underline')

  document.addEventListener('scroll',function(){
      sections.forEach(function(s){

          let elementTop = s.getBoundingClientRect().top
          console.log(elementTop)
         
          

          if(elementTop <= 250 && elementTop > -(s.clientHeight-250)){
            console.log(s.clientHeight)
            console.log('.'+s.id)
              document.querySelector('.'+s.id).classList.add('target')
          }else{
              
              document.querySelector('.'+s.id).classList.remove('target')
          }
          
          
      })
  })