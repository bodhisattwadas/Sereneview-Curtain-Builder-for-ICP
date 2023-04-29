// $('.collapse').collapse();
console.log("working ...");
document.getElementById("patternSelector").style.display = "none";
document.getElementById("patternSelectorAlert").style.display = "flex";
document.getElementById("numberButtonSelector").style.display = "none";
document.getElementById("numberButtonSelectorAlert").style.display = "flex";
let scene = null;
let pattern = null;

function addScene(image){
    scene = image;
    document.getElementById("patternSelector").style.display = "flex";
    document.getElementById("patternSelectorAlert").style.display = "none";
    // $(this).parent().css({"border": "2px solid red"});
    $("#collapseTwo").collapse('show');
    console.log(scene);
}
function addPattern(image){
    if(scene === null){
        alert("Please select a curtain scene first");
    }
    pattern = image;
    document.getElementById("numberButtonSelector").style.display = "flex";
    document.getElementById("numberButtonSelectorAlert").style.display = "none";
    $("#collapseThree").collapse('show');
    console.log(scene);
    console.log(pattern);
}