//function to obtain a GET parameter from URL
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

//set cookie's value
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=Lax; Secure";
}

//get cookie's value
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


//check cookie's existence
function checkCookie(cname) {
  let checkedcookie = getCookie(cname);
  if (checkedcookie != "") {
  	return 1;
  }else{
  	return 0;
  }
}

//delete a cookie
function delCookie(cname){
	document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//load a js script
function importJs(path){
  var script = document.createElement("script");
  script.src = path+".js";
  document.head.appendChild(script);
}

//reset an animation
function reset_animation(div){
      var el = document.getElementById(div);
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = null; 
}

//load json and init first kanji of the grade in url
function loadJSON(path){
  fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
        return data
    })
}
//how to use canvas draw function (image, sourcex, sourcey, sourceLargeur, sourceHauteur, destinationx, destinationy, destinationLargeur, destinationHauteur)