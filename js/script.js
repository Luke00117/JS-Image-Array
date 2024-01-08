
$(document).ready(function () {

    $('.img-gen').addClass('active');
    
    

    var $mainGallery = $('.gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.thumbnails',
        nextArrow: $('.custom-next-main'),
        prevArrow: $('.custom-prev-main')
    });

    var $assignedGallery = $('.assigned-images-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows: true,
        asNavFor: '.assigned-thumbnails',
        nextArrow: $('.custom-next-assigned'),
        prevArrow: $('.custom-prev-assigned')
    });

    var $thumbnails = $('.thumbnails').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });

    var $assignedThumbnails = $('.assigned-thumbnails').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.assigned-images-gallery',
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });

    
    


    

    $('.custom-next-main').on('click', function () {
        var newImageUrl = 'https://picsum.photos/720/300?random=' + Math.floor(Math.random() * 1000);
        $mainGallery.slick('slickAdd', '<div class="image-container"><img src="' + newImageUrl + '"></div>');
        $mainGallery.slick('slickNext');
        $thumbnails.slick('slickAdd', '<div class="thumbnail"><img src="' + newImageUrl + '"></div>');
        
    });

    $('.custom-prev-main').on('click', function () {
        $mainGallery.slick('slickPrev');
    });

    $('.custom-next-assigned').on('click', function () {
        $assignedGallery.slick('slickNext');
    });

    $('.custom-prev-assigned').on('click', function () {
        $assignedGallery.slick('slickPrev');
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
        var currentImageUrl = $mainGallery.find('.slick-current img').attr('src');
        $assignedGallery.slick('slickAdd', '<div class="image-container"><img src="' + currentImageUrl + '" data-email="' + email + '"></div>');
        $assignedThumbnails.slick('slickAdd', '<div class="thumbnail"><img src="' + currentImageUrl + '" data-email="' + email + '"></div>');

        console.log(`Image assigned to email: ${email}`);
        toastr.success('Image Assigned', {
            tapToDismiss: true,
            progressBar: true,
            timeOut: 3000,
        });
    }

    function addAssignedImage(imageUrl) {
        var assignedImageContainer = $(".assigned-images-gallery");
        var assignedThumbnails = $('.assigned-thumbnails')
        assignedImageContainer.append('<div class="image-container"><img src="' + imageUrl + '" alt="Assigned Image"></div>');
        assignedThumbnails.append('<div class="assigned-thumbnail"><img src="' + imageUrl + '" alt="Assigned Image"></div>');
    }

   
    const assigned = $('.assigned-images-container');
    const title = $('.img-gen');
    const title2 = $('.ass-img');
    const controls = $('.controls');
    const assignControls = $('.assigned-controls');
    const thumbnails = $('.thumbnails');
    const assignedThumbnails = $('.assigned-thumbnails');
    
    
    $('.img-gen').on('click', function () {
    assigned.removeClass('active').hide();
    title.addClass('active');
    title2.removeClass('active');
    $mainGallery.show();
    controls.show();
    assignControls.hide();
    thumbnails.show(); 
    assignedThumbnails.hide()

});

    $('.ass-img').on('click', function () {
        $assignedGallery.slick('slickGoTo', 1);
        $assignedThumbnails.slick('slickGoTo', 1);
      
        $mainGallery.hide();
        assigned.addClass('active').show();
        title.removeClass('active');
        title2.addClass('active');
        controls.hide();
        assignControls.addClass('active').show();
        thumbnails.hide();
        assignedThumbnails.show();
        
        
    });
});



