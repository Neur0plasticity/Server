module.exports = function ServerRoutes(configRoutes) {
    let routesOBJ = configRoutes;
    // let sd = static_data    = {};
    // let sm = static_methods = {};
    let ms = methods = {};
    ms.init        = function() {
      // verify config object exists
      // verify route relevant configs
      // routeWeaver
    };
    ms.middlewareHandler = function() {};
    ms.routeHandler= function() {

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

        route:    "/reporting?action=stepsincrement",
        verb:     "get",
        protocol: "sockets",
        journey:  "one-way; receiver <= browser ",   // client/server can get tricky to maintain with a distributed server model
        async:    false,
        stages:   undefined,
        tasks: [  
            // tasks will be executed synchronously on every success
            // req, reply object passed into each function
            // Question: When are tasks deemed independent execution?
            validate,                 // middleware is considered validations whether or not it really is.
            dbCallIncrementSteps
        ],
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
           * ----name---------------conjunctions--------------------notes----------------------------
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
           * ** validate-params
           * ** validate-interface
           * ** validate-ranges
           * 
           * ** <task>          alone, prefixes word         alone means any task,  prefixes means specific task
           * 
           * ** db
           * 
           * 
           * 
           * 
          */
            'finish':               function() {reply.send('finished tasks');},     // after all tasks finished                            
            'error':                function(err) {reply.error(err)},   // last error handler
            'error-client':         function() {},  // clients fault
            'error-internal':       function() {},  // internal server error
            // '<task>-error':           function() {},
            // '<task>-finish':          function() {},
            // '<task>-await':           function() {},
            // '<task>-sync':            function() {},

            // 'params-error':           function() {}
            // 'params-finish':          function() {}

            'validate-error':               function(err, sendError) {log(err); sendError(err)},
            'validate-finish':              function(req, res)       {},

            'dbCallIncrementSteps-error':   function(req, sendError) {sendError(err)},
            'dbCallIncrementSteps-finish':  function(req, res)       {sendNotificationToUser()},
            // 'dbCallIncrementSteps': function() {log()},
            // 'delayed response':   function() {},    // in the event actions taking forever // client code should handle this
        },
        db: {
            'increment order phase': {},
            'check user wants notification': {},
        }
      }
    };
    ms.routeWeaver = function() {

        //   console.log(config.program['routes']);
        console.log("Ignoring routes middleware");
        RouteWeaver: for (let k in routesOBJ) {
            console.log(`
            Middleware required by specific http methods will be merged into the routeHandler
            `);
            console.log('k', k);
            let path = k;
            let obj = routesOBJ[k];
            
            for (let m in obj) {
                if (m === 'description' || m === 'info' || m === 'actions') {}
                else {
                    console.log('       m', m);
                    let middleware  = /*obj[m]['middleware']*/ (console.log);
                    let routeHandler= /*obj[m]['routeHandler'];*/ (console.log);
                    if (m === "use") {
                        fastify[m](path,middleware);
                    } else if (["get","post","put","delete"].includes(m)) {
                        fastify[m](path,routeHandler);
                    } else {throw new Error();}
                }
            }
        }
    };
    // console.log("UNFINSHED");
    // console.warn(`
    //     Due to fastify's bootstrapping nature.

    //     Route specific middleware needs to be loaded here.    
    // `);
    console.warn("This shouldn't be in a fastify config");
    const fastify = require('fastify')({
        logger: true
    })
  // Run the server!
    fastify.listen(3000, function (err, address) {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
      fastify.log.info(`server listening on ${address}`)
    });
}