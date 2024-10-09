var res1, res2;
function randomGen() {
  res1 = document.getElementById("span1").innerHTML = Math.round(
    Math.random() * 10
  );
  res2 = document.getElementById("span2").innerHTML = Math.round(
    Math.random() * 10
  );

  return res1 + res2;
}


var num = document.getElementById("num").value;
function result() {


alert(num);
}