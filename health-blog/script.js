// Add a new health tip dynamically
function addTip() {
     const tip = prompt("Enter your health tip:");
     if (tip) {
       const ul = document.getElementById("tips-list");
       const li = document.createElement("li");
       li.textContent = tip;
       ul.appendChild(li);
     }
   }
   
   // Contact form submission
   document.getElementById("contactForm").addEventListener("submit", function(e) {
     e.preventDefault();
     alert("Thank you for contacting us, " + document.getElementById("name").value + "!");
     this.reset();
   });
   
   // Newsletter subscription
   document.getElementById("newsletterForm").addEventListener("submit", function(e) {
     e.preventDefault();
     alert("Subscribed successfully with " + document.getElementById("newsletterEmail").value);
     this.reset();
   });
   