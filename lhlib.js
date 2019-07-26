(function() {
    console.log('START er_loadlib');

    var v_XMLHttpRequest;
    if(window._bpr && window._bpr.requestSupervisor && window._bpr.requestSupervisor.originalXHR)
        v_XMLHttpRequest = window._bpr.requestSupervisor.originalXHR;
    else
        v_XMLHttpRequest = window.XMLHttpRequest;

    var req = new v_XMLHttpRequest;
    var js_code;

    req.open("GET", 'https://erinsasha.github.io/lhlib/lhlib-full.js?v='+'14-2-3', !0);
    req.onreadystatechange = function() {
        if(4 === req.readyState && (200 === req.status))
        //if(200 === req.status)
        {
            //js_code = req.responseText;
            js_code = req.response;
        }
    };
    req.send();

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    var er_loadlib = function () {
        console.log('req.readyState='+req.readyState);
        console.log('req.status='+req.status);
        if(document.head && js_code) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            var mobo = makeid(Math.floor((Math.random()*10) + 1))+Math.floor((Math.random() * 10000) + 1)+makeid(Math.floor((Math.random()*10) + 1));
            js_code = js_code.replace(new RegExp('modo-data-br-alb-v2', 'g'), mobo);
            script.appendChild(document.createTextNode(js_code));
            script.id = mobo;
            head.appendChild(script);
        } else {
            setTimeout(er_loadlib, 100);
        }
    }

    er_loadlib();


    /*var er_loadlib = function () {
        console.log('START er_loadlib');
        if(document.head) {
            var version = '11-4-9';
            script=document.createElement('script');
            script.type='text/javascript';
            script.src='https://erinsasha.github.io/lhlib/lhlib-full.js?v='+version;
            document.head.appendChild(script);

            /!*var style=document.createElement('link');
            style.type='text/css';
            style.rel='stylesheet';
            style.href='https://erinsasha.github.io/lhlib/lhs.css?v='+version;
            document.head.appendChild(style);*!/

            console.log('END er_loadlib');
        } else {
            setTimeout(er_loadlib, 100);
        }
    }

    er_loadlib();*/
})();