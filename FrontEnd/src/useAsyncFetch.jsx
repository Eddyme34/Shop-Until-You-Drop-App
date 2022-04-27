// A custom hook that calls fetch.
// A hook is a function that can be called by React components.
// This one is wrapped around the built-in effect hook.  

import React, {useEffect} from 'react';

const useAsyncFetch = function (url, options, thenFun, catchFun ) {
  console.log("in useAsyncFetch");

  // the usual function that does a fetch
  async function fetchData() {
    try {
        const res = await fetch(url, options);
        if (res.status != 200) {
          throw("server refused!")
        }
        const json = await res.json();
        console.log("got fetch response");
        thenFun(json);
      } 
      catch (error) {
        console.log("got fetch error");
        catchFun(error);
      }
  }

  // The effect hook is a function called when the component is created or updated.
  // In this case, "the component" refers to the compoent using 
  // this useFetch hook.
  // Because we give it a second argument of [] (meaning "update when the variables in this empty list change"),
  // this particular effect hook will get run only after the componet is created, not when it is updated.
  // In particular, when the calling component is re-rendered its state variables change,
  // this effect does not get called again. 
  useEffect(function () {
    console.log("Calling fetch");
    fetchData();
  }, []);

}

export default useAsyncFetch;