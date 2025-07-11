function bookNow() {
  alert("Booking request received. Our HCLTech Healthcare team will contact you soon.");
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("loginError");

  // Basic check (replace with secure server-side validation in real use)
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    errorMsg.textContent = "";
    // You can redirect or show authenticated content here
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});

function bookNow() {
  // You could check login state here too
  alert("Redirecting to booking...");
  // Handle availability check
document.getElementById("availability-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const slot = document.getElementById("slot").value;

  // Simulate availability check (you can replace this with backend logic)
  let availableSlots = ["slot1", "slot2", "slot3", "slot4", "slot5"];

  if (availableSlots.includes(slot)) {
    document.getElementById("availability-result").innerHTML = 
      `<p>Doctor is available on ${date} at ${time} for the selected slot (${slot})!</p>`;
  } else {
    document.getElementById("availability-result").innerHTML = 
      `<p>Sorry, the selected slot is unavailable. Please try a different time or slot.</p>`;
  }
});

}

function checkAvailability() {
  alert("Checking doctor's availability...");
  // You can link this to a backend later for actual availability check.
}
