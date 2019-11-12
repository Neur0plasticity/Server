module.exports = function config_facade(config) {
    /** 
     *  Prevents original config files across projects deflecting underthehood changes.
     * 
    */
    require('./config-validations.js')(config);


    // config prepping // global configs overwriting ...
    
    // Boot Order // matches config order ... config scrubbing, params, models, permissions, middleware
    let bo = require('./boot-order.js');
    
    // Dependency Injection Management

    // let DIM = require('dependency-injection-management')();

    
    console.warn('Worry about direct injection after details become apparent');

    const cc = clonedconfig = config;

    let paramsOBJ = cc.program['params'];
    require('./server.params.js')(paramsOBJ);

    let modelsOBJ = cc.program['models'];
    require('./server.models.js')(modelsOBJ);

    let permissionsOBJ = cc.program['permissions'];
    require('./server.permissions.js')(permissionsOBJ);

    let middlewareOBJ = cc.program['middleware'];
    require('./server.middleware')(middlewareOBJ);

    let routesOBJ = cc.program['routes'];
    require('./server.routes.js')(routesOBJ);

    let jobQueuesOBJ = cc.program['jobQueues'];
    require('./server.jobQueue.js')(jobQueuesOBJ);

    // services // skip
    let servicesOBJ = cc.program['services'];
    require('./server.services.js')(servicesOBJ);
    // spec // skip

    let specOBJ = cc.program['spec'];
    require('./server.spec.js')(specOBJ);
}