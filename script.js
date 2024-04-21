//your JS code here. If required.
function timeCount(){
	let  dt=new  Date();
	let day=dt.getDate();
	let month=dt.getMonth();
	let year= dt.getFullYear();
	let hr=dt.getHours();
	let min=dt.getMinutes();
	if(min<10)
	{
		min="0"+min;
	}
	let sec= dt.getSeconds();
	if(sec<10)
	{
		sec="0"+sec;
	}
	let p_js=document.querySelector("#timer");
	let dateStr=month+"/"+day+"/"+year;
	let meridium= hr>=12 ? "PM" : "AM";
	let timeStr= "";
	if(hr>12)
	{
		hr=Math.floor(hr%12);
	}
	if(hr<10)
	{
		hr="0"+hr;
	}
	timeStr= hr+":"+min+":"+sec+" "+meridium;
	p_js.innerHTML= dateStr+", "+timeStr;
	setTimeout("timeCount()",1000);
}