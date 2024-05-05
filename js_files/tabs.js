var tabs = document.querySelectorAll('.tab input');
var descriptions = document.querySelectorAll('.description');

tabs.forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    descriptions.forEach(function(description) {
      description.style.display = 'none';
    });
    console.log(index);
    descriptions[index].style.display = 'block';
  });
});