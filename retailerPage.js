document.addEventListener('DOMContentLoaded', () => {
    const uploadImage = document.querySelector('#uploadImage');
    const avatar = document.querySelector('#avatarPreview');
    const savedImage = localStorage.getItem('userImage');
    if (savedImage) {
        avatar.src = savedImage;
    }

    uploadImage.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = function () {
            avatar.src = reader.result;
            localStorage.setItem('userImage', reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    });
});