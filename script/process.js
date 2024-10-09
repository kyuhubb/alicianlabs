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
if(chinese){
	result += `<tr><th>Alician</th><th>Chinese</th><th>English</th><tr>`
}else{
	result += `<tr><th>Alician</th><th>Japanese</th><th>English</th><tr>`
}

for(i=0; i < japanese_verse.length; i++){
	result += `<tr><td class='alician'>`+original_verse[i]+`</td><td class='japanese'>`+japanese_verse[i]+`</td><td class='english'>`+english_verse[i]+`</td></tr>`;
}

document.getElementById('lyricsTable').innerHTML = result;

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;

let words = "";
for(x=0; x < japanese_verse.length; x++){
	document.getElementsByClassName('alician')[x].innerHTML = document.getElementsByClassName('alician')[x].innerHTML.replaceAll(" ", "  ");
	words = document.getElementsByClassName('alician')[x].innerHTML;

	words = words.split(" ");
	words = words.filter((item,index) => words.indexOf(item) === index);

	var currtext = document.getElementsByClassName('alician')[x].innerHTML;
	for(i=0; i < words.length; i++){
		if(dico[words[i].toLowerCase()] != undefined){
			currtext = currtext.replaceAll(" "+words[i]+" ", ` <span class='found' onmouseout='showtl("notext")' onmouseover='showtl("`+words[i].toLowerCase()+`")'>`+words[i]+`</span> `);
		}
	}
	currtext = currtext.replaceAll("  ...", "...");
	currtext = currtext.replaceAll("  ,", ",");
	currtext = currtext.replaceAll("  .", ".");
	document.getElementsByClassName('alician')[x].innerHTML = currtext;
}