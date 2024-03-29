$('#section1 .container').slick({
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



$('#section4 .workImg').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: false,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: jQuery('.backArrow1'),
  nextArrow: jQuery('.nextArrow1'),
});



$(document).ready(function () {
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

  slider.each(function (index, element) {
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
      // adaptiveHeight: true
    })
    .on('afterChange', onSliderAfterChange)
    .on('wheel', onSliderWheel);

});


$('.wwdImg').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.tabBox'
});

$('.tabBox').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.wwdImg',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// Triggering slider change on hover
$('.tabBox').on('mouseover', '.slick-slide', function () {
  var index = $(this).data('slick-index');
  $('.wwdImg').slick('slickGoTo', index);
});


$('#section6 .fbSlider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
  arrows: true,
  dots: true,
  swipeToSlide: true,
  focusOnSelect: true,
  dotsClass: 'vertical-dots',
  prevArrow: jQuery('.backArrow'),
  nextArrow: jQuery('.nextArrow'),
});



// *********** Counter Number ****************



document.addEventListener("DOMContentLoaded", function () {
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






// *************************************************
// ******************** About us *******************
// *************************************************

// *************** Main Slider ******************


$(document).ready(function () {
  const slider = $('.aboutMain');

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

  slider.each(function (index, element) {
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
      arrows: false,
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      vertical: true,
      verticalSwiping: true,
    })
    .on('afterChange', onSliderAfterChange)
    .on('wheel', onSliderWheel);

    


});


// ************** FAQs *********************


	
const accordionItems = document.querySelectorAll('.faqs_repeater_Box');

// Add click event listener to each accordion item
accordionItems.forEach((item) => {
    item.addEventListener('click', function () {
        toggleAccordion2(this); // 'this' refers to the clicked item
    });
});

// Function to toggle accordion
function toggleAccordion2(element) {
    const item = element;

    // Toggle 'active' class on the clicked item
    item.classList.toggle('active');

    // Toggle 'active' class on the content
    const content = item.querySelector('.faq_answer_Box');
    content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : '0';

    // If you want to close other items when a new one is clicked
    const allItems = document.querySelectorAll('.faqs_repeater_Box');
    allItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq_answer_Box').style.maxHeight = '0';
        }
    });
}





// ******************** Testimonial Slide *************************

$('#about6 .reviewPart').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '#about6 .imgpart',
  prevArrow: jQuery('.backArrow'),
  nextArrow: jQuery('.nextArrow'),
});
$('#about6 .imgpart').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '#about6 .reviewPart',
  dots: false,
  arrows: false,
  centerMode: true,
    centerPadding: '0',
  focusOnSelect: true
});


