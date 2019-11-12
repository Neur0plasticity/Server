// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})
  // Declare a route

  function yourPlugin (fastify, opts, done) {
    fastify.decorate('utility', () => {})
    done()
  }
  fastify.register(yourPlugin)

  // `after` will be executed once
  // the previous declared `register` has finished
  fastify.after(err => console.log(err))
  
  // `ready` will be executed once all the registers declared
  // have finished their execution
  fastify.ready(err => console.log(err))



  let r = {
    "/": {
        "use": {
          middleware: function(req, rep, next) {next();}
        },
        "get": {
            // middleware:     function(req, rep, next) {next();},
            routeHandler:   function(req,rep){rep.send('beep')}
        },
        "post": {
          // middleware:     function(req, rep, next) {next();},
          routeHandler:   function(req,rep){rep.send('boop')}
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
  })