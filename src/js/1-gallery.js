import SimpleLightbox from 'simplelightbox';
console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';


const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];



// Розмітка елементів галереї

const elem = document.querySelector('.gallery');

const result = images.map((image) => {
    const liElem = document.createElement('li');
    const linkElem = document.createElement('a');
    const imgElem = document.createElement('img');
    
    liElem.classList.add("gallery-item");

    imgElem.classList.add("gallery-image");
    imgElem.src = image.preview;
    imgElem.alt = image.description;
    imgElem.title = imgElem.alt;

    linkElem.classList.add("gallery-link");
    linkElem.href = image.original;

    liElem.appendChild(linkElem);
    linkElem.appendChild(imgElem);
    return liElem;
})

elem.append(...result);

console.log(elem);


// Опції для SimpleLightbox, включаючи затримку перед відображенням підпису
const options = {
    captionDelay: 250, // Затримка в мілісекундах
};


// Створюємо екземпляр SimpleLightbox з опціями
let gallery = new SimpleLightbox('.gallery a', options);

//Method-1
    // var lightbox = new SimpleLightbox('.gallery a', {  /* options */ });
    // function onElemClick(e) {
    //     if (e.target.nodeName === "IMG") {
    //         e.preventDefault(); //зупиняє дію браузера за замовчуванням - скачування картинки при кліку на неї;
    //     }
    // }


// Method-2
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	 if (e.target.nodeName === "IMG") {
//          e.preventDefault();//зупиняє дію браузера за замовчуванням - скачування картинки при кліку на неї;
        
//     }
// });

// default = fadeSpeed = 300 => 250; ???HOW TO CHANGE???




