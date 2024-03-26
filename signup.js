document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Perform form validation and submission here
      // For simplicity, we'll just log the form data to the console
      const formData = new FormData(this);
      for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
    });
  });
  