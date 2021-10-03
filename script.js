let menuList = document.getElementById('menuList');

for (let li of menuList.children) {
  li.firstElementChild.addEventListener('click', function() {
    li.classList.toggle('sub-on');
  });
}

console.log(menuList.getElementsByTagName('li'));

function menuSearch() {
  let input, filter, lis, li, title, subTitle, i;
  input = document.getElementById('menuSearch');
  filter = input.value.toLowerCase();
  lis = menuList.children;

  if (input.value.length > 0) {
    for (li of lis) {
      li.classList.add('sub-on');
    }
  } else {
    for (li of lis) {
      li.classList.remove('sub-on');
    }
  }

  for (li of lis) {
    title = li.firstElementChild;
    subTitle = li.children[1].children[0].children[0];
    if (subTitle.innerHTML.toLowerCase().indexOf(filter) > -1 || title.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li.style.display = '';
    } else {
      li.style.display = 'none';
    }
  }
}