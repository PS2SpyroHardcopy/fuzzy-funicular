var array = [{color: "orange"}, {color:"lime"},{color: "pink"}]
var emptyArray = []

function clicking(bColor){
  var that = this;
  this.number = 0;
  this.ele = document.createElement("div");// what's the point of 2 divs?
  this.ele.style.backgroundColor = bColor;
  this.numberEle = document.createElement("div");
  this.ele.style.width = "300px";
  this.ele.style.height = "100px";
  this.ele.style.borderRadius = "10px";
  
  this.ele.style.textAlign = "center";
   this.ele.style.height = "200px";
  this.ele.style.lineHeight= "200px";
  
  this.ele.style.fontSize = "18px";
  this.numberEle.innerHTML = this.number;
  this.ele.appendChild(this.numberEle);
  
  this.ele.addEventListener("click", function(){
    that.addOne();
  });
  document.body.appendChild(this.ele);
}


clicking.prototype.addOne = function(){
  this.number++;
  this.numberEle.innerHTML = this.number;
}

for(var i = 0 ; i<array.length; i++){
  emptyArray.push(new clicking(array[i].color))//why two arrays?
}