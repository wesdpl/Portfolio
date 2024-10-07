// Typing Effect
let typed = new Typed('.auto-input', {
  strings: ['Full Stack Developer!', 'Graphic Designer!'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 2000,
  loop: true,
});

// Add the following JavaScript code to set the color to #31274b (purple)
let typedText = document.querySelector('.auto-input');
typedText.style.color = '#FFA337';

// Toggle the menu visibility and hamburger to X
document.getElementById("nav-toggle").addEventListener("click", function() {
  this.classList.toggle("active");  // Toggle hamburger to 'X' and vice versa
  document.getElementById("navbarNav").classList.toggle("show");  // Toggle menu visibility
});

// Close the menu when any link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
      // Remove 'show' class to close the dropdown
      document.getElementById("navbarNav").classList.remove("show");

      // Remove 'active' class from hamburger icon
      document.getElementById("nav-toggle").classList.remove("active");
  });
});


