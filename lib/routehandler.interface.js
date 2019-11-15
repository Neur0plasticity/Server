module.exports = function routeHanlderInterface(obj) {

    // everything must be filled out
    typeof obj.route === 'string' && object.route.length > 0 || throwE();
    ['get','post','put','delete'].includes(obj.verb) || throwE();
    
    console.log('UNFINISHED');
    typeof obj.protocol === 'string' || throwE();
    typeof obj.journey === 'string' || throwE();
    typeof obj.async === 'boolean' || throwE();
    // typeof obj.stages
    typeof obj.params === 'object' || throwE();
    Array.isArray(obj.tasks) || throwE();
    typeof obj.db === 'object' || throwE();
    typeof obj.on === 'object' || throwE();
};