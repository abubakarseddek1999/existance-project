"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[8141],{75184:function(e,a,s){s(72791);var i=s(89743),r=s(2677),t=s(2461),n=s(80184);a.Z=function(e){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("h4",{className:"page-title",children:e.title}),(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(t.Z,{listProps:{className:"m-0 flex-col"},children:[(0,n.jsx)(t.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?(0,n.jsx)(t.Z.Item,{active:!0,children:e.label},a):(0,n.jsx)(t.Z.Item,{href:e.path,children:e.label},a)}))]})})]})})})}},48141:function(e,a,s){s.r(a);var i=s(72791),r=s(89743),t=s(2677),n=s(9140),c=s(43360),l=s(74330),o=s(75184),d=s(24506),u=s(80184),m=function(e){var a=e.pricingPlans;return(0,u.jsx)(r.Z,{children:(a||[]).map((function(e,a){return(0,u.jsx)(t.Z,{lg:4,children:(0,u.jsx)(n.Z,{className:"card-pricing",children:(0,u.jsxs)(n.Z.Body,{className:"p-4",children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsxs)("div",{className:"flex-grow-1",children:[(0,u.jsx)("h5",{className:"mt-0 mb-2 fs-16",children:e.name}),(0,u.jsxs)("h2",{className:"mt-0 mb-2",children:["$",e.price," ",(0,u.jsxs)("span",{className:"fs-14",children:["/ ",e.duration]})]})]}),(0,u.jsx)("div",{className:"align-self-center flex-shrink-0",children:(0,u.jsx)(l.Z,{icon:e.icon,className:"icon-dual icon-lg"})})]}),(0,u.jsx)("ul",{className:"card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled",children:(e.features||[]).map((function(e,a){return(0,u.jsxs)("li",{children:[(0,u.jsx)("i",{className:"uil uil-check text-success fs-15 me-1"}),e]},a)}))}),(0,u.jsx)("div",{className:"mt-5 text-center",children:(0,u.jsxs)(c.Z,{variant:e.isRecommended?"primary":"soft-primary",className:"px-sm-4",children:[(0,u.jsx)("i",{className:"uil uil-arrow-right me-1"}),"Buy Now for $",e.price]})})]})})},a)}))})};a.default=function(){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(o.Z,{breadCrumbItems:[{label:"Pages",path:"/pages/pricing"},{label:"Pricing",path:"/pages/pricing",active:!0}],title:"Pricing"}),(0,u.jsx)(r.Z,{className:"justify-content-center",children:(0,u.jsxs)(t.Z,{xl:10,children:[(0,u.jsxs)("div",{className:"text-center my-4",children:[(0,u.jsx)("h3",{children:"Simple pricing for Everyone"}),(0,u.jsx)("p",{className:"text-muted",children:"Fully functional accounts are starting from $19/month only"})]}),(0,u.jsx)(m,{pricingPlans:d.dh})]})})]})}},24506:function(e,a,s){s.d(a,{NF:function(){return i},ZF:function(){return t},dh:function(){return r}});var i={invoice_id:"000028",customer:" Greeva Navadiya",notes:"All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above",invoice_date:"Jul 17, 2019",due_date:"Jul 27,2019",address:{owner:"Greeva Navadiya",line_1:"795 Folsom Ave, Suite 600",city:"San Francisco",state:"CA",zip:94107,phone:"(123) 456-7890"},items:[{id:1,name:"Web Design",description:"2 Pages static website - my website",hours:22,hour_rate:30,total:660},{id:2,name:"Software Development",description:"Invoice editor software - AB'c Software",hours:112.5,hour_rate:35,total:3937.5}],sub_total:4597.5,discount:459.75,total:4137.75},r=[{id:1,name:"Professional Pack",icon:"users",price:19,duration:"Month",features:["10 GB Storage","500 GB Bandwidth","No Domain","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:"briefcase",price:29,duration:"Month",features:["50 GB Storage","900 GB Bandwidth","2 Domain","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:"shopping-bag",price:49,duration:"Month",features:["100 GB Storage","Unlimited Bandwidth","Unlimited Domain","Email Support","24x7 Support"],isRecommended:!1}],t=[{icon:"uil-presentation-lines-alt",title:"Why is the Site Down?",desc:"If several languages coalesce, the grammar of the resulting language is more simple."},{icon:"uil-clock-eight",title:"What is the Downtime?",desc:"Everyone realizes why a new common language would be desirable one could refuse."},{icon:"uil-envelope",title:"Do you need Support?",desc:"You need to be sure there isn't anything embar.. Please contact us via email no-reply@domain.com"}]},2461:function(e,a,s){s.d(a,{Z:function(){return x}});var i=s(1413),r=s(45987),t=s(81694),n=s.n(t),c=s(72791),l=s(10162),o=s(56236),d=s(80184),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.active,c=e.children,m=e.className,f=e.as,p=void 0===f?"li":f,h=e.linkAs,x=void 0===h?o.Z:h,v=e.linkProps,b=e.href,N=e.title,g=e.target,Z=(0,r.Z)(e,u),j=(0,l.vE)(s,"breadcrumb-item");return(0,d.jsx)(p,(0,i.Z)((0,i.Z)({ref:a},Z),{},{className:n()(j,m,{active:t}),"aria-current":t?"page":void 0,children:t?c:(0,d.jsx)(x,(0,i.Z)((0,i.Z)({},v),{},{href:b,title:N,target:g,children:c}))}))}));m.displayName="BreadcrumbItem",m.defaultProps={active:!1,linkProps:{}};var f=m,p=["bsPrefix","className","listProps","children","label","as"],h=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,c=e.listProps,o=e.children,u=e.label,m=e.as,f=void 0===m?"nav":m,h=(0,r.Z)(e,p),x=(0,l.vE)(s,"breadcrumb");return(0,d.jsx)(f,(0,i.Z)((0,i.Z)({"aria-label":u,className:t,ref:a},h),{},{children:(0,d.jsx)("ol",(0,i.Z)((0,i.Z)({},c),{},{className:n()(x,null==c?void 0:c.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};var x=Object.assign(h,{Item:f})},43360:function(e,a,s){var i=s(1413),r=s(29439),t=s(45987),n=s(81694),c=s.n(n),l=s(72791),o=s(15341),d=s(10162),u=s(80184),m=["as","bsPrefix","variant","size","active","className"],f=l.forwardRef((function(e,a){var s=e.as,n=e.bsPrefix,l=e.variant,f=e.size,p=e.active,h=e.className,x=(0,t.Z)(e,m),v=(0,d.vE)(n,"btn"),b=(0,o.FT)((0,i.Z)({tagName:s},x)),N=(0,r.Z)(b,2),g=N[0],Z=N[1].tagName;return(0,u.jsx)(Z,(0,i.Z)((0,i.Z)((0,i.Z)({},x),g),{},{ref:a,className:c()(h,v,p&&"active",l&&"".concat(v,"-").concat(l),f&&"".concat(v,"-").concat(f),x.href&&x.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=f},2677:function(e,a,s){var i=s(29439),r=s(1413),t=s(45987),n=s(81694),c=s.n(n),l=s(72791),o=s(10162),d=s(80184),u=["as","bsPrefix","className"],m=["className"],f=["xxl","xl","lg","md","sm","xs"];var p=l.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,i=e.className,n=(0,t.Z)(e,u);s=(0,o.vE)(s,"col");var l=[],d=[];return f.forEach((function(e){var a,i,r,t=n[e];delete n[e],"object"===typeof t&&null!=t?(a=t.span,i=t.offset,r=t.order):a=t;var c="xs"!==e?"-".concat(e):"";a&&l.push(!0===a?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(a)),null!=r&&d.push("order".concat(c,"-").concat(r)),null!=i&&d.push("offset".concat(c,"-").concat(i))})),[(0,r.Z)((0,r.Z)({},n),{},{className:c().apply(void 0,[i].concat(l,d))}),{as:a,bsPrefix:s,spans:l}]}(e),n=(0,i.Z)(s,2),l=n[0],p=l.className,h=(0,t.Z)(l,m),x=n[1],v=x.as,b=void 0===v?"div":v,N=x.bsPrefix,g=x.spans;return(0,d.jsx)(b,(0,r.Z)((0,r.Z)({},h),{},{ref:a,className:c()(p,!g.length&&N)}))}));p.displayName="Col",a.Z=p},89743:function(e,a,s){var i=s(1413),r=s(45987),t=s(81694),n=s.n(t),c=s(72791),l=s(10162),o=s(80184),d=["bsPrefix","className","as"],u=["xxl","xl","lg","md","sm","xs"],m=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,c=e.as,m=void 0===c?"div":c,f=(0,r.Z)(e,d),p=(0,l.vE)(s,"row"),h="".concat(p,"-cols"),x=[];return u.forEach((function(e){var a,s=f[e];delete f[e],a=null!=s&&"object"===typeof s?s.cols:s;var i="xs"!==e?"-".concat(e):"";null!=a&&x.push("".concat(h).concat(i,"-").concat(a))})),(0,o.jsx)(m,(0,i.Z)((0,i.Z)({ref:a},f),{},{className:n().apply(void 0,[t,p].concat(x))}))}));m.displayName="Row",a.Z=m}}]);
//# sourceMappingURL=8141.466d6efb.chunk.js.map