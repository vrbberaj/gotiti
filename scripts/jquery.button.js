var num_buttons=0;
var currentButton = -1;

var touchScreen = false;
if(navigator.userAgent.match(/(iPad|iPhone|iPod)/i)){
	touchScreen = true;
}

function makeButton(buttonSelector,data,handler){
	//makeButton(buttonSelector,[data],handler)

	//eg: makeButton("#myButton1",{},function(){alert(buttonSelector + ' clicked')});
	
	if(handler){
		//nothing to do
	} else {
		handler = data;
		data = null;
	}
	
	num_buttons++;
	var thisButton = num_buttons;

	var button = $(buttonSelector);
	button.css('cursor','pointer');
	
	var left = parseFloat(button.css('left'));
	var top = parseFloat(button.css('top'));
	var width = parseFloat(button.css('width'));
	var height = parseFloat(button.css('height'));
	
	var scaleFactor = touchScreen ? 1.3 : 1.1;
	
	var newWidth = width * scaleFactor;
	var newHeight = height * scaleFactor;
	var newLeft = left - (newWidth - width) / 2;
	var newTop = top - (newHeight - height) / 2;

	button.mouseenter(function(event){
		currentButton = thisButton;
		button.css('left',newLeft);
		button.css('top',newTop);
		button.css('width',newWidth);
		button.css('height',newHeight);
	});

	button.mousedown(function(event){
		if(event.which!=1)
			return;
		currentButton = thisButton;
		if(touchScreen){
			button.css('left',newLeft);
			button.css('top',newTop);
			button.css('width',newWidth);
			button.css('height',newHeight);
		} else {
			button.css('left',left);
			button.css('top',top);
			button.css('width',width);
			button.css('height',height);
		}
	});
	button.mouseleave(function(event){
		currentButton = -1;
		button.css('left',left);
		button.css('top',top);
		button.css('width',width);
		button.css('height',height);
	});
	button.mouseup(function(event){
		if(event.which!=1)
			return;
		if(currentButton!=thisButton){
			currentButton = -1;
			return; //ignore this event
		}
		currentButton = -1;
		if(touchScreen){
			button.css('left',left);
			button.css('top',top);
			button.css('width',width);
			button.css('height',height);
		} else {
			button.css('left',newLeft);
			button.css('top',newTop);
			button.css('width',newWidth);
			button.css('height',newHeight);
		}
		if(handler)
			handler(data);
	});
}

function makeLinkButton(buttonSelector,url,target){
	makeButton(buttonSelector,function(){
		//document.location.href = url;
		window.open(url,target);
	});
}
