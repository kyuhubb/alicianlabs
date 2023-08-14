title = "Popcorns Falling from Heaven";
original_lyrics = ``;
english_lyrics = `At last, fate has been swung down
It’s the dawn of a new world
The azure sky splits in half
And in time, the spinal fluid of the heaven will pour down upon us

Swallowed by the dark vortex
Watching the countless lights fall down
Though the brilliant-colored memories try to block our path
You’re not the one who’s going through this fate

On the very last day, the world was pitch black
There was no guidance whatsoever
The earthen bunk we once slept
Still alone, sinking in the black rain

A wise said in the distant past
“Everyone is born with love”
As if he’s been through the same pain
Those who are loved by the light will eventually love the light
Then, what of those possessed by the shadows?

I put a bruise on your body
A bruise that can’t be wiped away forever
No matter how much you cry, it’s too late
You see, there’s no one to help you

You’ve responded to my grief
And the hatred of yours brought on this nightmare
Why don’t you just admit it?
That after all, we can’t fight our instincts

Tiny actors are newly sent out one after another
Their curtain is about to rise
Angels in the bleachers, hungry for stimulation
Eating popcorn and venting their stress for their long lasting life

At last, fate has been swung down
It’s the dawn of a new world
The azure sky splits in half
And in time, the spinal fluid of the heaven, the blood of angels, will pour down upon us`;
japanese_lyrics= `ようやく　運命は振り下ろされる
さあ　新しい世界の幕開けだ
紺碧の空は　真っ二つに割れて
やがて　天国の髄液が降り注ぐだろう

暗い渦に呑み込まれる
堕ちていく幾つもの灯りを　眺めながら
極彩色の記憶が　僕らの行く先を阻もうとするけれど
この運命を進むのは　君じゃない

終わりの日　世界は真っ暗で
導きなんてどこにもなかった
いつかの僕らが眠った土の寝台は
今もひとり　黒い雨に沈んでいるだろう

彼方の賢人は言った
誰しもが愛と共に産まれてきたと
まるで　同じ痛みを知っているかのように
光に愛されたものは　やがて光を愛するだろう
それじゃあ　影に取り憑かれたものは?

君の体に痣をつけた
永遠に拭うことのできない痣を
どれだけ泣いても　もう手遅れだ
ほら　誰も助けてくれやしない

君は僕の悲しみに呼応した
そして　君が持つ憎しみが　この悪夢を引き寄せた
いい加減　認めてしまったらどうだい
僕らの本能はそんなものなのだと

次々と送り出されていく　小さな演者たち
じきに　ショーが始まる
観覧席には　刺激に飢えた天使たち
ポップコーンを食べながら　永い時間の憂さ晴らし

ようやく　運命は振り下ろされる
さあ　新しい世界の幕開けだ
紺碧の空は　真っ二つに割れて
やがて　天国の髄液が　天使の血潮が　降り注ぐだろう`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;