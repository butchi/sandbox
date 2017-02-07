document.addEventListener( "DOMContentLoaded", function() {
  var sourceClassic = '<a href="http://line.me/R/msg/text/?【送る文字列をパーセントエンコーディング（例: http%3A%2F%2F）で指定】"><img src="【画像のパス】" width="【画像の横幅】" height="【画像の縦幅】" alt="LINEで送る" /></a>'
  var sourceShare = '<div class="line-it-button" data-lang="ja" data-type="【デザイン左から順にshare-a〜share-eの文字列】" data-url="【シェアするURL】" style="display: none;"></div>';
  var sourceFriend = '<div class="line-it-button" data-lang="ja" data-type="friend" data-lineid="【@で始まるLINE ID】" data-count="（友だち数を表示する場合）true" data-home="（ホームへの移動ボタンを表示する場合）true" style="display: none;"></div>';
  var sourceLike = '<div class="line-it-button" data-lang="ja" data-type="like" data-url="【いいねするページのURL】" data-share="（いいねと共にシェアする場合）true" data-lineid="【友だち追加ボタンのオプションありの場合@で始まるLINE ID】@lineteamjp" style="display: none;"></div>';

  var textareaHTML = '<textarea class="elm-textarea" cols="80" rows="5"></textarea>'

  document.querySelectorAll('.share-source').forEach(function(elm, id) {
    var source = elm.getAttribute('data-source');
    var textareaElm;

    elm.innerHTML = textareaHTML;
    textareaElm = elm.querySelector('textarea');

    if(source === 'classic') {
      textareaElm.textContent = sourceClassic;
    }
    if(source === 'share') {
      textareaElm.textContent = sourceShare;
    }
    if(source === 'friend') {
      textareaElm.textContent = sourceFriend;
    }
    if(source === 'like') {
      textareaElm.textContent = sourceLike;
    }
  });
});
