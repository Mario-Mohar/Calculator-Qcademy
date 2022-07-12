const display = $('#display .inner');
const digitButtons = $('td[data-digit]');


function clickDigit() {
    const digit = $(this).data('digit');

    if (display.html() === '0') {
    display.text(digit);
    }
    else {
        display.append(digit);
}
}

digitButtons.click(clickDigit);