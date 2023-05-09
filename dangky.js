document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('error').innerHTML = '';
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        document.getElementById('error').innerHTML = 'Vui lòng điền đầy đủ thông tin.';
    } else if (password !== confirmPassword) {
        document.getElementById('error').innerHTML = 'Mật khẩu xác nhận không khớp.';
    } else {
        alert('Đăng ký thành công!');
    }
});
