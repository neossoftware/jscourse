/**Obtiene un elemento del DOM por ID */
var $ = function (id) {
    return document.getElementById(id);

}

/**
 * Convierte farenheit to celsius
 * 
 * @param {*} farenheit 
 */
var celsiusToFarenheit = function (farenheit) {
    var celsius = (5 * (farenheit - 32)) / 9;

    return celsius;
}
