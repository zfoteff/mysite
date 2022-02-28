function clearFields() {
    $('#mailback-address').val('');
    $('#subject').val('');
    $('#message').val('');
}

$(document).ready(() => {
    $('#submit').click(async function() {
        var subject = $('#subject').val();
        var mailback = $('#mailback-address').val();
        var message = `Return Address: ${mailback}. ` + $('#message').val()
        window.open(`mailto:zfoteff@protonmail.com?subject=${subject}&body=${message}`);
        clearFields();
    })
});