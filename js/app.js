(function(){
  document.addEventListener("DOMContentLoaded",function(event){
    document.addEventListener("keyup",keyup);
    function keyup(event){
    var fullname= document.getElementById("fullName").value;
    var totalValue=0;
    for(var i=0;i<fullname.length;i++){
      totalValue+=fullname.charCodeAt(i);

    }
    document.getElementById("output").innerText=totalValue;
    }
  })
})();
