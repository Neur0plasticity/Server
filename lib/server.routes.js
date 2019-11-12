module.exports = function ServerRoutes(configRoutes) {
    
    console.warn(`
        Due to fastify's bootstrapping nature.

        Route specific middleware needs to be loaded here.    
    `);

    let routesOBJ = configRoutes;

    const fastify = require('fastify')({
        logger: true
    })

    
    //   console.log(config.program['routes']);
      console.log("Ignoring routes middleware");
    
    RouteConstructor: for (let k in routesOBJ) {
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

  // Run the server!
  fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  });



}