const searchEl = document.getElementById('searchInput');

searchEl.addEventListener('keyup', () => {
  let searchQuery = searchEl.value.toLowerCase();
  let allDOMNames = document.getElementsByClassName('name');
  for (let i = 0; i < allDOMNames.length; i++) {
    const currentName = allDOMNames[i].innerHTML.toLowerCase();
    if (currentName.includes(searchQuery)) {
      allDOMNames[i].style.display = 'block';
    } else {
      allDOMNames[i].style.display = 'none';
    }
  }
})