var donnees= new XMLHttpRequest();
donnees.onreadystatechange=function(){
if(donnees.readyState == 4){
if(donnees.status==200)
alert(donnees.responseText);
else
alert("error");
}
else
if(donnees.readyState==1){
alert("ouverte");
}
else
if(donnees.readyState==3){
alert("Reçu");
}

};



donnees.open('GET','http://api.transilien.com',true,'tnhtn218','2cAmwT93');
donnees.send();


$.ajax
({
  type: "GET",
  url: "http://api.transilien.com/gare/87681387/depart/",
  async: true,
  crossDomain:true,
  headers: {
    "Authorization": "Basic " + btoa("tnhtn218" + ":" + "2cAmwT93")
  },
   xhrFields: {
withCredentials: true
},
  success: function (data){
    console.log(data);
    alert('Thanks for your comment!');  
  }
  ,
  complete: function (data){
    console.log(data);
  }
});
