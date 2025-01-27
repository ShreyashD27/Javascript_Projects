function previewPhoto(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('preview');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}