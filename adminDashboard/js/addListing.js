var profilePhotoUpload=document.querySelectorAll('#profilePhotoUpload');

profilePhotoUpload.forEach((element)=>{
    element.addEventListener('change', (event) => {
        var selectedFile = event.target.files[0];
        var imgInputFeildCard=element.parentElement.parentElement;
        var imagePreviewCard=element.parentElement.parentElement.previousElementSibling;
        var imgPreview=element.parentElement.parentElement.previousElementSibling.childNodes[1];
        
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imgInputFeildCard.classList.add('d-none');
                imagePreviewCard.classList.remove('d-none');
                imgPreview.src = e.target.result;
            }
            reader.readAsDataURL(selectedFile);
        }
    })  
})
