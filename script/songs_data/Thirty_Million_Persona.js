title = "Thirty Million Persona";
original_lyrics = `Lyrics not found yet`;
english_lyrics = `“Oh, you poor thing!” Tears and sighs spilled over
Cold wind, chilly night, This is a street of liars

Billions of mere mortals have used up all the warmth there long ago

Your persona certainly said, “Humans are free”
I was so disgusted to hear that

Eventually, if everything can be forgiven, if everything can be forgotten
This night, too, it’s just like a ruin where there’s nothing even though I open the door

There’s no point in hiding your face Someone is always watching your true self
Can you stop doing useless resuscitations?

In the end, everyone has to get out of here alone

It’s just like a ruin where there’s nothing even though I open the door

There’s no point in hiding your true feelings Someone is always noticing your true self
Can you stop doing useless resuscitations?

In the end, everyone has to get out of here alone`;
japanese_lyrics= `“ ああ、可哀そう！”　涙と吐息は零れ落ちた
冷たい風　寒い夜　ここは嘘つきたちの街

幾億の空蝉は　そこにあった体温なんて　とうに使い果たしてしまった

君のペルソナは確かに云ったね　“ 人間は自由だ ”　と。
それを聞いて　とってもうんざりしてしまった

結局　全てが赦されてしまうなら　忘れられてしまうなら
この夜も　まるで　扉を開けたってなにもない　廃墟のように

顔を隠したって無駄だよ　いつだって誰かが見ている　本当の君を
無駄な蘇生をするのは　もう　やめてくれないか

最期はみんな　独りでここから抜け出さなきゃいけない

まるで　扉を開けたってなにもない　廃墟のように

本音を隠したって無駄だよ　いつだって誰かが気付いてる　本当の君に
無駄な蘇生をするのは　もう　やめてくれないか

最期はみんな　独りでここから抜け出さなきゃいけない`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;