document.getElementById('userlink').addEventListener("click", function (){
    user=document.getElementById('user').value;
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(json => {
      let Jsondata=json;
      let profileurl=Jsondata.html_url;
      document.getElementById('userlink').href=profileurl;
      
    })
})
