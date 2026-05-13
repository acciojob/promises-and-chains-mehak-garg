//your JS code here. If required.
let age=document.querySelector("#age");
let name=document.querySelector("#name");
function func2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age.value>18)
			{
				
				resolve("Welcome, . You can vote.");
			}
			else{
				reject("Oh sorry . You aren't old enough.");
			}
		},4000);
	})
}
async function func(){
if(age.value=""||name.value="")
{
	alert("Please enter valid details.");
}
	try{
	let output=await func2();
alert(output);
}
catch(e){
	alert(e);
}
}