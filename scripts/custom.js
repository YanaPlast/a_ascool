$(document).ready(function() {

// Кнопка-бургер в меню

$('.header__burger').click(function(event) {
	$('.header__burger,.header__mobile').toggleClass('active');
	$('body').toggleClass('lock');
    $('.header').toggleClass('fix');
});

// =========  Бегущая строка
$('.marquee').marquee({
    duration: 11000,
    gap: 15,
    delayBeforeStart: 0,
    direction: 'left',
    startVisible: true,
    duplicated: true
});

// Слайдер наша команда - превью (навигационный слайд)

let swiper = new Swiper('.thumbs-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// Слайдер с фамилиями и крупными фото

const swiperBig = new Swiper('.big-photo-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    thumbs: {
        swiper: swiper,
      },
  
  });

  // Кнопка "читать больше"

  $('button.read-more-button').on('click', function () {
    $(this).toggleClass('pushed');
    $(this).prev('.team__text').find('.mobile-hide').toggleClass('mob-visible');
    if ($(this).prev('.team__text').find('.mobile-hide').hasClass('mob-visible')) {
        $(this).text('Свернуть');
        // $(this).siblings('.short-mobile .text .title-container').css('border-bottom', '2px solid #e5e5e5');
    } else {
        $(this).text('Читать больше');
        // $(this).siblings('.short-mobile .text .title-container').css('border-bottom', 'none');
    }
});

// Список адресов в блоке Как нас найти
select();

// Показываем разные карты в зависимости от выбранного адреса

$('.select__item').click(function(event){
	var i=$(this).data('filter');
    var mapItems = $('.location__map');
    mapItems.each(function() {
        $(this).removeClass('visible');     
    })
    $('.location__map.' + i).addClass('visible');
});

// Слайдер с адресами на мобильных версиях

const departmentsSwiper = new Swiper('.departments__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 0,
    allowTouchMove: false,
    breakpoints: {
        991.98: {
            slidesPerView: 4,
            spaceBetween: 0,
            allowTouchMove: false,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: true,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                },
        },
    }      
});

// Попап


const gallerySwiper = new Swiper('.gallery-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
});



});


  