import{g as e,_ as o,u as l,r as s,o as a,l as t,a as n,b as r,c as i,d,e as c,f,w as g,h as p,t as u,i as S,j as m}from"./D7Z2zjRX.js";import{_ as L}from"./BIwg1ykr.js";import{a as v}from"./DqkGgfGl.js";const h="/promeliff/assets/BmIlvr5V.jpg",k={401:"認證失敗，無法存取系統資源:401",403:"當前操作沒有權限:403",404:"存取資源不存在:404",default:"未知系統錯誤，請向管理員反應問題"};let C={show:!1};v.defaults.headers["Content-Type"]="application/json;charset=utf-8";const U=v.create({baseURL:"https://nozomiai.asuscomm.com/promeliff",timeout:12e3});U.interceptors.request.use((o=>(!(!1===(o.headers||{}).isToken)&&e()&&(o.headers.Authorization="Bearer "+e()),o)),(e=>{console.error(e),Promise.reject(e)})),U.interceptors.response.use((e=>{const o=e.data.code||200,l=k[o]||e.data.msg||k.default;if("blob"===e.request.responseType||"arraybuffer"===e.request.responseType)return e.data;if(401===o){if(!C.show){C.show=!0;const e="/promeliff";console.log("登入中...");try{console.log("do logout!!")}catch(s){setTimeout((()=>{C.show=!1,location.href=e}),1e3)}return}return Promise.reject({error:"無效的session，或者會話已過期，請重新登錄。",code:o})}return 500===o?Promise.reject(new Error(l)):200!==o?Promise.reject({error:"unknown error",code:o}):e.data}),(e=>{let o="x";console.error("ReqError: "+e);let{message:l}=e;return"Network Error"==l?l="後端連線異常":l.includes("timeout")?l="系統請求超時":l.includes("Request failed with status code")&&(o=l.substr(l.length-3),l=`系統${o}異常`),["400","403","404"].indexOf(o)>=0&&console.error(l),e.response?(console.log("ReqError.data",e.response.data),console.log("ReqError.status",e.response.status),Promise.reject({error:l,data:e.response.data||null,code:e.response.status||o})):Promise.reject(e)}));const K={class:"login"},F={key:0,class:"card"},P={key:1,class:"card"},b={class:"card-footer text-body-secondary"},A={key:0},y={key:1},E={key:2,class:"card"},j={class:"logo-banner"},x=o({__name:"lifflogin",setup(e){const o=l(),v=n(),k=s(null),C=s(!1),x=s(0),w=s("https://liff.line.me/2003978054-MNlNVly1");function J(e){if(!o.liffReady)return console.log("liff_reload"),t.init({liffId:o.liffId}).then((()=>{console.log(`liff_reload: LIFF Ver:${t.getVersion()} OS:${t.getOS()} Lang:${t.getLanguage()}`),console.log("liff_reload: LIFF isInClient:",t.isInClient())})).catch((e=>{console.log("liff_reload: LIFF error:",e.code,e.message)})),t.ready}function B(){let e=S("stepExtLogin");e&&911==e.yes?x.value=1:x.value=2}const I=()=>{console.log("handleLogin: ready=",o.liffReady),o.fullscLoading=!0,o.liffReady?t.isInClient()?t.isLoggedIn()?v.push({name:"Home"}):J():t.isLoggedIn()?v.push({name:"Home"}):(C.value=!0,t.login({redirectUri:`${o.liffEPUrl}?longin=1`}),C.value=!1):J()},W=()=>new Promise(((e,l)=>{let s={liffId:o.liffId,accessToken:t.getAccessToken(),idToken:t.getIDToken()};var a;t.isLoggedIn(),(a=s,U({url:"/WdaG8atCBY/getoken",headers:{isToken:!1},method:"post",data:a})).then((o=>(console.log("handleToken:",o.data.token),o.data&&o.data.token?(console.log("授權取得成功"),i("授權取得成功",{autoClose:4e3}),e(o.data)):(console.log("授權無法取得"),i("授權無法取得",{autoClose:4e3}),l({error:"no token acquired"}))))).catch((e=>(console.log("handleToken: Error:",e),o.liffReady=!1,console.log("授權失敗, 請關閉頁面"),i("授權失敗, 請關閉頁面",{autoClose:4e3}),l({error:"failed to get token"}))))}));return a((()=>{console.log("Login: onMounted"),t.isLoggedIn()?W().then((e=>{o.setAuthToken(e),v.push({name:"Home"})})).catch((e=>{o.setAuthToken({token:"Fake-H99saGoCjD7ngi26sluCbzoSNLONBP8asx2abq2hfoENgK6n1mq4YuXJFAOnGRJC"}),v.push({name:"Home"}),console.log("Login: handleToken failed",e)})).finally((()=>{B(),o.fullscLoading=!1})):(B(),o.fullscLoading=!1)})),r((()=>{o.fullscLoading=!0,console.log("Login: onBeforeMount"),o.liffReady||(J(),o.liffReady=!0),t.isInClient()?t.isLoggedIn()||window.Swal.fire({icon:"warning",title:"無法登入",text:"LINE LIFF 無法登入!",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"再試一次",denyButtonText:"關閉"}).then((e=>{e.isConfirmed?v.push({name:"login"}):e.isDenied&&i("LINE LIFF 登入失敗",{autoClose:2e3})})):i("LINE LIFF 外部瀏覽器",{autoClose:2e3})})),(e,o)=>(m(),d("div",K,[0==x.value?(m(),d("div",F,o[1]||(o[1]=[f("img",{src:L,class:"card-img-top",alt:"PROME Title"},null,-1),f("p",{class:"logo-banner"},[f("img",{class:"object-fit-sm-contain border rounded-circle",style:{"max-width":"240px"},src:h,alt:"PROME Lion"})],-1)]))):c("",!0),1==x.value?(m(),d("div",P,[o[2]||(o[2]=f("img",{src:L,class:"card-img-top",alt:"PROME Title"},null,-1)),o[3]||(o[3]=f("div",{class:"card-body"},[f("h3",{class:"card-title"},[f("p",null,"訪問網站需要登入LINE，點選登入按鈕後繼續...")])],-1)),f("form",{class:"login-form",ref_key:"loginRef",ref:k,onSubmit:o[0]||(o[0]=g((()=>{}),["prevent"])),size:"large"},[f("p",{class:"logo-banner"},[f("img",{class:"imgbtn",src:"/promeliff/assets/CFYjjMVw.png",onClick:I,alt:"LIFF Login"})])],544),f("div",b,[C.value?(m(),d("span",y,"登 入 中 ...")):(m(),d("span",A,"請先登入"))])])):c("",!0),2==x.value?(m(),d("div",E,[o[4]||(o[4]=p('<img src="'+L+'" class="card-img-top" alt="PROME Title" data-v-e560999f><div class="d-flex flex-wrap justify-content-center" data-v-e560999f><p class="logo-banner" data-v-e560999f><img class="object-fit-sm-contain border rounded-circle" style="max-width:220px;" src="'+h+'" alt="PROME Lion" data-v-e560999f></p><p class="logo-banner" data-v-e560999f><img class="object-fit-sm-contain" style="max-width:220px;" src="data:image/png;base64,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" alt="LINEBot" data-v-e560999f></p></div><h3 class="logo-banner" data-v-e560999f>請用LINE掃QR Code加好友或在LINE聊天室裡開啟本網頁</h3>',3)),f("p",j,u(w.value),1)])):c("",!0)]))}},[["__scopeId","data-v-e560999f"]]);export{x as default};
