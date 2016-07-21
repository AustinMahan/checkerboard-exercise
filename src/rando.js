for (var i = 0; i < 81; i++) {
  var randColor = document.createElement('div');
  randColor.style.paddingBottom = '11.1%'
  randColor.style.width = '11.1%'
  randColor.style.background = '#' + parseInt(Math.random() * 10) + parseInt(Math.random() * 10) + parseInt(Math.random() * 10) + parseInt (Math.random() * 10) + parseInt(Math.random() * 10) + parseInt(Math.random() * 10)
  randColor.style.cssFloat =  'left'
  document.body.appendChild(randColor);
};
