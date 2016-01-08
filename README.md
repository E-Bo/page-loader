# page-loader
extend <a href="https://github.com/joaopereirawd/fakeLoader.js">fakeLoader.js</a>


#usage
<code>
$('#selector').pageloader();<br/>
...<br/>
  success:function(){<br/>
    ...<br/>
    $('#selector').data('pageloader').hidePageLoader();<br/>
    ...<br/>
  }<br/>
...<br/>
</code>

