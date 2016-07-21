
for (var i = 10; i < 100; i += 2) {
  var grad1 = document.createElement('div');
  grad1.style.paddingBottom = '11.1%'
  grad1.style.width = '11.1%'
  grad1.style.background = 'linear-gradient(to bottom, #F458' + i + ',#f93f' + [i + 1] + ')';
  grad1.style.cssFloat =  'left'
  document.body.appendChild(grad1);

  var grad2 = document.createElement('div');
  grad2.style.paddingBottom = '11.1%'
  grad2.style.width = '11.1%'
  grad2.style.background = 'linear-gradient(to bottom, #08f7' + i + ',#F458' + [i + 1] + ')';
  grad2.style.cssFloat =  'left'
  document.body.appendChild(grad2);
}
