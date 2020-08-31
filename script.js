const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
const count = 10;

const apiKey = 'TGl5pQoTXyL6ZjPjxdVnIsk7nm2RIciiVJ_b3SHF8cA'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//function to set attributes
function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}

//Adding photos as elements
function displayPhotos(){
    photosArray.forEach((photo) => {
        // create the link element
        const anchor = document.createElement('a');
        setAttributes(anchor,{
            href: photo.links.html,
            target: '_blank'
        })

        // image link
        const image = document.createElement('img');
        setAttributes(image,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        // Input in html
        anchor.appendChild(image);
        imageContainer.appendChild(anchor);
    });
}

async function getPhoto(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // error methods
    }
}

// on load
getPhoto();