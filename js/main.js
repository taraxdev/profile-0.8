//navigation

let nav_offset_top = $('.header_area').height();

function navbarFixed() {
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll>= nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
        
    }
}

navbarFixed();

//scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.site-title h3',{delay: 200});
sr.reveal('.site-title h1',{delay: 300});
sr.reveal('.site-title h4',{delay: 400});
sr.reveal('.site-button',{delay: 400});
sr.reveal('.site-button',{delay: 400});
sr.reveal('.banner-image',{delay: 400});

sr.reveal('.home__social',{delay: 400});
sr.reveal('.about-image',{delay: 400});
sr.reveal('.app',{delay: 400});
sr.reveal('.paragraph',{delay: 400});

sr.reveal('.skills__icon',{delay: 400})


// Tippy JS
tippy('.col-md-4', {
    content: 'check out',
    arrow: false,
    theme: 'light-border',
    followCursor: 'default',
  });
