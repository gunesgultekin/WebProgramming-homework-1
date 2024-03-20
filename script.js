
// LOAD TODAY'S DATE INTO MID-SECTION DATEPICKER
window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    var formattedDate = yyyy + '-' + mm + '-' + dd;
    document.getElementById('datepicker').value = formattedDate;
};


function sidebar_open(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar-btn").style.font = "dsad";

}


function sidebar_close(){
    document.getElementById("sidebar").style.display = "none";
}
let sidebarButton = document.getElementById("sidebar-btn");
let sideBar = document.getElementById("sidebar");

document.onclick = function(e){
    if (!sidebarButton.contains(e.target) && !sideBar.contains(e.target) ) {
        sideBar.style.display = "none";
    }
}

