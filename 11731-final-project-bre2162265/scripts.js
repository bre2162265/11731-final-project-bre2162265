/*
Author: Brenda Whitson
Class: CIS 133DA
Section: 11731
Lesson: 11
*/
// Shows what when document was last modified
document.getElementById("lastModified").innerHTML = document.lastModified;
// Creates an alert message to display when the form is submitted
function submitForm() {
alert('The form has been submitted !');
}
// Unhides the resetMessage element when the button is pressed.
function formReset() {
document.getElementById("resetMessage").style.visibility ="visible";
}