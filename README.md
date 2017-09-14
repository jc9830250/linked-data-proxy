# linked-data-proxy

GitHub Repository: https://github.com/pulipulichen/linked-data-proxy

How to use AUTOANNO?
####

1. Add a HTML container with class="AUTOANNO-content" which contains the content text.
2. Add website's URL pattern to "referer_allow_list" configuration: https://github.com/pulipulichen/linked-data-proxy/blob/master/config.js
3. Update the server from GitHub.

How to customize models?
####

You can change configuration by using following JavaScript.
````
URL_MODELS = "wiki,moedict,cbdb,tgaz,cdict,pixabay";
````

- wiki: Wikipedia
- moedict: Moe Dict
- cdbd: CDBD
- tgaz: TGAZ
- cdict: English-Chinese dictionary 英漢字典
- pixabay: Pixabay picture database

-----------------

## TODO
- 查詢一個會擋人的資料庫 (google跟cbdb都會擋人，過不去)

# Instruction: Server startup
- 執行 start_app.bat

# Instruction: Localhost test
- http://localhost:3000/wiki.l/數位圖書館
- 使用範例: http://localhost/linked-data-proxy/usage-example.html

# Instruction: Client usage
## 查詢資料

```js
$.getJSON("http://localhost:3000/wiki.l/%E6%95%B8%E4%BD%8D%E5%9C%96%E6%9B%B8%E9%A4%A8?callback=?", function (_data) {
    console.log(_data[0]["response"]);
});
```
## 投票

```js
$.get("http://localhost:3000/wiki.l/%E6%95%B8%E4%BD%8D%E5%9C%96%E6%9B%B8%E9%A4%A8/10?callback=?");
```

## 批次確認

```html
<script type="text/javascript" src="/utils.js" id="link_data_proxy_utils"></script>
```

```js
$("#check").submit(function () {
    $("#check_result").html("Loading...");

    var _query = $("#check_query").val().trim();
    var _modules = [];
    $("input[name='check_module']:checked").each(function (i, ele) {
        _modules.push(ele.value);
    });

    LINK_DATA_PROXY.check(_query, _modules, function (_result) {
        $("#check_result").html(_result.join(" "));
    });
});
```

# OpenVZ的Node.js部屬教學
- 範本 ubuntu-14.04-x86_64.tar.gz
- sudo apt-get update
- apt-get install -y git
- wget -N https://pulipulichen.github.io/linked-data-proxy/git_init.sh
- bash git_init.sh
    - sudo apt-get install curl -y
    - curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    - sudo apt-get install -y nodejs
    - npm設定請看npm_install.sh
- 開機時啟動
    - chmod +x /root/linked-data-proxy/*.sh
    - /etc/rc.local
    - /root/linked-data-proxy/start_app.sh
完成的虛擬機器下載 (Google Drive)：https://goo.gl/xbsf3e

# GA
- 要啟用User-ID
- 要自訂維度UUID

# 建立新的Module
請參考/proxy_module/zh.wikipedia.org/裡面的檔案設置

# REFERENCE
- https://github.com/pulipulichen/linked-data-proxy
- http://expressjs.com/zh-tw/guide/routing.html
- http://docs.sequelizejs.com/en/v3/docs/models-usage/
- universal-analytics: https://github.com/peaksandpies/universal-analytics
- GA: https://analytics.google.com/analytics/web/#report/defaultid/a46464710w135478152p139632692/
- GA即時: https://analytics.google.com/analytics/web/#realtime/rt-content/a46464710w135478152p139632692/

# LICENSE

MIT License

Copyright (c) 2017 Pulipuli Chen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
