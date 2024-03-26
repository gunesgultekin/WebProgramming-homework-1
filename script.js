
window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    var dayLater = new Date();
    dayLater.setDate(dayLater.getDate() + 1);
    var dd_second = String(dayLater.getDate());
    var mm_second = String(dayLater.getMonth() + 1).padStart(2, '0'); 
    var yyyy_second = dayLater.getFullYear();

    var formattedDate = yyyy + '-' + mm + '-' + dd;
    var formattedDate_second = yyyy_second + '-' + mm_second + '-' + dd_second;

    document.getElementById('datepicker-1').value = formattedDate;
    document.getElementById('datepicker-2').value = formattedDate_second;
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