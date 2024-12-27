document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
  
      // Reset error classes
      resetErrors([name, email, message]);
  
      let isValid = true;
  
      // Validate Name
      if (name.value.trim().length < 3) {
        showError(name, "Name must be at least 3 characters.");
        isValid = false;
      }
  
      // Validate Email
      if (!validateEmail(email.value)) {
        showError(email, "Please enter a valid email.");
        isValid = false;
      }
  
      // Validate Message
      if (message.value.trim().length < 20) {
        showError(message, "Feedback must be at least 20 characters.");
        isValid = false;
      }
  
      // If valid, show success message
      if (isValid) {
        successMessage.classList.remove("hidden");
        form.reset();
      }
    });
  
    function showError(input, message) {
      input.classList.add("error");
      const hint = input.nextElementSibling;
      hint.classList.add("error");
      hint.textContent = message;
    }
  
    function resetErrors(inputs) {
      inputs.forEach((input) => {
        input.classList.remove("error");
        const hint = input.nextElementSibling;
        hint.classList.remove("error");
        hint.textContent = "";
      });
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  