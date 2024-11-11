//  Debounce -> It limits the execution of function calls 
//  and waits for  certain amount of time before running it again 

// This is html code

{/* <input  
type = "text"
placeholder = "type"
id = "input"
/> */}


// this is javascript code


function useDeBounce (cb, delay) {
    let timerId = null;
    return   ( ...args)  => {
     clearTimeout(timerId);
      timerId = null
      timerId = setTimeout(()=>{
      cb(...args);
      clearTimeout(timerId);
     },delay)
    }
   }
   
   let value = document.getElementById("input");
    let res = useDeBounce(apiCall , 2000);
    value.addEventListener('input', (e) => {
      res( e.target.value);
    });
   
   function apiCall(val) {
   console.log(val);
   }
   


// throttling --> It is a technique to limit the execution of an event handler function even when this event 
// triggers continuously due to user actions.



function useThrottle(cb, delay) {
    let timerId = null;
    return   ( ...args)  => {
      if(!timerId){
       timerId = setTimeout(()=>{
      cb(...args);
      clearTimeout(timerId);
      timerId = null;
     },delay)
     }
    }
   }
   
   let valuee = document.getElementById("input");
    let ress = useThrottle(apiCall , 2000);
    valuee.addEventListener('input', (e) => {
      ress( e.target.value);
    });
   
   function apiCall(val) {
   console.log(val);
   }