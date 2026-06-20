let credits =
Number(localStorage.getItem("credits")) || 60;

updateCredits();

const roastResponses = [

"Step 1: Already be rich.",
"Error 404: Common sense not found.",
"NASA declined your request.",
"Have you tried actually studying?",
"Your crush requested privacy.",
"That sounded smarter in your head.",
"Consulting experts... they left.",
"I ran the numbers. The numbers ran away.",
"Bold assumption.",
"Even my calculator is concerned."

];

function updateCredits(){

    document.getElementById(
        "credits"
    ).innerText = credits;

    localStorage.setItem(
        "credits",
        credits
    );
}

function randomRoast(){

    return roastResponses[
        Math.floor(
            Math.random()*roastResponses.length
        )
    ];
}

function sendMessage(){

    const input =
    document.getElementById(
        "userInput"
    );

    const message =
    input.value.trim();

    if(message === "") return;

    if(credits < 5){

        alert(
            "Out of credits."
        );

        return;
    }

    credits -= 5;

    updateCredits();

    const chatBox =
    document.getElementById(
        "chatBox"
    );

    const userMsg =
    document.createElement("div");

    userMsg.className =
    "user-message";

    userMsg.innerText =
    message;

    chatBox.appendChild(userMsg);

    input.value = "";

    const loading =
    document.createElement("div");

    loading.className =
    "bot-message";

    loading.innerText =
    "Analyzing...";

    chatBox.appendChild(
        loading
    );

    chatBox.scrollTop =
    chatBox.scrollHeight;

    setTimeout(()=>{

        loading.innerText =
        randomRoast();

        chatBox.scrollTop =
        chatBox.scrollHeight;

    },1500);
}

document
.getElementById("userInput")
.addEventListener(
"keypress",
function(event){

if(event.key==="Enter"){

sendMessage();

}

});
