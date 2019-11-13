module.exports = function claS_Server(obj) {

    console.warn("Unfinished");
    /** 
     * What is a server?
     * : basically a "remote" transaction public method that handles incoming information, logs the request, performs some logic, 
     *  possibly communicates to other services, and possibly responds to requester.
     *  Requesters have limited access to services provided by paths/routes.
     * 
     * : a remote application providing a service
    */
   /** 
    * This module is a facade and adapter between commonly used interfaces
    * 
    * *** Frameworks Custom Fitted for,
    * 
    *   * fastify js
    *   * expressjs
    *   * etc.
   */

    // routes/paths : every server handles requests from clients
        // clients are other computers, can be a browser, a server, possibly a cellphone call, and etc.

    // config/configuration: every server has configurations related such as what database to connect to, debug mode, logging information, api keys, etc.
        // configs must include support protocols

    // routing syntax: a server routes/paths are stringed representation of public methods.
    
    // routes

    // params: part of query strings, how the servers handles url data inputs

    // permissions: routes have permission based on client priveledges

    // middleware: code that executes before a routerHandler

    // models  // servers need a data structure reference in order to query databases 

    // job queuses // debateable not required but a job queue service executes programmable commands internally and possibly notifys the client ins soem way.

    // services // communications between databases, API's, etc.

    
    // return {
    //     "config":             obj.config,
    //     "routes":             obj.routes,
    //     "params":             obj.params,
    //     "permissions":        obj.permissions,
    //     "middleware":         obj.middleware,
    //     "plugins":            obj.plugins,
    //     "models":             obj.models,
    //     "jobQueues":          obj.jobQueues,
    //     "services":           obj.services,
    //     "spec":               obj.spec
    // }

    require('./server.config.js')(obj);
};