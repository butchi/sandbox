document.addEventListener( "DOMContentLoaded", function() {
  var sourceShare = '<div class="line-it-button" data-lang="ja" data-type="【デザイン左から順にshare-a〜share-eの文字列】" data-url="【シェアするURL】" style="display: none;"></div>';
  var sourceFriend = '<div class="line-it-button" data-lang="ja" data-type="friend" data-lineid="【@で始まるLINE ID】" data-count="（友だち数を表示する場合）true" data-home="（ホームへの移動ボタンを表示する場合）true" style="display: none;"></div>';
  var sourceLike = '<div class="line-it-button" data-lang="ja" data-type="like" data-url="【いいねするページのURL】" data-share="（いいねと共にシェアする場合）true" data-lineid="（友だち追加ボタンのオプションありの場合）@lineteamjp" style="display: none;"></div>';

  var textareaHTML = '<textarea class="elm-textarea" cols="80" rows="5"></textarea>'

  document.querySelectorAll('.share-source').forEach(function(elm, id) {
    var source = elm.getAttribute('data-source');
    var textareaElm;

    elm.innerHTML = textareaHTML;
    textareaElm = elm.querySelector('textarea');

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
