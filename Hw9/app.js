// jQuery Plugin to format and display ISS location data
(function ($) {
    $.fn.formatISSData = function (data) {
        return this.each(function () {
            const $element = $(this);

            // Format and display the ISS location data
            $element.html(`
                <h2>ISS Location</h2>
                <p><strong>Longitude:</strong> ${data.longitude}</p>
                <p><strong>Latitude:</strong> ${data.latitude}</p>
                <p><strong>Timestamp:</strong> ${new Date(data.timestamp * 1000).toLocaleString()}</p>
            `);

            // Apply custom styles
            $element.css({
                "border": "2px solid #333",
                "padding": "20px",
                "width": "300px",
                "background-color": "#f4f4f4",
                "margin": "20px auto",
                "text-align": "center",
                "border-radius": "10px",
                "font-family": "Arial, sans-serif"
            });

            // Add custom fonts and colors
            $element.find('h2').css({
                "font-size": "24px",
                "color": "#00796b"
            });

            $element.find('p').css({
                "font-size": "16px",
                "color": "#555"
            });
        });
    };
})(jQuery);

// Fetch and display ISS location from local JSON file
$(document).ready(function () {
    $.ajax({
        url: 'iss-location.json', 
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            const issData = {
                timestamp: data.timestamp,
                longitude: data.iss_position.longitude,
                latitude: data.iss_position.latitude
            };

            // Apply the jQuery plugin to the #iss-location div to format and display the data
            $('#iss-location').formatISSData(issData);
        },
        error: function () {
            $('#iss-location').html('<p>Error loading data. Please try again later.</p>');
        }
    });
});
