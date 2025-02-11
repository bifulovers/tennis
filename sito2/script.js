function initializeInstagramSlider() {
    let instagramPosts = [
      "https://www.instagram.com/p/DDkRDzxNHwb/",
      "https://www.instagram.com/p/DF3E3tMtRGk/",
      "https://www.instagram.com/p/DFaGrYxCjsh/",
      "https://www.instagram.com/p/DD7Xkqwt3DW/",
      "https://www.instagram.com/p/DDzq6gbtqBR/",
      "https://www.instagram.com/p/DDmgFlEt7eT/"
    ];
    
    let sliderContainer = $('.instagram-slider');
    instagramPosts.forEach(post => {
      sliderContainer.append(`
        <div class="slider-item">
          <div class="instagram-container">
            <blockquote class="instagram-media" data-instgrm-permalink="${post}" data-instgrm-version="14"></blockquote>
          </div>
        </div>
      `);
    });
    
    setTimeout(() => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }, 1000);
    
    sliderContainer.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: true,
      swipe: true,
      touchMove: true,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2, swipe: true, touchMove: true } },
        { breakpoint: 576, settings: { slidesToShow: 1, arrows: true, swipe: true, touchMove: true } }
      ]
    });
  }