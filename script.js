$(document).ready(function(){
    // GLOBAL VARS DECLARATION
    const selected_format = $("#selected_format"); // selected ecryption format selected by user
    const text_to_decode = $("#text_to_decode"); // text before decoding
    const text_result = $("#text_result"); // result after decoding

    // GET VALUE OF SELECTED FORMAT FROM INPUT.
    selected_format.addEventListener("change",() => {
        const format = $(selected_format).val();

        console.log("text_to_Decode : " + $(text_to_decode).val())
        // WRITE DECODING CODE HERE
        switch(selected_format.value){
            case "base64":
                 console.log("base64");
                 break;
            case "sha256":
                 console.log("sha");
                 break;
            default:
                console.log(selected_format.value)
        }

    });
}); // END ready event

