<!--
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
 c1 = str.charCodeAt(i++) & 0xff;
 if(i == len)
 {
     out += base64EncodeChars.charAt(c1 >> 2);
     out += base64EncodeChars.charAt((c1 & 0x3) << 4);
     out += "==";
     break;
 }
 c2 = str.charCodeAt(i++);
 if(i == len)
 {
     out += base64EncodeChars.charAt(c1 >> 2);
     out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
     out += base64EncodeChars.charAt((c2 & 0xF) << 2);
     out += "=";
     break;
 }
 c3 = str.charCodeAt(i++);
 out += base64EncodeChars.charAt(c1 >> 2);
 out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
 out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
 out += base64EncodeChars.charAt(c3 & 0x3F);
    }
	return out;
}
function go ()
{
	var proxyer = document.getElementById('proxyer').value;
	var sty = proxyer.split(",");
	var http = document.getElementById('http').value;
	var postfix0 = "&hl=0011101000";
	var postfix1 = "&hl=e8";
	if(sty[1]==0){
		var gourl = sty[0]+base64encode(http)+postfix0;
		window.open(gourl);
	}else{
		var gourl = sty[0]+base64encode(http)+postfix1;
		window.open(gourl);
	}
}
function mark() {

}
function randind ()
{
	document.getElementById('proxyer').selectedIndex = 20*Math.random();
}
randind();
status = "Html Proxy index- Power by ibbs.us";
//-->