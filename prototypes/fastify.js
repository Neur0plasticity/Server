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

  // function stopThread() {return true;}
  // fastify.get("/",(req,res)=>{
  //   return res;

  // });
  fastify.setErrorHandler(function (error, request, reply) {
    console.log("error detected");
    reply.send("error detected");
  })
  // const opts = {
  //   schema: {
  //     response: {
  //       200: {
  //         type: 'object',
  //         properties: {
  //           hello: { type: 'string' }
  //         }
  //       }
  //     }
  //   }
  //   // handler (request, reply) {
  //   //   reply.send({ hello: 'world' })
  //   // }
  // };
  // fastify.get('/', opts, async function (request, reply) {
  //   var data = await request;
  //   var processed = await request;
  //   return {hello:"world"}
  // })
  fastify.route({
    method: ['GET',"POST"],
    url: '/',
    schema: {},
    // schema: {
    //   // request needs to have a querystring with a `name` parameter
    //   querystring: [{
    //     name: { type: 'string' }
    //   }],
    //   // the response needs to be an object with an `hello` property of type 'string'
    //   response: {
    //     200: {
    //       type: 'object',
    //       properties: {
    //         hello: { type: 'string' }
    //       }
    //     }
    //   }
    // },
    // this function is executed for every request before the handler is executed
    beforeHandler: async (request, reply) => {
      // E.g. check authentication
      console.log("beforeHandler");
    },
    handler: async (request, reply) => {
      // throw new Error();
      return { hello: 'world'}
    }
  });
  // Run the server!
  fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })