// Toggle navigation menu visibility when the hamburger is clicked
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



window.addEventListener("scroll",
    function () {
        const header = document.querySelector(".header");
        if (window.scrollY > window.innerHeight) {
            header.style.background = "#121212";
        } else {
            header.style.background = "transparent"
        };
    }
);


window.addEventListener("scroll",
    function () {
        const hidden = document.querySelector(".hidden");
        if (window.scrollY > window.innerHeight) {
            hidden.style.display = "flex";
        } else {
            hidden.style.display = "none"
        };
    }
);


// Get the dropdown and the list of items
const filterSelect = document.getElementById('filter');
const cards = document.querySelectorAll('.card');
document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");
    const filterSelect = document.getElementById("filter");
  
    // Fetch products from JSON file
    fetch("data/products.json")
      .then((response) => response.json())
      .then((products) => {
        // Function to display all products
        function displayProducts() {
          productContainer.innerHTML = products.map(product => `
            <div class="card" data-duration="${product.category}">
              <img src="${product.image}" alt="">
              <div class="info">
                <h4 class="title">${product.name}</h4>
                <span class="desc">${product.desc}</span>
                
              </div>
            </div>
          `).join("");
        }
  
        // Initial render (show all products)
        displayProducts();
  
        // Filter event listener
        filterSelect.addEventListener("change", (event) => {
          const selectedCategory = event.target.value;
          const cards = document.querySelectorAll(".card");
  
          cards.forEach(card => {
            // Show all if "all" is selected, otherwise filter
            if (selectedCategory === "all" || card.getAttribute("data-duration") === selectedCategory) {
              card.style.display = "flex";
            } else {
              card.style.display = "none";
            }
          });
        });
      })
      .catch(error => console.error("Error loading products:", error));
  });
  