// 변환 함수
function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    let text = inputText;

    // 빈 줄만 제거 (일반 개행은 유지)
    text = text.replace(/\n\s*\n/g, '\n');

    // 제로 너비 공백 문자 제거
    text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');

    outputText.value = text;
}