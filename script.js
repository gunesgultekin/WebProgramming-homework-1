


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