function copyUrlToClipboard() {
    var tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(location.href).select();
    document.execCommand("copy");
    tempInput.remove();
    alert("클릭보드에 복사했습니다.");
}