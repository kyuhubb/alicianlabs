title = "Elysions Old Mans";
original_lyrics = ``;
english_lyrics = `Justice Justice Justice Valhalla
Border Border Border Following people
Dipping Dipping Dipping Waterdrops
“I’ m sorry! I can’t hear anything”

Cough Cough Cough Don’t worry
Border Border Border Mourning people
Dripping Dripping Dripping I.V
“I’ m sorry! I don’ t know anything”

Heartbeat and Holy Temple, Bouquet and Heart
Ancient Elevator, Forgotten Stuff, The cried number, the disheartened number
- There are two types of justice in this paradise -
The justice that is held preciously and the justice that will be created from now

Justice Justice Justice Valhalla
Border Border Border Following people
Dipping Dipping Dipping Waterdrops
“I’ m sorry! I can’t hear anything”

Cough Cough Cough Don’t worry
Border Border Border Mourning people
Dripping Dripping Dripping I.V
“I’ m sorry! I don’ t know anything”

Diagonal Diagonal Diagonal, Who they’re glaring at each other
Twins Twins Twins, That might be the truth
Capital’s Capital’s Capital’s guardian, after they sleep
Exit Exit Exit, I’ ll bring you there

Age Age Age, it must repeat
Everyone Everyone Everyone know, right?
Capital’s Capital’s Capital’s guardian, after they sleep
Exit Exit Exit, I’ll bring you there`;
japanese_lyrics= `正義の　正義の　正義のヴァルハラ
国境　国境　国境　倣う人たち
滴る　滴る　滴る　水滴
“ごめんなさい！ 何も聞こえません”

咳　咳　咳　気にしないで
国境　国境　国境　弔う人たち
滴る　滴る　滴る　点滴
“ごめんなさい！ 私は何も知りません”

鼓動と神殿　花束と心臓
古代のエレベーター　泣いた数　挫けた数
- この楽園にある正義とは二種類 -
大事そうに抱えたその正義と　これから創られる正義

正義の　正義の　正義のヴァルハラ
国境　国境　国境　倣う人たち
滴る　滴る　滴る　水滴
“ごめんなさい！ 何も聞こえません”

咳　咳　咳　気にしないで
国境　国境　国境　弔う人たち
滴る　滴る　滴る　点滴
“ごめんなさい！ 私は何も知りません”

対角線　対角線　対角線　睨み合っているのは
双生児　双生児　双生児　真実かもしれないね
帝都の　帝都の　帝都の　護り神が眠ったら
出口まで　出口まで　出口まで　送っていくよ

時代は　時代は　時代は　繰り返すって
みんな　みんな　みんな　本当は知ってるでしょ？
帝都の　帝都の　帝都の　護り神が眠ったら
出口まで　出口まで　出口まで　送っていくよ`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;