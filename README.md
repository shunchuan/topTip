# topTip
web提示框，基于原生JavaScript，

    **首先，这是我的第一个pull,作为一个gitHub新人,并不了解怎么使用gitHub.写的也是入门级的web小组件,同是新手可做参考，也欢迎大佬们指点**

    因为今天正好工作不是很多,项目并不赶进度，所以有更多的时间能将项目中的一些代码整理一下。
    我作为一个做C#、.NET开发的，并不擅长前端方面的内容，还记得以前写个css样式都要请教室友帮忙。当然，现在也不擅长，比如现在这个小组件（就算他是个小组件），本来是在页面上html写div,然后css样式，最后<script></script>里写js，就是正常的调用。
    但是整个项目中都要调用这个提示框（之前alert和input赋值...惭愧），所以还是想要好好写一下它。
    首先感谢[原生JavaScript插件编写指南](http://geocld.github.io/2016/03/10/javascript_plugin/)，里面有他的[domzoom.js](https://github.com/Geocld/domzoom.js)和[ColorDivideJS](https://github.com/Geocld/ColorDivideJS),本来我只会写点简单的js，比如ajax调用来调用去，但是现在我想把之前写的js封装起来,参考他的博客和project,算是写了个入门级的小东西。

# CSS.code
    这边有两层，最底层的toptips：
        .toptips
        {
            position: fixed;    //绝对定位
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            top: 20px;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 9012;     //显示级别
            width: 100%;
            margin: 0 auto;
            pointer-events: none;    //神器，不阻挡下面按钮点击
        }
    同时里面的居中对于一个前端一窍不通的我感觉很有意思， text-align: center; margin: 0 auto;轻松搞定

    第二层就是文本框的样式，字体，背景，颜色等等了，可以自己配置，当然，在js封装中有其参数配置

# JS.code
    js是用原生JavaScript语言编写，本来写的是JQuery(因为在做的项目用的是JQuery)，
    
    首先，(function() {})(        
    );
    所有的事件都写在里面
    **里面有options 配置参数和5个事件：**
    - 1、创建新弹出框，如果指定ID，则生成指定ID的弹出框组件，否则默认是options.initID
        这里不需要在页面中写div，而是由js直接在body中生成（由于是弹出框，所以位置并不影响）
        在创建页面时直接var tip = topTip.create(); 执行事件return this
    - 2、配置参数
        tip.setData({
             //initID:"ID",
             tipText: "没有匹配的数据！",
             tipType: "error"
        })
        当只与一个弹出框，则可省略ID,此事件最后return this
    - 3、显示弹出框
        调用方法是
            tip.showTopTip();
        需要先配置参数setData,然后调用showTopTip();
    - 4、隐藏弹出框
        tip.hideToptip();
    - 5、显示弹出框,延时隐藏
        这个事件内部的执行顺序很简单，先显示弹出框，然后setTimeOut执行隐藏，**由于setTimeOut是异步，所以请考虑你的代码**
    **执行事件时都要先进行setData配置参数，然后再显示**

# options
    var options = {
        font_Color: '#707070',
        font_Size: '14px',
        font_family: '宋体',
        top: '20px',
        background_color: '#e4e4e4',
        isShow: false,  //初始时是否弹出显示
        initID: "showTopTip",   //当用户没有提供生成的div id时，默认的ID名
        tipText: '',  //提示框文字
        tipType: '',  //提示框类型或图片url
        delayTime: 2000   //延时时间
    }


    tipType支持四种类型，ok error warn loading 或者可填写自己的图片url亦可。
        
