document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail == 'shahir@gmail.com' && userPassword == 'shahir'){
        window.location.href = 'banking.html'
    }
})