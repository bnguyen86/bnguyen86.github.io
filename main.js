function initTooltips (selector, title) {
    const tooltipOptions = {
        'trigger' : 'manual hover',
        'placement' : 'bottom',
        'title' : title
    };

    $(selector).tooltip(tooltipOptions);
    $(selector).tooltip('show');
}


$(() => {
    initTooltips('#navbarDropdownMenuLink', 'Return to the "Onboarding Badge" anytime here');
});