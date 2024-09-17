
 // for service popup


  // Get the elements
  // Get the elements
const serviceLink = document.getElementById('service-overview');
const servicePopup = document.getElementById('service-popup');

// Show popup on hover over the link
serviceLink.addEventListener('mouseover', () => {
    servicePopup.style.display = 'flex';
});

// Hide popup when mouse leaves the popup area
servicePopup.addEventListener('mouseleave', () => {
    servicePopup.style.display = 'none';
});

serviceLink.addEventListener('mouseleave', () => {
    // Ensure popup hides when leaving the link if not hovering over the popup
    setTimeout(() => {
        if (!servicePopup.matches(':hover')) {
            servicePopup.style.display = 'none';
        }
    }, 100);
});

// for branding 
window.addEventListener('load', () => {
    const brandingIntro = document.getElementById('branding-intro');
    brandingIntro.style.animation = 'slideUp 1.5s ease-out forwards';
});

// services we offer

const services = [
    { name: "Logo design", description: "Crafting unique and memorable logos that embody your brand’s identity and core values. Our designs help establish a strong visual presence in the market." },
    { name: "Visual identity", description: "Developing a comprehensive visual identity system that includes color palettes, typography, and design elements to create a cohesive brand image." },
    { name: "Verbal identity", description: "Creating a distinctive verbal identity with a consistent tone and style, ensuring that all brand communications are clear, compelling, and on-brand." },
    { name: "Brand guidelines", description: "Providing detailed brand guidelines that cover all aspects of your brand’s visual and verbal identity, ensuring consistency and coherence across all touchpoints." },
    { name: "Mood boards", description: "Designing mood boards to visually communicate the desired look and feel of your brand, helping to align stakeholders and guide design direction." },
    { name: "Strategy", description: "Developing strategic plans to drive brand growth and achieve business objectives. Our strategies are tailored to your unique market and goals." },
    { name: "Brand naming", description: "Generating creative and impactful brand names that resonate with your target audience and reflect your brand’s essence and values." },
    { name: "Purpose & values", description: "Defining your brand’s purpose and core values to guide all marketing efforts and align your team with a shared vision and mission." },
    { name: "Tone of voice", description: "Establishing a tone of voice that aligns with your brand’s personality and engages your audience in a meaningful way, ensuring all communications are consistent." },
    { name: "Messaging", description: "Crafting compelling messages that effectively communicate your brand’s value propositions and resonate with your target audience." },
    { name: "Copywriting", description: "Creating persuasive and engaging copy for your website, advertisements, and other marketing materials to capture attention and drive action." },
    { name: "Brand architecture", description: "Developing a clear brand architecture that organizes your brand’s various products and sub-brands into a coherent structure, making it easier for customers to understand and navigate." },
    { name: "Portfolio branding", description: "Enhancing your portfolio with strong branding to showcase your work in a compelling way and attract potential clients." },
    { name: "Employee comms", description: "Designing effective internal communication strategies to keep employees informed, engaged, and aligned with the company’s goals and culture." },
    { name: "Workplace branding", description: "Creating a branded work environment that reflects your company’s culture and values, improving employee satisfaction and brand perception." },
    { name: "Campaigns", description: "Developing and executing integrated marketing campaigns to increase brand awareness, drive engagement, and achieve your business objectives." },
    { name: "Literature design", description: "Designing brochures, flyers, and other printed materials that effectively communicate your brand’s message and capture your audience’s attention." },
    { name: "Storyboarding", description: "Creating storyboards to plan and visualize marketing videos and campaigns, ensuring a clear narrative and effective communication of your brand’s message." },
    { name: "Illustration", description: "Providing custom illustrations that add a unique and artistic touch to your brand’s visual content, making it stand out and resonate with your audience." },
    { name: "Photography", description: "Delivering high-quality photography that enhances your brand’s image and supports your marketing materials, creating a strong visual impact." }
];

let currentIndex = 0;

const serviceDescription = document.getElementById('serviceDescription');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateServiceDescription() {
    const service = services[currentIndex];
    serviceDescription.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : services.length - 1;
    updateServiceDescription();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < services.length - 1) ? currentIndex + 1 : 0;
    updateServiceDescription();
});

// Initial display
updateServiceDescription();


// for our provide service
     // JavaScript code
     const serviceContainer = document.querySelector('.unique-services');
     const serviceElements = document.querySelectorAll('.unique-service-item');
     const previousButton = document.getElementById('previousButton');
     const nextButton = document.getElementById('nextButton');
     const itemWidth = serviceElements[0].offsetWidth + 20; // Width of one item + margin

     let currentSlideIndex = 0; // Start with the first item

     // Function to update the active state of service items
     function updateActiveState() {
         serviceElements.forEach((element, index) => {
             element.classList.toggle('active', index === currentSlideIndex);
         });
     }

     // Function to move to a specific index
     function scrollToIndex(index) {
         const offset = -index * itemWidth;
         serviceContainer.style.transform = `translateX(${offset}px)`;
         updateActiveState();
     }

     // Function to move to the next service item
     function goToNextItem() {
         currentSlideIndex++;
         if (currentSlideIndex >= serviceElements.length) { // Loop back to the start
             currentSlideIndex = 0;
             serviceContainer.style.transition = 'none'; // Disable transition
             serviceContainer.style.transform = `translateX(${-currentSlideIndex * itemWidth}px)`; // Immediate jump
             setTimeout(() => {
                 serviceContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
                 scrollToIndex(currentSlideIndex);
             }, 20);
         } else {
             scrollToIndex(currentSlideIndex);
         }
     }

     // Function to move to the previous service item
     function goToPreviousItem() {
         currentSlideIndex--;
         if (currentSlideIndex < 0) { // Loop back to the end
             currentSlideIndex = serviceElements.length - 1;
             serviceContainer.style.transition = 'none'; // Disable transition
             serviceContainer.style.transform = `translateX(${-currentSlideIndex * itemWidth}px)`; // Immediate jump
             setTimeout(() => {
                 serviceContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
                 scrollToIndex(currentSlideIndex);
             }, 20);
         } else {
             scrollToIndex(currentSlideIndex);
         }
     }

     // Event listeners for navigation buttons
     previousButton.addEventListener('click', goToPreviousItem);
     nextButton.addEventListener('click', goToNextItem);

     // Initialize the view
     scrollToIndex(currentSlideIndex);


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

   