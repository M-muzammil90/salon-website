
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