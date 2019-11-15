module.exports = function() {
/** 
 * Thread manager does 2 things for one.
 * 
 * 1) Listens for errors in thread
 * 2) Listens for all task completions
 * 
 * Both stop the route from further execution. No run away executions.
 *  
 * Any error will cause the error chain to fireoff, then the final error sends msg to receiver, finally kills thread.
 */

 // How to do this without looping?

 // inject one error cb // premount the error cb will appropiate handlers, messages
    let onRouteError = function(req, res) {
        // depending where the error occured. Reverse the effects.
        res.send(errorOBJ);
    };
    let tasks = {
        0: {
            errorCB: ()=>{},
            cb:      ()=>{}
        },
        1: {
            errorCB: ()=>{},
            cb:      ()=>{}
        },
        2: {
            errorCB: ()=>{},
            cb:      ()=>{}
        },
        3: {
            errorCB: ()=>{},
            cb:      ()=>{}
        }
    }
    function MainRouteError(task, msg) {
        if (!task) {return internalError()}
        
        tasks[task].errorCB(req, res, msg);
        return onRouteError(req, res);
    }
    task[0].cb();
    task[1].cb();
    task[2].cb();
    task[3].cb();

};