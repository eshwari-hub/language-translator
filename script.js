async function translateText() {
    let text = document.getElementById("inputText").value;
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;

    if (!text) {
        alert("Enter text");
        return;
    }

    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

    let res = await fetch(url);
    let data = await res.json();

    document.getElementById("outputText").innerText = data[0][0][0];
}

function copyText() {
    let text = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

function speakText() {
    let text = document.getElementById("outputText").innerText;
    let speech = new SpeechSynthesisUtterance(text);
    let lang = document.getElementById("targetLang").value;
    speech.lang = lang;
    window.speechSynthesis.speak(speech);
}

function swapLang() {
    let s = document.getElementById("sourceLang");
    let t = document.getElementById("targetLang");
    let temp = s.value;
    s.value = t.value;
    t.value = temp;
}