
var events = {
  events: {},
  on: function (eventName, fn) {
    /**
     * If there's no eventName defiend in the events property, make the eventName
     * property in the property 'events', and give it an empty array value. 
     */
    this.events[eventName] = this.events[eventName] || [];
    // Push the function to the eventName property in the events property
    this.events[eventName].push(fn);
  },

  off: function(eventName, fn) {
    // If the 'eventName' property exist in 'this.events'
    if (this.events[eventName]) {
      // Run number of times of 'eventName' property length
      for (var i = 0; i < this.events[eventName].length; i++) {
        // If the 'fn' matches any function in eventName's elements
        // remove it.
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },

  emit: function (eventName, data) {
    // If eventName exists in the 'this.events' property
    if (this.events[eventName]) {
      // Loop through that eventName array in 'this.events' property
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};

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

