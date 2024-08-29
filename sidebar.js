document.addEventListener('DOMContentLoaded', function() {
    var imageUpload = document.getElementById('imageUpload');
    var userPfp = document.getElementById('userPfp');

    imageUpload.addEventListener('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                userPfp.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});