function editElement(ref, str, replacer) {
    
    // let pattern = new RegExp(str,"g");
    // ref.textContent = ref.textContent.replace(pattern,replacer);

    let pattern = new RegExp(str,'g');
    text = ref.textContent;
    ref.textContent = text.replace(pattern, replacer);
    console.log(ref.textContent);
}