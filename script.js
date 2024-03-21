
// LOAD TODAY'S DATE INTO MID-SECTION DATEPICKER
window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    var formattedDate = yyyy + '-' + mm + '-' + dd;
    document.getElementById('datepicker').value = formattedDate;
};



var sidebarButton = document.getElementById("sidebar-btn");
var pageClick = document.getElementById('mainframe');
var isOpened = false;

document.addEventListener('click', function(event) {
    var target = event.target;
    if (!sidebarButton.contains(target) && !pageClick.contains(target) && isOpened) {
        sidebarButton.innerText = "Open";
        isOpened = false;
    }
});

function sidebar_open() {
    if (!isOpened) {
        sidebarButton.innerHTML = "&#10005";
        isOpened = true;
    } else {
        sidebarButton.innerHTML = "&#8801";
        isOpened = false;
    }
}