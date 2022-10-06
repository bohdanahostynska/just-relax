$ ('.about__items > div') .on ('click',function(){
    $(this).children('.about__icon').toggleClass('about-rotate-icon');
    $(this).parent('.about__items').toggleClass('change-color');
    $(this).next('.about__text').slideToggle(300)
})

$ ('.features__items > div') .on ('click',function(){
    $(this).children('.features__icon').toggleClass('features-scale-icon');
    $(this).parent('.features__items').toggleClass('change--colors');
    $(this).next('.features__newtext').slideToggle(300);

})

$ ('.tools__content > div') .on ('click',function(){
    $(this).children('.tools__title').toggleClass('change--color-green');
    $(this).children('.tools__title').toggleClass('change--color-aqua');

})