function changeNick(obj,obj2){
   var a=obj.text1.value;
   
    if(typeof(Storage) == "undefined") {
		alert('localStorage is not accessible');
		return;
	}
    localStorage.setItem("taskList", JSON.stringify(a));


   obj2.text1.value=a;
   obj.text1.value="������� �����...";
}

function show_alert()
{
  if (myCheckBox.checked)
  {
    alert("������ ����������"); }
  else
  {
    alert("������ �� ����������") 
  }  
} 

function WatchHistory(obj,obj2){
   var count=6;
   var i=0;
   while(++i<=count){
      if(document.getElementById("check" + i).checked) {
         obj2.text1.value="������� ��������� �������� "+i+"\n";
      }
   }
}
function WriteMessage(obj,obj2,obj3){
   var a=obj.text1.value;
   var b=obj2.text1.value;
   var c=obj3.text1.value;
   if(typeof(Storage) == "undefined") {
		alert('localStorage is not accessible');
		return;
	}
   obj3.text1.value=c+a+": "+b+"\n";
   localStorage.setItem("taskList2", JSON.stringify(obj3.text1.value));
   obj2.text1.value="������� �����...";
}
function DeleteMessage(obj){
   obj.text1.value="";
}
function ChangeMessage(obj){
   obj.text1.value="� ��� ������� ��� ��� �������((9(";
}
function cl(obj){
   obj.text1.value="";
}
function ncl(obj){
   obj.text1.value="������� �����...";
}

function User(obj,obj2){
     obj.text1.value=restore() ||"������� ����������";
     obj2.text1.value=restore2() ||" ";     
}
function KeepInMemory(obj){
var a=obj.text1.value;
if(typeof(Storage) == "undefined") {
		alert('localStorage is not accessible');
		return;
	}
    localStorage.setItem("taskList", JSON.stringify(a));
}
function restore() {
	if(typeof(Storage) == "undefined") {
		alert('localStorage is not accessible');
		return;
	}
	var item = localStorage.getItem("taskList");
	return item && JSON.parse(item);
}
function restore2() {
	if(typeof(Storage) == "undefined") {
		alert('localStorage is not accessible');
		return;
	}
	var item = localStorage.getItem("taskList2");
	return item && JSON.parse(item);
}

