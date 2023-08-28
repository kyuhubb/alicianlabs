let title = "";
let original_lyrics = "";
let japanese_lyrics = "";
let english_lyrics = "";

function initSong(){
 var song = $_GET("q");
 importJs("../script/songs_data/"+song);
}

function showtl(expression){
	document.getElementById("translation").innerHTML = dico[expression];
}