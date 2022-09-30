$ ('.about__items > div') .on ('click',function(){
    $(this).children('.about__icon').toggleClass('about-rotate-icon');
    $(this).parent('.about__items').toggleClass('change-color');
    $(this).next('.about__text').slideToggle(300)
})