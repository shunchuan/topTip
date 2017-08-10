/**
@Creator  csc 
@Date 20170809
@功能：1、弹出提示框
@      2、隐藏提示框
@      3、弹出提示框，定时隐藏
@弹出提示框类型  参数
@特性： 采用原生JavaScript
*/
(function() {
    var options = {
        font_Color: '#707070',
        font_Size: '14px',
        font_family: '宋体',
        top: '20px',
        background_color: '#e4e4e4',
        //        peType: 'px',
        //        align: 'center',
        //        height: 25,
        isShow: false,  //初始时是否弹出显示
        initID: "showTopTip",   //当用户没有提供生成的div id时，默认的ID名
        tipText: '',  //提示框文字
        tipType: '',  //提示框类型或图片url
        delayTime: 2000   //延时时间
    }


    /**
    *定时自动隐藏提示层
    *@id div的ID
    *@tipText 弹出提示层显示的文字
    *@tipType 弹出提示层显示的类型ok warn error loading
    *@time 延时多久隐藏
    */
    function autoShow(id) {
        Show(id);
        setTimeout(function() { Hide(id) }, options.delayTime);
    }

    /*
    *显示提示层
    *tipText提示层显示的内容
    *tipType提示层的类型  ok warn error loading 或者为图片路径
    */
    function Show(id) {
        //            $('#showTopTipText').html(tipText);
        document.getElementById(id).style.visibility = 'visible';
        document.getElementById(id + "_Text").innerHTML = options.tipText;

        if (options.tipType == "ok") {
            document.getElementById(id + "_tipImg").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACgklEQVRYR+2Yz3XTQBDGvxEnciEdxKkApwK0t8QnOmCpAFMBTgW4AzYVwEnJbVWCXQGmA3OxT3h4I8l+jpG0f7x5GF501Wr2p29mdj6JcOIXnTgfngGPzdD/r+C11QN6QRfEnO+rxUQl/+IfD8osjlExSsHc6vOzDO/A0ACGDoAZCGa1wV2pzDIUNhhwZPUEhA8AzgM3W4IwLd6Y25DnvAEr1QjWQzHX/rMVQ/mq6QU4snqIGi5UtS7YJRiqUGbmehsnYKPc94RwW6blinHpUtIJOLJaivy1600j78+K3Fz1PdsL2DTEp8jN/R5j3BbKTLoWdwI+YWoPWXpT3Ql4Y/WYCJ/9ZDhuFTM+3iszbYvSCZi69phxx8AkA0oQLg5gOmuxFVDGV0aQzk1yCdy9MnpktQbhS1vQDeOybSy2At5Y/ZYIX9PQ4X2hjOmDk302DPWgTHm4Zytgiu5lxk8Cxj5wFVRHNz8JYAOXy6RwKbdTLCWgdB3J2CP8eUYy5gB0EFxyBbmuK6lVAIYIr5o0zVdALuPLW7mthCEKXludZ7U56L4YV41K4ge/MVCugXEUXGiTeB4zrY4k9gQIOmZENs+D+hFktC1jzAtlWp15ilFXzdIzYBDrGaNGnZiFl8Bi1wC95YhF1dURhlaOpDUw6PKF/67d2grmWYtxU7Gn9rYBnY46JNUhlK7UegM2HT2Uc86nHn0g90eha71TwW2AymHXXu647xPGbtq44OS+N+BeTU4YELddjzfPq1Ft2vf90RYqGFCCNHWpCRAD2q8oY86AWQPG9YmZDHA/kIxFAIMMePTzaCPlACz+ys8jz6wmWRaV4iQ7ewZ5BvQUqnPZySv4G8NPODhA7OTPAAAAAElFTkSuQmCC";
        }
        else if (options.tipType == "warn") {
            document.getElementById(id + "_tipImg").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADBUlEQVRYR9WYT1YaQRDGv5qFebqRnCDjCYJLx0XgBMETBE8QNoI7cSdkY06gngBuoC4Yl5AT2N5ANuHpYr68bmAccGBmmiEhbOmu+dXfrirBhv9kw/mwMqB70isCsguHBdApGoUlGCCQZ4BD9eNwsIoRrAANlMg3CCoCuMsACCgQXZA3NrCZAN3ThxLIMwFKNlYhcAeRc3VxcJf2fipAt9YvYGt0JYJKWsFLraot+rp9rC73n5PkJQIadzrSSXJl0ofm/yc5AHGc5PalgMalQdARkUJWgDTnST7DcY6WuXwh4DgRcLsuuKkCBpIoL7JkLKCJuQ+jft5uXWRV4+7XnXJcTMYD1v1O5oQgnkxJmfxEoGvibhpX6zMkuqrtHc2ffweo407I27SCQ1e9bH+MWsCt+xURdLLIoUh5Ph7fAzb8W5s699jyZmTZKKrrpGp55ahSs0JPekVxpJ9F6+nZPACNqwPuRxNmFrDhXwrw/Z8CAj9Vy6uFsRyFcRv+o23m5mZBQKmWt/cOUNc9W/dqYXkBGjeL7KmLA1MRQhfbBHXU+jkDhtkcBawKeWUTf7lbkDhSba87a8F6rykiZ5sByHPVPmz+b4DZK//aYjDWxZZP3MKnbgV50SfvLUlWLDOmnae8tfLCqm1NjS0z2hJ7dV9B8Mk2UXK5Rzw9tr1wEMvtqQMwJBGOmCL4YgPMpU/dCm6OukWDuacPVnV1abNgBNf9Oxvt83hJSNyrtjcz0ubXsEbez4mi62lYjfBGryuQr1liaNLuhy0/yGKWgYvEjWp71cSW3wDW+gXZGg3+VkYT/IWXnVLqoclAjhNG17XUg08Wi0fODhmwlGnsnF6etGC6q1gX5JAiFavBPYQ0qw9cC+SzpYVirxm3BqiutPoIIc0g/1tDZkqcRQrphMDrdi2X5VH0I+NdDZs2ddK08sQ9HGnmvn6bt8Rk41UVopKY6XrjIOgi4HWSO+Msnrh+S4o79/RBP+wuAhYAjlfAkAEcvQKGmg4/SXIW/b8yoO2H097beMA/9vGkOM4l7lsAAAAASUVORK5CYII=";
        }
        else if (options.tipType == "loading") {
            document.getElementById(id + "_tipImg").src = "data:image/gif;base64,R0lGODlhEAAQAKIHADZmvyRl1FZ5upOjxHWOv7G5yb2/w////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAHACwAAAAAEAAQAAADQ3i6B8CQORdXCG0eIeC92cZ11seMZBlxjGFUC0EcrgvLcv1W+GzDB1lrxxgMILqi8bhIFgqHJbP5ej6j04gVClxcIwkAIfkEBQAABwAsAAAAABAAEAAAAz94uifCkDkXFwBtHkLgvdnGddbHjGQZcUwQVMswHK4Ly3L9VvhswwcZcFEoDIlFI8xgOCSVESbTCY1Kj4ppJAEAIfkEBQAABwAsAAAAABAADgAAAzt4ukfEkDkXlxBtnjHgvdnGddbHjGQZcQwAVEtRHK4Ly3L9VvhswwcZIxCIGAwQIpFxPA6VzGayCHEqEgAh+QQFAAAHACwAAAAAEAAQAAADPni6N8OQORcXIW2eUuC92cZ11seMZBlxjCBUi2EcrgvLcv1W+GzDBxkDAAAOiUXjAVkMBIzEg9OplE6r1koCACH5BAUAAAcALAAAAAAOABAAAAM8eLpXxVA5F88YbR5j1r3ZxnXWx4xkGXEKQVSM68KtTNc3IwhRECy7HcPnUwR5AMCB+DMik8piBKq8JSEJACH5BAUAAAcALAAAAAAQABAAAAM+eLpnxpA5F1cpbdZzb95cBzLeeAzDGAQnmlbr6r5RzKIquxBEBAAQHo/x+zGEPYHgUAQek8qlcRNdmg7KSgIAIfkEBQAABwAsAAACABAADgAAAz54aqZ+IbzD2Ivx1eaw1Nz1KUUxTQBwlOWppClrurDauq/qDMMpCBMe7/H7PYQ9AuFQBB6TyqURF13iHkpXAgAh+QQFAAAHACwAAAAAEAAQAAADPni6F8GQORfjfADURXPejKeBy7cYBikIB4pu6+qmVcy+4MoURUQQEB6P8fvthIfB4FAEHpPKpXETXZIUykoCADs=";
        } else if (options.tipType == "error") {
            document.getElementById(id + "_tipImg").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADaklEQVRYR82ZQVYaQRCGqyA9LPIwLvNeAoFNxFXMDfAE6gmiJ1BPEG8QPYHkBMIJ4g3EFZiNE0neyxIkeS9OB/68nmFwYAamZkAj2+mu/rqquvrvginl7+srtYEsbwG0QYwSEW9MmkKTwDYzNXmAxtsfuplmKU4yqfWSSqzUPjFvE1EpyVwisgmoQ+uT9Z9kS+eKAK9XadXJq09g3pUanjeOgZrV14flLnXj7MUCXhWy2+DMKRGvxhlL9h1dxnBvrTOoz93MvI9XBXW6LK/NWsd4c62j92Z+j/pgQnqXt06JyeTaw/9A9Vzf2YsKeWSI2wXr7NHg/O2D6pWOszPtjRDgY4R1ZkiGOKl81wfB7xOA3oHInj18TGevwBjsBA/OGNDNuxV1vfzTmnS76OZuddnPxzFgq6BqzPwhqbmHGA/g83pHuzXXBXRvCMu6Fi8GXBKbm4RfyOagRyCbmN/JxhPBccrmxnEB26/VMWV4XzQZuMz1dVU/V6Vhls7jIdHLDKiqfmv7Lq/OxZCjA+MBFl3vxd+tIzg/P4xgmA/pwflCwauvYki7cuOU2VuEL0TeI3QzA9oMKpPZkJNwxv5o7BfpQcwM8J5bReuIiT7KAM0oCeTicB4PDrldsOrEtCUHjIMkCoY1jefGLKAGt4vqIiw2JbjRnjQzI1JAHNbJldHkdtGCBCd6TBgyOC5pzkWtsSBgdLgXCusU5TIAJ0qJbz++BMnitiBg+LRGhFhQzGfDcrugmuLqPmEnupTMOCTpIIHLtGUmFNb7A+GWGWExjwmzKTMpCvUcOP9hJSnmkhzEYdKrTgDnL7w4pHvVGXOtomVkzZv4PaGZu9WbU2JhThGehByJYjN+qgsRXhlE39ZvnFJyuUUe5EhuCW4ID9KVWytKBOfiBuVWYsFKMH0WI1iFj3mYDoIt8dw4QYKC1Q3zE5L8vvcM1/SjyexSKOPjMzbdCPRyt7oUejQZY0/62env9r+GOu7h7kOmE7HpAjqeBWpUOk6oFxTZmxk1j2rJlXZKSFAj13d2xc2jRw13RFiD25Q2MGvLP93oMYa7CzUw/Z2YkP/Jq+OltUaGOMn90kdLaQEH3e3eOM/UATK8Lbu772ebu5WHqOOvPl56Ez0q9Uf6r0rgKhFKIdFr+jfENjHOMwM6T/s3xD87vBNHKzDfpwAAAABJRU5ErkJggg==";
        } else document.getElementById(id + "_tipImg").src = options.tipType;
    }

    /*
    *隐藏显示层
    */
    function Hide(id) {
        //            $("#showTopTip").val("");
        document.getElementById(id).style.visibility = 'hidden';
        document.getElementById(id + "_Text").innerHTML = "";
        options.tipText = '';
        options.tipType = '';
        options.delayTime = 2000;
    }

    function Creating(id) {
        var Odiv = document.createElement("div");             //创建一个div
        Odiv.innerHTML = "<div id='mainTopTip' class='mainTopTip'> <img id='" + id + "_tipImg' /> <div id='" + id + "_Text' class='mainTopTip_text'></div> </div>";
        Odiv.id = id;
        //        $('#' + id).addClass("toptips");
        Odiv.setAttribute("class", "toptips");

        if (!options.isShow) {
            Odiv.style.visibility = 'hidden';
        }
        Odiv.style.top = options.top;
        document.body.appendChild(Odiv);

        var textDiv = document.getElementById(id + "_Text");
        textDiv.style.fontSize = options.font_Size;
        textDiv.style.color = options.font_Color;
        textDiv.style.fontFamily = options.font_family;
        textDiv.style.backgroundColor = options.background_color;
    }

    var api = {
        setData: function(opts) {
            //没有参数传入，直接返回默认参数
            if (!opts) return options;
            //有参数传入，通过key将options的值更新为用户的值
            for (var key in opts) {
                options[key] = opts[key];
            }
            return this;
        },
        /*
        *创建弹出提示层
        */
        create: function(id) {
            if (!id)
                id = options.initID;
            Creating(id);
            return this;
        },
        showTopTip: function(id) {
            if (!id)
                id = options.initID;
            Show(id);
        },
        hideToptip: function(id) {
            if (!id)
                id = options.initID;
            Hide(id);
        },
        autoShowTopTip: function(id) {
            if (!id)
                id = options.initID;
            autoShow(id);
        }
    }
    this.topTip = api;
})();



