var _apikey = "KEY_GOES_HERE";

$(function() {


$("body").delegate("#page-engine", "messageShown", function(data){

    if(getDB('options', 'embedly') == '0')
		return true;
	
	var hash = data.hash;
	var cont_scroll = document.getElementById('chat-content-' + hash);
	var can_scroll = false;
	if(!cont_scroll.scrollTop || ((cont_scroll.clientHeight + cont_scroll.scrollTop) == cont_scroll.scrollHeight))
		can_scroll = true;
        
    var customKey = getDB('options', 'embedly-key');
    if (!customKey || customKey.length == 0)
        customKey = _apikey;
	$(data.location).find('a').not('div.embed a').embedly({key: customKey}).bind('embedly-oembed', function(e, oembed){
	
setTimeout(function(){
	if(can_scroll)
		autoScroll(hash);
	}, 5);


	});
});


$(document).delegate("body", "optionsPopup", function(){
        $('<fieldset><legend>Embedly</legend><label for="embedly">Enable embedly for inline content</label><input id="embedly" type="checkbox" /><label for="embedly-key">Custom embedly api key (http://embed.ly/)</label><input id="embedly-key" type="text" /></fieldset>').appendTo("#conf1");
});

$(document).delegate("body", "loadOptions", function(){
	if(getDB('options', 'embedly') == '0')
		$('#embedly').attr('checked', false);
	else
		$('#embedly').attr('checked', true);
		$('#embedly-key').val(getDB('options', 'embedly-key'));
});

$(document).delegate("body", "saveOptions", function(){
    var embedly = '0';
    if($('#embedly').filter(':checked').size())
		embedly = '1';
	setDB('options', 'embedly', embedly);
    setDB('options', 'embedly-key', $('#embedly-key').val());
    
});

$(document).delegate("body", "storeOptions", function(event){
	event.oType.push("embedly");
    event.oType.push("embedly-key");
    event.oContent.push(getDB('options', 'embedly'));
    event.oContent.push(getDB('options', 'embedly-key'));
});

});
