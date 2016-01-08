# page-loader
extend <a href="https://github.com/joaopereirawd/fakeLoader.js">fakeLoader.js</a>


#usage
<code>
$('#selector').pageloader();
...
  success:function(){
    ...
    $('#selector').data('pageloader').hidePageLoader();
    ...
  }
...
</code>

