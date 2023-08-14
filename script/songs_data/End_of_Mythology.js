title = "End of Mythology";
original_lyrics = ``;
english_lyrics = `He was waiting alone at the end of a story
It is sad
In the end, we never got to see the rest of the story

Quill pen fell from the hands, dropped on top of a full moon
Then you said, filled with sadness, I still remember your words

“It’s okay, don’t worry. New day will come”

We are unfortunate, that’s why we are rewriting the story, with this hands, with that hands
I plunged into the night sky with all my might
It’s alright even if you can’t come back, leave behind what you don’t need
Let’s start from here
The mythology that’s been abandoned and neglected`;
japanese_lyrics= `或る物語の終わりで　彼はひとり待っていた
切ないね　結局　その話の続きは見られなかった

羽根ペンが　手から満月の上へ落ちた
その時　君が寂しそうに云った言葉を　今でも覚えているよ

“大丈夫　心配しないで　新しい朝は　必ず訪れるよ”

私たちは不幸だ　だから物語を書き換えるんだ　この手で　その手で
無我夢中で　夜空に飛び込んだ
帰れなくたって良い　必要のないモノは捨てていけ
さぁここから始めよう　途切れたままの神話を`;

english_lyrics = english_lyrics.replaceAll("\n", "<br>");
japanese_lyrics = japanese_lyrics.replaceAll("\n", "<br>");

document.getElementsByTagName("title")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementById("original").innerHTML = original_lyrics;
document.getElementById("english").innerHTML = japanese_lyrics;
document.getElementById("japanese").innerHTML = english_lyrics;