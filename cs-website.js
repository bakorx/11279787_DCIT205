 let currentSlide = 0;
     const slides = document.querySelectorAll('.slide');
        
         function showSlide(index) {
            if (index < 0) {
                    currentSlide = slides.length - 1;
             } else if (index >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
               }
        
                
             slides.forEach((slide) => {
                slide.style.display = 'none';
            });
        
               
            slides[currentSlide].style.display = 'block';
            }
        
            function prevSlide() {
                showSlide(currentSlide - 1);
            }
        
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
        
            
            showSlide(currentSlide);

            function openPage(pageURL) {
                
                window.open(pageURL, '_blank');
            }
        