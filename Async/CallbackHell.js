//callback hell using settimeout.

setTimeout(() => {
    console.log("1st  : will take 2 seconds");
    setTimeout(() => {
        console.log("2nd step : will take 4 seconds");
        setTimeout(() => {
            console.log("2.1 step : will take 3 seconds");
            setTimeout(() => {
                console.log("2.2 step : will take 4 seconds");
            }, 4000);
        },3000)
    }, 4000)
    setTimeout(() => {
        console.log("3nd step : will take 4 seconds and running || with 2nd step");
    }, 4000);
}, 2000)

//this code structure is started to look like a pyramid or callback hell..which make code not easy to read.
// to fix this issue we use promise