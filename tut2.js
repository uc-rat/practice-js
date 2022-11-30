//browser object model 
// window is the main container 
//window.document.getElementById("header") for eg

//window navigator 
// navigator.cookieEnabled
// navigator.appCodeName
// navigator.platform

//alert box
// window.alert("hello");

//confirm box 
// window.confirm("helo");
// //it can be wriiten with window prefix
// if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }

// example function to get a cookie 
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }