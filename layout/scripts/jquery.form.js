// Function to show the pop-up form
function showForm(title) {
    $('#formTitle').text(title); // Set the title
    $('#popupForm').show(); // Show the form
    $('#overlay').show(); // Show the overlay
}

// Function to close the pop-up form
function closeForm() {
    $('#popupForm').hide(); // Hide the form
    $('#overlay').hide(); // Hide the overlay
}

// Close the form if the user clicks outside of it
$(document).on('click', function(event) {
    if ($(event.target).is('#overlay')) {
        closeForm();
    }
});
