# coolNotes

##1、使用搜狐获取公网ip
	-----------------
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
    var ip = returnCitySN['cip'];
	-----------------

##2、事件委托：

    ###1)利用事件的冒泡原理来实现的、就是事件从最深的节点开始，然后逐步向上传播事件，委托它们父级代为执行事件。
    ----------------------
		<ul id="ul1">
		    <li>111</li>
		    <li>222</li>
		    <li>333</li>
		    <li>444</li>
		</ul>

		window.onload = function(){
		    var oUl = document.getElementById("ul1");
		    var aLi = oUl.getElementsByTagName('li');
		    for(var i=0;i<aLi.length;i++){
		        aLi[i].onclick = function(){
		            alert(123);
		        }
		    }
		}
	---------------------------
	###2）事件委托eg:
	---------------------------
		window.onload = function(){
		　　		var oUl = document.getElementById("ul1");
		　　		oUl.onclick = function(ev){
		　　　　	var ev = ev || window.event;
		　　　　	var target = ev.target || ev.srcElement;
		　　　　	if(target.nodeName.toLowerCase() == 'li'){
		　 　　　　　　 alert(123);
		　　　　　　　  alert(target.innerHTML);
		　　　　}
		　　}
		}
	--------------------------
##3、采用jsonp跨域也存在问题：
    1).使用这种方法，只要是个网站都可以拿到b.com里的数据，存在安全性问题。需要网站双方商议基础token的身份验证，这里不详述。
    2).只能是GET，不能POST。
    3).可能被注入恶意代码，篡改页面内容，可以采用字符串过滤来规避此问题。

##4、CORS
     ###CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing），它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
在b.com里面添加响应头声明允许a.com的访问，代码：Access-Control-Allow-Origin: http://a.com然后a.com就可以用ajax获取b.com里的数据了。注意：此方法IE8以下完全不支持，IE8-10部分支持。详见caniuse-CORS

##5、其它方法
    1).HTML5的postMessage方法
    2).window.name
    3).location.hash