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
      console.log("UNFINSHISHED simplified route handler");
      console.log("BUG, fastifies queryString is buggy");
      console.log("Leaves Fastify's schema property as an empty object");
      require('./routehandler.js')(configRoutes);
    };
    ms.routesWeaver = function() {


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