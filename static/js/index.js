const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const container = document.getElementById('container');

signinBtn.addEventListener('click', function(){
  container.classList.remove('right-panel-active');
});

signupBtn.addEventListener('click', function(){
  container.classList.add('right-panel-active');
});
function addUser(e){
  e.preventDefault();
  console.log(e.target);
const formData = new FormData(e.target);
console.log(formData.get("username"));
fetch('http://localhost:4000/api/adminregister',{
  method:"POST",
  
  body:formData
}).then(async(res)=>{
  const data=await res.json();
  if(res.status==201)
  {
 alert(data.msg)
  }
  else{
    alert(data.error)
  }
})

.catch((error)=>{
  console.log(error);
})
}
document.getElementById("adduser").addEventListener('submit',(e)=>{
  console.log(e);
});