module.exports = function routeHandler(obj) {
    // params
        // params must be params

    // tasks
        // ordered synchronously for defaults
        // can be string or function

    // on
        // on tasks must exist in tasks

        // reserved words
            // finished
            // error
            // error-client
            // error-internal
            // await
            // sync
            // params
            // validate
            // db
            // task
    let tasks = Object.keys(obj.tasks);

    let on = obj.on;
    // all suffixes must be preceded by "-"
    // anything alone, is suffixable , no need to program prefixes yet
    let on_syntaxes = {
        "finish":               ["alone", "suffixes"],
        // "error-client":         ["alone"],
        // "error-internal":       ["alone"],
        "error":                ["alone", "suffixes"],

        // "await":                ["alone", "suffixes"],
        // "sync":                 ["alone", "suffixes"],
        
        "params":               ["alone", "suffixes"],
        // "validate-params":      ["alone", "suffixes"],
        // "validate-interface":   ["alone", "suffixes"],
        "validate":             ["alone", "suffixes"],

        "task":                 ["alone"],

        "db":                   ["alone"],

        "pre":                  [null, "suffixes"],
        "post":                 [null, "suffixes"]
    };
    for (let k in on) {
        // get value before suffix
        let words = k.split("-")
        console.log(words);
        words.forEach((e, i)=>{
            if (i===0 && !on_syntaxes[e]) {throw new Error()}
            else {
                if (!tasks.includes(e) && on_syntaxes[e][1] !== "suffixes")       {throw new Error()}
            }
        });
    }
};