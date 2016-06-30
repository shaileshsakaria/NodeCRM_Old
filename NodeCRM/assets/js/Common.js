function OnlyNumeric(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 && charCode != 9)) {
        evt.value = '';
        return false;
    }
    return true;
}
function OnlyDecimal(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
        if (charCode != 45) {
            evt.value = '';
            return false;
        }
    }
    return true;
}
function OnlyDecimalWithOutMinue(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46 && charCode != 9) {
        evt.value = '';
        return false;
    }
    return true;
}
function PreventEnterKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 13) {
        evt.value = '';
        return false;
    }
    return true;
}
function ConvertFloat(num)
{
    return parseFloat(num.toString().replace(',', ''));
}
function isAlphaNumeric(e) { // Alphanumeric only
    var k;
    document.all ? k = e.keycode : k = e.which;
    return ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123) || k == 0);
}
function ConvertPST(oldDate)
{
    var offset = -8;
    //var date = new Date(new Date(oldDate).getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, "");
    //var currentDate = new Date(date);
    //var day = currentDate.getDate(); var month = currentDate.getMonth(); var year = currentDate.getFullYear();
    //var hours = ("0" + (23 - currentDate.getHours())).slice(-2); var minutes = ("0" + (59 - currentDate.getMinutes())).slice(-2); var sec = ("0" + (59 - currentDate.getSeconds())).slice(-2);
    //var newDate = new Date(year, month, day, hours, minutes, sec);
    //return newDate;
    var date = new Date(oldDate);
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    PST = new Date(utc + (3600000 * offset));

    // return time as a string
    return PST;
}
function onlyDotsAndNumbers(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode == 46) {
        if (txt.value.indexOf(".") < 0)
            return true;
        else
            return false;
    }
    if (txt.value.indexOf(".") > 0) {
        var txtlen = txt.value.length;
        var dotpos = txt.value.indexOf(".");
        if ((txtlen - dotpos) > 7)
            return false;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}



