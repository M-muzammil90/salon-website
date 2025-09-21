
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

        // Service Category Filtering
        const categoryButtons = document.querySelectorAll('.category-btn');
        const serviceCards = document.querySelectorAll('.service-card');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get category to filter
                const category = button.getAttribute('data-category');
                
                // Show/hide services based on category
                serviceCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Sticky header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });