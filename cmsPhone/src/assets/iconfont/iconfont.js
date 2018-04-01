(function(window){var svgSprite='<svg><symbol id="icon-xiaosanjiaoup" viewBox="0 0 1024 1024"><path d="M288.864 636.032 511.968 405.312 735.136 636Z"  ></path></symbol><symbol id="icon-dingdan" viewBox="0 0 1024 1024"><path d="M512 1024c-281.6 0-512-230.4-512-512s230.4-512 512-512 512 230.4 512 512S793.6 1024 512 1024zM512 32C249.6 32 32 249.6 32 512s217.6 480 480 480 480-217.6 480-480S774.4 32 512 32z"  ></path><path d="M332.8 320l38.4 0L371.2 281.6 332.8 281.6 332.8 320zM384 537.6l256 0L640 499.2 384 499.2 384 537.6zM332.8 646.4l38.4 0L371.2 608 332.8 608 332.8 646.4zM332.8 537.6l38.4 0L371.2 499.2 332.8 499.2 332.8 537.6zM332.8 428.8l38.4 0L371.2 390.4 332.8 390.4 332.8 428.8zM384 428.8l256 0L640 390.4 384 390.4 384 428.8zM384 320l256 0L640 281.6 384 281.6 384 320zM748.8 595.2 748.8 256c0-38.4-38.4-64-76.8-64l-384 0C249.6 192 224 217.6 224 256l0 454.4c0 38.4 32 76.8 70.4 76.8l281.6 0c25.6 19.2 57.6 44.8 96 44.8 70.4 0 134.4-57.6 134.4-128C800 659.2 787.2 620.8 748.8 595.2zM384 608l0 38.4 166.4 0c-6.4 19.2-12.8 38.4-12.8 57.6 0 19.2 6.4 32 12.8 51.2l-256 0c-19.2 0-32-19.2-32-38.4L262.4 256c0-19.2 12.8-25.6 32-25.6l384 0c19.2 0 38.4 6.4 38.4 25.6l0 320c-19.2-6.4-25.6-6.4-38.4-6.4C633.6 569.6 601.6 582.4 576 608L384 608zM640 768 576 697.6l25.6-19.2 44.8 51.2 102.4-89.6 19.2 19.2L640 768z"  ></path></symbol><symbol id="icon-sanjiao" viewBox="0 0 1024 1024"><path d="M750.331 457.203l-238.576 238.087-238.087-238.576z"  ></path></symbol><symbol id="icon-jiaoyi" viewBox="0 0 1024 1024"><path d="M512 1024C229.227 1024 0 794.773 0 512S229.227 0 512 0s512 229.227 512 512-229.227 512-512 512z m0-981.333C252.8 42.667 42.667 252.8 42.667 512 42.667 771.2 252.8 981.333 512 981.333c259.2 0 469.333-210.133 469.333-469.333C981.333 252.8 771.2 42.667 512 42.667z m21.333 768h-42.666V640H320v-42.667h170.667V512H320v-42.667h170.667v-55.317l-0.086 0.085-170.005-169.365 30.165-30.165 161.366 160.746 160.085-160.085 29.888 29.91-168.747 168.767v55.424H704V512H533.333v85.333H704V640H533.333v170.667z" fill="" ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M233.184 263.16c-22.936 0-43.448 20.512-43.448 43.448s20.512 42.24 43.448 42.24c22.928 0 42.24-19.312 42.24-42.24s-19.312-43.448-42.24-43.448zM865.336 306c0 18.776-13.68 34-30.544 34H370.72c-16.864 0-30.536-15.224-30.536-34S353.856 272 370.72 272h464.072c16.864 0 30.544 15.224 30.544 34zM233.184 472.496c-22.936 0-43.448 20.512-43.448 43.448s20.512 42.24 43.448 42.24c22.928 0 42.24-19.312 42.24-42.24s-19.312-43.448-42.24-43.448zM865.336 515.336c0 18.776-13.68 34-30.544 34H370.72c-16.864 0-30.536-15.224-30.536-34 0-18.784 13.672-34 30.536-34h464.072c16.864 0 30.544 15.216 30.544 34z"  ></path><path d="M233.184 681.832c-22.936 0-43.448 20.512-43.448 43.448s20.512 42.24 43.448 42.24c22.928 0 42.24-19.312 42.24-42.24s-19.312-43.448-42.24-43.448zM865.336 724.672c0 18.776-13.68 34-30.544 34H370.72c-16.864 0-30.536-15.224-30.536-34 0-18.784 13.672-34 30.536-34h464.072c16.864 0 30.544 15.216 30.544 34z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)