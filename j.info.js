function myIP() {
  if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.open("GET","http://api.hostip.info/get_html.php",false); // you really should get ur own API. This API is an test so you can only do around 100 requests.
  xmlhttp.send();

  hostipInfo = xmlhttp.responseText.split("\n");

  for (i=0; hostipInfo.length >= i; i++) {
      ipAddress = hostipInfo[i].split(":");
      if ( ipAddress[0] == "IP" ) return ipAddress[1];
  }

  return false;
}
