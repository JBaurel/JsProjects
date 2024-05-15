const imageContainer = document.getElementById('image_container');

const loading = document.getElementById('loading');

let PhotosArray = [];

const count =20;

const apiKey = 'VB0Y-j0oZOjmyXa7TJ6EPYTZLXkrBgwGEkgmYIL9-60';


const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function setAttribute(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos(){
    PhotosArray.forEach((photo) => {
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');

        setAttribute(item, {
            href: photo.links.html,
            target: '_blank'
        })

        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);

        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        item.appendChild(img);
        imageContainer.appendChild(item);  

    })

}

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        PhotosArray = await response.json();
        //console.log(PhotosArray);
        displayPhotos();
    }
    catch(error){
        alert(error.message);
    }
}


window.addEventListener('scroll', () =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos();
        loading.hidden = false;
        setTimeout(() => {
            loading.hidden = true;
        }, 3000);
    }
})


getPhotos();