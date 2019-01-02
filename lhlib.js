(function() {
    var er_loadlib = function () {
        console.log('START er_loadlib');
        if(document.head) {
            var version = '11-4-9';
            script=document.createElement('script');
            script.type='text/javascript';
            script.src='https://erinsasha.github.io/lhlib/lhlib-full.js?v='+version;
            document.head.appendChild(script);

            /*var style=document.createElement('link');
            style.type='text/css';
            style.rel='stylesheet';
            style.href='https://erinsasha.github.io/lhlib/lhs.css?v='+version;
            document.head.appendChild(style);*/

            console.log('END er_loadlib');
        } else {
            setTimeout(er_loadlib, 100);
        }
    }

    er_loadlib();
})();