# page-loader
extend <a href="https://github.com/joaopereirawd/fakeLoader.js">fakeLoader.js</a>

<h1>usage</h1>
<pre>
<code>
  $('#selector').pageloader();
  ...
    success: function(){
      ...
      $('#selector').data('pageloader').hidePageLoader();
      ...
    }
  ...
</code>
</pre>

