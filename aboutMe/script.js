document.getElementById('changeAvatarBtn').addEventListener('click', function() {
    document.getElementById('avatarInput').click();
});

document.getElementById('avatarInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Kiểm tra định dạng file
        if (!file.type.startsWith('image/')) {
            alert('Vui lòng chọn một file ảnh!');
            return;
        }

        // Kiểm tra kích thước file (giới hạn 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File ảnh quá lớn! Vui lòng chọn file dưới 5MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('avatarImage');
            img.src = e.target.result;
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.opacity = '1';
            }, 100); // Hiệu ứng fade-in khi thay ảnh
        };
        reader.readAsDataURL(file);
    }
});