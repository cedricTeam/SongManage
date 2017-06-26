//视觉层 将内容渲染在页面上
function SMView(container) {
    this.container = container;
}
SMView.prototype = {
    constructor: SMView,
    Html: function(list) {
        var html = "";
        list.forEach(function(v) {
            html += '<div class="songslist-single">' +
                '<div class="songslist-name">' + v.name + '</div>' +
                '<div class="songslist-singer">' + v.singer + '</div></div>' +
                '</div>';
        })
        this.container.innerHTML = html;
    }
}