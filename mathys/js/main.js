$(document).ready(function () {
    $.getJSON("data/data.json", function (data) {
        $.each(data,
            function (index, image) {
                $('#images').append('<li class="thumbnail" data-image="' + image.medium + '"><a href="' + image.big + '"><img alt="' + image.title + '" src="' + image.small + '"></a></li>');
            }
        );

        $(document).tooltip({
            items: "[data-image]",
            content: function () {
                var element = $(this);
                var image = element.data("image");
                console.log("image = " + image);
                var markup = '<img class="image" height="300" alt="' + image + '" src="' + image + '">';
                return markup;
            },
            track: true
        });

    });
});

