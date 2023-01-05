function iframeSize() {
    var iframe = document.getElementsByTagName("iframe");
    var num = iframe.length;
    for (; num > 0; num--) {
        iframe[num - 1].style.width = "100%";
        iframe[num - 1].style.height = iframe[num - 1].scrollWidth * 0.5625 + "px";
    }
}
iframeSize();
window.onresize = function() {
    iframeSize();
}