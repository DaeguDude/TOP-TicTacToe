const Pubsub = (() => {
  let events = {};

  const resetAllEvents = () => {
    // Reset everything except start and restart events...

    // start events
    for(const prop in events) {
      // If it is not 'startTheGame' event, delete it
      if(prop != 'startTheGame' && prop != 'restartTheGame') {
        delete events[prop];
      }
    }
    
    

  }

  const subscribe = (eventName, fn) => {
    console.log(`Someone just subscribed to ${eventName} event.`);
    console.log('\n');
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
    console.log(`Someone just unsubscribed to ${eventName} event.`);
    console.log('\n');
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
    if(data === undefined) {
      console.log(`Making an broadcast about ${eventName}`);
    } else {
      console.log(`Making an broadcast about ${eventName} with ${data}`)
    }
    
    /**
     * forEach executes a provided function for every element in the array
     * This way, you can pass some argument for the functions in the specific
     * event
     */
    events[eventName].forEach((func) => {
      // if data was provided, only then pass it as an argument
      if(data != undefined) {
        func(data);
      } else {
        func();
      }
    })
  }

  const sayEvents = () => {
    console.log(events);
  }

  // This will reset all events
  subscribe('restartTheGame', resetAllEvents);

  return {
    subscribe,
    unsubscribe,
    emit,
    sayEvents,
    resetAllEvents,
  }
})();



