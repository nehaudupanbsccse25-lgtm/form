const form = document.getElementById("feedbackForm");
const summary = document.getElementById("summary");
const summaryText = document.getElementById("summaryText");
const backBtn = document.getElementById("backBtn");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value.trim();

  if (!name || !email || !rating || !comments) {
    alert("Please fill all the fields.");
    return;
  }

  summaryText.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Rating:</strong> ${rating}<br>
    <strong>Comments:</strong> ${comments}
  `;

  form.classList.add("hidden");
  summary.classList.remove("hidden");
});

backBtn.addEventListener("click", function() {
  summary.classList.add("hidden");
  form.classList.remove("hidden");
  form.reset();
});
