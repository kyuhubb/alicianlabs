title = "Children in the Ashes";
original_lyrics = ``;
english_lyrics = `I’m done
I’m so over it
My voice never reaches, no matter how many times I scream

It’s nowhere to be seen
It’s never to be found
This is my whole world

Eyes like this, heart like this
I’ll give you a new soul
“We’re not lonely anymore” “Let’s hold our hands”
“You’re not alone from today on”

Come, let’s get on a monster and put everyone to sleep
And when the white breath envelops everything, your wound will heal
You don’t have to be afraid anymore
You don’t have to be afraid of anything
The time which had been stopped began to proceed slowly

You dropped your head with a gloomy heart
Why, why?
The world has always abandoned us,
so we’re going to make a new world with our own hands

Now, the dream eyelids are open
No one in this world will hurt you
They’re all gone
Don’t cry, don’t cry
Sleep tight, sweetheart
The future you want is just around the corner`;
japanese_lyrics= `もういいよ　もうだめなんだ
何回叫んでも　届くことはない
どこにもいない　きっと見つからない　
ここが　私の世界のすべて

あなたの瞳はこうで心臓はここ
新しい魂を授けよう　
‟もう寂しくないね　ほら手を繋ごう”
‟今日から　君は独りじゃない”

さぁ　怪獣の背中へ飛び乗って　みんな眠らせてしまおう
白い吐息が全てを包むとき　その傷は癒えるだろう
もう恐れなくていい　何も恐れなくていい
止まっていた時間が　ゆっくりと動き出した

君はうつむいた　こころを　真っ暗にして
どうして　どうして
世界はいつも　僕らを見放すから
この手で　新しい世界を作るんだ

さあ　夢の瞼が開いたよ
君を傷つけるものはどこにもいない 　もういない
泣かないで　泣かないで　今はもうお眠りなさい
君が望む未来は　すぐそこに`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;