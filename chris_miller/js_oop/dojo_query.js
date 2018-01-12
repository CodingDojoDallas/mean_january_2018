$Dojo = 
{
	($Dojo()
	{
		return {click(), hover()};
	}
	function click(callback)
	{

	}

	function hover(hoverIn, hoverOut)
	{
		hoverIn.mouseover;
		hoverOut.mouseout;
	}
}

document.getElementById // (makes a DOMobject accessible to JavaScript) takes in one parameter which is the id for a particular element
DOMobject.addEventListener //takes in 2 parameters 1) the event 2) the callback function (Note that this method must be run on an html element)
//Also note that you will need to pay attention to the following built in events from the DOM
DOMobject.click
DOMobject.mouseover
DOMobject.mouseout
