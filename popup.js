const notepad = document.getElementById('scratchpad');
chrome.storage.local.get(["savedNote"], (result)=> {
    if (result.savedNote) {
        notepad.value = result.savedNote;
    }
});
notepad.addEventListener('input', ()=> {
    const currentText = notepad.value;
    chrome.storage.local.set({savedNote: currentText});
});
