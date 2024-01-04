// $(document).ready(function() {
//     const picsumEndpoint = 'https://picsum.photos/v2/list?page=1&limit=1000';
//     let picsumIds = [];
//     let currentImageIndex = 0;

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
//         const gallery = $('.gallery');
//         const newImage = $(`<img src="https://picsum.photos/id/${imageId}/600/300" alt="Lorem Picsum Image" data-email="${email}">`);
//         gallery.append(newImage);

//         // Animate the new image to slide in from the right
//         newImage.animate({opacity: 1, marginRight: 0}, 800);

//         console.log(`Image with ID ${imageId} assigned to email: ${email}`);
//     }

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


// $(document).ready(function () {
//         $('.gallery').slick({
//             'setting-name': 'setting-value'
//   });
// });;




// $(document).ready(function () {
//     const picsumEndpoint = 'https://picsum.photos/v2/list?page=1&limit=1000';
//     let picsumData = [];
//     let currentImageIndex = 0;

//     const fetchPicsumData = async () => {
//         try {
//             const response = await fetch(picsumEndpoint);
//             picsumData = await response.json();
//         } catch (error) {
//             console.error('Error fetching Picsum data:', error);
//         }
//     };

//     fetchPicsumData();

//     const handleImageId = function (imageId, email) {
//         const gallery = $('.gallery');
//         const thumbnailsContainer = $('.thumbnails');

//         const newImage = $(`<div><img src="https://picsum.photos/id/${imageId}/600/400" alt="Lorem Picsum Image" data-email="${email}"></div>`);
//         const thumbnail = $(`<div class="thumbnail"><img src="https://picsum.photos/id/${imageId}/100/50" alt="Thumbnail"></div>`);

//         // Clear existing thumbnails
//         thumbnailsContainer.html('');

//         // Add thumbnails for all previous images, limiting to 6
//         picsumData.slice(Math.max(currentImageIndex - 6, 0), currentImageIndex).forEach((item, index) => {
//             if (index < 6) {
//                 const thumbnail = $(`<div class="thumbnail"><img src="https://picsum.photos/id/${item.id}/100/50" alt="Thumbnail"></div>`);
//                 thumbnailsContainer.append(thumbnail);
//             }
//         });

//         // Add the new thumbnail
//         thumbnailsContainer.append(thumbnail);

//         // Clear existing images and add the new image to the gallery
//         gallery.html('').append(newImage);

//         // Animate the new image to slide in from the right
//         newImage.animate({ opacity: 1, marginRight: 0 }, 800);

//         console.log(`Image with ID ${imageId} assigned to email: ${email}`);
//     };

//     const generateImage = function (email) {
//         if (picsumData.length === 0) {
//             console.error('No Picsum data available. Please try again later.');
//             return;
//         }

//         const imageId = picsumData[currentImageIndex].id;
//         handleImageId(imageId, email);

//         // Uncomment the line below if you want to prevent multiple images on subsequent button clicks
//         // picsumData.splice(currentImageIndex, 1); // Remove the current image from the array

//         currentImageIndex = (currentImageIndex + 1) % picsumData.length;
//     };

//     // Click event handler for thumbnails
//     $('.thumbnails').on('click', '.thumbnail', function () {
//         const index = $(this).index();
//         $('.gallery').slick('slickGoTo', index);
//     });

//     $('#emailForm').submit(function (event) {
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

//     $('.gallery').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         fade: true,
//         asNavFor: '.thumbnails',
//         draggable: false
//     });

//     $('.thumbnails').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         asNavFor: '.gallery',
//         dots: true,
//         arrows: true,
//         centerMode: true,
//         focusOnSelect: true,
//         variableWidth: true,
//         draggable: false // Disable draggable effect
//     });
// });




$(document).ready(function () {
    const picsumEndpoint = 'https://picsum.photos/v2/list?page=1&limit=1000';
    let picsumData = [];
    let currentImageIndex = 0;

    const fetchPicsumData = async () => {
        try {
            const response = await fetch(picsumEndpoint);
            picsumData = await response.json();
        } catch (error) {
            console.error('Error fetching Picsum data:', error);
        }
    };

    fetchPicsumData();

    const handleImageId = function (imageId, email) {
    const gallery = $('.gallery');
    const thumbnailsContainer = $('.thumbnails');

    const newImage = $(`<div><img src="https://picsum.photos/id/${imageId}/600/400" alt="Lorem Picsum Image" data-email="${email}"></div>`);
    const thumbnail = $(`<div class="thumbnail"><img src="https://picsum.photos/id/${imageId}/100/50" alt="Thumbnail"></div>`);

    // Clear existing thumbnails
    thumbnailsContainer.html('');

    // Add thumbnails for all previous images, limiting to 6
    picsumData.slice(Math.max(currentImageIndex - 6, 0), currentImageIndex).forEach((item, index) => {
        if (index < 6) {
            const thumbnail = $(`<div class="thumbnail"><img src="https://picsum.photos/id/${item.id}/100/50" alt="Thumbnail"></div>`);
            thumbnailsContainer.append(thumbnail);
        }
    });

    // Add the new thumbnail
    thumbnailsContainer.append(thumbnail);

    // Add the new image to the gallery without clearing existing ones
    gallery.append(newImage);

    // Animate the new image to slide in from the right
    newImage.animate({ opacity: 1, marginRight: 0 }, 800);

    console.log(`Image with ID ${imageId} assigned to email: ${email}`);
};

    const generateImage = function (email) {
        if (picsumData.length === 0) {
            console.error('No Picsum data available. Please try again later.');
            return;
        }

        const imageId = picsumData[currentImageIndex].id;
        handleImageId(imageId, email);

        // Uncomment the line below if you want to prevent multiple images on subsequent button clicks
        // picsumData.splice(currentImageIndex, 1); // Remove the current image from the array

        currentImageIndex = (currentImageIndex + 1) % picsumData.length;
    };

    // Click event handler for thumbnails
    $('.thumbnails').on('click', '.thumbnail', function () {
        const index = $(this).index();
        $('.gallery').slick('slickGoTo', index);
    });

    $('#emailForm').submit(function (event) {
        event.preventDefault();
        const emailInput = $('#email');
        const userEmail = emailInput.val().trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(userEmail)) {
            generateImage(userEmail);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.thumbnails',
        draggable: false
    });

    $('.thumbnails').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: false,
        draggable: false // Disable draggable effect
    });
});




