//  intro section
      // JavaScript for Intersection Observer
      document.addEventListener('DOMContentLoaded', function () {
        let options = {
            threshold: 0.3 // Adjust this threshold based on your needs
        };

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe each section
        document.querySelectorAll('.content-section').forEach(section => {
            observer.observe(section);
        });
    });


    // for web services that we provide

    document.addEventListener('DOMContentLoaded', function () {
        const webTrack = document.querySelector('.web-carousel-track');
        const webLeftButton = document.querySelector('.web-carousel-button.left');
        const webRightButton = document.querySelector('.web-carousel-button.right');
        const webCards = document.querySelectorAll('.web-service-card');
        
        let webCurrentSlide = 0;
        const webSlideWidth = webCards[0].getBoundingClientRect().width;

        // Arrange the cards next to one another
        webCards.forEach((card, index) => {
            card.style.left = webSlideWidth * index + 'px';
        });

        // Move to the next slide
        webRightButton.addEventListener('click', () => {
            if (webCurrentSlide < webCards.length - 1) {
                webCurrentSlide++;
                webTrack.style.transform = 'translateX(-' + webSlideWidth * webCurrentSlide + 'px)';
            }
        });

        // Move to the previous slide
        webLeftButton.addEventListener('click', () => {
            if (webCurrentSlide > 0) {
                webCurrentSlide--;
                webTrack.style.transform = 'translateX(-' + webSlideWidth * webCurrentSlide + 'px)';
            }
        });
    });


    // case study

    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const fullContent = this.previousElementSibling;
            const summary = fullContent.previousElementSibling;
    
            if (fullContent.style.display === 'none' || !fullContent.style.display) {
                fullContent.style.display = 'block';
                summary.style.display = 'none';
                this.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                summary.style.display = 'block';
                this.textContent = 'Continue Reading';
            }
        });
    });
    