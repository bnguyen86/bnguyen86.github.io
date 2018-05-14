function initTooltips (selector : String, title : String) {
    const tooltipOptions : Object = {
        'trigger' : 'manual hover',
        'placement' : 'auto',
        'title' : title
    };

    $(selector).tooltip(tooltipOptions);
    $(selector).tooltip('show');
}


// $(() => {
//     initTooltips('#navbarDropdownMenuLink', 'Return to the "Onboarding Badge" anytime here');
//     initTooltips('#take-tour', 'Skip to any step in the current journey from here.');
// });