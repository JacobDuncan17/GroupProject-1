// Help Modal
var helpModal = $('#help-modal');
var helpButton = $('#help-button');
var closeModal = $('#close-modal');

$(document).ready(function () {
    closeModal.click(function () {
        helpModal.hide();
    });
    helpButton.click(function () {
        helpModal.show();
    });
});