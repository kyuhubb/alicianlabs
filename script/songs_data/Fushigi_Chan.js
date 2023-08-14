title = "Fushigi Chan";
original_lyrics = ``;
english_lyrics = `Worship him! The antinomic creator of all things
With breath like a insect and arms like bones, we’ll be altar decorations
Glorify him! The idealist who preaches paradise with a forked tongue
This hell is perfect for us
The storyline is just as plotted out
How ridiculous

Hyenas in human skin, singing hymns, intoxicated by their own majesty
“Give me more, it’s not enough.”
A pile of corpses in their dwelling, a bloody dinner party with yesterday’s friends
“Give me more, it’s not enough.”

Throwing the dice to the universe, throwing the dice to the universe
Again and again, until it rolls a 7
Throwing the dice to the universe, throwing the dice to the universe
Again and again, until it rolls a 7

Countless wounds open up and a number of flashbacks rise up
The cacophonies wriggle and disturb my reason
Somebody take my breath away
I don’t want to be in this place anymore
My self-portrait is being painted over

Worship him! The antinomic creator of all things
With breath like a insect and arms like bones, we’ll be altar decorations
Glorify him! The idealist who preaches paradise with a forked tongue
This hell is perfect for us
The storyline is just as plotted out
How ridiculous`;
japanese_lyrics= `祀りたまえ！　アンチノミーな万物の創造主を
虫の息で　骨みたいな腕で　祭壇の装飾となるのさ
崇めたまえ！　二枚舌で楽園を説く理想論者を
こんな地獄は僕達にぴったり　筋書き通りのストーリーだね
なんて滑稽だ

人の皮を被ったハイエナ達　讃美歌を歌い　威光に酔いしれる
“もっと欲しい　まだ足りないよ”
棲みかには骸の山　昨日の友と　血まみれの晩餐会
“もっと欲しい　まだ足りないよ”

宇宙に賽を投げて　宇宙に賽を投げて
7の目が出るまで繰り返そう
宇宙に賽を投げて　宇宙に賽を投げて
7の目が出るまで繰り返そう

無数の傷口が開き　幾つもの走馬灯が立ち昇る
蠢いて　理性をかき乱す　不協和音
誰か息の根を止めてよ　もうこんな所にいたくないよ
自画像が塗りつぶされていく

祀りたまえ！　アンチノミーな万物の創造主を
虫の息で　骨みたいな腕で　祭壇の装飾となるのさ
崇めたまえ！　二枚舌で楽園を説く理想論者を
こんな地獄は僕達にぴったり　筋書き通りのストーリーだね
なんて滑稽だ`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;