 // Mobile Navigation Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Smooth Scroll for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Testimonials Slider
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.testimonial-dot');
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = dot.getAttribute('data-index');
                
                // Hide all testimonials and deactivate all dots
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                // Show selected testimonial and activate dot
                testimonials[index].classList.add('active');
                dot.classList.add('active');
            });
        });
        
        // Auto rotate testimonials
        let currentIndex = 0;
        
        function rotateTestimonials() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            // Hide all testimonials and deactivate all dots
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show current testimonial and activate dot
            testimonials[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }
        
        // Set interval for auto rotation (every 5 seconds)
        const testimonialInterval = setInterval(rotateTestimonials, 5000);
        
        // Pause rotation when user interacts with dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                currentIndex = parseInt(dot.getAttribute('data-index'));
                
                // Resume rotation after 10 seconds
                setTimeout(() => {
                    testimonialInterval = setInterval(rotateTestimonials, 5000);
                }, 10000);
            });
        });

        // Back to Top Button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Form Submission
        const bookingForm = document.getElementById('bookingForm');
        
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const people = document.getElementById('people').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const tour = document.getElementById('tour').value;
            
            // Simple form validation
            if (name && email && tour) {
                // In a real website, this would send data to a server
                alert(`Thank you, ${name}! Your booking request for the ${document.getElementById('tour').options[document.getElementById('tour').selectedIndex].text} has been received. We'll contact you shortly at ${email} to confirm your reservation.`);
                bookingForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
        
        // Animate the bubble effect on scroll
        window.addEventListener('scroll', () => {
            const bubbles = document.querySelectorAll('.bubble');
            const scrollPos = window.scrollY;
            
            if (scrollPos < window.innerHeight) {
                bubbles.forEach(bubble => {
                    const speed = parseFloat(bubble.style.animationDuration) || 8;
                    bubble.style.transform = `translateY(${scrollPos / speed}px)`;
                });
            }
        });
        
        // Newsletter Form Submission
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                
                if (emailInput.value) {
                    alert(`Thank you for subscribing to our newsletter with ${emailInput.value}! You'll now receive our latest diving tips and exclusive offers.`);
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }


        // test

        function validateRecaptcha() {
    const response = grecaptcha.getResponse();
    const errorElement = document.getElementById('recaptcha-error');
    
    if (response.length === 0) {
        // ถ้าไม่มีการทำ reCAPTCHA ให้แสดงข้อความแจ้งเตือน
        errorElement.style.display = 'block';
        return false; // ยกเลิกการส่งฟอร์ม
    }
    
    // ถ้าทำ reCAPTCHA แล้ว
    errorElement.style.display = 'none';
    return true;
}