let S = require('./lib/server.class.js');

let s0 = new S()
// Tests outlined
// 1) server config  Server->program(obj)
// 2) bootstrap
// 3) rumtime tests

// Test1) Configuring Server

console.log("How about RAM, CACHE, Storage?");

s0.program({
    modules: { // refers pakage.json

    },
    "config": {
    /** Config Property, 
     *  *** refers to all backend configurations *** 
    */

      BootAsync: Boolean, // default false

      SpecializedServerSelection: [
       "Server LoadBalancer",
       "Server Http",
       "Server Socket",
       "Server StaticSite",
       "Server Streaming"
      ],
      configSSL: {
        SSL_all:    Boolean,
        http:       Boolean,
        sockets:    Boolean
        // etc
      },
      BacklogQueues:            String,
      OS: {
          "linux":      {},
          "darwin":     {},
          "msoft":      {}
      },
      DSP: {
        //   'mode':           String, // props below
          'dev': { // development
            host: ""
          },
          'stage': { // stage
            host: ""
          }, 
          'prod': { // production
            host: ""
          }
      },
      "config-websockets": { // programmed as single connection for now
        port: Number,
        on: {
          io: {
            connecting:     String | Function,
            connected:      String | Function,
            disconnecting:  String | Function,
            disconnected:   String | Function
          },
          client: {

          }
        }
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
            logger:              Function,
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
            return503OnClosing:  Boolean          // default true
        },
        on: {//events
            ready:               Function,         // once server instance ready.
            close:               Function         // once server closes
        },
        //use:     // Inserting Middleware // middleware property uses this
        register: {
            // more documentation needed
        },
        addHook: {
            "propertyName": Function
        }
      },
    //   connections: {
    //     //Connections ... Servers/Databases/3rdparty, etc
    //   },
      // verifications ... ip, session, authentications // middleware
      // SessionManagement: // middleware
      "config-prop-params": {

        // params dictacte functions inputs.
        // they're everywhere
        // refers to all core and plugin code

        enforceAll: Boolean, // default true


        interface: String, // [mongodb-style]




      },
      "config-prop-permissions": {

      },
      "config-prop-middleware": {
 
        allAsync: Boolean,  // default false

        preMiddleware: Function,
        postMiddleware: Function

      },
      "config-prop-models": {
        // all attributes must be mentioned in params

        interface:  String, // ["universal"]


      },
      "config-prop-routes": {
        routingSyntax: Function,
        // quick setup
        routesMirrorPublicMethods:                Boolean,
        routesMirrorFrontendComponents:           Boolean,
        routesMirrorHtmlPages:                    Boolean,
        routesMirrorWebsiteActions:               Boolean,
        routesMirrorGeneralPurposeActions:        Boolean,
        routesMirrorFrontendContent:              Boolean,  
        // ???         
        cruds:                                    Boolean,        // db calls authorized attributes/schemas
        redirects:                                Object,         // route forwarding to other routes
        page:                                     Object,         // changes website page
        monitorclient:                            Object,         // server notified by clientside actions specifically programmed by site maintainer
        custom:                                   Object,         // db calls special/custom actions


        // global: {
        //     all: {},
        //     get: {},
        //     post: {},
        //     put: {},
        //     delete: {}
        // },


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
        route handler interface
         - validation:   (validates param inputs)
         - sync:         (synchronous / asynchronous)
         - stages:       (before, during, after)
         - on:           (success, error, await, service call)
         - journey:      (mentioned above)
         - jobqueue      (inserting/removing) queues

        // purpose  // why this route is different?

        directions // journey // one way, return trip, roundtrip
         -   client->server->client
         -   client->server
         -   server->client->server
         -   server->client

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
      "config-prop-jobQueues": {

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
        // interface equivalent to mongoose schema 

        /** 
         * 
         * Due to the distributed server model,
         * 
         * parameters might be validated duplicately 
         * 
         * because of seperate machines, for sec reasons.
         * 
         * cannot let guard even in our own internal network tethers
         * 
        */
    },
    "models": {
      // all attributes must be mentioned in params
      // acceptable formats when communicating with databases
      // models get dropped into here from database source code
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

        PassOneMinute:  Function,
        PassOneHour:    Function,
        PassOneDay:     Function,       
        PassWeek:       Function,
        PassMonth:      Function,
        PassYear:       Function,
        PassUnlimited:  Function
    },
    "middleware": {

        // global, specific route

        // middleware used during routes

        // Why booleans? Only to indicate/consolidated enabled middlewares,
        // must mention in routesHandler what middleware is applied per route


        openAPI:                Boolean,

        validateRequestParams:  Boolean,
        validateRequestBody:    Boolean,
        validateRequestQryStr:  Boolean,

        DetectBot:              Boolean,
        DetectAbuse:            Boolean,    
        DetectRefreshAbuse:     Boolean,
        DetectRequestAbuse:     Boolean,

        cookieRenew:            Boolean,
        cookieValid:            Boolean,
        cookieExpire:           Boolean,

        // redirect 
        redirectRequest:        Boolean,
        fakeResponse:           Boolean,

        // loadstatic // standby static information

        loadAllStatic:          Boolean,
        loadHTML:               Boolean,
        loadCSS:                Boolean,
        loadJS:                 Boolean,
        loadIMG:                Boolean,

        Auth2Step:              Boolean,

        passport:               Boolean,
        servefavicon:           Boolean,
        apicache:               Boolean,
        bodyparser:             Boolean,
        cookieparser:           Boolean,
        cors:                   Boolean,    // cross site acceptance
        httpproxymiddleware:    Boolean,
        multer:                 Boolean,    // uploading files
        cookiesession:          Boolean,
        nocache:                Boolean,    // obliterates static client files
        helmetcsp:              Boolean,    // content security policy
        servertiming:           Boolean,
        csurf:                  Boolean     // CSRF token

        // memory-cache     // not middleware
    },
    "routes": {
        "<route name>": {
            "<db-method>": {
                middleware:     String | [String] | Function | [Function],
                routeHandler:   String | Function
            },
        }

        // global-routes, specific-routes,


          // "all":    {}
          // "get":    {},
          // "post":   {},
          // "put":    {},
          // "delete": {} 


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

