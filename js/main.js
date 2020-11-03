



















$(document).ready(function() {

  

  


//  Event Click Btn Menu

$("#menu-btn").click(function(){
  $("#nav-mobile").slideToggle();
});

// event click pages btn 
$("#pages-btn").click(function(){
  $("#pages-menu").slideToggle();
  $("#pages-btn").toggleClass("bxs-chevron-up");
});
// event click blog btn 
$("#blog-btn").click(function(){
  $("#blog-menu").slideToggle();
  $("#blog-btn").toggleClass("bxs-chevron-up");

});
// event click features btn 
$("#features-btn").click(function(){
  $("#features-menu").slideToggle();
  $("#features-btn").toggleClass("bxs-chevron-up");

});
// event click pet btn 
$("#pet-btn").click(function(){
  $("#pet-menu").slideToggle();
  $("#pet-btn").toggleClass("bxs-chevron-up");

});
// event click portfolio btn 

$("#portfolio-btn").click(function(){
  $("#portfolio-menu").slideToggle();
  $("#portfolio-btn").toggleClass("bxs-chevron-up");

});




//   Slider 

$('.owl-carousel-featured').owlCarousel({
loop:true,
margin:10,
nav:true,
dots: false,
responsive:{
    0:{
        items:1
    }
}
})

// Accordion Panel

const btnAcc1 = document.querySelectorAll('.panel-title-1');
// console.log(btnAcc);


for(let i = 0; i < btnAcc1.length; i++) {

  btnAcc1[i].addEventListener('click', (e) => {
    e.preventDefault();
    btnAcc1[i].classList.toggle('acc1-active');

    const panel1 = btnAcc1[i].nextElementSibling;
    if(panel1.style.maxHeight) {
        panel1.style.maxHeight = null;
    }
    else {
        panel1.style.maxHeight = panel1.scrollHeight + "px";

    }

  });
}


const btnAcc2 = document.querySelectorAll('.panel-title-2');
// console.log(btnAcc);


for(let i = 0; i < btnAcc2.length; i++) {

  btnAcc2[i].addEventListener('click', (e) => {
    e.preventDefault();
    btnAcc2[i].classList.toggle('acc2-active');

    const panel2 = btnAcc2[i].nextElementSibling;
    console.log(panel2.style.maxHeight);
    if(panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
    }
    else {
        panel2.style.maxHeight = panel2.scrollHeight + "px";

    }

  });
}

});


// TABS


// const tabsBtn1 = document.querySelectorAll(newFunction());
// const tabsContent1 = document.querySelectorAll('.tabs__content--item1');
// console.log(tabsBtn1);
// function newFunction() {
//   return '.tabs__nav--btn1';
// }

// //  remove 
// function removeClassBtn1() {
//   for(let i = 0; i < tabsBtn1.length; i++) {
//     tabsBtn1[i].classList.remove('tabs__nav--active');
//   }
// }
// function removeClassContent1() {
//   for(let i = 0; i < tabsContent1.length; i++) {
//     tabsContent1[i].classList.remove('tabs__content--active');
//   }
// }

// for(let i = 0; i < tabsBtn1.length; i++) {

//   tabsBtn1[i].addEventListener('click', () => {
//       removeClassBtn1();
//       tabsBtn1[i].classList.add('tabs__nav--active');

//   });
// }

// tabsBtn1[0].addEventListener('click', () => {
//   removeClassContent1();
//   document.getElementById('tab1-1').classList.add('tabs__content--active');

// });
// tabsBtn1[1].addEventListener('click', () => {
//   removeClassContent1();
//   document.getElementById('tab1-2').classList.add('tabs__content--active');

// });
// tabsBtn1[2].addEventListener('click', () => {
//   removeClassContent1();
//   document.getElementById('tab1-3').classList.add('tabs__content--active');

// });


// const tabsBtn2 = document.querySelectorAll('.tabs__nav--btn2');
// const tabsContent2 = document.querySelectorAll('.tabs__content--item2');

// //  remove 
// function removeClassBtn2() {
//   for(let i = 0; i < tabsBtn2.length; i++) {
//     tabsBtn2[i].classList.remove('tabs__nav--active');
//   }
// }
// function removeClassContent2() {
//   for(let i = 0; i < tabsContent2.length; i++) {
//     tabsContent2[i].classList.remove('tabs__content--active');
//   }
// }

// for(let i = 0; i < tabsBtn1.length; i++) {

//   tabsBtn2[i].addEventListener('click', () => {
//       removeClassBtn2();
//       tabsBtn2[i].classList.add('tabs__nav--active');

//   });
// }

// tabsBtn2[0].addEventListener('click', () => {
//   removeClassContent2();
//   document.getElementById('tab2-1').classList.add('tabs__content--active');

// });
// tabsBtn2[1].addEventListener('click', () => {
//   removeClassContent2();
//   document.getElementById('tab2-2').classList.add('tabs__content--active');

// });
// tabsBtn2[2].addEventListener('click', () => {
//   removeClassContent2();
//   document.getElementById('tab2-3').classList.add('tabs__content--active');
//   console.log('fas');
// });




//  Portfolio images modal


const overlaySearch = document.querySelectorAll('.overlay__search');
const modalImg = document.querySelector('.modal-img');
console.log(overlaySearch);
const closeModalImg = document.querySelector('#close-modal-img');
console.log(modalImg);

const modalImgItem = document.querySelector('#modal-img__item');



for(let i = 0; i < overlaySearch.length; i++) {
  overlaySearch[i].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('fd');
    const overlay= overlaySearch[i].parentElement;
    console.log(overlay);
    const img = overlay.previousElementSibling;
    console.log(img);
    const src = img.getAttribute('src')
    console.log(src);

    modalImg.style.display = "block";
    modalImgItem.setAttribute('src', src);

  });
}

// closeModalImg.addEventListener('click', () => {
//   modalImg.style.display = 'none';
// });




$(document).ready(function() {
    console.log('fs');
  $('.filter-btn').click(function(e) {
    // console.log('fa');
    e.preventDefault();
    console.log($(this));
    let value = $(this).attr('data-filter');
    console.log(value);
    
    // console.log(value);
    if (value === 'all') {
      $('.filter-img').show('1000');
    }
    else {
      $('.filter-img').not('.' + value).hide('3000');
      $('.filter-img').filter('.' + value).show('3000');
    }
    $('.filter-btn').not($(this)).removeClass('btn-primary');
    $('.filter-btn').not($(this)).addClass('btn-default');
    // $('.filter-btn').not($(this)).removeClass('btn-primary');
    $(this).addClass('btn-primary');

  });




});



//  Close Alert Box



const btnCloseAlertBox = document.querySelectorAll('.alert-item__btn-close');

console.log(btnCloseAlertBox);

for(let i = 0; i < btnCloseAlertBox.length; i++) {
  btnCloseAlertBox[i].addEventListener('click', (e) => {
    btnCloseAlertBox[i].parentElement.style.display = 'none';
  })  
}



//   Slider testi 


$('.owl-carousel-testi').owlCarousel({
  loop: true,
  margin:0,
  nav:true,
  dots: false,
  responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
      
  }
});




// Slider Home Page


const listImgSliderHome = document.querySelectorAll('.img-item');

const listDotsImgHome = document.querySelectorAll('.dots ul li a');

console.log(listImgSliderHome);

function removeActiveDots() {
  for(let i = 0; i < listDotsImgHome.length; i++) {
    listDotsImgHome[i].classList.remove('active');
  }
}

function removeActiveImgSliderHome() {
  for(let i = 0; i < listImgSliderHome.length; i++) {
    listImgSliderHome[i].classList.remove('img-item--active');
  }
  

}


for( let i = 0; i < listDotsImgHome.length; i++) {
  listDotsImgHome[i].addEventListener('click', (e)=> {
    e.preventDefault();
    removeActiveDots();
    listDotsImgHome[i].classList.add('active');

    removeActiveImgSliderHome();
    listImgSliderHome[i].classList.add('img-item--active');

  });
}