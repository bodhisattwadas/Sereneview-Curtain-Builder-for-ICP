// $('.collapse').collapse();
mScenesArray = {"BP":"BeaverPond","FBc":"FiftyBalloons","IS":"Islamorada","MF":"MossbraeFalls",
			"PG":"PalmGrove","PL":"ParsonsLanding","SG":"StoutGrove","SM":"SummerMist",
			"TO":"TetonOverlook","YV":"YosemiteValley","NO":"NoScene"};
mPatternArray = {"Beige":"Beige","Dawn":"Dawn","Dusk":"Dusk","Fall":"Fall",
				"Meadow":"Meadow","Rainbow":"Rainbow","Sky":"Sky","TanMeadow":"TanMeadow",
				"TealFlower":"TealFlower","Winter":"Winter","Circles":"Circles"};
console.log("working ...");
document.getElementById("patternSelector").style.display = "none";
document.getElementById("patternSelectorAlert").style.display = "flex";
document.getElementById("numberButtonSelector").style.display = "none";
document.getElementById("numberButtonSelectorAlert").style.display = "flex";
let scene = null;
let pattern = null;
let number = 1;

function addScene(image){
    $(".scene").removeClass("selected");
    scene = image;
    parentSelector = "#"+image;
    togglePatternBlock('show');
    $(parentSelector).addClass("selected");
    $("#collapseTwo").collapse('show');
}
function addPattern(image){
    if(scene === null){
        alert("Please select a curtain scene first");
    }
    $(".pattern").removeClass("selected");
    parentSelector = "#"+image;
    pattern = image;
    toggleNumberBlock('show');
    $("#collapseThree").collapse('show');
    $(parentSelector).addClass("selected");
}
function addButton(num,path){
    // alert(num);
    number = num;
    console.log(scene);
    console.log(pattern);
    console.log(num);
    generatePreview(scene,pattern,num,path);
}
function generatePreview(scene,pattern,num,path){
    scenePath = path+'scenes/'+scene+'_'+mScenesArray[scene]+'.jpg';
    patternPath = path+'patterns/'+mPatternArray[pattern]+'.png';
    if(scene === 'NO'){
      mHTML = 
      '<table class="table">'+
      '<thead>'+
        '<tr>'+
          '<th scope="col">Front</th>'+
          '<th scope="col">Back</th>'+
          '<th scope="col"># Panels</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+
        '<tr>'+
          '<th scope="row"><img src="'+patternPath+'" class="img-thumbnail" ></img></th>'+
          '<td><img src="'+patternPath+'" class="img-thumbnail" ></img></td>'+
          '<td class="text-center align-middle text-info"><h4>'+num+'</h4></td>'+
        '</tr>'+
      '</tbody>'+
    '</table>';
    }else{
      if(num === 1){
        mHTML = 
        '<table class="table">'+
        '<thead>'+
          '<tr>'+
            '<th scope="col">Front</th>'+
            '<th scope="col">Back</th>'+
            '<th scope="col"># Panels</th>'+
          '</tr>'+
        '</thead>'+
        '<tbody>'+
          '<tr>'+
            '<th scope="row"><img src="'+scenePath+'" class="img-thumbnail" ></img></th>'+
            '<td><img src="'+patternPath+'" class="img-thumbnail" ></img></td>'+
            '<td class="text-center align-middle text-info"><h4>1</h4></td>'+
          '</tr>'+
        '</tbody>'+
      '</table>';
      }else{
        mHTML = 
      '<table class="table">'+
      '<thead>'+
        '<tr>'+
          '<th scope="col">Front</th>'+
          '<th scope="col">Back</th>'+
          '<th scope="col"># Panels</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+
        '<tr>'+
          '<th scope="row"><img src="'+scenePath+'" class="img-thumbnail" ></img></th>'+
          '<td><img src="'+patternPath+'" class="img-thumbnail" ></img></td>'+
          '<td class="text-center align-middle text-info"><h4>1</h4></td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row"><img src="'+patternPath+'" class="img-thumbnail" ></img></th>'+
          '<td><img src="'+patternPath+'" class="img-thumbnail" ></img></td>'+
          '<td class="text-center align-middle text-info"><h4>'+(num-1)+'</h4></td>'+
        '</tr>'+
      '</tbody>'+
    '</table>';
      }
      
    }
    
  mHTML += '<div class="row"><button style="width:100%" class="btn btn-lg btn-info btn-block" onclick="saveInfo()">Save this curtain</button></div>';
document.getElementById("previewSelectorAlert").style.display = "none";
$('#previewSelector').html(mHTML);
$("#collapseFour").collapse('show');
}
function togglePatternBlock(value){
  if(value === 'show'){
    document.getElementById("patternSelector").style.display = "flex";
    document.getElementById("patternSelectorAlert").style.display = "none";
  }else{
    document.getElementById("patternSelector").style.display = "none";
    document.getElementById("patternSelectorAlert").style.display = "flex";
  }
}
function toggleNumberBlock(value){
  if(value === 'show'){
    document.getElementById("numberButtonSelector").style.display = "flex";
    document.getElementById("numberButtonSelectorAlert").style.display = "none";
  }else{
    document.getElementById("numberButtonSelector").style.display = "none";
    document.getElementById("numberButtonSelectorAlert").style.display = "flex";
  }
}
function saveInfo(){
  $.ajax({
    type: 'POST',
    url: "/wp-content/plugins/build-curtain/builder.php",
    data: {"save":"save","scene":scene,"pattern":pattern,"number":number},
    dataType: "text",
    success: function(resultData) {
      console.log(resultData);
      location.reload() ;
    }
});
}
function deleteInfo(key){
  $.ajax({
    type: 'POST',
    url: "/wp-content/plugins/build-curtain/builder.php",
    data: {"delete":"delete","key":key},
    dataType: "text",
    success: function(resultData) {
      console.log(resultData);
      location.reload();
    }
});
};
function makePDF(path){
  $.ajax({
    type: 'POST',
    url: "/wp-content/plugins/build-curtain/mailer.php",
    data: {
      "create":"create",
      "email":$("#email").val(),
      "path":path
    },
    dataType: "json",
    success: function(resultData) {
      ht = '<br><h4>'+resultData[0]+'</h4>';
      if(resultData[1] != 'error'){
        ht = '<br><h2><a style="font-size: 20px;margin:5px;" href="' + resultData[0] + '" target="_blank">Click here to download your PDF</a></h2>';
      }
      
      $("#mMessage").html(ht);
      $("#email").val("");
    }
});
};
function clearAll(){
  $.ajax({
    type: 'POST',
    url: "/wp-content/plugins/build-curtain/builder.php",
    data: {"deleteall":"deleteall"},
    dataType: "text",
    success: function(resultData) {
      console.log(resultData);
      location.reload() ;
    }
});
}