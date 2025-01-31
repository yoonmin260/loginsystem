
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
	
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1rPzsPA1xgsVNUL8jVfQlEgIN6aG_n0Qp/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1xw_x7LT2Xpi-5hltgpIWWRlN1bU7G_yf/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1HRUQhj2Tk6AzIW_NSRD59wGUAduJYTmW/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:""})//이미지타이틀


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1n5REwDDza1U5MaOxXHyE89SH_xAiMMDO/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1AqaV91vK15ALQop8NrVwKZKh9IrXIg1H/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1c3YhCrIf86U5XUXDYQ4AA6UbJ4D6bik8/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1U37Oj7NJpvlseEVxnrpCyBDsGq3RwEK1/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"공통 모듈 구현 분리",imgurl:"https://drive.google.com/file/d/1hv9ccYS2xdb-8J5I500xlGKTFzkkbSP6/view?usp=drive_link",imglog:"분리 구현",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d2.set_img(0,{imgtitle:"분리대상 선정",imgurl:"https://drive.google.com/file/d/1Vi66TJPtYhqxNbrb5_Y_QQFf45jAedCa/view?usp=drive_link",imglog:"분리 대상 선정",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d2.set_content("테스트케이스를 작성합니다.")

d2.set_img(1,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"테스트 빌드",imgurl:"https://drive.google.com/file/d/15E1T5AuBvEyMZNKr4B9v8mJjwFb71MES/view?usp=drive_link",imglog:"테스트 빌드",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)
//d2.set_img(0,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})//이미지타이틀
// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입 폼",imgurl:"https://drive.google.com/file/d/1fEYmPXmdUlfg4f6w8xPSCUZBezPWUEdl/view?usp=drive_link",imglog:"회원가입을 위한 입력서식",sourceurl:"https://github.com/yoonmin260/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"송신코드",imgurl:"https://drive.google.com/file/d/12aO4A8H_sfK1UbLmrYclcMgWuZJqiKUu/view?usp=drive_link",imglog:"회원가입 폼을 서버로 전송하는 서식",sourceurl:"https://github.com/yoonmin260/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"서버수신",imgurl:"https://drive.google.com/file/d/1Utz8OcX1sEcJzEKS9A_yTbPzLx_xwUXf/view?usp=drive_link",imglog:"전송된 폼을 수신하는 서버측 코드",sourceurl:"https://github.com/yoonmin260/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"dao접근",imgurl:"https://drive.google.com/file/d/1rqeQbT9oHbsJf31Xdh_eGPOgOEfAWJFC/view?usp=drive_link",imglog:"데이터 베이스 접근 객체",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1sKGFpG41RqAykNgTArPZPODpZJqUf2X5/view?usp=drive_link",imglog:"db쿼리 매퍼",sourceurl:"https://github.com/yoonmin260/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_img(0,{imgtitle:"타이틀 가입 성공 결과",imgurl:"https://drive.google.com/file/d/1zw0PVP_4s1GRLRZti7iA2mESibTktw5t/view?usp=drive_link",imglog:"회원가입 결과 화면",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 db 결과",imgurl:"https://drive.google.com/file/d/1veGs75ZzGZbxi59aKpPZygD_zaDuLDbf/view?usp=drive_link",imglog:"데이터 베이스 결과 화면",sourceurl:""})//이미지타이틀
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"로그인 폼",imgurl:"https://drive.google.com/file/d/1ItEPRqTQYzvoLWrlXNwRPWCRt7F4AvNp/view?usp=drive_link",imglog:"로그인을 위한 서식",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"송신코드",imgurl:"https://drive.google.com/file/d/10M9dsJJ0Rhk1n2jARKIrlBDnTpbi62zz/view?usp=drive_link",imglog:"로그인 폼을 서버로 전송하는 서식",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"서버수신",imgurl:"https://drive.google.com/file/d/1UNsTJ98-fJeoaQgQnV19CuPLS67ERCZ3/view?usp=drive_link",imglog:"전송된 폼을 수신하는 서버측 코드",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"dao접근",imgurl:"https://drive.google.com/file/d/1gITWi3XB6b_eqqG_kkzlC380dPoGG3uy/view?usp=drive_link",imglog:"데이터 베이스 접근 객체",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1NU_0w1IzZLYJllijVjiDQ70z980zMnEa/view?usp=drive_link",imglog:"",sourceurl:"db쿼리 매퍼"})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인 가입 성공 결과",imgurl:"https://drive.google.com/file/d/1q-lcH322ld4RMj_lcqFuMlXOdHQNbfh1/view?usp=drive_link",imglog:"로그인 결과 화면",sourceurl:""})//이미지타이틀
d3.set_content("회원로그아웃구현")
d3.set_img(2,{imgtitle:"로그인 된 화면",imgurl:"https://drive.google.com/file/d/1FCgBdo785WSd6DnMMOqhRDmeQ0Md3SLf/view?usp=drive_link",imglog:"로그인 된 화면",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"서버수신",imgurl:"https://drive.google.com/file/d/1y2yFD1K9uFg3vE_XVe0YQpEzd05OJn8h/view?usp=drive_link",imglog:"전송된 폼을 수신하는 서버측 코드",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"클라이언트 결과",imgurl:"https://drive.google.com/file/d/1fAw4M1iPuFimukrRlic_kPsCsOCpwDv9/view?usp=drive_link",imglog:"로그아웃 결과",sourceurl:""})//이미지타이틀
d3.set_content("회원리스트연동")
d3.set_img(3,{imgtitle:"로그인 된 화면",imgurl:"https://drive.google.com/file/d/1YKBIFXH25oafILh7CShRsoHnY8g23F8g/view?usp=drive_link",imglog:"로그인 된 화면",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"서버수신",imgurl:"https://drive.google.com/file/d/1F5JE8dMY-dnplN1ednFVBn7mupQFdKsO/view?usp=drive_link",imglog:"전송된 폼을 수신하는 서버측 코드",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"dao접근",imgurl:"https://drive.google.com/file/d/1f4AjeWGXVt_Dm9R6dAZZlYXTFNKjKJdS/view?usp=drive_link",imglog:"데이터 베이스 접근 객체",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1nzZGg91pROZUytYa35FMdv7DMddstBaL/view?usp=drive_link",imglog:"db쿼리 매퍼",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"회원 리스트 출력 성공 결과",imgurl:"https://drive.google.com/file/d/1e25Khtm16SWhLlaqurjP6JgIzSQbXs69/view?usp=drive_link",imglog:"회원 리스트 출력 결과 화면",sourceurl:""})//이미지타이틀
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

//d4.set_content("배치스케줄구현")//서브타이틀

//d4.set_content("배치프로그램테스트 구현")

d4.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)