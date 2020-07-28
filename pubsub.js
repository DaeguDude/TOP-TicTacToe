const Pubsub = (() => {
  let events = {};

  const subscribe = (eventName, fn) => {
    // If events already exist
    if(events[eventName] != undefined) {
      // Pass the events[eventName] value, thus passing the array
      events[eventName] = events[eventName];
    } else {
      events[eventName] = [];
    }
    /**
     * Push the function to that events[eventName]
     * Now It will collect the functions for that specific event
     */
    events[eventName].push(fn);  
  }

  const unsubscribe = (eventName, fn) => {
    // If that specific event exist in pubsub,
    if(events[eventName] != undefined) {
      // We will loop through that event and check the specified
      // function exist there
      for(let i = 0; i < events[eventName].length; i++) {
        // If it does, let's remove that function
        if(events[eventName][i] === fn) {
          events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  const emit = (eventName, data) => {
    /**
     * forEach executes a provided function for every element in the array
     * This way, you can pass some argument for the functions in the specific
     * event
     */
    events[eventName].forEach((func) => {
      func(data);  
    })
  }

  const sayEvents = () => {
    console.log(events);
  }

  return {
    subscribe,
    unsubscribe,
    emit,
    sayEvents
  }
})();

