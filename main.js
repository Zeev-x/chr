function logo(){
  var y = document.getElementById("logo");
  y.style.color = "red";
  window.location.reload(true);
}
function home(){
  var y = document.getElementById("btn-home");
  y.style.color = "red";
  window.location.reload(true);
}
function about(){
  var x = document.getElementById("about");
  var y = document.getElementById("btn-about");
  x.style.display = "block";
  y.style.color = "red";
}
function confirm(){
  const z = document.getElementById("search").value;
  const x = new XMLHttpRequest();
  const url = `https://zeev-x.github.io/js/json/${z}.json`;
  const method = "GET";
  const height = "300";
  
  if(z == "azey"){
    x.open(method,url,true);
    x.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(x.responseText);
        var rand = Math.floor(Math.random()*data.length);
        var res = data[rand].img;
        var web = `<img src="${res}" height="${height}px">`;
        document.getElementById("result").innerHTML = web;
      }
    };
    x.send();
  } else if(z == "nsfw"){
    x.open(method,url,true);
    x.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(x.responseText);
        var rand = Math.floor(Math.random()*data.length);
        var res = data[rand].img;
        var web = `<img src="${res}" height="${height}px">`;
        document.getElementById("result").innerHTML = web;
      }
    };
    x.send();
  } else {
    window.open(`https://www.google.com/search?q=${z}`);
  }
}