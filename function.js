
 function myfun()
 {
     var a,b,c;
     a = (document.getElementById("num1").value);
     b = (document.getElementById("num2").value);

   
   if(a === '' || a == null )  //condition
   {
       alert('Put the values');
   }
   else if(isNaN(a))
   {
       alert('These are not integer , put integer values');
   }
   else if(isNaN(b))
   {
       alert('These are not integer , put integer values');
   }
     else
     {
         c = a % b;

         document.getElementById("demo").innerHTML = "Modulo :<h1> " + c + "</h1>"
     }
    


 }

 //another refresh function

