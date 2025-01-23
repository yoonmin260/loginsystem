function login(id,pw){ //로그인 함수 분리
	const logindata = {mid:$("#mid").val(),mpw:$("#mpw").val()}
	const ctype = "application/json"
	const res = await fetch("/member/login",{method:"post",headers:{"Content-type":ctype},body:JSON.stringify(logindata)})
	const data = await res.json();
	
}
function logout(logoutui){//로그아웃 함수분리
	logout.attr("href","/member/logout").text("로그아웃")
	
}