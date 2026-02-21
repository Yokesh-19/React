import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] =useState(true);

    useEffect(() =>{
       window.addEventListener("offline", () =>{
          setOnlineStatus(false);
       });

       window.addEventListener("online", () =>{
          setOnlineStatus(true);
       });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;




//addEventListener is a JavaScript method used to:

// 👉 Listen for an event
// 👉 And run a function when that event happens

// Working:-
// You are adding event listeners to the window object.
// When the internet connection goes OFF

// Browser automatically triggers the "offline" event

// Then this function runs

// setOnlineStatus(false) is called

// When internet connection comes BACK

// Browser triggers "online" event

// Function runs

// setOnlineStatus(true) is called

// ✅ "offline" is a built-in browser event name