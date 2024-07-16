$(document).ready(function() {
    $('#isplati-sve-sate').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/isplati-sve-sate',
            success: function(response) {
                console.log('Python function executed successfully!');
            }
        });
    });
});