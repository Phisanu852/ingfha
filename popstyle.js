// Function to create tour popup
function createTourPopup() {
    // Tour details data
    const tourDetails = {
        'reef': {
            title: 'Reef Explorer',
            description: 'Discover vibrant coral reefs teeming with exotic marine life. Perfect for all skill levels.',
            duration: '3-4 hours',
            maxPeople: '8 people',
            price: '$99 / person',
            includes: ['Professional diving instructor', 'All necessary equipment', 'Underwater photography', 'Light refreshments', 'Round-trip transportation'],
            schedule: ['Morning session: 8:00 AM - 12:00 PM', 'Afternoon session: 1:00 PM - 5:00 PM'],
            requirements: ['No previous diving experience required', 'Minimum age: 12 years', 'Basic swimming skills', 'Good physical health'],
            cancelPolicy: 'Free cancellation up to 24 hours before the tour. 50% charge for cancellations within 24 hours.',
            // เพิ่มข้อมูลรูปภาพหลายรูป
            images: [
                'images/tour1.jpg',
                'images/reef1.jpg',
                'images/reef2.jpg',
                'images/reef3.jpg'
            ]
        },
        'deep': {
            title: 'Deep Sea Adventure',
            description: 'Venture into the deep blue to explore underwater caves and hidden marine treasures.',
            duration: '5-6 hours',
            maxPeople: '6 people',
            price: '$149 / person',
            includes: ['Professional diving instructor', 'All necessary equipment', 'Underwater photography', 'Full meal and refreshments', 'Round-trip transportation', 'Safety briefing'],
            schedule: ['Full day tour: 9:00 AM - 3:00 PM'],
            requirements: ['Intermediate diving experience required', 'Minimum age: 16 years', 'Good swimming skills', 'Good physical health', 'Previous diving certification preferred'],
            cancelPolicy: 'Free cancellation up to 48 hours before the tour. 70% charge for cancellations within 48 hours.',
            // เพิ่มข้อมูลรูปภาพหลายรูป
            images: [
                'images/tour2.jpg',
                'images/deep1.jpg',
                'images/deep2.jpg',
                'images/deep3.jpg'
            ]
        },
        'shipwreck': {
            title: 'Shipwreck Expedition',
            description: 'Explore fascinating shipwrecks and the unique ecosystems that have formed around them.',
            duration: 'Full day',
            maxPeople: '4 people',
            price: '$199 / person',
            includes: ['Professional diving instructor', 'All necessary equipment', 'Underwater photography', 'Full meal and refreshments', 'Round-trip transportation', 'Advanced safety briefing', 'Dive log certification'],
            schedule: ['Full day expedition: 7:00 AM - 5:00 PM'],
            requirements: ['Advanced diving experience required', 'Minimum age: 18 years', 'Excellent swimming skills', 'Good physical health', 'Previous diving certification required'],
            cancelPolicy: 'Free cancellation up to 72 hours before the tour. No refund for cancellations within 72 hours.',
            // เพิ่มข้อมูลรูปภาพหลายรูป
            images: [
                'images/tour3.jpg',
                'images/shipwreck1.jpg',
                'images/shipwreck2.jpg',
                'images/shipwreck3.jpg'
            ]
        }
    };

    // Create popup container
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    document.body.appendChild(popupOverlay);

    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    popupOverlay.appendChild(popupContainer);

    // Add close button
    const closeButton = document.createElement('div');
    closeButton.className = 'popup-close';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    popupContainer.appendChild(closeButton);

    // Add popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContainer.appendChild(popupContent);

    // Close popup on click
    closeButton.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 300);
    });

    // Close popup when clicking outside
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 300);
        }
    });

    // Add click event to tour buttons
    const tourCards = document.querySelectorAll('.tour-card');
    tourCards.forEach(card => {
        // Add a view details button to each card
        const viewDetailsBtn = document.createElement('button');
        viewDetailsBtn.className = 'btn view-details-btn';
        viewDetailsBtn.textContent = 'View Details';
        card.querySelector('.tour-content').appendChild(viewDetailsBtn);
        
        viewDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get tour ID from closest tour-card
            const tourId = card.querySelector('.tour-title').textContent.toLowerCase().includes('reef') ? 'reef' : 
                         card.querySelector('.tour-title').textContent.toLowerCase().includes('deep') ? 'deep' : 'shipwreck';
            
            // Get tour details
            const tour = tourDetails[tourId];
            
            // สร้าง HTML สำหรับ image slider
            let sliderHTML = `<div class="popup-image-container">
                <div class="popup-image-slider">`;
            
            // เพิ่ม slides สำหรับแต่ละรูป
            tour.images.forEach(img => {
                sliderHTML += `<div class="popup-image-slide"><img src="${img}" alt="${tour.title}"></div>`;
            });
            
            sliderHTML += `</div>
                <div class="popup-image-nav">
                    <button class="popup-image-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="popup-image-next"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="popup-image-dots">`;
            
            // เพิ่ม dots สำหรับการนำทาง
            tour.images.forEach((_, index) => {
                sliderHTML += `<div class="popup-image-dot ${index === 0 ? 'active' : ''}"></div>`;
            });
            
            sliderHTML += `</div></div>`;
            
            // Create popup content
            popupContent.innerHTML = `
                <h2 class="popup-title">${tour.title}</h2>
                <div class="popup-info">
                    <div class="popup-image">
                        ${sliderHTML}
                    </div>
                    <div class="popup-details">
                        <p class="popup-description">${tour.description}</p>
                        <div class="popup-meta">
                            <div><i class="fas fa-clock"></i> <span>Duration:</span> ${tour.duration}</div>
                            <div><i class="fas fa-user-friends"></i> <span>Group Size:</span> Maximum ${tour.maxPeople}</div>
                            <div><i class="fas fa-tag"></i> <span>Price:</span> ${tour.price}</div>
                        </div>

                        <h3>What's Included</h3>
                        <ul class="popup-list">
                            ${tour.includes.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                        </ul>

                        <h3>Schedule</h3>
                        <ul class="popup-list">
                            ${tour.schedule.map(item => `<li><i class="fas fa-calendar-alt"></i> ${item}</li>`).join('')}
                        </ul>

                        <h3>Requirements</h3>
                        <ul class="popup-list">
                            ${tour.requirements.map(item => `<li><i class="fas fa-exclamation-circle"></i> ${item}</li>`).join('')}
                        </ul>

                        <h3>Cancellation Policy</h3>
                        <p>${tour.cancelPolicy}</p>

                        <div class="popup-actions">
                            <a href="#contact" class="btn book-now-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            `;
            
            // Show popup
            popupOverlay.style.display = 'flex';
            setTimeout(() => {
                popupOverlay.classList.add('active');
            }, 10);
            
            // Make "Book Now" button close the popup and scroll to contact
            const bookNowBtn = popupContent.querySelector('.book-now-btn');
            bookNowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Close popup
                popupOverlay.classList.remove('active');
                setTimeout(() => {
                    popupOverlay.style.display = 'none';
                }, 300);
                
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Auto-select the tour in the form
                const tourSelect = document.querySelector('#tour');
                if (tourSelect) {
                    tourSelect.value = tourId;
                }
            });
            
            // เพิ่มฟังก์ชัน slider
            initImageSlider();
        });
    });
}

// ฟังก์ชันสำหรับจัดการ image slider
function initImageSlider() {
    const slider = document.querySelector('.popup-image-slider');
    const slides = document.querySelectorAll('.popup-image-slide');
    const prevBtn = document.querySelector('.popup-image-prev');
    const nextBtn = document.querySelector('.popup-image-next');
    const dots = document.querySelectorAll('.popup-image-dot');
    
    if (!slider || slides.length === 0) return;
    
    let currentSlide = 0;
    
    // ฟังก์ชันเปลี่ยนรูป
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        currentSlide = slideIndex;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // อัพเดท active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Event listeners สำหรับปุ่มซ้าย-ขวา
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    
    // Event listeners สำหรับ dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // เพิ่ม swipe support สำหรับมือถือ
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        
        if (touchStartX - touchEndX > 50) {
            // Swipe ไปทางซ้าย - แสดงรูปถัดไป
            goToSlide(currentSlide + 1);
        } else if (touchEndX - touchStartX > 50) {
            // Swipe ไปทางขวา - แสดงรูปก่อนหน้า
            goToSlide(currentSlide - 1);
        }
    });
    
    // Auto slide (ถ้าต้องการ)
    /*
    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
    
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    });
    */
}

// Initialize popup functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', createTourPopup);