var _apikey = "KEY_GOES_HERE";

$(function() {
$.embedly.defaults['key'] = _apikey;

$("body").delegate("#page-engine", "messageShown", function(data){
    $(data.location).find('a').not('div.embed a').embedly();
});

});