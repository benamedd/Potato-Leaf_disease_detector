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
            
            // Prepare the form data
            const formData = new FormData();
            formData.append('file', file);

            // Make the API call
            fetch('https://huggingface.co/spaces/benamedd/potato_disease/api/predict/', {  // Replace with your actual API endpoint
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Display the prediction result
                predictionResult.textContent = `Prediction result: ${data.prediction}`; // Adjust according to your API response format
            })
            .catch(error => {
                console.error('Error:', error);
                predictionResult.textContent = "An error occurred while analyzing the image.";
            });
        };

        reader.readAsDataURL(file);
    } else {
        predictionResult.textContent = "Please upload an image.";
    }
});
