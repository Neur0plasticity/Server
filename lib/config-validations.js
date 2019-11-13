module.exports = function(version, config) {
    v0: function version0Interface(config){

        console.warn('All code here will reference there subject modules')

        // toplevel examine
        // each layer inside sequentially

        /////////////////////////////////////
        /// move all of these interface vals to a seperate versioned file
        /////////////////////////////////////
        if (typeof config !== "object") {throw new Error();}
        const t0_props = [
            'modules',  // unprogrammed
            'config',
            'params',
            'permissions',
            'middleware',
            'models',
            'routes',
            'jobQueues',
            'services',
            'spec'
        ];
        for (let k in t0_props) {

            if (!config[props[k]]) {throw new Error()}

        }
        const t0_modules={ // unprogrammed

        };
        const t0_config=[
            'SpecializedServerSelection',   // ignore inputs for this
            'configSSL',
            'BacklogQueues',
            'OS',
            'DSP',
            'config-websockets',
            'config-fastify',
            'config-prop-params',
            'config-prop-permissions',
            'config-prop-middleware',
            'config-prop-models',
            'config-prop-routes',
            'config-prop-jobQueues',
            'config-prop-services',
            'config-prop-spec'
        ];
        // const t0_params={
        // };
        // const t0_permissions={
        // };
        // const t0_middleware={
        // };
        // const t0_models={
        // };
        // const t0_routes={
        // };
        // const t0_jobQueues={
        // };
        // const t0_services={
        // };
        // const t0_spec={
        // };
        // prop config
        (function BootAsync(props){
            typeof props === 'boolean' || throwE();
        })();
        // SpecializedServerSelection: [
        //     "Server LoadBalancer",
        //     "Server Http",
        //     "Server Socket",
        //     "Server StaticSite",
        //     "Server Streaming"
        //    ],
        (function configSSL(props){
            if (props.SSL_all===true){
                props.http = true;
                props.websockets = true;
            }
        })(config.config.configSSL);
        (function BacklogQueues(props){
            console.warn('UNPROGRAMMED');
        })(config.config.BacklogQueues);
        (function OS(props){
            console.warn('UNPROGRAMMED');
        })(config.config['OS']);
        (function DSP(props){
            console.warn('UNPROGRAMMED');
        })(config.config.DSP);
        (function configwebsockets(props){
            typeof props.port       === 'number' || throwE();
            typeof props.on         === 'object' || throwE();
            typeof props.on.io      === 'object' || throwE();
            typeof props.on.client  === 'object' || throwE();

            typeof props.on.io.connecting       === 'function' || throwE();
            typeof props.on.io.connected        === 'function' || throwE();
            typeof props.on.io.disconnecting    === 'function' || throwE();
            typeof props.on.io.disconnected     === 'function' || throwE();
            let client = props.on.client;
            for (let k in client) {
                typeof client[k] === '(function' || throwE();
            }
        })(config.config["config-websockets"]);
        (function configfastify(props){
            console.warn('fastify verifys its configs');
        })(config.config['config-fastify']);
        (function configpropparams(props){

            typeof props.enforceAll === 'boolean' || throwE();

            typeof props.interface === 'string' || throwE();

        })(config.config['config-prop-params']);
        (function configproppermissions(props){
            console.log("UNPROGRAMMED");
        })(config.config['config-prop-permissions']);
        (function configpropmiddleware(props){

            typeof props.allAsync === 'boolean' || throwE();
            typeof props.preMiddleware === 'function' || throwE();
            typeof props.postMiddleware === 'function' || throwE();

        })(config.config['config-prop-middleware']);
        (function configpropmodels(props){
            console.log("UNPROGRAMMED");
        })(config.config['config-prop-models']);
        (function configproproutes(props){
            console.log("UNPROGRAMMED");
        })(config.config['config-prop-routes']);
        (function configpropjobQueues(props){
            console.log("UNPROGRAMMED");
        })(config.config['config-prop-jobQueues']);
        (function configpropservices(props){
            console.log("UNPROGRAMMED");
        })(config.config['config-prop-services']);
        (function configpropspec(props){
            console.log("UNPROGRAMMED");
        })(config.config['config-prop-spec']);

        // const t0_params={
        // };

        (function params(props){


            if (config.config['config-prop-params'].interface !== 'mongodb-style') throwE();

            // mongodbstyle: Object.keys(props).forEach((e)=>{
                
                // expects all params unique

                // looper fakes the creation of a schema leveraging mongooses attribute/document validator
                

            // });

            // if no error, hip hip hooray
            mongoose.schema('params', props);
        })();
        // const t0_permissions={
        // };
        (function permissions(props){
            for (let k in props) {
                typeof props[k] === 'function' || throwE();
            }
        })();
        // const t0_middleware={
        // };
        (function permissions(props){
            for (let k in props) {
                typeof props[k] === 'boolean' || throwE();
            }
        })();
        // const t0_models={
        // };

        (function models(){

        // all attributes must be mentioned in params
        // all schemas must be mentioned in schemas
        // acceptable formats when communicating with databases
        // models get dropped into here from database source code

            let s = Object.keys(schemas)
            let p = Object.keys(params)

            for (let k in models) {
                if (!(s.includes(models[k])^s.includes(models[k]))) {

                    throw new Error();
                }
            }
        })();
        // const t0_routes={
        // };
        (function routes(props){
            // JSON/JS automatically removes index duplications
            
            console.log("UNFINSHED");
            console.log("Hesistant to program, intending depended on modules provide informable error");
            // for (let k in props) {

            // }
        })();
        // const t0_jobQueues={
        // };
        (function jobQueues(props){
            console.log("UNPROGRAMMED");
        })();
        // const t0_services={
        // };
        (function services(props){
            console.log("UNPROGRAMMED");
        })();
        // const t0_spec={
        // };
        (function spec(props){
            console.log("UNFINISHED");
        })();
    }
};