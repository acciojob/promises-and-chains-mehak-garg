//your JS code here. If required.
let age=document.querySelector("#age");
let user_name=document.querySelector("#name");
function func2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age.value>18)
			{
			resolve(`Welcome, ${user_name.value}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${user_name.value}. You aren't old enough.`);
			}
		},4000);
	})
}
async function func(e){
	e.preventDefault();
if(age.value==""||user_name.value=="")
{
	alert("Please enter valid details");
	return;
}
try{
let output=await func2();
alert(output);
}
catch(error){
	alert(error);
}
}















