var iconWidth = 45;

var spsSize = 10;

var fp = "<li><img src='img/sps/s";
var lp = ".jpg' width='"+iconWidth+"' height='"+iconWidth+"'></li>";

for (var i = 1; i < spsSize; i++) {
  $(".sponsor-bar").append(fp+i+lp);
}
