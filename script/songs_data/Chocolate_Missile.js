title = "Chocolate Missile";
original_lyrics = ` Meit a Solte Minelia a Sail 
 Arsia ou Lazz a Pysietia end Vell Nai Guit 
 Missile end Cliid a Geeg 
 Vell Sctution Cloud ieb Falarle folme Arel ou Bis Ildrem 
 
 
 <span class='red'> Eida a Adie Brous a Ilis 
 Dex imm Bis Oli Aola ieb Drone Iila Vell Nai Kreis imm Lootaria Zel 
 Saray ? Mii Nai Dilem Grait ou Oltia Rak 
 Ah Apiejla Dizzle Mii Uleea Razzle </span>
 
 Ailent Olis 
 La La La Sai Lef Ziokla Elay end Dora Dilem Roof Prolen 
 Imm Nouche Len Skelat Retuel Katarles 
 Bai Hyune Tarn Oltia Note Mols Wasiim ? 
 Bis o Nai Hellm 
 Hor Enes end Liz imm Ziok Yiep Atuse Mii 
 Yiep Seek Ra Mizy ol Ignai , Phier 
 Bis o Amer ! 
 Hor Orpheus end Liz imm Ziok Yiep Torjest Mii 
 Lishe Luan Falke Alie Rowt 
 Bis o Nai Hellm 
 Hor Enes end Liz imm Ziok Yiep Atuse Mii 
 Yiep Seek Ra Mizy ol Ignai , Phier 
 Bis o Amer ! 
Hor Orpheus end Liz imm Ziok Yiep Tor6est Mii
Lishe Luan Falke Alie Rowt Saryarte`;
english_lyrics = `Head and tail, Moon and Sun
A reason to exist, a mission, which will not be known forever
The downpour of missiles, I’m an umbrella
I will protect you from the calamity of this civilization

<span class='red'>Upper and under the ground, storm and rainbow
Two people who will never intersect, are here now as a same girl
Friend? I don’t remember such a person
Oh, my head will split, might be broken</span>

I’m very frustrating
La La La This morning is like a ptarmigan
Gaping hole in the dark
Ridiculing night reflects the freaky-deaky dwellers
It has been repeating almost 100years, why?

It is not an illusion!
Hey people in the thunder, help me
Please say there are nothing wrong, please

It is a lie!
Hey Orpheus in the thunder, please kill me
Let’s go to the Abyss soon

It is not an illusion!
Hey people in the thunder, help me
Please say there are nothing wrong, please

It is a lie!
Hey Orpheus in the thunder, please kill me
Let’s go to the Abyss soon, together`;
japanese_lyrics= `表と裏　月と太陽
永遠に知ることのない　存在する　所以　使命
降り注ぐミサイル　私は傘
此の文明の勿怪から　あなたをお護りします



<span class='red'>地上と地中　嵐と虹
永遠に交わることのない二人は　独りの少女として今此処にいる
友達？　覚えてないよ　そんな人
あぁ　頭が割れる　壊れてしまいそうだ</span>

とっても　悔しいの
La La La　雷鳥みたいな朝が来て　ぽっかりと闇に穴が空く
あざ笑う夜に映るのは　奇々怪々な住人たち
もう１００年　そんなことばかり　どうして

幻じゃない！
雷を往く世人よ　私を助けて
間違いなんて一つもなかったと　云ってよ　お願い

嘘だよ！
雷を往くオルフェウスよ　さぁ　私を殺して
早くいきましょう　奈落の底まで

幻じゃない！
雷を往く世人よ　私を助けて
間違いなんて一つもなかったと　云ってよ　お願い

嘘だよ！
雷を往くオルフェウスよ　さぁ　私を殺して
早くいきましょう　奈落の底まで　一緒に`;

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