
  console.log(document.querySelector(".left"));
  var left = document.querySelector('.left .btn');
    
  var leftBtn = left.querySelector('h3');

  var right = document.querySelector('.right .btn');

  var rightBtn = right.querySelector('h3');
  var split = document.querySelector('.split');
  var pLeft = document.querySelector('.page-left');
  var pRight = document.querySelector('.page-right');

  console.log(leftBtn);
  console.log(rightBtn);

  left.addEventListener('click', function () {
      if (split.classList.contains('shift-left')) {
          split.classList.remove('shift-left');
      }
      split.classList.toggle('shift-right');

      pLeft.classList.toggle('page-shift-right');
      if (leftBtn.getAttribute("data-text-swap") == leftBtn.innerHTML) {
          leftBtn.innerHTML = leftBtn.getAttribute('data-text-original')
      } else {
          leftBtn.setAttribute('data-text-original', leftBtn.innerHTML)
          leftBtn.innerHTML = leftBtn.getAttribute('data-text-swap');
      }


  });

  right.addEventListener('click', function () {
      if (split.classList.contains('shift-right')) {
          split.classList.remove('shift-right');
      }
      split.classList.toggle('shift-left');
      pRight.classList.toggle('page-shift-left');
      if (rightBtn.getAttribute("data-text-swap") == rightBtn.innerHTML) {
          rightBtn.innerHTML = rightBtn.getAttribute('data-text-original')
      } else {
          rightBtn.setAttribute('data-text-original', rightBtn.innerHTML)
          rightBtn.innerHTML = rightBtn.getAttribute('data-text-swap')
      }

  });
