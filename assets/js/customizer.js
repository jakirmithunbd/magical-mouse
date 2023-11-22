;(function ($) {
    wp.customize('cursor_color', function (value) {
        value.bind(function (newVal) {
            console.log(value)
            $('#magicMouseCursor').css('border-color', value);
        })
    })

    wp.customize('cust_service_icon_color', function (value) {
        value.bind(function (newVal) {
            $('.service i').css('color', newVal);
        })
    })
})(jQuery);