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