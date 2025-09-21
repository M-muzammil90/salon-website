    // Sticky navbar on scroll
      window.addEventListener('scroll', function() {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 50) {
              navbar.style.background = 'rgba(255, 255, 255, 0.98)';
              navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
          } else {
              navbar.style.background = 'white';
              navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
          }
      });
        // Team Slider
        $('.team-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Testimonial Slider
        $('.testimonial-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
        });
        // Animate stats counting
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            const duration = 2000; // 2 seconds
            const interval = 50; // update every 50ms
            const steps = duration / interval;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / steps;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + '+';
                    }
                }, interval);
            });
        }
        
        // Wait for page to load before animating stats
        window.addEventListener('load', animateStats);
