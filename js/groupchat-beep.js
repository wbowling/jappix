$(function() {


$("body").delegate("#page-engine", "messageShown", function(data){

    if(getDB('options', 'groupchat-beep') == '0')
		return true;
		
	var chat_switch = '#page-switch .';
	var tested = chat_switch + data.hash;
	var active = $(tested).hasClass('activechan');
	
	if(!active || !isFocused()) {
		if (data.chatType == 'groupchat')
		{
	    		soundPlay(1);
		}
	}
});


$(document).delegate("body", "optionsPopup", function(){
        $('<fieldset><legend>Groupchat beeps</legend><label for="groupchat-beep">Play a sound when there is a new message in groupchats</label><input id="groupchat-beep" type="checkbox" /></fieldset>').appendTo("#conf1");
});

$(document).delegate("body", "loadOptions", function(){
	if(getDB('options', 'groupchat-beep') == '0')
		$('#groupchat-beep').attr('checked', false);
	else
		$('#groupchat-beep').attr('checked', true);
});

$(document).delegate("body", "saveOptions", function(){
    var groupchatBeep = '0';
    if($('#groupchat-beep').filter(':checked').size())
		groupchatBeep = '1';
	setDB('options', 'groupchat-beep', groupchat-beep);
    
});

$(document).delegate("body", "storeOptions", function(event){
    event.oType.push("groupchat-beep");
    event.oContent.push(getDB('options', 'groupchat-beep'));
});

});
