title = "Urxbxrxs";
original_lyrics = ``;
english_lyrics = `Wriggling neurons deep in my splitting head
Swimming lights ride the synapse to the next star
Consciousness has lost its way, wandering between dimensions

-Whose sins are those?
I hear a sad voice from afar

Planetary systems guided by revelation, the stellar heart
Go through the circle of elementary particles at play
We find a labyrinth of mirrors that mocks even every meaning

I silently bite down the loud order
Like a beast with its fangs pulled out

In the silence of the night, a slight distortion is born
Peeking through it are the memories of the past
Gazing absent-mindedly at an innocent figure
I turned my eyes away from the figure begging for help

No matter how much I run, you keep chasing me, unnaturally hiding your face
Hey, who are you to strangle me?

Wriggling neurons deep in my splitting head
Swimming lights ride the synapse to the next star
Consciousness has lost its way, wandering between dimensions

-Whose sins are those?
I hear a sad voice from afar

Planetary systems guided by revelation, the stellar heart
Go through the circle of elementary particles at play
We find a labyrinth of mirrors that mocks even every meaning

I silently bite down the loud order
Like a beast with its fangs pulled out

Like plankton swaying in the fate of being swallowed
Overwhelmed and at loss
In this huge circle created by power
Sorrowing, Smiling, Just shedding drops of water that only dry up and disappear`;
japanese_lyrics= `割れるような頭の奥　蠢くニューロン　泳ぐ光は　シナプスに乗り　次の星へ
意識は行き場を失くし　次元の狭間を彷徨うのだ

－その罪は誰のもの
遠くから聴こえる　悲しい声

黙示が導く惑星系　恒星の心臓　素粒子の戯れる輪を潜れば
そこは　意味すら嘲る　合わせ鏡の迷路

高らかな命令を　静かに噛みしめる
牙を抜かれた　獣みたいに

夜の静けさに　僅かな歪みが生まれる
そこから覗くのは　いつかの記憶たち
あどけない人影を　無心に見つめては
助けを乞う姿から　目を逸らした

どれだけ逃げても追いかけてくる　不自然にその顔を隠して
ねえ　この首を絞める　君は誰

割れるような頭の奥　蠢くニューロン　泳ぐ光は　シナプスに乗り　次の星へ
意識は行き場を失くし　次元の狭間を彷徨うのだ

－その罪は誰のもの
遠くから聴こえる　悲しい声

黙示が導く惑星系　恒星の心臓　素粒子の戯れる輪を潜れば
そこは　意味すら嘲る　合わせ鏡の迷路

高らかな命令を　静かに噛みしめる
牙を抜かれた　獣みたいに

それは　呑み込まれる運命の中　揺蕩うプランクトン
打ちひしがれながら　成す術もない
何かによって構築された　この巨大な輪の中で
憂いたり　微笑んだり　乾いて消えるだけの水滴を流すだけ`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;