let S = require('./lib/server.class.js');

let s0 = new S()
// Tests outlined
// 1) server config  Server->program(obj)
// 2) bootstrap
// 3) rumtime tests

// Test1) Configuring Server


console.log("How about RAM, CACHE, Storage?");


s0.program({
    "config": {
    /** Config Property, 
     *  *** refers to all backend configurations *** 
    */
      SpecializedServerSelection: [
       "Server LoadBalancer",
       "Server Http",
       "Server Socket",
       "Server StaticSite",
       "Server Streaming"
      ],
      SSL:                      Boolean,
      BacklogQueues:            String,
      DSP: ['development','staging', 'production'],
      "config-websockets": {
        port: Number
      },
      "config-fastify": { // fastify is an http server

        listen: {
            host:        String,
            port:        Number,
            exclusive: false,
            readableAll: false,
            writableAll: false,
            ipv6Only: false
        },
        // Fastify instance
        generaloptions: {
            http2:               Boolean,         // default false
            https:               Boolean,         // default false    
            maxParamLength:      Number,          // default 100 chars
            bodyLimit:           Number,          // 1048576 (1MiB)
            onProtoPoisoning:    String,          // possible values are 'error', 'remove' and 'ignore'.
            ignoreTrailingSlash: Boolean,
            logger:              !!!HELP!!!!,
            disableRequestLogging: Boolean,        // default false
            serverFactory:       Function,      
            modifyCoreObjects:   Boolean,          // default false
            caseSensitive:       Boolean,          // default true
            requestIdHeader:     String,           // default 'request-id'
            reqIdLogLabel:       String,           // default 'reqId'
            genReqId:            String,           // lue of 'request-id' if provided or monotonically increasing integers
            trustProxy:          Boolean,          // default false
            pluginTimeout:       Number,           // default 10000 milliseconds
            queryStringParser:   Function,         // querystringParser: str => qs.parse(str)
            versioning:          Object,           // see documentation
            return503OnClosing:  Boolean,          // default true
        },
        on: {//events
            ready:               Function,         // once server instance ready.
            close:               Function,         // once server closes
        },
        //use:     // Inserting Middleware // middleware property uses this
        register: {
            // more documentation needed
        },
        addHook: {
            "propertyName": Function
        }
      },
      connections: {
        //Connections ... Servers/Databases/3rdparty, etc
      },
      // verifications ... ip, session, authentications // middleware
      // SessionManagement: // middleware
      "config-prop-params": {

      },
      "config-prop-permissions": {

      },
      "config-prop-middleware": {
        ???
      },
      "config-prop-models": {

      },
      "config-prop-routes": {
        routingSyntax: Function,
        cruds:          Boolean,        // db calls authorized attributes/schemas
        redirects:      Object,         // route forwarding to other routes
        page:           Object,         // changes website page
        statuscheck:    Object,         // server notified by clientside actions specifically programmed by site maintainer
        special:        Object,         // db calls special/custom actions

        // Do the routes mirror static methods executed by public methods?
        // Do the routes mirror the websites active pages?
        // Do the routes mirror the websites components?
        // Do the routes mirror website actions
        // Do the routes mirror general purpose actions
        // Do the routes mirror content?    Selectable Data


        routeHandlers:   Object        // can also be an object
        /** routeHandlers 
         * {
         *      all:    function(request, response) {}
         *      get:    function(request, response) {}
         *      post:   function(request, response) {}
         * 
         *      download,
         *      upload,
         * 
         *      crud
         * 
         *      redirect
         * 
         *      
         * }
         * 
        */
        // route handler
        //  - validation:   (validates param inputs)
        //  - sync:         (synchronous / asynchronous)
        //  - stages:       (before, during, after)
        //  - on:           (success, error, await, service call)
        //  - journey:      (mentioned above)
        //  - jobqueue      (inserting/removing) queues

        // purpose  // why this route is different?

        // directions // journey // one way, return trip, roundtrip
        //  -   client->server->client
        //  -   client->server
        //  -   server->client->server
        //  -   server->client

        // handshakes / internet protocols // request headers effected
        //  - https
        //  - sockets
        //  - udp
        //  - hls
        //  - ETC
        //  - smtp
        //  - ssh
        //  - IRC

            
        // acceptable inputs/outputs // input output data formats/validations

        // transport structure // json structure

        // data can be fetched from the database, sent to the server,
        //  then if the request was valid, it can be used and destroyed


      },
      "config-prop-jobqueues": {

      },
      "config-prop-services": {
        proxy: String,
        timeout: Number,
      },
      "config-prop-spec": {
        frequency: Number   // runs spec remotely at certain times
      }
    },
    "params": {
        // all variable inputs must be scrubbed
    },
    "permissions": {
        // limit information retrievable/modifiable by request

        // can be applied as
        //  - middleware
        //  - anywhere in route handler

        // *** all permissions are middleware *** //
        // a routeHandlerCanDetermine how middleware effects actions //

        validSender:    Function,       // request sent by Specified IP. How to dodge Spoofing?

        banned:         Function,

        loggedin:       Function,
        loggedout:      Function,

        AuthImmediate: Function,        // Immediately requests password for sensitive information

        AuthAdmin:      Function,       // site admin priveledges
        AuthPartner:    Function,       // site partner priveledges
        AuthCustomer:   Function,       // site customer priveledges

        TierXAuth:      Function,       // any tier priveledge allowed

        Tier0Auth:      Function,       // admins of designated users allowed access
        Tier1Auth:      Function,       // regular user allowed access
        Tier2Auth:      Function,       // minimal access user

        DataOwner:      Function,       // requester is owner of requested data
        DataRelevant:   Function,       // requester is mentioned in data

        OneTimeUse:     Function,       // immediately expires auth token for access.

        PassOneDay:     Function,       
        PassWeek:       Function,
        PassMonth:      Function,
        PassYear:       Function,
        PassUnlimited:  Function
    },
    "middleware": {

        // global, specific route

        // middleware used during routes

        // validate request params
        // validate request body

        // cookie renew
        // cookie valid
        // cookie expire

        // redirect 

        // loadstatic // standby static information

        // passport
        // serve-favicon
        // apicache
        // bodyparser
        // cookie parser
        // cors                     // cross site acceptance
        // http-proxy-middleware
        // multer                   // uploading files
        // cookie session
        // nocache                  // obliterates static client files
        // helmet-csp               // content security policy
        // server-timing
        // csurf                    // CSRF token

        // memory-cache     // not middleware
    },
    "models": {
        // acceptable formats when communicating with databases
        // models get dropped into here from database source code
    },
    "routes": {
        "<route name>": {
            "db-method": {
                middleware:     [Function],
                routeHandler:   String | Function
            },
        }
    },
    "jobQueues": {
        // Do this task when
            // route enabled jobqueues
            // system jobqueues

        /** interface 
         * 
            *  ? frequency
            *  ? dowhat
            *  ? notify who
        */
        system: {
            flushmemory: {

            },
            samplerequests: {

            },
            backupmemory: {

            },
            expirecookie: {

            },
            expiresession: {

            },
            routineSpec: {

            },
            updateOSsoftware: {

            },
            updateProjectSoftware: {

            },
            securityUpdate: {

            },
            reportToDevOps: {

            }
        },
        routeEnabled: {

        }
    },
    "services": {
        /* service interface:

            "<service name>": {

                ownership:  String,
                alias:  String,
                path:   String

                onConnect         successful ... problematic
                onDisConnect      successful ... problematic

                serviceSpecificConnectionConfig: Object
            }
        */
        "service name": {
            alias:  String | null,
            path:   "mongodb://27071/<dbname>"
            // relevant configs
        },
        "service name": {
            alias:  String | null,
            path:   "localhost:3030"
            // relevant configs
        },
        "service name": {
            alias:  String | null,
            path:   "www.maps.google.com/<authtoken>"
            // relevant configs
        }
    },
    "spec": {
        // programmable tests by developer
        // routine specs optionable insertable to jobqueue


        // test init (local, remote)

        bootstrap:  {},
        routes:     {},
        jobqueues:  {}
    }
});

//s0.bootstrap();

