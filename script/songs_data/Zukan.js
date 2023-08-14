title = "Zukan";
original_lyrics = ``;
english_lyrics = `A row of specimens in a white room
We sleep

A end of edification and a dead end
Slowly reduced to ashes

Expressionless, Sterile room
We sleep

Time, After leaving the shell
Let’s bid farewell

Infinite journey, Floating feathers
Feeling of being unwound

To be spellbound in the name of a soul
Then human is blessed with eternity

An organized pictorial books
Someday It may forgive me to think of something

Someday Someday Someday…`;
japanese_lyrics= `白い部屋に　並んだ標本
私たちは　眠る

教化の果てと　行き止まり
ゆっくりと灰になる

無表情　無菌室
私たちは　眠る

時間　抜け殻を置いたら　お別れをしましょう

無窮の旅　たゆたう翅
ほどけたままの感覚

魂の名のもとに　魔法にかかる
そうして　人は　永遠を授かる

整理された図鑑
何かを想う事を　いつか　赦してくれるのかもしれない

いつか　いつか　いつか…`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;