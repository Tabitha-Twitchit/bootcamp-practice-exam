/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  let cancelSubscriptions = function(array){
  // iterate through array
  for (let i = 0; i < array.length; i++){
    // if the index num is odd and price is greater than 10
    if(i % 2 === 0 && array[i].costPerMonth > 10){
      // set cancel to true
      array[i].cancel = true
    }
  }
  };
  // let cancelSubscriptions = function(array) {
  //   for (let i = 0; i <= array.length; i += 2) {
  //     if (array[i].costPerMonth > 10) {
  //       array[i].cancel = true; 
  //     }
  //   }
  //   return array;
  // };

  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  let subscriptionList = function(array){
  //  to recall, reduce is an array method that applies an anonymous 
  // function to each array element. It's arguments are a current obj
  // and an accumulator (icr what order), and can include a seed.

  // I'm fairly sure the problem is how I'm creating the anonymous callback
  // let outputString = array.reduce()
  
  let outputString = array.reduce(function(acc, current){
      acc += current.name + " - " + current.costPerMonth + "\n"
      // console.log(acc);
      return acc;
    },"")
    return outputString;
  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getSubscriptionObject = function(array, name){
  //  base
    if(array.length === 0){
      let outputObj = {};
      outputObj.name = null;
      outputObj.costPerMonth = null;
      return outputObj;
    }

  // recursion
    if(array[0].name === name){
      // something here is failing to create the output obj..
      let outputObj = {};
      outputObj.name = array[0].name;
      outputObj.costPerMonth = array[0].costPerMonth;

      // outputObj.name = outputObj[array[0].name];
      // outputObj.costPerMonth = outputObj[array[0].costPerMonth];
      return outputObj;
    }

  return getSubscriptionObject(array.slice(1), name);
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  //THERE WILL BE A PROBLEM LIKE THIS ON THE EXAM 
  // really watch for what can be hard coded...
  // really look for ways to avoid excess searching. 
  
  let updateSubscription = function(object, updates){
    // console.log(updates);
    for (let i = 0; i < updates.length; i++){

      object[updates[i][0]] = updates[i][1];
    }
    // iterate through the array of arrays, nested for loops
    // for (let i = 0; i < updates.length; i++){
    //   for(let k = 0; k < updates[i].length -1; k++){
    //     object[updates][i][k] = obj[updates][i][k+1];
    //   }
    // }
    // again tthis works on object key assignment, which you clearly 
    // do not have down, so it will be another fail...

    // maybe don't need the nested looping? Just call recursively until 
    // the outer array is exhausted?
    return object;
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getMultipleUsers = function(array){
    // leaving this one very pared down from alex's examples
    // hoping to keep me thinking out of uncluttered variable use.
    
    // filter returns an array that we apply a callback to
    return array.filter(function(current){
      // the callback is simply a return of true, because FILTER
      // uses BOOLS to construct the array
      return current.users.length > 1;
    })
  }; 
  // It doesn't matter what you call your params in callback beyond
  // what they do in the higher order function.
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  // remember, you don't need some push type method when working with
  // these higher order functions, RETURN IS the PUSH. 

  let getUsersArray = function(array){
    return array.map(function(current){
      let newObj = {"name": current.name, "users": current.users};
      return newObj;
    })
  };
  
  
