document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
    document.getElementById('signup-btn').classList.add('active');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('signup-email-error').textContent = '';
    document.getElementById('signup-password-error').textContent = '';
    document.getElementById('signup-confirm-password-error').textContent = '';

    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;

    var valid = true; 

    if (!email.endsWith('@gmail.com')) {
        document.getElementById('signup-email-error').textContent = 'Email must end with @gmail.com';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('signup-password-error').textContent = 'Password must be at least 6 characters long';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('signup-confirm-password-error').textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        alert('Signup successful!');
    }
});
