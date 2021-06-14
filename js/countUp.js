function counterUp(element, startAtPercentage) {
    if (startAtPercentage == null) {
        startAtPercentage = 0;
    }

    var numericValue = getNumericValue(element);

    jQuery(element).counterUp({
        beginAt: (numericValue > 0)
            ? (numericValue * startAtPercentage / 100)
            : undefined,
    });
}

function getNumericValue(element) {
    try {
        return Number(element.innerText
            // Remove decimal points
            .replace(/.\D+/g, '')
            // Remove thousands separator and other symbols
            .replace(/\D/g, ''));
    } catch (error) {
        return 0;
    }
}

// Apply it to all elements with vanilla JavaScript (ES5)
Array.prototype.forEach.call(
    document.querySelectorAll('.countAnimation'),
    function (element) {
        counterUp(element, 0);
    });