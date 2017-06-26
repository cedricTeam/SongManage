//歌曲管理model层
function SMModel(list) {
    this.list = list || [];
    //传入一个数组来接收歌曲的信息
}
SMModel.prototype = {
    constructor: SMModel, //一般都会写
    //增 删 改 查 
    add: function(song) {
        typeof song === "object" && song !== null && this.list.push(song);
    },
    delete: function(name) {
        var index = this.getIndex(name);
        typeof index === "number" && this.list.splice(index, 1);
    },
    change: function(name, newsinger) {
        var index = this.getIndex(name);
        typeof index === "number" && (this.list[index].singer = newsinger);
    },
    search: function(name) {
        var index = this.getIndex(name);
        if (typeof index === "number") return this.list[index];
    },
    //获取歌曲在list中的索引
    getIndex: function(name) {
        for (var i = 0, leng = this.list.length; i < leng; i++) {
            if (this.list[i].name === name) {
                return i;
            }
        }
    }
}