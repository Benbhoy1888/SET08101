//Adapted from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
// Could not get to work correctly

<script>
function search() 
{
  var input, filter, ul, li, a, p, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myul");
  li = ul.getElementsByTagName('li');
  p = document.getElementById("myp");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>