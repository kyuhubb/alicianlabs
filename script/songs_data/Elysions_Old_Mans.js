title = "Elysions Old Mans";
original_lyrics = ` Grend Grend Walhalla ou Grend 
 Meeti Meeti Meeti Skyar Enes 
 Eala Eala Eala Aka Prii 
 Melart ! Nai Iar Zel Pray 

<span class='red'> Efok Efok Efok Poet nai Olte 
 Meeti Meeti Meeti Morhe Enes 
 Eala Eala Eala Heela Prii 
 Melart ! Mii Nai Guit Zel Note </span>

 Will a Shellarm Fiolaza Herches Arupe Elled 
 Nols end ou Kllea end ou Sjlyupe 
- Grend imm Bai Lanai o Di Toup -
 imm Herz Ajarla Yien Alista 




<span class='blue'> Grend Grend Walhalla ou Grend 
 Meeti Meeti Meeti Skyar Enes 
 Eala Eala Eala Aka Prii 
 Melart ! Nai Iar Zel Pray </span>

 Efok Efok Efok Poet Nai Olte 
 Meeti Meeti Meeti Morhe Enes 
 Eala Eala Eala Heela Prii 
 Melart ! Mii Nai Guit Zel Note 

<span class='purple'> Kleet Kleet Kleet Og Perte 
 Diazz Diazz Diazz Voi o Selaf 
 Capite Capite Taz Capite Scteus 
 Sween , Lishe Senju Elie Finza </span>



 Efa Efa Efa Hierti
 Oll Oll Oll Guit imm Selaf ? 
 Capite Capite Taz Capite Scteus 
 Sween , Lishe Senju Elie Finza `;
english_lyrics = `Justice Justice Justice Valhalla
Border Border Border Following people
Dipping Dipping Dipping Waterdrops
“I’ m sorry! I can’t hear anything”

<span class='red'>Cough Cough Cough Don’t worry
Border Border Border Mourning people
Dripping Dripping Dripping I.V
“I’ m sorry! I don’ t know anything”</span>

Heartbeat and Holy Temple, Bouquet and Heart
Ancient Elevator, Forgotten Stuff, The cried number, the disheartened number
- There are two types of justice in this paradise -
The justice that is held preciously and the justice that will be created from now

<span class='blue'>Justice Justice Justice Valhalla
Border Border Border Following people
Dipping Dipping Dipping Waterdrops
“I’ m sorry! I can’t hear anything”</span>

Cough Cough Cough Don’t worry
Border Border Border Mourning people
Dripping Dripping Dripping I.V
“I’ m sorry! I don’ t know anything”

<span class='purple'>Diagonal Diagonal Diagonal, Who they’re glaring at each other
Twins Twins Twins, That might be the truth
Capital’s Capital’s Capital’s guardian, after they sleep
Exit Exit Exit, I’ ll bring you there</span>

Age Age Age, it must repeat
Everyone Everyone Everyone know, right?
Capital’s Capital’s Capital’s guardian, after they sleep
Exit Exit Exit, I’ll bring you there`;
japanese_lyrics= `正義の　正義の　正義のヴァルハラ
国境　国境　国境　倣う人たち
滴る　滴る　滴る　水滴
“ごめんなさい！ 何も聞こえません”

<span class='red'>咳　咳　咳　気にしないで
国境　国境　国境　弔う人たち
滴る　滴る　滴る　点滴
“ごめんなさい！ 私は何も知りません”</span>

鼓動と神殿　花束と心臓
古代のエレベーター　泣いた数　挫けた数
- この楽園にある正義とは二種類 -
大事そうに抱えたその正義と　これから創られる正義



<span class='blue'>正義の　正義の　正義のヴァルハラ
国境　国境　国境　倣う人たち
滴る　滴る　滴る　水滴
“ごめんなさい！ 何も聞こえません”</span>

咳　咳　咳　気にしないで
国境　国境　国境　弔う人たち
滴る　滴る　滴る　点滴
“ごめんなさい！ 私は何も知りません”

<span class='purple'>対角線　対角線　対角線　睨み合っているのは
双生児　双生児　双生児　真実かもしれないね
帝都の　帝都の　帝都の　護り神が眠ったら
出口まで　出口まで　出口まで　送っていくよ</span>



時代は　時代は　時代は　繰り返すって
みんな　みんな　みんな　本当は知ってるでしょ？
帝都の　帝都の　帝都の　護り神が眠ったら
出口まで　出口まで　出口まで　送っていくよ`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");
original_lyrics = original_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = english_lyrics;
document.getElementById("japanese").innerHTML = japanese_lyrics;

document.getElementById('original').innerHTML = document.getElementById('original').innerHTML.replaceAll(" ", "  ");
var words = document.getElementById('original').innerHTML;

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

var currtext = document.getElementById("original").innerHTML;
for(i=0; i < words.length; i++){
	if(dico[words[i]] != undefined){
		currtext = currtext.replaceAll(" "+words[i]+" ", ` <span class='found' onmouseout='showtl("Translation(翻訳)")' onmouseover='showtl("`+dico[words[i]]+`")'>`+words[i]+`</span> `);
	}
}
document.getElementById("original").innerHTML = currtext;