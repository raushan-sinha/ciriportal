document.addEventListener('DOMContentLoaded', () => {
    const uploadImage = document.querySelector('#uploadImage');
    const avatar = document.querySelector('#avatarPreview');

    uploadImage.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = function () {
            avatar.src = reader.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    });
});