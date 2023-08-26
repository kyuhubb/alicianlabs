title = "Maharajah";
original_lyrics = ` O Skaid Minelu Minelia Oh Di 
 Hellm a Cat Galha Sol end Xia Rata 

<span class='red'> End Droq Kre Di Escolia 
 Alvete Drone a Noll Sar Linq 
 end Elay Elie Bis ah </span>

" Hal a Story Oracle " end 
 Ani Brait Door len Razzle em Carafe 


<span class='blue'> Ah Mail Shiita end a Fete 
 ah Cate Aola Crai Lamiy end 
 Shelista Hal a Olkei Mii </span>


『 Ay Mii end Harmiy !』
『 a Xia Trico !』 Bllink Asta Ya 
 Historia ou Leat ah Coffee 
 Dist Far " Age Winde ." Bis lan la 

<span class='purple'> Nouche ou Crai Bai Dis 
 Harie Ya </span>

 Leste " Hal a Story Oracle " end 
 Ani Brait Door end Razzle Carafe 
 Ah Mii o Xia Hellm Story 
 Foul Talis end ah Talis ..</span>

<span class='red'> Ah Mail Shiita end a Fete 
 ah Cate Aola Crai Lamiy end 
 Shelista Hal a Olkei Mii </span>

『 Ay Mii end Harmiy 』
『 a Xia Trico !』 Bllink Asta Ya 
 Historia ou Leat ah Coffee 
 Dist Far " Age Winde ." Bis lan la 

<span class='blue'> Mii Herz Jam a Giinia Trane 
 Kre end a Lane Ary Wolme ou Historia </span>

 Liix Mage ah end Oracle Flasche 
" Mii Harmiy a Crai Shelta Foul "

<span class='purple'> Bis Nacc Finz end Nouche ou Finz Dis 
 Aihel end Age Alvete a Drone 
 Lai La Crai Bai Dis 
 Harie Ya </span>`;
english_lyrics = `Observatory, Sirius, Mirrored Moon
The phantasmal cat left a lonely smile and vanished away

<span class='red'>Bag, Bare feet, Transparent Funeral
Welcome to a lonely world
Everyone had arrived here like you</span>

“Time to tell a fairy tale”
An open door, A carafe that falls and breaks

<span class='blue'>Clad in the fate, Glorify your destiny
You’re just living now, You’re the most correct one in this world</span>

“Give me a break!That’s too much!”
Blinking light, Unfinished History, Untouched Coffee
“Did you wake up?” 


<span class='purple'>Here is your night world
Have you forgotten?</span>


“Time to tell a fairy tale”
An open door, A carafe that fell and broke
Ah, it is a fairy tale which I’ve ever heard, a long long time ago…


<span class='red'>Clad in the fate, Glorify your destiny
You’re just living now, You’re the most correct one in this world</span>

“Give me a break!That’s too much!”
Blinking light, Unfinished History, Untouched Coffee
“Did you wake up?” 


<span class='blue'>Agonizing heart and Golden tears
Run through the paleography carpet with bare feet</span>

The magic of absolution and vial of miracle
“You can do it”

<span class='purple'>This is the End, End of the endless night
Look, solitude is here
Or have you forgotten already?</span>`;


japanese_lyrics= `天文台　天狼星　鏡像の月
幻の猫は寂しく微笑んで　きえてしまった

<span class='red'>カバン　裸足　透明の葬列
孤独へようこそ
誰だってそうやって　ここへたどり着いたんだ</span>

“御伽話をしよう”
開いたままのドア落ちて割れるカラフェ


<span class='blue'>天命を纏い　運命を謳歌せよ
君は今　生きている　そして　世界で君が一番正しいんだ</span>


『ちょっとまってよ　そんなのあんまりだよ!』
明滅する電気　書きかけの歴史　置いたままのコーヒー
“目は覚めたかい”

<span class='purple'>ここは君の夜
もう忘れてしまったかい</span>


“御伽話をしよう”
開いたままのドア　落として割れたカラフェ
あぁ　それは　どこかで聞いた事のある御伽話　むかし.. むかし…


<span class='red'>天命を纏い　運命を謳歌せよ
君は今　生きている　そして　世界で君が一番正しいんだ</span>

『ちょっとまってよ　そんなのあんまりだよ!』
明滅する電気　書きかけの歴史　置いたままのコーヒー
“目は覚めたかい”

<span class='blue'>悩ましき心と　金色の涙
裸足のまま　古文書の絨毯を駆け抜けろ</span>

赦しの魔法と　奇跡の小瓶
“君なら　きっと大丈夫”

<span class='purple'>これが終り　果てなき夜の終り　ほら　孤独はここにある
それとも　もう忘れてしまったかい</span>`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");
original_lyrics = original_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = english_lyrics;
document.getElementById("japanese").innerHTML = japanese_lyrics;

var words = document.getElementById('original').innerHTML;
document.getElementById('original').innerHTML = words.replaceAll(" ", "  ");

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