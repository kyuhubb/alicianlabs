english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");
original_lyrics = original_lyrics.replaceAll("\n", "<br>");

let english_verse = []; 
let japanese_verse = []; 
let original_verse = [];

english_verse =  english_lyrics.split("<br><br>");
japanese_verse =  japanese_lyrics.split("<br><br>");
original_verse =  original_lyrics.split("<br><br>");
let result = "";
for(i=0; i < japanese_verse.length; i++){
	if(original_verse[i] == undefined){
		original_verse[i] = "no lyrics found";
	}
	result += `<tr><td class='alician'>`+original_verse[i]+`</td><td class='japanese'>`+japanese_verse[i]+`</td><td class='english'>`+english_verse[i]+`</td></tr>`;
}

document.getElementById('lyricsTable').innerHTML = result;

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;

let words = "";
for(x=0; x < japanese_verse.length; x++){
	document.getElementsByClassName('alician')[x].innerHTML = document.getElementsByClassName('alician')[x].innerHTML.replaceAll(" ", "  ");
	words = document.getElementsByClassName('alician')[x].innerHTML;

	words = words.replaceAll("<br>", " ");
	words = words.replaceAll(".", "");
	words = words.replaceAll("!", "");
	words = words.replaceAll("?", "");
	words = words.replaceAll('<span class="red">', '');
	words = words.replaceAll('<span class="blue">', '');
	words = words.replaceAll('<span class="purple">', '');
	words = words.replaceAll("</span>", "");
	words = words.replaceAll("』", "");
	words = words.replaceAll("『", "");
	words = words.replaceAll('"', '');
	words = words.replaceAll('-', '');
	words = words.replaceAll("'", '');
	words = words.split(" ");
	words = words.filter((item,index) => words.indexOf(item) === index);

	var currtext = document.getElementsByClassName('alician')[x].innerHTML;
	for(i=0; i < words.length; i++){
		if(dico[words[i]] != undefined){
			currtext = currtext.replaceAll(" "+words[i]+" ", ` <span class='found' onmouseout='showtl("Translation(翻訳)")' onmouseover='showtl("`+words[i]+`")'>`+words[i]+`</span> `);
		}
	}
	document.getElementsByClassName('alician')[x].innerHTML = currtext;
}