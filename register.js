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

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // You can add form validation here if needed
    // For a simple example, let's assume the form is valid

    // Show a Bootstrap modal alert with an "OK" button
    $('#successModal').modal('show');
  }

  // Add an event listener to the form submission
  document.getElementById("driver-registration-form").addEventListener("submit", submitForm);