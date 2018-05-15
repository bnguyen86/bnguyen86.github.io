function initTooltips(selector, title) {
    var tooltipOptions = {
        'trigger': 'manual hover',
        'placement': 'auto',
        'title': title
    };
    $(selector).tooltip(tooltipOptions);
    $(selector).tooltip('show');
}
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "0",
    "hideDuration": "0",
    "timeOut": "0",
    "extendedTimeOut": "0",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
// $(() => {
//     initTooltips('#navbarDropdownMenuLink', 'Return to the "Onboarding Badge" anytime here');
//     initTooltips('#take-tour', 'Skip to any step in the current journey from here.');
// });
