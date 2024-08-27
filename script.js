document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const uploadedImage = document.getElementById('uploaded-image');
    const predictionResult = document.getElementById('prediction-result');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            uploadedImage.src = event.target.result;
            predictionResult.textContent = "Analyzing...";
            
            // Simulate an API call to your Hugging Face Space
            setTimeout(() => {
                // Replace this with actual API call and response handling
                predictionResult.textContent = "Prediction result: Disease identified!";
            }, 2000); // Simulated delay
        };

        reader.readAsDataURL(file);
    } else {
        predictionResult.textContent = "Please upload an image.";
    }
});
