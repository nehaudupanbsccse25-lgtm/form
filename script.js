document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value.trim();

  if (!name || !email || !rating || !comments) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  const summaryText = `
    Name: ${name} <br>
    Email: ${email} <br>
    Rating: ${rating} <br>
    Comments: ${comments}
  `;

  document.getElementById("feedbackForm").classList.add("hidden");
  document.getElementById("summaryText").innerHTML = summaryText;
  document.getElementById("summary").classList.remove("hidden");
});