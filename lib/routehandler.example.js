module.exports = function() {
console.log(`



// any blocking threads should be added to a jobQueue server, espicially asynchronous tasks

//   routingSyntax: Function,
//   // quick setup
//   routesMirrorPublicMethods:                Boolean,
//   routesMirrorFrontendComponents:           Boolean,
//   routesMirrorHtmlPages:                    Boolean,
//   routesMirrorWebsiteActions:               Boolean,
//   routesMirrorGeneralPurposeActions:        Boolean,
//   routesMirrorFrontendContent:              Boolean,  
//   // ???         
//   cruds:                                    Boolean,        // db calls authorized attributes/schemas
//   redirects:                                Object,         // route forwarding to other routes
//   page:                                     Object,         // changes website page
//   monitorclient:                            Object,         // server notified by clientside actions specifically programmed by site maintainer
//   custom:                                   Object,         // db calls special/custom actions
  
//   routeHandlers:   Object        // can also be an object

  // purpose  // why this route is different?
  // directions // each request has a journey // one-way, return trip, roundtrip
  // Handshakes // if this handshake, do what different // request headers affected
  // GlobalHTTP Methods // pre, dur, post
  // predefined routes // cruds, upload, download, page, redirects, monitorclient

//   route handler interface
//   - validation:   (validates param inputs)               // middleware validates? Validates distributed? routeHandler validates? only DB validates?
//   - sync:         (synchronous / asynchronous)           // all functions aynchronous, promises returned
//   - stages:       (before, during, after)                // event must happen before, after such event
//   - on:           (success, error, await, service call)  // when this event happens, do this
//   - journey:      (mentioned above)                      // packets approved destination
//   - jobqueue      (inserting/removing) queues            // on event, insert task to jobQueue

  // example routes

  /** Route Handlers Design Philisophy
   * 
   * *** everything is specification input. Writing Code is no longer needed. This allows the entire system to grow upon new versioned code.
   * One moment, you might have brilliant optimization idea, but coded everything instead of defining the routers expectations
   * 
   * *** asynchronous writing appears as synchronous like inputs
   * *** all expectations mentioned in config block
   * *** db requested information independent from database models changes ... versioning does not break changes.
  */
  let rh = {
    // all events can be globally and specifically tweaked
    route:    "/reporting", // ?action=stepsincrement&orderID=1010101
    verb:     "get",
    protocol: "sockets",
    journey:  "one-way; receiver <= browser ",   // client/server can get tricky to maintain with a distributed server model
    async:    false,                             // execute asynchronously, likely gets added to jobQueue
    // stages:   undefined,
    params:  { // query params
      // allowed combinations of params // the param values will be mentioned in params
      0: ['action', 'orderID']
      // in this case, this route only needs one param combination, which is recommended.
    },
    tasks: [  
        // tasks will be executed synchronously on every success is async false
        // req, reply object passed into each function
        // Question: When are tasks deemed independent execution?
        validate,                 // middleware is considered validations whether or not it really is.
        db,
        notfiyClients
    ],
    db: {
      'increment order phase': {},
      'check user wants notification': {},
    },
    /** QUESTION ... Fault Tolerant Systems
     *  
     * ** Reversing effects upon error?       Do I save data to db
     * ** How to revert changes?
    */
    on: {
      /** RouteHandler event handler system 
       * 
       * ** every core method specifically mentioned is tweakable
       * ** every programmers inserted method is tweakable , such as middleware applied
       * 
       * core methods events provided / tweakable
       * 
       * ----NAME---------------CONJUNCTIONS--------------------NOTES----------------------------
       * 
       * ** finish          alone, suffixes word          once all tasks finished
       * ** error           alone, suffixes word          error alone is absolutely last error, any suffixed word executes before alone error
       * ** error-client    alone
       * ** error-internal  alone
       * 
       * ** await           alone, suffixes word          alone means on any await, suffixes references specific
       * ** sync            alone, suffixes word          alone means on any sync,  suffixes references specific
       * 
       * ** params          alone, suffixes word
       * ** validate        alone, suffixes word
       * ** validate-params alone
       * ** validate-interface alone, prefixes
       * ** validate-ranges    alone, prefixes
       * 
       * ** task          alone, prefixes word         alone means any task,  prefixes means specific task
       * ** db              alone, prefixes word         alone means any db,    prefixes means specific db action
       * 
       * Are DB's inhouse and or third party?
       * Are API's considered DB's? ... 
       * 
       * Everything is interacted with is considered an API
       * 
       * So, if our main purpose of an API is to store, retrieve, and mode data, then just reference build an adapter in DB.
       * If our intention with an API is to notify it, then reference it as one way.
       * We could just say, _3rdparty()
       * 
       * /// DB ///
       * 
       * // db references any database ... all data models are versioned to prevent breaking changes.
       * // db will decide what is CACHE, RAM, and STORAGE.
       * ** db              alone, prefixes word         alone means any db s, prefixes mean specific task
       * ** db.query
       * ** db.unknownmethod for now
       * 
       * // the alowwed params can indicate what is passeable to the db.
       * // server can pass an action, never needs to know everything happening, a backend adapter will handle the complicated db queries.
       * db.query('fetch', 'user')
       * db.query('create', 'user', userOBJ)
       * db.query('update', 'user', userOBJ)
       * db.query('delete', 'user', userOBJ)
       * 
       * // let's say for example, we update a chat message. The User and chat message are in sep models. Just tell the server to update the chat model. The backend needs to figure out everything else.
       * 
       * db.query('update', 'chat', chatOBJ)) // new chat msg, new chat session, new person joined chat, ETC.
       * // backend just say, this is not allowed to be updated unless ... instead of programming individual functions
       * // Why ... because, writes are easy peasy for loops. All of our code requires validations, so whichever validation passes happens.
       * // Basically, any data transmitted by the client is to be untrusted, forget about the routes, they can be fooled, only thing that matters is does the data in the database agree with the action.  Who cares if the user decides to send a delete request on there account if they pass it through the chat route, find by me, regardless of our defenses, all of our defenses rely on ip and cookie session verifications.
       * // honestly, a chat record should be created once. Upon User Registration. Update and delete should remain available. Never delete the chat model unless User deletes themself.

       * db.query('create')
      */
        'finish':               function() {reply.send('finished tasks');},     // after all tasks finished                            
        'error':                function(err) {reply.error(err)},   // last error handler
        // 'error-client':         function() {},  // clients fault
        // 'error-internal':       function() {},  // internal server error
        // '<task>-error':           function() {},
        // '<task>-finish':          function() {},
        // '<task>-await':           function() {},
        // '<task>-sync':            function() {},

        // 'params-error':           function() {}
        // 'params-finish':          function() {}

        'validate-error':               function(err, sendError) {log(err); sendError(err)},
        'validate-finish':              function(req, res)       {},

        'db-error':   function(req, sendError) {sendError(err)},
        'db-finish':  function(req, res)       {sendNotificationToUser()}
    }
  }



`);
};