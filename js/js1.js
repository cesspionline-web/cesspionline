// Add event listener to navbar links
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navbarLinks.forEach((link) => link.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');
  });
});

// Add hover effect to services section
const services = document.querySelectorAll('.service');
services.forEach((service) => {
  service.addEventListener('mouseover', () => {
    service.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
    service.style.transform = 'scale(1.05)';
    service.style.transition = 'all 0.3s ease-in-out';
  });
  service.addEventListener('mouseout', () => {
    service.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    service.style.transform = 'scale(1)';
  });
});

// Add smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll('a[href*="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').split('#')[1];
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add fade-in effect to elements on scroll
const fadeInElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.transition = 'all 0.5s ease-in-out';
    }
  });
});

// Initialize fade-in elements
fadeInElements.forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
});

// Add scroll-to-top button
const scrollTopButton = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const logo = document.querySelector('.namebar img');
logo.addEventListener('mouseover', () => {
  logo.style.transform = 'rotate(360deg)';
  logo.style.transition = 'transform 0.5s ease-in-out';
});
logo.addEventListener('mouseout', () => {
  logo.style.transform = 'rotate(0deg)';
});

const namebar = document.querySelector('.namebar');
namebar.addEventListener('mouseover', () => {
  namebar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
});
namebar.addEventListener('mouseout', () => {
  namebar.style.boxShadow = 'none';
});

const form = document.getElementById('whatsapp-form');
const phoneNumber = '+1234567890'; // Replace with your WhatsApp number

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const whatsappMessage = `Hello, my name is ${name}. ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
  form.reset();
});

function sendMessage() {
  const phoneNumber = '+265885883937'; // Replace with your WhatsApp number
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const whatsappMessage = `Hello, my name is ${name}. ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
}

function buyProduct(productName) {
  alert(`You have selected ${productName}.`);
  // Add your buy product logic here
}

