function SMControl(controls) {
    //txtAddSName txtAddSinger btnAdd btnRemove btnFind
    for (var key in controls) {
        this[key] = document.querySelector(controls[key]);
    }
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
        if (this.smModel.search(this.txtAddSName.value)) {
            this.change();
            this.smView.Html(this.smModel.list);
            return;
        }
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
        this.smModel.change(this.txtAddSName.value, this.txtAddSinger.value);
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