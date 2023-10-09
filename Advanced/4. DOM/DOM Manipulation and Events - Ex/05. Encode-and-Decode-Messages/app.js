function encodeAndDecodeMessages() {
    let textareas = Array.from(document.querySelectorAll('main div textarea'));

    let messageArea = textareas.shift();
    let receivedMessageArea = textareas.shift();

    let btns = Array.from(document.querySelectorAll('main div button'));
    let sendBtn = btns.shift();
    let readBtn = btns.shift();

    let text = '';
    sendBtn.addEventListener('click', () => {
        text = messageArea.value;
        messageArea.value = '';
        let newText = ''
        for (const el of text) {
            newText += String.fromCharCode(el.charCodeAt() + 1);
        }
        receivedMessageArea.value = newText;
    })

    readBtn.addEventListener('click', () => {
        receivedMessageArea.value = text;
      
    })
}