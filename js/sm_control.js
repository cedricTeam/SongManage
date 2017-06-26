function SMControl(controls) {
    //txtAddSName txtAddSinger btnAdd btnRemove btnFind
    this.txtAddSName = document.querySelector(controls.txtAddSName);
    this.txtAddSinger = document.querySelector(controls.txtAddSinger);
    this.btnAdd = document.querySelector(controls.btnAdd);
    this.btnRemove = document.querySelector(controls.btnRemove);
    this.btnFind = document.querySelector(controls.btnFind);
    this.smModel = new SMModel();
    this.smView = new SMView(document.querySelector(controls.container));
    this.init();
}
SMControl.prototype = {
    constructor: SMControl,
    init: function() {
        //点击事件的注册
        var _this = this;
        this.btnAdd.onclick = function() {
                _this.add();
            },
            this.btnRemove.onclick = function() {
                _this.del();
            },
            this.btnFind.onclick = function() {
                _this.find();
            }
    },
    //页面上的事件触发  增 删 改 查 
    add: function() {
        var obj = {
            name: this.txtAddSName.value,
            singer: this.txtAddSinger.value
        };
        this.smModel.add(obj);
        this.smView.Html(this.smModel.list);
    },
    del: function() {
        this.smModel.delete(this.txtAddSName.value);
        this.smView.Html(this.smModel.list);
    },
    change: function() {

    },
    find: function() {
        var song = this.smModel.search(this.txtAddSName.value);
        if (song) {
            this.smView.Html([song]);
        } else {
            this.smView.Html(this.smModel.list);
        }
    }
}