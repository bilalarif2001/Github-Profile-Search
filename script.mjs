/* import fetch from "node-fetch"; */

fetch(`https://api.github.com/users/bilalarif2001`)
  .then(response => response.json())
  .then(json => {
    
    let Jsondata=json;
    let name=Jsondata.name;
    let avatar=Jsondata.avatar_url;
    let bio=Jsondata.bio;
    let joined=Jsondata.created_at;
    let joined_Date= new Date(joined).toISOString().substring(0,10).split('-');
    let Year=joined_Date[0];
    let month=joined_Date[1];
    let day=joined_Date[2];
    
    /* document.getElementById('name').textContent=name */
    document.getElementById("avatar").src = avatar;
    name===null? document.getElementById("name").textContent="User Does not Exist" : document.getElementById("name").textContent=name;
    bio===null? document.getElementById("bio").textContent="No Bio-Data to display here" : document.getElementById("bio").textContent=bio;
document.getElementById('joined').textContent="Joined on: "+ day +"-"+ month+"-"  + Year;
   console.log(Jsondata)
    
  })




document.getElementById("fetchbutton").addEventListener("click", function () {
  user=document.getElementById('user').value;

  fetch(`https://api.github.com/users/${user}`)
  .then(response => response.json())
  .then(json => {
    
    let Jsondata=json;
    let name=Jsondata.name;
    let avatar=Jsondata.avatar_url;
    let bio=Jsondata.bio;
    let joined=Jsondata.created_at;
    let joined_Date;
    if (joined){ 
    joined_Date= new Date(joined).toISOString().substring(0,10).split('-');
     Year=joined_Date[0];
     month=joined_Date[1];
     day=joined_Date[2];
    }
   
     else {
      joined_Date= null
    day=null;
    Year=null;
    month=null;
    };
    
    /* document.getElementById('name').textContent=name */
    document.getElementById("avatar").src = avatar;
    name===undefined? document.getElementById("name").textContent="User Does not Exist" : document.getElementById("name").textContent=name;
    bio===undefined? document.getElementById("bio").textContent="No Bio-Data to display here" : document.getElementById("bio").textContent=bio;
   joined===undefined? document.getElementById('joined').textContent="No Joined date to display" : document.getElementById('joined').textContent="Joined on: "+ day +"-"+ month+"-"  + Year;
   console.log(Jsondata)
    
  })
});


