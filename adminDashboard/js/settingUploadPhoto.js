var uploadFile = document.querySelector(".uploadFile");
var imgPreviewProfile = document.querySelector(".imgPreviewProfile");

uploadFile.addEventListener("change", (event) => {
  var selectedFile = event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imgPreviewProfile.src=e.target.result;
    };
    reader.readAsDataURL(selectedFile);
  }
});
