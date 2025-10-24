const form = document.getElementById("feedbackForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const summary = document.getElementById("summary");
const backButton = document.getElementById("backButton");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get trimmed values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value.trim();

  // Basic validation
  if (!name || !email || !rating || !comments) {
    alert("Please fill all fields before submitting.");
    return;
  }

  // Display summary
  summary.innerHTML = `
    <strong>Name:</strong> ${name} <br>
    <strong>Email:</strong> ${email} <br>
    <strong>Rating:</strong> ${rating} <br>
    <strong>Comments:</strong> ${comments}
  `;

  // Hide form and show thank-you message
  form.classList.add("hidden");
  thankYouMessage.classList.remove("hidden");
});

backButton.addEventListener("click", () => {
  // Reset form and toggle visibility
  form.reset();
  thankYouMessage.classList.add("hidden");
  form.classList.remove("hidden");
});
