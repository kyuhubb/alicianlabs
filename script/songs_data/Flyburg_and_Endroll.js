title = "Flyburg and Endroll";
original_lyrics = ``;
english_lyrics = `He got stars in his eyes and sang
“I will be the sun and protect you”

But East wind drowned his words

Children born at the break of day
The town touched on magical square hatches in the course of time and carries them two

“Come with me”
I leave you a big treasure box, completely white terra, and never-ending freedom

Touched hands become wing
Dry words become light
Travel until the sea route goes to the end and they meet again

Breath become birds
Airborne droplets celebrate
Each time beat their wings during ending celebration, the sun rise and remember

“Come with me”
I leave you a big treasure box, completely white terra, and never-ending freedom

Touched hands become wing
Dry words become light
Travel until the sea route goes to the end and they meet again

Breath become birds
Airborne droplets celebrate
Each time beat their wings during ending celebration, the sun rise and remember`;
japanese_lyrics= `少年は目を輝かせて唄った
“ぼくは太陽になって、君を守るんだ”〟と

東の風は　言葉の続きをかき消した

暁の元に生まれた子ども
やがて魔方陣に触れた街は孵化をして　二人を運ぶ

“一緒においで”
大きな宝箱を　真っ白なterra を　そして終りのない自由を君に預けよう

触れた手は　羽になって
渇いた言葉は　光になる
航路がエンドロウルを描いて　また会える日まで旅をする

咲いた息吹は　鳥になって
放った飛沫が　祝福をする
羽音がエンドロウルに響く度　陽は昇って想いを馳せる

“一緒においで”
大きな宝箱を　真っ白なterra を　そして終りのない自由を君に預けよう

触れた手は　羽になって
渇いた言葉は　光になる
航路がエンドロウルを描いて　また会える日まで旅をする

咲いた息吹は　鳥になって
放った飛沫が　祝福をする
羽音がエンドロウルに響く度　陽は昇って想いを馳せる`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;