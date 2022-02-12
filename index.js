initialization();

function initialization() {
    chrome.storage.sync.get(['r_status'], function(result) {
        if(result.r_status){
            init();
            setContentEditable();
            floatingButton();
            setScript();
        }
      });
    console.warn(`©Copyright ${ (new Date().getFullYear())} MD. Rakib Hasan | All Rights Reserved.`)  
}

function init() {
    //style  
    var initial_style = document.createElement('style');
    initial_style.setAttribute('type', 'text/css');
    initial_style.setAttribute('id', 'customCss');
    document.getElementsByTagName('head')[0].appendChild(initial_style);
}

function setContentEditable() {
    var elements = document.querySelectorAll('body *');
    document.body.classList.add('r_body')
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("contentEditable", "true"); //element can be editable 
        elements[i].classList.add("c_" + i);
        elements[i].setAttribute("onClick", "openModel(event)");
    }
}


function floatingButton() {
    var floatingButton = document.createElement("div");
    floatingButton.id = "r-floating-btn";
    floatingButton.innerHTML = `
    <style>
    .option-fab-wrapper {
        position: fixed !important;
        bottom: 1rem !important;
        right: 8rem !important;
        background-color: rgba(255,255,255,.7) !important;
        color:  #126ee2 !important;
        font-weight: bold !important;
        padding: 10px !important;
    }
    
    .fab-wrapper-checkbox{
        opacity: 1 !important;
        background: red !important;
        cursor: pointer !important;
        z-index: 1 !important;
        width: 30px !important;
        height: 15px !important;
    }
    
    .fab-wrapper {
        position: fixed !important;
        bottom: 2rem !important;
        right: 2rem !important;
    }
    .fab-checkbox {
        display: none !important;
    }
    .fab {
        position: absolute !important;
        bottom: -1rem !important;
        right: -1rem !important;
        width: 4rem !important;
        height: 4rem !important;
        background: blue !important;
        border-radius: 50% !important;
        background: #126ee2 !important;
        box-shadow: 0px 5px 20px #81a4f1 !important;
        transition: all 0.3s ease !important;
        z-index: 1 !important;
        border-bottom-right-radius: 6px !important;
        border: 1px solid #0c50a7 !important;
    }
    .fab:before {
        content: "" !important;
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        left: 0 !important;
        top: 0 !important;
        border-radius: 50% !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .fab-checkbox:checked~.fab:before {
        width: 90% !important;
        height: 90% !important;
        left: 5% !important;
        top: 5% !important;
        background-color: rgba(255, 255, 255, 0.2) !important;
    }
    .fab:hover {
        background: #2c87e8 !important;
        box-shadow: 0px 5px 20px 5px #81a4f1 !important;
    }
    .fab-dots {
        position: absolute !important;
        height: 8px !important;
        width: 8px !important;
        background-color: white !important;
        border-radius: 50% !important;
        top: 50% !important;
        transform: translateX(0%) translateY(-50%) rotate(0deg) !important;
        opacity: 1 !important;
        animation: blink 3s ease infinite !important;
        transition: all 0.3s ease !important;
    }
    .fab-dots-1 {
        left: 15px !important;
        animation-delay: 0s !important;
    }
    .fab-dots-2 {
        left: 50% !important;
        transform: translateX(-50%) translateY(-50%) !important;
        animation-delay: 0.4s !important;
    }
    .fab-dots-3 {
        right: 15px !important;
        animation-delay: 0.8s !important;
    }
    .fab-checkbox:checked~.fab .fab-dots {
        height: 6px !important;
    }
    .fab .fab-dots-2 {
        transform: translateX(-50%) translateY(-50%) rotate(0deg) !important;
    }
    .fab-checkbox:checked~.fab .fab-dots-1 {
        width: 32px !important;
        border-radius: 10px !important;
        left: 50% !important;
        transform: translateX(-50%) translateY(-50%) rotate(45deg) !important;
    }
    .fab-checkbox:checked~.fab .fab-dots-3 {
        width: 32px !important;
        border-radius: 10px !important;
        right: 50% !important;
        transform: translateX(50%) translateY(-50%) rotate(-45deg) !important;
    }
    @keyframes blink {
    50% {
    opacity: 0.25 !important;
    }
    }
    .fab-checkbox:checked~.fab .fab-dots {
    animation: none !important;
    }
    .fab-wheel {
    position: absolute !important;
    bottom: 0 !important;
    right: 0 !important;
    border: 1px solid # !important;
    width: 10rem !important;
    height: 10rem !important;
    transition: all 0.3s ease !important;
    transform-origin: bottom right !important;
    transform: scale(0) !important;
    }
    .fab-checkbox:checked~.fab-wheel {
    transform: scale(1) !important;
    }
    .fab-action {
    position: absolute !important;
    background: #0f1941 !important;
    width: 3rem !important;
    height: 3rem !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: White !important;
    box-shadow: 0 0.1rem 1rem rgba(24, 66, 154, 0.82) !important;
    transition: all 1s ease !important;
    opacity: 0 !important;
    }
    .fab-checkbox:checked~.fab-wheel .fab-action {
    opacity: 1 !important;
    }
    .fab-action:hover {
    background-color: #f16100 !important;
    }
    .fab-wheel .fab-action-1 {
    right: -1rem !important;
    top: 0 !important;
    }
    .fab-wheel .fab-action-2 {
    right: 3.4rem !important;
    top: 0.5rem !important;
    }
    .fab-wheel .fab-action-3 {
    left: 0.5rem !important;
    bottom: 3.4rem !important;
    }
    .fab-wheel .fab-action-4 {
    left: 0 !important;
    bottom: -1rem !important;
    }
    </style>
    <div class="option-fab-wrapper">
    <div>
    <input class="fab-wrapper-checkbox" onClick="setContentEditable()" type="checkbox" id="r_options_disable">
    <level>Disable</level>
    </div>
    <div>
    <input class="fab-wrapper-checkbox" type="checkbox" checked id="r_options">
    <level>Apply CSS</level>
    </div>
    </div>
    <div class="fab-wrapper">
    <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
    <label class="fab" for="fabCheckbox">
    <span class="fab-dots fab-dots-1"></span>
    <span class="fab-dots fab-dots-2"></span>
    <span class="fab-dots fab-dots-3"></span>
    </label>
    <div class="fab-wheel" style="font-size:20px !important; cursor: pointer">
    <a onClick="action(4)" class="fab-action fab-action-1">
    <span>🔓</span>
    </a>
    <a onClick="action(3)" class="fab-action fab-action-2">
    <span>📬</span>
    </a>
    <a onClick="action(2)" class="fab-action fab-action-3">
    <span>🌐</span>
    </a>
    <a onClick="action(1)" class="fab-action fab-action-4">
    <span>📷</span> 
    </a>
    </div>
    </div> `;

    document.body.appendChild(floatingButton);
}

function setScript() {

    var initial_script = document.createElement('script');
    initial_script.setAttribute('type', 'text/javascript');
    
    initial_script.innerHTML = `
    let file_name = "index_rkb";
    
    function action(data) {
        switch (data) {
            case 1:
                takeScreenShot();
                break;
            case 2:
                saveHtml();
                break;
            case 3:
                debugBase64();
                break;
            case 4:
                openHtml();
                break;
            default:
                console.log("working....");
        }
    }
    
    function takeScreenShot() {
        document.getElementById("r-floating-btn").style.display = "none";
        html2canvas(document.body).then((canvas) => {
            let base64image = canvas.toDataURL("image/png");
            document.getElementById("r-floating-btn").style.display = "block";
            download(base64image, file_name, 'image/jpeg');
        });
    }

    function debugBase64(base64image) {
        document.getElementById("r-floating-btn").style.display = "none";
        html2canvas(document.body).then((canvas) => {
            let base64image = canvas.toDataURL("image/png");
            document.getElementById("r-floating-btn").style.display = "block";
    
            var win = window.open();
            win.document.write('<iframe src="' + base64image + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
            win.document.title = 'Screenshot';
        });
    }
    
    function saveHtml() {
        const virtualDom = getVirtualDom();
        download(virtualDom.documentElement.outerHTML, file_name, 'text/html');
    }
    
    function openHtml() {
        var wnd = window.open("about:blank", "", "_blank");
        const virtualDom = getVirtualDom();
        wnd.document.write(virtualDom.documentElement.outerHTML);
    }
    
    function getVirtualDom() {
        let htmlString = document.documentElement.innerHTML;
        var virtualDom = new DOMParser().parseFromString(htmlString, "text/html");
        virtualDom.getElementById("customDownloadScript")?.remove();
        virtualDom.getElementById("customHtml2canvasSript")?.remove();
        virtualDom.getElementById("r-floating-btn")?.remove();
        virtualDom.getElementById("r-main")?.remove();
    
        let dom = virtualDom.querySelectorAll('[contenteditable=true]');
        dom.forEach(element => {
            element.removeAttribute("contenteditable");
            element.removeAttribute("onClick");
        });
        return virtualDom;
    }
    
    function setStyle(self, event, className) {
       // let target = self.children[0].children;
       let target =  self.parentNode.children;
        let isOn = target[1].checked;
        let cssValue = "";
        if (isOn) {
            cssValue = target[0].value;
        }
        let css = "."+className+"{"+cssValue+"}";
    
        var element = document.getElementById("customCss");
    
        //remove existing css class
        let start_index = element.innerHTML.indexOf("."+className);
        if (start_index >= 0) {
            let end_index = element.innerHTML.indexOf('}', start_index);
            let txt = element.innerHTML.slice(start_index, end_index + 1);
            let output = element.innerHTML.replace(txt, "");
            element.innerHTML = css + output;
        } else {
            element.innerHTML += css;
        }
    }

    function setContentEditable() {
        let disable_all = document.getElementById("r_options_disable").checked;
        if(!disable_all){
            var elements = document.querySelectorAll('body *');
            document.body.classList.add('r_body')
            for (let i = 0; i < elements.length; i++) {
                elements[i].setAttribute("contentEditable", "true"); //element can be editable 
                elements[i].classList.add("c_" + i);
                elements[i].setAttribute("onClick", "openModel(event)");
            }
        } 
    }

    function removeStyle(className) {
        let element = document.getElementById("customCss");
        let start_index = element.innerHTML.indexOf("."+className);
        let end_index = element.innerHTML.indexOf('}', start_index);
        let txt = element.innerHTML.slice(start_index, end_index + 1);
        let output = element.innerHTML.replace(txt, "");
        element.innerHTML = output;
    }

    function openModel(event) {
       // let className = event.target.className;
       let className = event.target.classList[event.target.classList.length-1];
        let isActiveCss = document.getElementById("r_options").checked;
        let disable_all = document.getElementById("r_options_disable").checked;
        
        if(disable_all){
            resetContent();
        }
        if (!isActiveCss)
            return false;

            // chrome.storage.sync.set({r_status: false}, function() {
            //     console.log('Value is set to ' + value);
            //   });
            // chrome.storage.sync.get(['r_status'], function(result) {
            //     console.log('Value currently is ' + result.r_status);
            // });

        //  let inputType = event.target.type;
        // let nodeName = event.target.nodeName;
    
        //modal position 
        const x = event.clientX > 1200 ? 1200 : event.clientX;
        const y = event.clientY > 520 ? 520 : event.clientY;
    
        createModal(x, y, className);
    }

    function resetContent(){
        var elements = document.querySelectorAll('body *');
        document.body.classList.remove('r_body')
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("contentEditable");
            elements[i].classList.remove("c_" + i);
            elements[i].getAttribute("onClick");
            let onClick = elements[i].getAttributeNode("onClick")?.value;
            console.log(onClick,'---')
            if(onClick == "openModel(event)"){
                elements[i].removeAttributeNode(elements[i].getAttributeNode("onClick"));    
            }
        }
    }

    function createModal(x, y, className) {
        var modalDiv = document.createElement("div");
        modalDiv.className = "r-modal";
        modalDiv.id = "r-myModal";
        modalDiv.style.cssText = " position: fixed; /* Stay in place */  z-index: 99999999999; /* Sit on top */  padding-top: 100px; /* Location of the box */ left: 0;  top: 0;  width: 100%; /* Full width */ height: 100%; /* Full height */ overflow: auto; /* Enable scroll if needed */  background-color: rgb(0,0,0); /* Fallback color */ background-color: rgba(0,0,0,0.4); /* Black w/ opacity */";
    
        var modalContent = document.createElement("div");
        modalContent.className = "r-modal-content";
        modalContent.style.cssText = "background-color: #fefefe; margin: auto; padding: 20px;  border: 1px solid #888;  width: 285px;     margin-left:"+ x+" px; margin-top: "+(y - 90)+" px;";
    
        var closeSpan = document.createElement("span");
        closeSpan.className = "r-close";
        closeSpan.innerHTML = '&times;';
        closeSpan.onclick = function () { document.getElementById("r-myModal").remove(); };
        closeSpan.style.cssText = "color: #aaaaaa;  float: right;  font-size: 20px;  font-weight: bold;  margin-top: -15px;  margin-right: -10px;   cursor: pointer;";
    
        var contentSpan = document.createElement("span");
        contentSpan.className = "r-main-content";
        contentSpan.innerHTML = (\`<div onClick=\"setStyle(this, event,\'\`+className+\`\')\" tabindex=\"-1\" id="rm_003" class="r-alert-container"></div> <div id="r-content-block"> <textarea id="rta_001" style="width: 280px; height: 130px;background-color: #fefefe; margin: auto;  padding: 5px;  border: 1px solid #888; width: 250px;">background-color: #fefefe; margin: auto;  padding: 20px;  border: 1px solid #888; width: 250px; </textarea> <input id="rc_001" type="checkbox" checked/>Agree <button  onClick=\"setStyle(this, event,\'\`+className+\`\')\" style="float:right">Set</button> </div> </div>\`);
    
    
        modalContent.appendChild(closeSpan);
        modalContent.appendChild(contentSpan);
        modalDiv.appendChild(modalContent);
    
        document.getElementById("r-myModal")?.remove();
        document.body.appendChild(modalDiv);
        document.getElementById("rta_001").focus();
    }
    
    function download(data, strFileName, strMimeType) {
    
        var self = window, // this script is only for browsers anyway...
            u = "application/octet-stream", // this default mime also triggers iframe downloads
            m = strMimeType || u,
            x = data,
            D = document,
            a = D.createElement("a"),
            z = function (a) { return String(a); },
    
    
            B = self.Blob || self.MozBlob || self.WebKitBlob || z,
            BB = self.MSBlobBuilder || self.WebKitBlobBuilder || self.BlobBuilder,
            fn = strFileName || "download",
            blob,
            b,
            ua,
            fr;
    
        //if(typeof B.bind === 'function' ){ B=B.bind(self); }
    
        if (String(this) === "true") { //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
            x = [x, m];
            m = x[0];
            x = x[1];
        }
    
    
    
        //go ahead and download dataURLs right away
        if (String(x).match(/^data\:[\\w+\\-]+\\/[\\w+\\-]+[,;]/)) {
            return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
                navigator.msSaveBlob(d2b(x), fn) :
                saver(x); // everyone else can save dataURLs un-processed
        }//end if dataURL passed?
    
        try {
    
            blob = x instanceof B ?
                x :
                new B([x], { type: m });
        } catch (y) {
            if (BB) {
                b = new BB();
                b.append([x]);
                blob = b.getBlob(m); // the blob
            }
    
        }
    
        function d2b(u) {
            var p = u.split(/[:;,]/),
                t = p[1],
                dec = p[2] == "base64" ? atob : decodeURIComponent,
                bin = dec(p.pop()),
                mx = bin.length,
                i = 0,
                uia = new Uint8Array(mx);
    
            for (i; i < mx; ++i) uia[i] = bin.charCodeAt(i);
    
            return new B([uia], { type: t });
        }
    
        function saver(url, winMode) {
            if ('download' in a) { //html5 A[download] 			
                a.href = url;
                a.setAttribute("download", fn);
                a.innerHTML = "downloading...";
                D.body.appendChild(a);
                setTimeout(function () {
                    a.click();
                    D.body.removeChild(a);
                    if (winMode === true) { setTimeout(function () { self.URL.revokeObjectURL(a.href); }, 250); }
                }, 66);
                return true;
            }
    
            //do iframe dataURL download (old ch+FF):
            var f = D.createElement("iframe");
            D.body.appendChild(f);
            if (!winMode) { // force a mime that will download:
                url = "data:" + url.replace(/^data:([\\w\\/\\-\\+]+)/, u);
            }
            f.src = url;
            setTimeout(function () { D.body.removeChild(f); }, 333);
    
        }//end saver 
    
        if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
            return navigator.msSaveBlob(blob, fn);
        }
    
        if (self.URL) { // simple fast and modern way using Blob and URL:
            saver(self.URL.createObjectURL(blob), true);
        } else {
            // handle non-Blob()+non-URL browsers:
            if (typeof blob === "string" || blob.constructor === z) {
                try {
                    return saver("data:" + m + ";base64," + self.btoa(blob));
                } catch (y) {
                    return saver("data:" + m + "," + encodeURIComponent(blob));
                }
            }
    
            // Blob but not URL:
            fr = new FileReader();
            fr.onload = function (e) {
                saver(this.result);
            };
            fr.readAsDataURL(blob);
        }
        return true;
    }`;

    var canvus2Html = document.createElement('script');
    canvus2Html.setAttribute('type', 'text/javascript');
    canvus2Html.setAttribute('src', 'https://html2canvas.hertzen.com/dist/html2canvas.min.js');

    document.getElementsByTagName('head')[0].appendChild(canvus2Html);
    document.getElementsByTagName('head')[0].appendChild(initial_script);
}
