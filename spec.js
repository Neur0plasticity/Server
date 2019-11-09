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
     * SessionManagement
     *
     * SpecializedServerSelection?
     *  --- HttpServer
     *  --- SocketServer
     *  --- StaticSiteServer
     * SSL?
     * Backlog queues
     * 
     * DSP: Development, Staging, Production
     * 
     * 
     **** Websockets Config ****
     * 
     * 
     * 
     *** Fastify's config ***
     * 
     * 
     * * // Fastify Listen Config
     * host:        String,
     * port:        Number,
     * *exclusive: false,
     * *readableAll: false,
     * *writableAll: false,
     * *ipv6Only: false
     * 
     * // Fastify instance
     * 
     * http2:               Boolean,         // default false
     * https:               Boolean,         // default false    
     * maxParamLength:      Number,          // default 100 chars
     * bodyLimit:           Number,          // 1048576 (1MiB)
     * onProtoPoisoning:    String,          // possible values are 'error', 'remove' and 'ignore'.
     * ignoreTrailingSlash: Boolean,
     * logger:              !!!HELP!!!!,
     * disableRequestLogging: Boolean,        // default false
     * serverFactory:       Function,      
     * modifyCoreObjects:   Boolean,          // default false
     * caseSensitive:       Boolean,          // default true
     * requestIdHeader:     String,           // default 'request-id'
     * reqIdLogLabel:       String,           // default 'reqId'
     * genReqId:            String,           // lue of 'request-id' if provided or monotonically increasing integers
     * trustProxy:          Boolean,          // default false
     * pluginTimeout:       Number,           // default 10000 milliseconds
     * queryStringParser:   Function,         // querystringParser: str => qs.parse(str)
     * versioning:          Object,           // see documentation
     * return503OnClosing:  Boolean,          // default true
     * 
     * ready:               Function,         // once server instance ready.
     * close:               Function,         // once server closes
     * 
     * 
     * use:     // Inserting Middleware
     * 
     * register: 
     * 
     * addHook: 
     * 
     * 
     * 
     * Connections ... Servers/Databases/3rdparty, etc
     * 
     * Protocols allowed
     * 
     * use Fastify? Expressjs? 
     * 
     * verifications ... ip, session, authentications
     * *********************************
     * 
     *
     * ************************************
     * *** All configs for other properties
     *  
     * routes-config
     *      routing syntax
     * params-config
     * 
     * permissions-config
     * 
     * middleware-config
     
     * models-config
     * 
     * jobqueues-config
     * 
     * services-config
     * 
     * spec-config
     * 

    },
    "routes": {
        // database actions // cruds are needed // get, post, update, delete

        // Do the routes mirror static methods executed by public methods?
        // Do the routes mirror the websites active pages?
        // Do the routes mirror the websites components?
        // Do the routes mirror website actions
        // Do the routes mirror general purpose actions
        // Do the routes mirror content?    Selectable Data

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

        // route handler
        //  - validation:   (validates param inputs)
        //  - sync:         (synchronous / asynchronous)
        //  - stages:       (before, during, after)
        //  - on:           (success, error, await, service call)
        //  - journey:      (mentioned above)
        //  - jobqueue      (inserting/removing) queues



        // data can be fetched from the database, sent to the server,
        //  then if the request was valid, it can be used and destroyed




    },
    "params":             {
        // all variable inputs must be scrubbed
    },
    "permissions":        {
        // limit information retrievable/modifiable by request

        // can be applied as
        //  - middleware
        //  - anywhere in route handler

    },
    "middleware":         {
        // middleware used during routes
    },
    "models":             {
        // acceptable formats when communicating with databases
    },
    "jobQueues":          {
        // Do this task when
    },
    "services":           {
        // location (localhost, remote)
        // ownership (inhouse, 3rd-party)
        // services
            // Databases
            // Regular Servers
            // API Servers
    },
    "spec": {
        // programmable tests by developer
    }
});

//s0.bootstrap();

