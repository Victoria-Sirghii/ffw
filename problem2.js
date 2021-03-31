
let obj = parseUrl("http://ffwagency.com/do/any.php?a=1#foo");

function parseUrl(url){
  return new URL(url);
}
