module.exports = function(routesOBJ) {
    // weaves together the functions necessary for this route only
    // future versions will integrate together to save space.

    // Currently developed synchronously. Future versions asynchronous.

    console.warn(`
        Main Purpose ... converts object inputs into middleware 
        and route handler functions.
    `);
    function error(errorCB) {
        throw new Error(errorCB()); // ensure to return the error message;
    }
    function task(preCB,taskCB,postCB) {
        this.preCB()
        this.taskCB()
        this.postCB()
    }
    // task.bind({
    //     preCB: () => {
    //         errorFinish();
    //     },
    //     cb: ()=> {
    //         errorFinish();
    //     },
    //     postCB: () => {
    //         errorFinish();
    //     }
    // })();



    





};