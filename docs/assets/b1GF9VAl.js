import{_ as t}from"./BIwg1ykr.js";import{u as e,o as n,d as i,f as o,a as s,l as a,c as l,j as u}from"./Biz0ScVy.js";const c={class:"container-fluid px-4 text-center"},r={class:"d-flex flex-wrap justify-content-center gap-2",style:{margin:"20px",padding:"auto"}},p={__name:"home",setup(p){const d=s();e();const b=t=>{"CheckIn"==t?d.push({name:"CheckIn"}):"ScanCode"==t?d.push({name:"ScanCode"}):"GetQNumber"==t?d.push({name:"GetQNumber"}):"CurrencyExchange"==t?window.Swal.fire({icon:"warning",title:"提示",html:"<p>Test Popup</p>"}):"SendMesg"==t?a.isInClient()&&a.isLoggedIn()?window.Swal.fire({title:"請輸入訊息內容",input:"text",inputPlaceholder:"輸入要發送訊息...",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((t=>{if(t.isConfirmed){const e=t.value.substring(0,16);if(!e||0==e.length)return void l("無訊息發送",{autoClose:3e3});a.sendMessages([{type:"text",text:`${e}`}]).then((function(t){l(`發送成功: ${e}`,{autoClose:3e3})})).catch((function(t){l(`發送失敗: ${t.message||t.code}`,{autoClose:3e3})}))}else t.isDismissed&&l("取消發送",{autoClose:2e3})})):window.Swal.fire({icon:"error",title:"此功能僅適用於己登入LINE App時",showCancelButton:!1,confirmButtonText:"確定"}):"ReLogin"==t&&d.push({path:"/"})};return n((async()=>{})),(e,n)=>(u(),i("div",c,[n[6]||(n[6]=o("img",{src:t,class:"card-img-top",style:{"max-width":"440px"},alt:"PROME Title"},null,-1)),o("div",r,[o("button",{type:"button",class:"btn btn-outline-primary fixed-size",onClick:n[0]||(n[0]=t=>b("CheckIn"))},"打卡"),o("button",{type:"button",class:"btn btn-outline-primary fixed-size",onClick:n[1]||(n[1]=t=>b("ScanCode"))},"掃碼"),o("button",{type:"button",class:"btn btn-outline-primary fixed-size",onClick:n[2]||(n[2]=t=>b("GetQNumber"))},"抽號碼"),o("button",{type:"button",class:"btn btn-outline-primary fixed-size",onClick:n[3]||(n[3]=t=>b("CurrencyExchange"))},"匯率"),o("button",{type:"button",class:"btn btn-outline-primary fixed-size",onClick:n[4]||(n[4]=t=>b("SendMesg"))},"留言"),o("button",{type:"button",class:"btn btn-outline-primary fixed-size wrap-text",onClick:n[5]||(n[5]=t=>b("ReLogin"))},"重新登入")])]))}};export{p as default};
