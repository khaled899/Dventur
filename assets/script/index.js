// toogle navbar 
let iconBar = document.querySelector('.icon')
let iconBarSvg = document.querySelector('.icon i')
let list = document.querySelector('.list')
// console.log(iconBar ,list);

iconBar.addEventListener('click' ,function(){
    list.classList.toggle('toogleBar')
    iconBarSvg.classList.toggle('fa-xmark')
});


// change navbar when scroll 
let header = document.querySelector('header') ;
let Heading =document.querySelector('.welcome-msg h1').offsetTop
let windowScroll
window.addEventListener('scroll' ,function(){
     windowScroll =window.scrollY
    if (windowScroll > Heading){
        header.style.backdropFilter =`blur(5px)`
    }
    else {
        
        header.style.backdropFilter =`blur(0px)`
    }
})

// about imges slider 

let myImages = Array.from(document.querySelectorAll('.aboutItems img'));
let imagesContainer = document.querySelector('.imagesContainer');
let imageBox = document.querySelector('.imageBox');

// buttons 
let closeBtn =document.getElementById('colseBtn')
let prevBtn =document.getElementById('prevBtn')
let nextBtn =document.getElementById('nextBtn')

let currentIndex ;

for (let i = 0; i < myImages.length; i++) {
    myImages[i].addEventListener('click' , function(e){
        // console.log(e.target.getAttribute('src'));
        imagesContainer.style.display = `flex`;
        let myImageSrc = e.target.getAttribute('src');
        // console.log(myImages.indexOf(e.target));
        currentIndex =myImages.indexOf(e.target)
        imageBox.style.background =`url(${myImageSrc})`
    })
}

function nextSlider(){
    currentIndex++
    // console.log(currentIndex++);
    if(currentIndex > myImages.length -1){
        currentIndex=0
    }
    let myNewImageSrc =myImages[currentIndex].getAttribute('src')
    imageBox.style.background =`url(${myNewImageSrc})`
    // console.log(myNewImageSrc);
}

function prvSlider (){
    currentIndex --;
    if( currentIndex <0){
        currentIndex = myImages.length -1
    }
    let myNewImageSrc =myImages[currentIndex].getAttribute('src')
    imageBox.style.background =`url(${myNewImageSrc})`
}

prevBtn.addEventListener('click' , prvSlider)

nextBtn.addEventListener('click' ,nextSlider)

closeBtn.addEventListener('click' ,function(){
    imagesContainer.style.display = `none`

})


// rondom Numbers 
let subscription =document.querySelectorAll('.subscription h1');
let subscriptionContainer =document.querySelector('.subscription').offsetTop;
// console.log(subscriptionContainer);

for (let i = 0; i < subscription.length; i++) {
    let random = Math.floor(Math.random()*100)
    subscription[i].append(random)
}


