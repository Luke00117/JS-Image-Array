// $(document).ready(function() {
//     const picsumEndpoint = 'https://picsum.photos/v2/list?page=1&limit=1000';
//     let picsumIds = [];
//     let currentImageIndex = 0;
//     const generateRandomImageUrl = function () {
//     // You can modify this function to generate a dynamic image URL based on your requirements.
//     // For example, you can use an API to fetch random images or generate URLs with dynamic parameters.
//     return `https://picsum.photos/600/300?random=${Math.random()}`;
// };

//     const fetchPicsumIds = async () => {
//         try {
//             const response = await fetch(picsumEndpoint);
//             const data = await response.json();
//             picsumIds = data.map(item => item.id);
//         } catch (error) {
//             console.error('Error fetching Picsum IDs:', error);
//         }
//     };

//     fetchPicsumIds();

//     const handleImageId = function (imageId, email) {
//     const slider = $('.gallery');
//     const currentSlideIndex = slider.slick('slickCurrentSlide');

//     const newImage = $(`<div class="image-container"><img src="" alt="Random Image" data-email="${email}"></div>`);

//     // Dynamically set the source of the newly added image
//     const imageUrl = generateRandomImageUrl();
//     newImage.find('img').attr('src', imageUrl);

//     // Add the new image to the slider
//     slider.slick('slickAdd', newImage, null, function () {
//         // Animate the new image to slide in from the right
//         newImage.animate({ opacity: 1, marginRight: 0 }, 800);

//         // Get the index of the newly added slide
//         const newIndex = currentSlideIndex + 1;

//         // Slide directly to the new index without cycling through intermediate slides
//         slider.slick('slickGoTo', newIndex);
//     });

//     console.log(`Image with ID ${imageId} assigned to email: ${email}`);
// };

//     const generateImage = function (email) {
//         if (picsumIds.length === 0) {
//             console.error('No Picsum IDs available. Please try again later.');
//             return;
//         }

//         const imageId = picsumIds[currentImageIndex];
//         handleImageId(imageId, email);

//         currentImageIndex = (currentImageIndex + 1) % picsumIds.length;
//     };

//     $('#emailForm').submit(function(event) {
//         event.preventDefault();
//         const emailInput = $('#email');
//         const userEmail = emailInput.val().trim();

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (emailRegex.test(userEmail)) {
//             generateImage(userEmail);
//         } else {
//             alert('Please enter a valid email address.');
//         }
//     });
// });










$(document).ready(function () {
    // Initialize Slick Carousel
    var $gallery = $('.gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.custom-next'),
        prevArrow: $('.custom-prev')
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
    }
});





