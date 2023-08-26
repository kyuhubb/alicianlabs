title = "A Little Servant";
original_lyrics = ` Hellmeila Hellmeila Iar imm Miis Mols 

<span class='red'> Finzo a Fiola end ol Melnaid 
 Veit Syarfi Oul Solien Vala ou Quondlea 
 Jiddle Ceeka Meisem Clooshela 
 Klautie end ol Dizzle </span>

 Hellmeila Hellmeila Ah Salie Proula 

<span class='blue'> Foul Xia o Siala end Dilem no Amie 
 a Siala Blem lar </span>

 o Shelista Plenptie ?
 Cloud o Iequim Lef Mono 

<span class='purple'> Porta end Flous imm Hellm Olis Dooom Meele </span>

 ol Eem Ra Voi Kulu Awter Shellius imm Selaf 

<span class='red'> Gout Hellm o Ola Poul ail 
 Ignai Canvie Imeila Prous Amblait </span>

 Yiep Wely il Kolto ou Tehomea 

<span class='blue'> Qleel Mii Verse Lef Kulu Nai Harie Zel osa ?</span>

 Yiep Wely Poetolt Heipe Sole ou Venesene 

<span class='purple'> Qleel Mii Verse Iequim Lef Nai Aihel folme Talis ?</span>

 Mii Qleea Spai imm Meele ou Trane 

<span class='red'> Eilent Rave </span>

 o Xia Haol Cloud Telly il Mii Selaf Note ?

<span class='blue'> Kulu Nai Ranya end Kulu Nai Prifiel Zel Note </span>

 Hiele Shellius Yiep Leimy Bai 

<span class='purple'> Yiela Prous il Kolto ou Tehomea 
 Lef Feikeed end Piikle Xaite Herches </span>

 Yiela Sween Poetolt Heipe Sole ou Venesene 
 Lef Yien Leimy folme Vins Hellm imm Lootaria 

<span class='red'> Hiele Meele ou Trane Farla 
 imm Kolto Xia Ignai Dialoss </span>`;
english_lyrics = `Traumerei Traumerei Finale only heard by me

<span class='red'>Withered flower, Red dress, Big sofa, Castellated wall, Iron bars, Messy closet, Broken nail</span>

Traumerei Traumerei Oh, Rev. Msgr.

<span class='blue'>The song may be without love This is for whom?</span>

Is this world cinematograph? You look like monochrome

<span class='purple'>A ship floating on illusion, enormously deep sea</span>

I really felt like I could come across god

<span class='red'>But there is nothing in illusion anyway
Despite how strong I wish</span>

Just sink in the bottom depth

<span class='blue'>Should I vanish away, not to remember anything</span>

Just sink in with mystical cluster

<span class='purple'>Should I vanish away, as if I wasn’t there from beginning</span>

I can’t stop crying

<span class='red'>Chagrin is overflowing</span>

You held out your hand, but is that real?

<span class='blue'>I can’t see anything I can’t feel anything</span>

Oh god, please let me go

<span class='purple'>Pray in the bottom depths,
as if you stick that heart</span>

Sleep with mystical cluster,
as if you escape from eternal nightmare

<span class='red'>Look, the bottom is a sea of tears, the never perishing sea</span>`;
japanese_lyrics= `トロイメライ　トロイメライ　独りだけ聞こえる　フィナーレ

<span class='red'>萎れた花　赤いドレス　大きなソファ　城壁　鉄格子　散らかったクローゼット　割れた爪</span>

トロイメライ　トロイメライ ああ　司祭さま

<span class='blue'>それはきっと　愛のない唄　誰が為の唄</span>

世界は映写機？　あなたはまるで　モノクローム

<span class='purple'>幻に浮かんだ船　とっても深い海</span>

本当は　神様に逢える気がした

<span class='red'>けれど　幻は　結局　がらんどう
どれほど　強く　強く　祈ったところでね</span>

深淵の底へ沈んでしまえ

<span class='blue'>何も思い出せないように　消え去ってしまおうか</span>

幽魂を抱いて沈んでしまえ

<span class='purple'>まるで　最初から居なかったみたいに　消え去ってしまおうか</span>

泪が止まらないよ

<span class='red'>悔しさが滲む</span>

差し出した　その手は　本物なの？

<span class='blue'>何も　見えない　何も　判らない</span>

神様　もう離してよ

<span class='purple'>深淵の底で　祈り賜え
かの心臓を　突き刺すように</span>

幽魂を抱いて　眠り賜え
永遠の悪夢から　解放されるように

<span class='red'>ほら　底は泪の海　枯れることのない海</span>`;

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