oblako.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    oblako.style.left = timePassed / 5 + 'px';

    if (timePassed > 20000) clearInterval(timer);

  }, 20);
}
