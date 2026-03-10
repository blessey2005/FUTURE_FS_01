const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("status");
form.addEventListener("submit", async function(e)
 {
  e.preventDefault();
 const formData = new FormData(form);
const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok)
     {
  statusMessage.innerText = "✅ Thank you! Your message has been sent.";
  statusMessage.style.color = "green";   
  form.reset();
} 
else
     {
  statusMessage.innerText = "❌ Oops! Something went wrong. Please try again.";
  statusMessage.style.color = "red";     
}
});

