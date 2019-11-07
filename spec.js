let S = require('./lib/server.class.js');

let s0 = new S()
// Tests outlined
// 1) server config  Server->program(obj)
// 2) bootstrap
// 3) rumtime tests

// Test1) Configuring Server

s0.program({
    "config": {
     * Imported modules
     * Logging
     *  - where
     *  - how often
     *  - reasons to log
     * 
     * SSL?
     * 
     * Ports
     * 
     * Host
     * 
     * Backlog Queue
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
     * 
     * routing syntax
     * 
     * 
     * **********************************
     * *** All configs for other properties
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


    },
    "params":             {
        // all variable inputs must be scrubbed
    },
    "permissions":        {
        // limit information retrievable/modifiable by request
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

