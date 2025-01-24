//commom.js 
async function login(mid,mpw){//로그인 함수 분리
	const logindata = {mid,mpw}
	const ctype = "application/json"
	const res = await fetch("/member/login",{method:"post",headers:{"Content-type":ctype},body:JSON.stringify(logindata)})
	const data = await res.json();
	return data;
}
function logout(logoutui){//로그아웃 함수분리
	logoutui.attr("href","/member/logout").text("로그아웃")
	logoutui.click(async function(evt){
				if($(this).text()=="로그아웃"){
					evt.preventDefault();
					const res = await fetch($(this).attr("href"))
					const data = await res.json();
					alert(data.message)
					location.href="/";
					return false;
				}
	})
}