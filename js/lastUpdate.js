var p = document.getElementById("header-update");

while (p.firstChild) {
    p.removeChild( p.firstChild );
}                                      //TEXT TO DISPLAY ON LAST UPDATE
p.appendChild( document.createTextNode("Last Updated 27-09-2021"))