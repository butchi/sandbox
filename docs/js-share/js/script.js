(function likeButton() {
  var likeElm = document.createElement('div');
  likeElm.innerHTML = '<div class="fb-like" data-action="like" data-href="http://butchi.github.io/sandbox/js-share/" data-layout="button_count" data-share="false" data-size="small"></div>';

  window.addEventListener('load', function() {
    document.querySelector('.facebook').appendChild(likeElm);

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1025731387449767',
        xfbml      : true,
        version    : 'v2.8'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.8&appId=1025731387449767";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
})();

(function tweetButton() {
  window.addEventListener('load', function() {
    var tweetElm = document.createElement('div');
    tweetElm.innerHTML = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://butchi.github.io/sandbox/js-share/" data-text="JS share button" data-lang="ja">ツイート</a>';

    document.querySelector('.twitter').appendChild(tweetElm);

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  });
})();

(function lineButton() {
  var scriptElm = document.createElement('script');
  scriptElm.src = '//scdn.line-apps.com/n/line_it/thirdparty/loader.min.js';
  document.body.appendChild(scriptElm);

  window.addEventListener('load', function() {
    var lineElm = document.createElement('div');
    lineElm.innerHTML = '<div class="line-it-button" style="display: none;" data-type="share-a" data-lang="ja" ></div>';

    document.querySelector('.line').appendChild(lineElm);

    LineIt.loadButton();
  });
})();

(function plusoneButton() {
  var scriptElm = document.createElement('script');
  scriptElm.src = 'https://apis.google.com/js/platform.js';
  scriptElm.innerHTML = "{lang: 'ja', parsetags: 'explicit'}";
  document.body.appendChild(scriptElm);

  window.addEventListener('load', function() {
    var gplusElm = document.createElement('div');
    gplusElm.innerHTML = '<div class="g-plusone" data-size="medium"></div>';

    document.querySelector('.gplus').appendChild(gplusElm);

    gapi.plusone.go();
  });
})();
