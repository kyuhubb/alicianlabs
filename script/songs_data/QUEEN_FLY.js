title = "QUEEN FLY";
original_lyrics = ``;
english_lyrics = `I am a butterfly in syrup
Today is the day when I have the queen fly eat my soul
By the way, how many butterflies have you eaten up?
Is your tummy still not full?
Come on, let go of me now

This is a very sacred ritual
Cold, dark, and stinking to high heaven
The white fairies begin to dance on my skin
Cleaning up the mess is their specialty

“Let us pray. Oh, Queen Beelzebub, our Savior”

Flocking together, they look for the next sacrifice
They can’t distinguish between left or right anymore

The world didn’t change one bit when I disappeared
Then it’s the same if they disappear, right?
The dress code is “INCORRUPTIBLE”
The secret ballroom is at the bottom of the lake of saliva

I’ll put a curse on the beautiful mind of yours
So that you suffer forever in the afterlife and the next
The mud puppets blindly manipulated
Just like being manipulated by the darkest fate

Sooner or later, I’m going to be a wizard and blow you all away
Sooner or later, I’m going to be a wizard and blow you all away
Sooner or later`;
japanese_lyrics= `僕は蜜漬けにされた蝶
今日は女王蠅さまに　魂を食していただく日
ところで僕は何匹目?
まだあなたのお腹は　満たされない?
ねえ　もういい加減　放してよ

これはとても神聖な儀式
冷たくて暗くて　嫌に臭気が漂う儀式
白い妖精たちが　僕の皮膚の上で踊り出す
後片付けは　彼らの得意技

「祈りを捧げましょう　あぁ　私達をお救いになる　クイーンベルゼブブ」

群れになって　次の生贄を探す
もう　右も左もわからない

僕が消えても　世界は何一つ変わりはしない
それじゃあ彼らが消えても同じだよね?
ドレスコードは”清廉潔白”
秘密の舞踏会場は　唾液のみずうみの底

その美しい心とやらに　呪いをかけてあげる
来世もその次も　ずっとずっと苦しめばいい
盲目的に操られる　泥人形たち
それは暗い運命に操られるのと同じ

僕は直に　君たちを吹き飛ばせる魔法使いになるからね
僕は直に　君たちを吹き飛ばせる魔法使いになるからね
直にね`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;