let menuList = document.getElementById('menuList');

for (let li of menuList.children) {
  li.firstElementChild.addEventListener('click', function() {
    li.classList.toggle('sub-on');
  });
}

function menuSearch() {
  let input, filter, lisTitle, lisSubTitle, title, subTitle, found, i, j;
  input = document.getElementById('menuSearch');
  filter = input.value.toLowerCase();
  lisTitle = menuList.children;

  if (input.value.length > 0) {
    for (li of lisTitle) {
      li.classList.add('sub-on');
    }
  } else {
    for (li of lisTitle) {
      li.classList.remove('sub-on');
    }
  }

  for (i of lisTitle) {
    found = false;
    title = i.firstElementChild;
    lisSubTitle = i.children[1].children;

    if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
      found = true;
    } else {
      for (j of lisSubTitle) {
        subTitle = j.firstElementChild;
        if (subTitle.innerHTML.toLowerCase().indexOf(filter) > -1) {
          j.style.display = '';
          found = true;
        } else {
          j.style.display = 'none';
        }
      }
    }

    for (j of lisSubTitle) {
      j.style.display = '';
    }

    if (found) {
      i.style.display = '';
    } else {
      i.style.display = 'none';
    }
  }
}