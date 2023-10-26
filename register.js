//   // Function to handle form submission
//   function submitForm() {
//     // You can add form validation here if needed
//     // For a simple example, let's assume the form is valid

//     // Submit the form (you can replace this with your actual form submission logic)
//     // For demonstration purposes, we'll just show an alert.
//     alert("Form submitted successfully!"); // This shows the alert

//     // You can add code here to reset the form fields if needed
//     document.getElementById("driver-registration-form").reset();
//   }

//   // Add an event listener to the submit button
//   document.querySelector(".submit_btn").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default form submission
//     submitForm(); // Call the submitForm function
//   });

 
 
  const registrationForm = document.getElementById("registration-form");

  registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
          alert("Passwords do not match. Please try again.");
          return;
      }

      // Add your additional validation logic here.
      // You can use the "required" attribute for other fields.

      // If all validations pass, you can submit the form.
      registrationForm.submit();
  });
 