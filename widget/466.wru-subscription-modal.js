/*! For license information please see 466.wru-subscription-modal.js.LICENSE.txt */
"use strict";(self.webpackChunkwru_subscription_modal=self.webpackChunkwru_subscription_modal||[]).push([[466],{7466:function(e,t,a){a.r(t);var n=a(7294),r=a(6974),l=a(9711),c=a(3644),o=a(4267),i=a(2937),s=a(1526),u=a(2215);t.default=function(){var e=(0,u.g)(),t=e.articleId,a=e.accessInfo,m=e.category,f=(0,r.s0)();return n.useEffect((function(){!function(e){for(var t=document.getElementById("wru-modal-".concat(e));t.nextElementSibling;)t.nextElementSibling.remove()}(t);try{(0,c.WS)(t,a.paywallType,m)}catch(e){console.log(e)}}),[a.paywallType,t,m]),n.createElement("div",{className:"wru-modal-container"},n.createElement("div",{className:"wru-datawall-wrapper"},n.createElement("div",{className:"wru-datawall-container"},n.createElement("div",{className:"wru-lock-icon"},n.createElement("img",{src:"https://kpnigalye-cb.github.io/wru-subscriptions-images/lock-icon.svg",alt:"lock-icon",loading:"lazy"})),n.createElement("div",{className:"wru-datawall-title"},"To Read the Full Story, Register to continue reading"),n.createElement("div",{className:"wru-subTitle2"},"Access the exlusive benefits with us"),n.createElement("hr",{className:"wru-divider"}),n.createElement("button",{className:"wru-action-button",onClick:function(){try{(0,c.oe)(t,a.paywallType,m)}catch(e){console.log(e)}f(i.KP.WELCOME_PAGE)}},"REGISTER NOW"),n.createElement("h5",null,"You can cancel anytime."),!(0,s.Bd)(o.I.IS_USER_LOGGED_IN)&&n.createElement("div",{className:"wru-subTitle1"},"Are you already a registered member. Click here to ",n.createElement(l.rU,{to:i.KP.WELCOME_PAGE,className:"wru-login-link"},"Login Now")))))}},9711:function(e,t,a){a.d(t,{rU:function(){return i}});var n=a(7294),r=a(6974),l=a(5648);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const o=["onClick","reloadDocument","replace","state","target","to"],i=(0,n.forwardRef)((function(e,t){let{onClick:a,reloadDocument:i,replace:s=!1,state:u,target:m,to:f}=e,d=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o),p=(0,r.oQ)(f),E=function(e,t){let{target:a,replace:c,state:o}=void 0===t?{}:t,i=(0,r.s0)(),s=(0,r.TH)(),u=(0,r.WU)(e);return(0,n.useCallback)((t=>{if(!(0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let a=!!c||(0,l.Ep)(s)===(0,l.Ep)(u);i(e,{replace:a,state:o})}}),[s,i,u,c,o,a,e])}(f,{replace:s,state:u,target:m});return(0,n.createElement)("a",c({},d,{href:p,onClick:function(e){a&&a(e),e.defaultPrevented||i||E(e)},ref:t,target:m}))}))}}]);