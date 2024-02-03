document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');

  registrationForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Fetch form data
    const username = document.getElementById('username').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          mobileNumber,
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log('Registration successful!');
      
      } else {
        console.error('Registration failed. Please try again.');
     
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }

  });
});
