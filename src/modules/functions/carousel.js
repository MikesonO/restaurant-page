  //Moving Carousel Function
  export function movingCarousel(){
    const imageWrapper = document.querySelector(".image-wrapper");
    const carouselImages = document.querySelectorAll(".image-wrapper > *");
    const carouselImagesLength = carouselImages.length;
    const perView = 1;
    let totalScroll = 0;

    //Changes Position Of Image;
    const carouselItem2 = document.querySelector(".image-wrapper div:nth-child(2) .carousel-image");
    const carouselItem3 = document.querySelector(".image-wrapper div:nth-child(3) .carousel-image");
    carouselItem2.style.cssText = "position: relative; bottom: 30px;";
    carouselItem3.style.cssText = "position: relative; top: 30px;";
  
    imageWrapper.style.setProperty("--per-view", perView);
    for (let i = 0; i < perView; i++){
      imageWrapper.insertAdjacentHTML("beforeend", carouselImages[i].outerHTML)
    }
  
    let autoScroll = setInterval(scrolling, 3000)
  
    function scrolling(){
      totalScroll++;
      if (totalScroll == carouselImagesLength + 1){
        clearInterval(autoScroll)
        totalScroll = 1;
        imageWrapper.style.transition = "0s";
        imageWrapper.style.left = "0";
        autoScroll = setInterval(scrolling, 3000);
      }
      const widthEl = document.querySelector(".image-wrapper > :first-child").offsetWidth + 24;
      imageWrapper.style.left = `-${totalScroll * widthEl}px`;
      imageWrapper.style.transition = ".3s";
      
  
    }
  }
