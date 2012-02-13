document.getElementById('entries').addEventListener("DOMNodeInserted", function(e) {
  var plusone = e.target.getElementsByClassName('item-plusone');
  if (plusone.length > 0) {
    e.target.removeChild(plusone[0]);
  }
});