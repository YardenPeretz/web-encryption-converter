
// GLOBAL VARS DECLARATION
const selected_format = document.getElementById("selected_format");

window.addEventListener("load",() => {
    // GET VALUE OF SELECTED FORMAT FROM INPUT.
    selected_format.addEventListener("change",() => {
        console.log(selected_format.value);
        const format = selected_format.value;
        // WRITE DECODING CODE HERE
        switch(format){
            case format == "base64":
                console.log("base64");
            case format == "sha256":
                console.log("sha");
        }

    });
}); // END LOAD EVENT

