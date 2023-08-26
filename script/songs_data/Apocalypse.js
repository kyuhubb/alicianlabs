title = "Apocalypse";
original_lyrics = `<span class='red'> Selate In ou Lane Lar Alger ou Iila </span>

 lootaria ou Caren Ewol Acary 
 Mirya Heil Dro end Di end Tri 

<span class='blue'> Selate In ou Lane Lar Crai Jam Wery </span>

 Lootaria ou Wiina Ewol Acary 
 Mirya Hell Dro end Di end Tri 

<span class='purple'> Circus ou Nouche Olis Loog Nouche 
 Synapse ah Astola </span>

 end Ranya Advelses Stei ou Monodrama 
 Finz Ranya 

<span class='red'> Crai Ran Alan 
 end Karna Mii Dist end Dist Mii </span>

 a Falke Luan !
 a Gout Mii Disrait oh Chail ou Eist 

<span class='blue'> a Circus ou Drone 
 Ley end Mii Bis Dist end Dist Mii </span>

 a Falke Luan !
 Brait Allss ou Xia Piero 
 Haou Crai La Crai 

<span class='purple'> es hai di es towai di es crai ni es grei ni lau 
 es towai di es crai ni es grei ni lau 
 es towai di es crai ni es grei ni lau 
 es crai ni es grei ni lau </span>

 Ranya Crai Ran Alan 
 end Karna Mii Dist end Dist Mii 

<span class='red'> a Falke Luan !
 a Gout Mii Disrait oh Chail ou Eist </span>

 a Circus ou Drone 
 Ley end Mii Bis Dist end Dist Mii 

<span class='blue'> a Falke Luan !
 Brait Allss ou Xia Piero 
 Haou Crai La Crai </span>`;
english_lyrics = `<span class='red'>Run through the evening twilight, to the girls’ crowd</span>

In the fishy revelation of aeonian silence
One, two and three apples roll

<span class='blue'>Run through the evening twilight to the agonizing guy</span>

In the fishy revelation of aeonian sleep
One, two and three apples roll

<span class='purple'>The circus night is really long, scattered synapse tangle in legs</span>

And finally peeped end of monodrama in the view after flip

<span class='red'>Once I face you, I forget myself again</span>

I have to leave right now !
But can’t find the key of door

<span class='blue'>Circus without audience holds up, and forget where here is again</span>

I have to go right now !
Prizing out eyelids of the clown
by the hand

<span class='purple'>Trail, Brightness, Redemption, Fate
Trail, Brightness, Redemption, Fate</span>

Once I face you, I forget myself again

<span class='red'>I have to leave right now !
But can’t find the key of door</span>

Circus without audience holds up, and forget where here is again

<span class='blue'>I have to go right now !
Prizing out eyelids of the clown
by the hand</span>`;
japanese_lyrics= `<span class='red'>宵の隙間を駆ける　少女たちの雑踏へ</span>

永遠の静寂と鈍色の黙示を
リンゴがひとつ　ふたつ　みっつ　転がった

<span class='blue'>宵の隙間を駆ける　懊悩に沈んだ者へ</span>

永遠の眠りと鈍色の黙示を
リンゴがひとつ　ふたつ　みっつ　転がった

<span class='purple'>サーカスの夜はとても長い夜　張り巡るシナプスが足に絡みついた</span>

そして宙返りで臨んだ景色に　モノドラマの終りを垣間見る

<span class='red'>あなたと目を合わせたら　また私は私を忘れてしまう</span>

早く行かなくちゃ！
でも　扉の鍵が見つからない

<span class='blue'>観客の居ないサーカスは続く　そしてまた　ここがどこか忘れてしまう</span>

早く行かなくちゃ！
ピエロのまぶたをこじ開けて
その手で

<span class='purple'>証跡を　赫赫を　贖罪を　宿運を
証跡を　赫赫を　贖罪を　宿運を</span>

あなたと目を合わせたら　また私は私を忘れてしまう

<span class='red'>早く行かなくちゃ！
でも　扉の鍵が見つからない</span>

観客の居ないサーカスは続く　そしてまた　ここがどこか忘れてしまう

<span class='blue'>早く行かなくちゃ！
ピエロのまぶたをこじ開けて
その手で</span>`;

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