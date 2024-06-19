// script.js

// SCROLLING BEHAVIOR
// Add event listeners to navbar links for smooth scrolling
const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach(li => {
  li.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const link = this.querySelector('a'); // Find the anchor tag within the li
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  });
});

// Add event listener for clicking on profile picture
const profilePicture = document.querySelector('.profile-picture');
profilePicture.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// TYPING ANIMATION
// Select the paragraph with the specific ID
const typingText = document.getElementById('typing-animation-text');

// List of words to type and delete
const words = ['Data Analyst', 'Problem Solver', 'Data Scientist', 'Highly Motivated Individual', 'Business Intelligence Analyst', 'Quick Learner'];

// Function to simulate typing effect with deletion and new text
function typing(element, words, speed) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting && charIndex <= currentWord.length) {
      element.textContent = currentWord.substring(0, charIndex);
      charIndex++;
      setTimeout(typeEffect, speed);
    } else if (isDeleting && charIndex >= 0) {
      element.textContent = currentWord.substring(0, charIndex);
      charIndex--;
      setTimeout(typeEffect, speed / 2); // Faster deletion
    } else {
      isDeleting = !isDeleting;
      if (isDeleting) {
        setTimeout(typeEffect, 1000); // Pause before typing new word
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        setTimeout(typeEffect, speed); // Typing new word
      }
    }
  }

  // Initial call to start the typing animation
  setTimeout(typeEffect, speed);
}

// Apply typing and deleting effect to the selected paragraph
typing(typingText, words, 150); // Adjust speed (milliseconds per character) as needed

