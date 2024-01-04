$(document).ready(function() {
    const picsumEndpoint = 'https://picsum.photos/v2/list?page=1&limit=1000';
    let picsumIds = [];
    let currentImageIndex = 0;

    const fetchPicsumIds = async () => {
        try {
            const response = await fetch(picsumEndpoint);
            const data = await response.json();
            picsumIds = data.map(item => item.id);
        } catch (error) {
            console.error('Error fetching Picsum IDs:', error);
        }
    };

    fetchPicsumIds();

    const handleImageId = function (imageId, email) {
        const slider = $('.slider');
        const newImage = $(`<img src="https://picsum.photos/id/${imageId}/600/300" alt="Lorem Picsum Image" data-email="${email}">`);
        slider.append(newImage);

        // Animate the new image to slide in from the right
        newImage.animate({opacity: 1, marginRight: 0}, 800);

        console.log(`Image with ID ${imageId} assigned to email: ${email}`);
    }

    const generateImage = function (email) {
        if (picsumIds.length === 0) {
            console.error('No Picsum IDs available. Please try again later.');
            return;
        }

        const imageId = picsumIds[currentImageIndex];
        handleImageId(imageId, email);

        currentImageIndex = (currentImageIndex + 1) % picsumIds.length;
    };

    $('#emailForm').submit(function(event) {
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
});









