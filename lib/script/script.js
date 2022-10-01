
"use strict"
//var src = 'http://localhost:1234/api/fetch/';
 var src = 'http://nimo2000.herokuapp.com/api/fetch/';

var exe = function (f) {
     return function() {
         (f||new Function)(this);
     }
}

var d = function (url, responseType,method) {
    method=method||'GET'
    method= method.toUpperCase();

        var xhttp = new XMLHttpRequest();
    xhttp.responseType = responseType||''

    var obj = {
        onloadstart: null,
        onprogress: null,
        onloadend: null,
        response: null,
        setRequestHeader: xhttp.setRequestHeader,
        XMLHttpRequest: xhttp
    }

    xhttp.onloadstart = function () {
        (obj.onloadstart || new Function)()
    };

    xhttp.onprogress = function () {
        (obj.onprogress||new Function)()
    }; 
    
    xhttp[xhttp.onloadend?'onloadend':'onload'] = function () {
        (obj.onloadend||new Function)()
    };

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                obj.response = this.response || this.responseText
            }
        }
            ;
        xhttp.open(method, url, true);
        try {
            xhttp.send();
        } catch (e) {
            if (e) {

                // erro here
               //null
            }
        }
return obj;
}

window.Xfetch = function (url,a,b){
    url = btoa(url);
    var $url = src+ url;
    url = d($url,a,b);

return url;
}

//var v = Xfetch('http://localhost:8080/1234/htdocs/1234/1234/editor%20hight/', 'blob');
//var v = Xfetch('http://localhost:8080/1234/htdocs/1234/1234/editor%20hight/IMG/nimo.icon.svg', 'blob');
//var v = Xfetch('/style/style.css', 'blob');
var v = Xfetch('https://google.com','blob');

v.onloadend = function() {
console.log(v.response);
}

/*
//console.log(Xfetch('/style/style.css'));
//d('http://localhost:1234/api?url=http://localhost:8080/1234/htdocs/1234/1234/editor%20hight/')
*/