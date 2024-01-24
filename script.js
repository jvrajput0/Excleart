$('.firstSection .container').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: jQuery('.backArrow'),
    nextArrow: jQuery('.nextArrow'),
});


// $('.mainSection').slick({
//     dots: false,
//     infinite: false,
//     speed: 1000,
//     fade: false,
//     slidesToShow: 1,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     vertical: true,
//     verticalSwiping: true,
    // prevArrow: jQuery('.backArrow'),
    // nextArrow: jQuery('.nextArrow'),
// });

$(document).ready(function() {
  const slider = $('.mainSection');
  
  function onSliderAfterChange(event, slick, currentSlide) {
    $(event.target).data('current-slide', currentSlide);
  }
  
  function onSliderWheel(e) {
    var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data('current-slide') || 0;
    
    if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
    ) {
      return;
    }
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick('slickPrev');
    } else {
      $currentSlider.slick('slickNext');
    }
  }
  
  slider.each(function(index, element) {
    var $element = $(element);
    // set the length of children in each loop
    // but the better way for performance is to set this data attribute on the div.slider in the markup
    $element.data('slider-length', $element.children().length);
  })
  .slick({
        dots: false,
    infinite: false,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    vertical: true,
    verticalSwiping: true,
  })
  .on('afterChange', onSliderAfterChange)
  .on('wheel', onSliderWheel);
});


// *********** Counter Number ****************



document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const start = parseInt(counter.closest('.counter').getAttribute("data-start"));
    const stop = parseInt(counter.closest('.counter').getAttribute("data-stop"));
    const duration = 2000; // Total duration of the animation in milliseconds
    const step = Math.max(1, Math.ceil((stop - start) / (duration / 10))); // Number of increments per 10 milliseconds
    let currentCount = start;

    const updateCount = () => {
      currentCount += step;
      if (currentCount <= stop) {
        counter.innerText = currentCount;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = stop;
      }
    };

    updateCount();
  });
});







