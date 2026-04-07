document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        alert('Hello world!');
    } else {
        alert('Invalid credentials');
    }
});

document.querySelector('.footer a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Demo credentials — Username: admin | Password: password');
    document.getElementById('username').value = "admin";
    document.getElementById('password').value = "password";
});