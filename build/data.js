(function () {
    var content = [{"context":[{"title":"介绍","link":"/index.html"}],"content":"\n        <h1 id=\"介绍\">\n            <a href='#介绍' class='header-anchor'>#</a>\n            <span>介绍</span>\n        </h1>\n    \n        <h2 id=\"译者的话\">\n            <a href='#译者的话' class='header-anchor'>#</a>\n            <span>译者的话</span>\n        </h2>\n    <ul>\n<li>本项目是对<a href=\"https://docs.scipy.org/doc/scipy/reference/stats.html\">Scipy.stat</a>文档的翻译</li>\n<li>翻译人 ： 安宁</li>\n</ul>\n\n        <h2 id=\"联系方式\">\n            <a href='#联系方式' class='header-anchor'>#</a>\n            <span>联系方式</span>\n        </h2>\n    <table>\n<thead>\n<tr>\n<th>微信</th>\n<th>QQ</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><img src=\"/static/wechat_code.jpg\" alt=\"微信二维码\"></td>\n<td><img src=\"/static/qq_code.jpg\" alt=\"QQ二维码\"></td>\n</tr>\n<tr>\n<td>邮箱</td>\n<td><a href=\"mailto:13048269826@163.com\">13048269826@163.com</a></td>\n</tr>\n</tbody></table>\n\n        <h2 id=\"项目信息\">\n            <a href='#项目信息' class='header-anchor'>#</a>\n            <span>项目信息</span>\n        </h2>\n    <ul>\n<li>GitHub地址：sds</li>\n<li>域名地址：sds</li>\n</ul>\n\n        <h2 id=\"文档生成\">\n            <a href='#文档生成' class='header-anchor'>#</a>\n            <span>文档生成</span>\n        </h2>\n    <p>本文档使用teadocs生成</p>\n\n        <h2 id=\"版权信息\">\n            <a href='#版权信息' class='header-anchor'>#</a>\n            <span>版权信息</span>\n        </h2>\n    <p> 除非额外说明，本网站的所有公开文档均遵循 署名-非商业性使用-相同方式共享 3.0 中国大陆 (CC BY-NC-SA 3.0 CN) 许可协议。任何人都可以自由地分享、修改本作品，但必须遵循如下条件：</p>\n<ul>\n<li>署名：必须提到原作者，提供指向此许可协议的链接，表明是否有做修改</li>\n<li>非商业性使用：不能对本作品进行任何形式的商业性使用</li>\n<li>相同方式共享：若对本作品进行了修改，必须以相同的许可协议共享</li>\n</ul>\n"},{"context":[{"title":"连续分布","link":"/Continuous/index.html"}],"content":"\n        <h1 id=\"连续分布\">\n            <a href='#连续分布' class='header-anchor'>#</a>\n            <span>连续分布</span>\n        </h1>\n    "},{"context":[{"title":"多变量分布","link":"/Multivariate/index.html"}],"content":"\n        <h1 id=\"多变量分布\">\n            <a href='#多变量分布' class='header-anchor'>#</a>\n            <span>多变量分布</span>\n        </h1>\n    "},{"context":[{"title":"离散分布","link":"/Discrete/index.html"}],"content":"\n        <h1 id=\"离散分布\">\n            <a href='#离散分布' class='header-anchor'>#</a>\n            <span>离散分布</span>\n        </h1>\n    "},{"context":[{"title":"统计摘要","link":"/Summary/index.html"}],"content":"\n        <h1 id=\"统计摘要\">\n            <a href='#统计摘要' class='header-anchor'>#</a>\n            <span>统计摘要</span>\n        </h1>\n    "},{"context":[{"title":"频率统计","link":"/Frequency/index.html"}],"content":"\n        <h1 id=\"频率统计\">\n            <a href='#频率统计' class='header-anchor'>#</a>\n            <span>频率统计</span>\n        </h1>\n    "},{"context":[{"title":"相关性函数","link":"/Correlation/index.html"}],"content":"\n        <h1 id=\"相关性函数\">\n            <a href='#相关性函数' class='header-anchor'>#</a>\n            <span>相关性函数</span>\n        </h1>\n    "},{"context":[{"title":"统计测试","link":"/st_test/index.html"}],"content":"\n        <h1 id=\"统计测试\">\n            <a href='#统计测试' class='header-anchor'>#</a>\n            <span>统计测试</span>\n        </h1>\n    "},{"context":[{"title":"转换","link":"/Transformations/index.html"}],"content":"\n        <h1 id=\"转换\">\n            <a href='#转换' class='header-anchor'>#</a>\n            <span>转换</span>\n        </h1>\n    "},{"context":[{"title":"统计距离","link":"/distances/index.html"}],"content":"\n        <h1 id=\"统计距离\">\n            <a href='#统计距离' class='header-anchor'>#</a>\n            <span>统计距离</span>\n        </h1>\n    "}];

    var escapeHtml = function (html) {
        let str = html;
        str = str.replace(/&/g, '&amp;');  
        str = str.replace(/</g, '&lt;');  
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#039;');  
        return str;
    }

    var clearHtml = function(html) {
        let str = html;
        str = str.replace(/&amp;/g, ''); 
        str = str.replace(/&lt;/g, ''); 
        str = str.replace(/&gt;/g, '');
        str = str.replace(/&quot;/g, '');
        str = str.replace(/&#039;/g, '');
        return str;
    }

    var randStr = function () {
        return Math.random().toString(36).substr(2);
    };

    var findTitle = function (ele) {
        var findPrevs = function (ele) {
            var children = $(ele).parent().children();
            var prevs = [];
            var findIt = false;
            children = Array.prototype.slice.call(children);
            children.forEach(function (subEle) {
                if ($(subEle).is($(ele))) {
                    findIt = true;
                }
                if (findIt === false && $(subEle).text() != "") {
                    prevs.push(subEle);
                }
            });
            return prevs;
        };

        var findH = function (eles) {
            var _eles = Array.prototype.slice.call(eles);
            _eles.reverse();
            var title = "";
            var id = "";
            _eles.forEach(function (item) {
                if (!title) {
                    if (item.nodeName[0] === "H") {
                        title = $(item).text();
                        id = $(item).attr("id");
                    }
                }
            });
            return {
                text: title,
                id: id
            };
        };
        var prevs = findPrevs(ele);
        if (prevs.length) {
            return findH(prevs);
        }
    };

    window.searchData = function (keyword) {
        var searchResult = [];
        content.forEach(function (item, index) {
            var tempHtml = "<div id='" + randStr() + "'></div>";
            var tempEle = $(tempHtml);
            var findArray = [];
            tempEle.html(clearHtml(item.content));
            findArray = tempEle.find(":contains('" + keyword + "')");
            findArray = Array.prototype.slice.call(findArray);
            if (findArray.length) {
                findArray.forEach(function (ele) {
                    var findContent = $(ele).text();
                    findContent = findContent[0] === "<" ? $(findContent).text() : findContent;
                    findContent = escapeHtml(findContent);
                    findContent = findContent.replace(new RegExp(keyword, 'g'), "<b>" + keyword + "</b>");
                    var hObj = findTitle(ele);
                    if (hObj) {
                        searchResult.push({
                            context: item.context,
                            title: hObj.text,
                            hid: hObj.id,
                            findContent: findContent
                        });
                    }
                });
            }
        });
        return searchResult;
    };
})();