const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    statusMessage.className = "success";
    statusMessage.innerText = "✅ Thank you! Your message has been sent.";
    form.reset();
  } else {
    statusMessage.className = "error";
    statusMessage.innerText = "❌ Oops! Something went wrong. Please try again.";
  }
});




