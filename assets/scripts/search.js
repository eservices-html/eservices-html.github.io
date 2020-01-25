(function () {

    var debounce = function (func, delay) {
        var debounceTimer
        return function () {
            var context = this
            var args = arguments
            clearTimeout(debounceTimer)
            debounceTimer
                = setTimeout(function () { func.apply(context, args) }, delay)
        }
    }
    function getRequest(term, metadata, callback) {
        var url = metadata.url;
        var queryString = Object.keys(term).map(function (key) {
            return key + '=' + term[key]
        }).join('&');
        if (queryString) {
            url = url + '?' + queryString;
            console.log('url', url)
        }
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        res = JSON.parse(xmlHttp.responseText.slice(1, -1));
        callback(res);
    }
    var callingRequest = debounce(getRequest, 300);
    window.nav_search = function (term, metadata, callback) {
        callingRequest(term, metadata, callback);
    }

}());