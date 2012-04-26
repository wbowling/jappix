$(function() {

$("body").delegate("#page-engine", "createChat", function(data){
       var $input = $('#' + data.id + ' .message-area');
       $input.data('history', new Array());
       $input.data('current', 0);
       $input.keydown(function(e){

				if (e.keyCode == 38) { 
					//alert( "up pressed" );
					var history = $(this).data('history');
					var current = $(this).data('current');
					if (current == history.length)
					{
						$(this).data('temp', $(this).val());
					}
					if (current > 0)
					{
						current = current -1;
					}
					$(this).val(history[current]);
					$(this).data('current', current);
				}
				else if (e.keyCode == 40) { 
					var history = $(this).data('history');
					var current = $(this).data('current');
					current = current + 1;
					if (current < history.length)
					{						
						$(this).val(history[current]);
					} else if (current >= history.length)
					{
						current = history.length;
						$(this).val($(this).data('temp'));
					}
					$(this).data('current', current);
				}
				else
				{
					if ($(this).val())
					{
						$(this).data('temp', $(this).val())
					}
				}

			});
});
	

$("body").delegate("#page-engine", "preSendMessage", function(data){
				var $input = $('#' + data.hash + ' .message-area');
				var text = $input.data('temp');
				if (text)
				{
					var history = $input.data('history');
					history.push(text);
					$input.data('history', history);
					$input.data('current', history.length);
				}
});

});
