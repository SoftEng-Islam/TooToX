!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([,function(e,t,n){"use strict";var i=n(4);t.a=async function(e){const t=Object.keys(e),n=await Object(i.a)(t);return{...e,...n}}},,,function(e,t,n){"use strict";function i(e,t){return new Promise(n=>{const i={};i[e]=t,chrome.storage.sync.set(i,()=>{chrome.runtime.lastError?(console.log(chrome.runtime.lastError.message),chrome.storage.local.set(i,()=>n())):(chrome.storage.local.remove(e),n())})})}function o(e){return new Promise(t=>{chrome.storage.sync.get(e,n=>{chrome.storage.local.get(e,e=>{const i={...n,...e};t(i)})})})}n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o})},function(e,t,n){"use strict";function i(){return new Promise(e=>{chrome.storage.sync.get(["proActivationKey","proExpiresAt"],t=>e(t))})}function o(e){return void 0!==e&&e.proExpiresAt>=Date.now()}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var i=n(4);const o="autopilotActions";async function a(){return(await Object(i.a)([o]))[o]}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(1);const o={autopilotPauseAfterActionMax:"",autopilotPauseAfterActionMin:"",autopilotRepeatAfter:60,autopilotRepeatAfterMax:60};function a(){return Object(i.a)(o)}},function(e,t,n){"use strict";var i=n(1);const o={likeMaxFollowers:"",likeMaxFollowersFollowingRatio:"",likeMaxFollowing:"",likeMaxTweetLikes:"",likeMinFollowers:"",likeMinFollowing:"",likeMinFollowersFollowingRatio:"",likeMinTweetLikes:"",likeIntervalMax:8,likeIntervalMin:4,likeLanguageWhitelist:"",likeLimit:1e3,likePauseWhenUnableToLike:10,likeSkipFollowed:!1,likeSkipReplies:!1,likeSkipRetweets:!1,likeSkipRetweetsWithComment:!1,likeSkipLikedXTweetsFromUser:"",likeTweetTextBlacklist:""};t.a={all:()=>Object(i.a)(o)}},function(e,t,n){"use strict";var i=n(1);const o={retweetIntervalMax:8,retweetIntervalMin:4,retweetLanguageWhitelist:"",retweetLimit:1e3,retweetPauseWhenUnableToRetweet:10,retweetSkipFollowed:!1,retweetSkipReplies:!1,retweetSkipRetweets:!1,retweetSkipRetweetsWithComment:!1,retweetTweetTextBlacklist:""};t.a={all:()=>Object(i.a)(o)}},function(e,t,n){"use strict";var i=n(1);const o={followBlacklist:"@username1,@username2",followBioBlacklist:"",followBioRequired:!1,followBioWhitelist:"",followDailyLimit:"",followIntervalMax:8,followIntervalMin:4,followLimit:400,followMaxFollowers:"",followMaxFollowersFollowingRatio:"",followMaxFollowing:"",followMinFollowers:"",followMinFollowing:"",followMinFollowersFollowingRatio:"",followPauseAfterSkipMax:"",followPauseAfterSkipMin:"",followPauseWhenTwitterLimitExceeded:5,followProfileImageRequired:!1,followProtectedRequired:!1,followSkipFollowed:!0,followSkipFollower:!1,followSkipProtected:!1,followSkipVerified:!1,followTweetLanguageWhitelist:""};t.a={all:()=>Object(i.a)(o)}},function(e,t,n){"use strict";var i=n(1);const o={unfollowBlacklist:"@username1,@username2",unfollowBioBlacklist:"",unfollowFollowersLessThan:"",unfollowFollowersGreaterThan:"",unfollowFollowingLessThan:"",unfollowFollowingGreaterThan:"",unfollowIntervalMax:8,unfollowIntervalMin:4,unfollowLimit:"",unfollowMassFollowedRequired:!1,unfollowMinDaysFollowed:2,unfollowPauseAfterSkipMax:"",unfollowPauseAfterSkipMin:"",unfollowSkipFollower:!0,unfollowSkipVerified:!1};t.a={all:()=>Object(i.a)(o)}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(1);const o={unlikeIntervalMax:8,unlikeIntervalMin:4,unlikeLimit:"",unlikeMassLikedRequired:!1,unlikeMinDaysSinceLike:2};function a(){return Object(i.a)(o)}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(1);const o={unretweetIntervalMax:8,unretweetIntervalMin:4,unretweetLimit:"",unretweetMassRetweetedRequired:!1,unretweetMinDaysSinceRetweet:2};function a(){return Object(i.a)(o)}},,,function(e,t,n){n(19),e.exports=n(17)},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(6),o=n(4);let a=[];function l(){const e={number:a.length+1,id:([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))};return a.push(e),e}async function r(){await Object(o.b)(i.b,a)}const s={},c={},u={},d=(e,t)=>{const n=document.createElement("img");return n.classList.add("icon"),n.setAttribute("alt",t),n.setAttribute("src",e),n.setAttribute("title",t),n.style.display="none",n};var f={addAlias:(e,t)=>{s[e]=t},hide:e=>{s[e]&&(e=s[e]),c[e].style.display="none",u[e].style.display="none"},animateProcess:e=>{s[e]&&(e=s[e]),c[e].style.display="none",u[e].style.display="initial"},animateSuccess:e=>{s[e]&&(e=s[e]),u[e].style.display="none",c[e].style.display="initial"},create:e=>{if(s[e])return;const t=document.querySelector(`label[for="${e}"]`);t.textContent=`${t.textContent} `,c[e]=d("check.svg","Successfully updated"),t.appendChild(c[e]),u[e]=d("spinner.svg","Updating..."),u[e].classList.add("icon--spin"),t.appendChild(u[e])}};function w(e){let t;return()=>{clearTimeout(t),t=setTimeout(e,200)}}const p=({id:e})=>`action_${e}_url`;const m=e=>{const t=document.getElementById(p(e));["mass_follow","mass_like","mass_retweet"].includes(e.type)?t.style.display="initial":t.style.display="none"};const y=({id:e})=>`action_${e}_type`;const v=e=>`${y(e)}_label`;const k=({id:e})=>`action_${e}_idle_timeout`;const g=({id:e})=>`action_${e}_limit`;const M=({id:e})=>`action_${e}_remove`;function b(e){const t=document.getElementById(M(e));t.addEventListener("click",async()=>{f.animateProcess(y(e)),t.disabled=!0,function({id:e}){a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),a.forEach((e,t)=>{e.number=t+1})}(e),await r(),t.closest(".action").remove(),a.forEach(e=>(function(e){document.getElementById(v(e)).textContent=`#${e.number}`})(e))})}const h=document.getElementById("actions");function A(e){const t=document.createElement("tr");t.classList.add("action"),t.innerHTML=`\n    <td>${function(e){return`<label id="${v(e)}" for="${y(e)}">#${e.number}</label>`}(e)}</td>\n    <td>${function(e){return`\n    <select id="${y(e)}" required>\n      <option value="" disabled selected>Select action</option>\n      <option value="mass_follow">Mass follow</option>\n      <option value="mass_unfollow">Mass unfollow</option>\n      <option value="mass_like">Mass like</option>\n      <option value="mass_unlike">Mass unlike</option>\n      <option value="mass_retweet">Mass retweet</option>\n      <option value="mass_unretweet">Mass unretweet</option>\n    </select>\n  `}(e)}</td>\n    <td>${function(e){return`<input class="action__url-field" type="text" id="${p(e)}" placeholder="URL">`}(e)}</td>\n    <td>${function(e){return`<input type="number" step="1" id="${g(e)}" placeholder="Limit">`}(e)}</td>\n    <td>${function(e){return`<input type="number" step="0.1" id="${k(e)}" placeholder="Idle timeout">`}(e)}</td>\n    <td>${function(e){return`<button id="${M(e)}" class="button button--remove">Remove</a>`}(e)}</td>\n  `,h.append(t),function(e){f.create(y(e))}(e),function(e){const t=document.getElementById(y(e));e.type&&(t.value=e.type),t.addEventListener("change",()=>{e.type=t.value,f.animateProcess(y(e)),m(e)}),t.addEventListener("change",w(async()=>{await r(),f.animateSuccess(y(e))}))}(e),function(e){const t=document.getElementById(p(e));e.url&&(t.value=e.url),f.addAlias(p(e),y(e)),t.addEventListener("input",()=>{e.url=t.value,f.animateProcess(p(e))}),t.addEventListener("input",w(async()=>{await r(),f.animateSuccess(p(e))})),m(e)}(e),function(e){const t=document.getElementById(g(e));e.limit&&(t.value=e.limit),f.addAlias(g(e),y(e)),t.addEventListener("input",()=>{e.limit=t.value,f.animateProcess(g(e))}),t.addEventListener("input",w(async()=>{await r(),f.animateSuccess(g(e))}))}(e),function(e){const t=document.getElementById(k(e));e.idleTimeout&&(t.value=e.idleTimeout),f.addAlias(k(e),y(e)),t.addEventListener("input",()=>{e.idleTimeout=t.value,f.animateProcess(k(e))}),t.addEventListener("input",w(async()=>{await r(),f.animateSuccess(k(e))}))}(e),b(e)}async function S(){const e=await async function(){const e=await Object(i.a)();return Array.isArray(e)&&(a=e),a}();for(let t=e.length;t<3;t++)l();e.forEach(e=>A(e)),document.getElementById("add_action").addEventListener("click",()=>{A(l())})}let x="https://www.clemensteichmann.com/";async function E(e){const t=await async function(e){return(await fetch(`${x}subscriptions/${e}/activate`,{method:"PATCH",headers:{"Content-Type":"application/json"}})).json()}(e);return new Promise((e,n)=>{if(t.activation_key){const n={proActivationKey:t.activation_key,proExpiresAt:t.expires_at};chrome.storage.sync.set(n,()=>e(n))}else n(t.error_message)})}async function L({proActivationKey:e}){try{if((await async function(e){return(await fetch(`${x}active_subscriptions/${e}`,{headers:{"Content-Type":"application/json"}})).json()}(e)).error_message)return chrome.storage.sync.remove(["proActivationKey","proExpiresAt"]),!1}catch(e){console.log(e)}return!0}x+="api/superpowers_for_twitter/";var P=n(5);const _=document.getElementById("proActivationKey"),I=async()=>{const e=_.value;if(36!=e.length)R("must be 36 characters");else try{const t=await E(e);j(t),f.animateSuccess(_.id)}catch(e){R(e)}},R=e=>{_.nextElementSibling.textContent=e,_.nextElementSibling.style.color="#ff3860",f.hide(_.id)},j=e=>{(e=>{_.value=e,_.readOnly=!0})(e.proActivationKey),F(e.proExpiresAt),document.body.classList.add("is-pro")},F=e=>{const t=`Your PRO is valid until ${new Date(e).toLocaleString()}. Please enjoy unlimited and ad-free superpowers.`;_.nextElementSibling.textContent=t,_.nextElementSibling.style.color="#28a745"};var O=n(10),$=n(8),T=n(9),B=n(11),C=n(13),W=n(12),q=n(7);f.addAlias("followIntervalMax","followIntervalMin"),f.addAlias("unfollowIntervalMax","unfollowIntervalMin"),f.addAlias("likeIntervalMax","likeIntervalMin"),f.addAlias("retweetIntervalMax","retweetIntervalMin"),f.addAlias("unretweetIntervalMax","unretweetIntervalMin"),f.addAlias("unlikeIntervalMax","unlikeIntervalMin"),f.addAlias("autopilotPauseAfterActionMax","autopilotPauseAfterActionMin"),f.addAlias("likeSkipRetweetsWithComment","likeSkipRetweets"),f.addAlias("likeSkipReplies","likeSkipRetweets"),f.addAlias("autopilotRepeatAfterMax","autopilotRepeatAfter"),f.addAlias("retweetSkipRetweetsWithComment","retweetSkipRetweets"),f.addAlias("retweetSkipReplies","retweetSkipRetweets"),f.addAlias("unfollowPauseAfterSkipMax","unfollowPauseAfterSkipMin"),f.addAlias("followPauseAfterSkipMax","followPauseAfterSkipMin");const D=async(e,t)=>{await Object(o.b)(e,t),f.animateSuccess(e)};(async()=>{await async function(){const e=await Object(P.a)();Object(P.b)(e)&&await L(e)?j(e):(f.create(_.id),_.addEventListener("input",()=>f.animateProcess(_.id)),_.addEventListener("input",I))}();let e=await O.a.all();e={...e,...await $.a.all()},e={...e,...await T.a.all()},e={...e,...await B.a.all()},e={...e,...await Object(W.a)()},e={...e,...await Object(C.a)()},e={...e,...await Object(q.a)()},Object.keys(e).forEach(t=>{const n=document.getElementById(t);f.create(t),"checkbox"===n.type?(n.checked=e[t],n.addEventListener("change",()=>f.animateProcess(t)),n.addEventListener("change",w(()=>D(t,n.checked)))):(n.value=e[t],n.addEventListener("input",()=>f.animateProcess(t)),n.addEventListener("input",w(()=>D(t,n.value))))}),await S()})()}]);