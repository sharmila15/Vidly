//var username = "Marlabs",
//phone = 233423454,
//active = true;

////typeof (username);
////console.log(typeof (username));
//var arr = ['User1', 'User2','User 3','User4'];
//len = arr.length;

//var user_obj = {
//    "username": "marlabs",
//    "phone": 434343,
//    "active":true
//};

//arr[1] = "New user";

//arr.push('User 5');
//arr.push('User 6');
//arr.shift();
//arr.pop();
//arr.splice(1, 1);
//arr.splice(arr.indexOf('User 3'), 1);
//for (var i = 0; i <len; i++) {
//console.log(arr[i]);
//}
//console.log(arr);
//console.log(user_obj);
//var objkey = 'username';
//console.log(user_obj.username);
////console.log(user_obj[objkey]);

//for (key in user_obj)
//{
//    console.log(user_obj[key]);
//}

//Array.isArray(arr);

//var obj = {
//    "username": "marlabs",
//    "addr": {
//        "city": "Piscataway",
//        "state":"NJ",
//    "country":"Us"
//}
//};
//var newobj = Object.create(obj);
//var newobj = Object.assign({}, obj);
//newobj.username = "Maerlabs updated";
////console.log(obj);
//var objstr = JSON.stringify(obj);
//console.log(objstr);
//console.log(JSON.parse(objstr));

//jan 30

// Code goes here

/*var obj = {
    "username": "marlabs",
    "addr": {
        "city": "Piscataway",
        "state":"NJ",
    "country":"Us"
}
};
//var newobj = Object.create(obj);
//var newobj = Object.assign({}, obj);
//var newobj = JSON.parse(JSON.stringify(obj));
//newobj.addr.city="New city";
//newobj.username = "Maerlabs updated";
//console.log(obj);
//var objstr = JSON.stringify(obj);
//console.log(objstr);
//console.log(JSON.parse(objstr));

//var str="Username is arun and arun works for marlabs";
//str=str.replace('/arun/g','arun123');
//console.log(str);

function fn1(username){
  return 'User name is ' + username;
}

var fn=function(){
  return'fn called';
  
}

//var resp=fn1('marlabs');
//console.log(resp);

console.log(fn());

function looparr(arr, callbackFn){
  var len= arr.length;
  for(var i=0;i<len;i++){
   callbackFn(arr[i]);
  }
}
looparr(['User1','User2','User3'], function(data){
  console.log(data);
});

(function(){
  console.log('Function called by itself');
})();

setTimeout(function(){
  console.log('Hello');
},2000);

var cntr=0;
var interval_var= setInterval(function(){
  ++cntr;
  console.log(cntr);
},2000);

clearInterval(interval_var);*/

/*var elem=document.getElementById('p_elem');

elem.innerHtml="Content- updated";
var elem2=document.getElementsByTagName('p');
len= elem2.length;
for(var i=0;i<len;i++)
{
  elem2[i].innerHTML = "Content updated for div"+i;
}*/

/*function clickFn(){
  var txtbx_value=document.getElementById('txtbx').value;
  alert('Value='+ txtbx_value);
}
document.getElementById('btn').addEventListener('click',clickFn);

document.getElementById('btn2').addEventListener('click',function(){
document.getElementById('btn').removeEventListener('click', clickFn);
});*/

/*function newFn(callbackFn){
  setTimeout(function(){
    //return 'Hello Everyone';
    callbackFn('Hello Everyone');
  },2000);
}

//console.log(newFn());
newFn(function(data){
  console.log(data);
});*/

function newFn() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hello Everyone');
        }, 2000);
    });

    return promise;

}

var fn_resp = newFn();
fn_resp.then(function (data) {
    console.log('data=' +
     data);
},
   function (err) {
       console.log('Err=' + err);

   });


fn_resp.then(function (data) {
    console.log('data=' + data);

})
.catch(function (err) {
    console.log('Err=' + err);
});
//console.log(fn_resp);

