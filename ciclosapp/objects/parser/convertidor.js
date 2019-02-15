var calcula = function () {
    var celsius = $('txtCelsius').value;

    var celsiusFloat = parseFloat(celsius);

    var farenheit = celsiusToFarenheit(celsiusFloat);

    console.log("F= " + farenheit + " , C= " + celsius);

    $('txtFarenheit').value = farenheit;

    showMessage("F= " + farenheit + " , C= " + celsius);


}

var showMessage = function (msg) {



    $('mensajes').innerHTML = '<div class="alert alert-success" role="alert">' +
        msg +
        "</div>";
}