document.addEventListener("DOMContentLoaded", () => {
document.getElementById("menu-toggle").addEventListener("click", function() {
    // alert("Ajay");
    document.getElementById("nav-links").classList.toggle("show");
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorDiv = document.getElementById("formError");

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Name is required.");
  }

  if (emailInput.value.trim() === "") {
    errors.push("Email is required.");
  } else if (!validateEmail(emailInput.value.trim())) {
    errors.push("Please enter a valid email.");
  }

  if (messageInput.value.trim() === "") {
    errors.push("Message is required.");
  }

  if (errors.length > 0) {
    errorDiv.innerText = errors.join(" ");
    errorDiv.style.color = "red";
  } else {
    errorDiv.innerText = "";
    alert("Your message has been sent!");
    form.reset();
  }
});


const toggleBtn = document.getElementById("bgToggleBtn");
let darkMode = false;

toggleBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = darkMode ? "#ffffff" : "#1c1c1c";
  document.body.style.color = darkMode ? "#000000" : "#f0f0f0";
  darkMode = !darkMode;
});





});

document.addEventListener("DOMContentLoaded", () => {  
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
  .then(response => response.json())
  .then(posts => {
    const postRow = document.getElementById('postRow');

    posts.forEach(post => {
      const col = document.createElement('div');
      col.className = 'col-md-3 mb-4';

      col.innerHTML = `
        <div class="card h-100">
          <img src="https://picsum.photos/300/200?random=${post.id}" class="card-img-top" alt="Post Image">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
          </div>
        </div>
      `;

      postRow.appendChild(col);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));

  });
  