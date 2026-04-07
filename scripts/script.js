document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        document.getElementById('hello-modal').style.display = 'flex';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('hello-btn').addEventListener('click', function() {
    document.getElementById('hello-modal').style.display = 'none';
});

document.querySelector('.footer a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('username').value = "admin";
    document.getElementById('password').value = "password";
});