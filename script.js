let menuList = document.getElementById('menuList');
let nav = document.getElementsByTagName('nav')[0];
let searchInput = document.getElementById('menuSearch');
let screenMobile = window.matchMedia('(max-width: 768px)');
let menuToggle = false;

for (let li of menuList.children) {
  li.firstElementChild.addEventListener('click', function() {
    li.classList.toggle('sub-on');
  });
}

for (let i of menuList.children) {
  for (let j of i.children[1].children) {
    j.firstElementChild.addEventListener('click', menuDropdown);
    j.firstElementChild.addEventListener('click', function() {
      for (let k of menuList.children) {
        k.classList.remove('sub-on');
      }
    });
  }
}

function menuSearch() {
  let input, filter, lisTitle, lisSubTitle, title, subTitle, found, i, j;
  input = searchInput.firstElementChild;
  filter = input.value.toLowerCase();
  lisTitle = menuList.children;

  if (input.value.length > 0) {
    for (i of lisTitle) {
      i.classList.add('sub-on');
    }
  } else {
    for (i of lisTitle) {
      i.classList.remove('sub-on');
      lisSubTitle = i.children[1].children;

      for (j of lisSubTitle) {
        j.style.display = '';
      }
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

    if (found) {
      i.style.display = '';
    } else {
      i.style.display = 'none';
    }
  }
}

function menuDropdown() {
  if (screenMobile.matches) {
    if (!menuToggle) {
      nav.style.height = '100%';
      menuToggle = true;
    } else {
      nav.style.height = '14%';
      menuToggle = false;
    }
  }
}