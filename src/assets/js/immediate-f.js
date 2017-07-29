(function(){
  var data = {
    "@contect": "http://schema.org",
    "@type": "Organization",
    "name": "SERPs.com",
    "url": "http://serps.com",
    "logo": "https://serps.com/app/blah/2016/05/serps-logo-60.png",
    "sameAs": [
      "https://www.facebook.com/serpsapp",
      "https://twitter.com/serpsapp"
    ]};
    var script = document.createElement('script');
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.getElementsByTagName('head')[0].appendChild(script);
    Window.mydata = data;
})(document);
