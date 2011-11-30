function png()
{var vs = navigator.appVersion.split("MSIE")
var v = parseFloat(vs[1])
if ((v >= 5.5) && (document.body.filters))
{for(var i=0; i<document.images.length; i++)
{var img = document.images[i]
var iN = img.src.toUpperCase()
if (iN.substring(iN.length-3, iN.length) == "PNG")
{var iT = (img.title) ? "title='"+img.title+"' " : "title='"+img.alt+"' "
var iS = "display:inline-block; position:absolute; border:none;"+img.style.cssText;
if (img.parentElement.href) iS = "cursor:hand;"+iS
var re=/\{[\s\S]*?\}/;
var xx=" "+img.onmousemove;if(xx.match(re)) iT=iT+' onmousemove="'+xx.match(re)+'"';
xx=" "+img.onmouseover;if(xx.match(re)) iT=iT+' onmouseover="'+xx.match(re)+'"';
xx=" "+img.onmouseout;if(xx.match(re)) iT=iT+' onmouseout="'+xx.match(re)+'"';
xx=" "+img.onclick;if(xx.match(re)) iT=iT+' onclick="'+xx.match(re)+'"';
var r = "<span " + iT+ " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + iS + ";"+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"+ "(src=\'" + img.src + "\', sizingMethod='image');\"></span>"
img.outerHTML = r
i = i-1
}}}}
png()