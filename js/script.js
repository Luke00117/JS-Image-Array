$(document).ready(function () {
    var $gallery = $('.gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.custom-next'),
        prevArrow: $('.custom-prev')
    });

    $('.thumbnails').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: true,
        focusOnSelect: true,
        variableWidth: true
    });

 
    $('.custom-next').on('click', function () {
        var newImageUrl = 'https://picsum.photos/720/300?random=' + Math.floor(Math.random() * 1000);

    
        $gallery.slick('slickAdd', '<div class="image-container"><img src="' + newImageUrl + '"></div>');

      
        $gallery.slick('slickNext');
    });


    $('.custom-prev').on('click', function () {
        $gallery.slick('slickPrev');
    });

  
    $('#emailForm').submit(function (event) {
        event.preventDefault();
        const emailInput = $('#email');
        const userEmail = emailInput.val().trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(userEmail)) {
            assignImage(userEmail);
        } else {
            alert('Please enter a valid email address.');
        }
    });


    function assignImage(email) {
        var currentSlide = $gallery.slick('slickCurrentSlide');
        var currentImage = $('.slick-slide').eq(currentSlide).find('img');

        currentImage.attr('data-email', email);

        console.log(`Image assigned to email: ${email}`);
        toastr.success('Image Assigned', {
            tapToDismiss:true,
            progressBar:true,
            timeOut: 3000,
        })
    }
});

	




