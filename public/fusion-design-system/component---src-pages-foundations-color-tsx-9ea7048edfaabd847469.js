"use strict";(self.webpackChunkfusion_design_system=self.webpackChunkfusion_design_system||[]).push([[197],{9683:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),c=a(4043),n=(0,a(3431).iv)({padding:"24px 40px",width:"100%",maxWidth:"960px",display:"flex",flexDirection:"column",alignContent:"flex-start",gap:"8px",margin:"0 auto","@media (max-width: 780px)":{padding:"24px"}});function s(e){var t=e.children;return r.createElement(c.xu,{css:n},t)}},9873:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),c=a(4043),n=(0,a(3431).iv)({padding:"24px 40px 0 40px",width:"100%",maxWidth:"960px",display:"flex",flexDirection:"column",alignContent:"flex-start",gap:"24px",margin:"0 auto","@media (max-width: 780px)":{padding:"24px 24px"}});function s(e){var t=e.children;return r.createElement(c.xu,{css:n},r.createElement(c.rj,{gap:3,columns:[1,1,2,2,3,3],sx:{mb:2}},t))}},625:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(1051),c=a(7294),n={backgroundColor:r.rSc.colors.grey1,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px",marginTop:"24px",bottom:"0",width:"100%",fontSize:"14px"};function s(){return c.createElement("footer",{style:n},c.createElement(r.xvT,null,"© 2022 Altus Group"),c.createElement(r.xvT,{as:"p",style:{textAlign:"right",display:"flex"}},c.createElement(r.zxk,{ml:2,variant:"tertiary",size:"small"},"Share feedback")))}},4643:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),c=a(3431),n=a(1051),s=(0,c.iv)({display:"flex",alignItems:"baseline",marginLeft:"-28px",marginBottom:"8px","& .link":{height:"100%",marginRight:"8px",color:n.rSc.colors.textSecondary,transition:"opacity .2s",opacity:0,"&:hover":{color:n.rSc.colors.text}},"&:hover":{"& .link":{cursor:"pointer",opacity:1}},"& .h2":{marginBottom:"8px"}});function l(e){var t=r.useState(!1),a=t[0],c=t[1];return r.createElement(n.xuv,{id:e.anchor,css:s},!a&&r.createElement(n.ua7,{title:"Copy link to heading",placement:"left",style:{fontSize:"12px"},components:void 0,componentsProps:void 0},r.createElement("a",{className:"link",onClick:function(){return navigator.clipboard.writeText(location.pathname+"#"+e.anchor),void c(!0)}},r.createElement(n.JHz,{size:"medium",style:{marginTop:"-8px"}}))),a&&r.createElement(n.ua7,{title:"Copied!",placement:"left",style:{fontSize:"12px"},components:void 0,componentsProps:void 0},r.createElement("a",{className:"link",onMouseLeave:function(){return c(!1)}},r.createElement(n.JHz,{size:"medium",style:{marginTop:"-8px"}}))),e.children)}},7508:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),c=a(4043),n=a(625),s=(0,a(3431).iv)({scrollBehavior:"smooth",marginLeft:"264px",zIndex:"-2",position:"absolute",overflowY:"auto",width:"calc(100% - 264px)",height:"calc(100vh - 56px)",display:"flex",flexDirection:"column",justifyContent:"space-between","@media (max-width: 780px)":{marginLeft:"0px",width:"100%",minWidth:"320px"}});function l(e){var t=e.children;return r.createElement(c.xu,{css:s},r.createElement(c.xu,null,r.createElement(c.xu,{id:"scroll-top"}),t),r.createElement(n.Z,null))}},1498:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(1051),c=a(7294),n={background:r.rSc.colors.grey1},s={padding:"56px 40px",maxWidth:"960px",margin:"0 auto","@media (max-width: 780px)":{padding:"56px 24px"}},l={fontSize:"16px",marginTop:"8px"};function o(e){return c.createElement(r.xuv,{style:n},c.createElement(r.xuv,{css:s},c.createElement(r.xvT,{variant:"heading1"},e.heading),c.createElement(r.xuv,{style:l,className:"textControl"},e.description)))}},9454:function(e,t,a){a.d(t,{H:function(){return n}});var r=a(7294),c=a(1082),n=function(e){var t=e.title,a=e.description,n=e.pathname,s=e.children,l=(0,c.K2)("1946181227").site.siteMetadata,o=l.title,m=l.description,i=l.image,x=l.siteUrl,p={title:t||o,description:a||m,image:""+x+i,url:""+x+(n||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,p.title),r.createElement("meta",{name:"description",content:p.description}),r.createElement("meta",{name:"image",content:p.image}),r.createElement("link",{rel:"icon",type:"image/x-icon",href:"../fusion.ico"}),s)}},4602:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),c=a(1498),n=a(7508),s=a(1051),l=a(9683),o=a(9873),m=a.p+"static/color-range-633c4d350d573edc03f2e8745455be33.svg",i=a(9454),x=a(4643),p={boxShadow:s.rSc.shadows.depth3,borderRadius:"4px"},v={borderRadius:"4px 4px 0 0",padding:"8px"},E={padding:"8px"},u={marginTop:"-32px",marginBottom:"px"},h="Color";function d(){return r.createElement(r.Fragment,null,r.createElement(i.H,{title:h}),r.createElement(n.Z,null,r.createElement(c.Z,{heading:h,description:"We use color to convey meaning, clarify hierarchy, and ensure accessibility and readability in all of our user interfaces."}),r.createElement(l.Z,null,r.createElement(s.xuv,{className:"textControl",mb:2},r.createElement(x.Z,{anchor:"Principles"},r.createElement(s.xvT,{variant:"heading2",className:"h2"},"Principles")),r.createElement(x.Z,{anchor:"Communicate"},r.createElement(s.xvT,{variant:"heading3"},"Communicate")),r.createElement(s.xvT,{mb:4,as:"p"},"Although we value aesthetics, we place a higher value on clarity and usability. The colors we use should support the content of our designs, communicating the hierarchy of information, interactivity, states, and the separation between different elements."),r.createElement(x.Z,{anchor:"Use colors with meaning"},r.createElement(s.xvT,{variant:"heading3"},"Use colors with meaning")),r.createElement(s.xvT,{as:"p",mb:4},"Our colors are divided into 3 discreet groups, each group designed to solve a specific problem. The colors we use each have a role to play in the interface, so be mindful when choosing colors. Defining these groups and roles helps us to build the system in a flexible way, making changes possible down the line that would otherwise be impossible to implement. A breakdown of these groups can be found below."),r.createElement(x.Z,{anchor:"Accessibility"},r.createElement(s.xvT,{variant:"heading3"},"Accessibility")),r.createElement(s.xvT,{as:"p"},"The color system is designed to generate themes that meet WCAG 2.1 - AA compliant contrast ratios (4.5:1 at minimum). This makes UI elements easier to find, and identify, and conveys the affordance of interactivity. It also makes the whole experience more accessible for users who may have vision-related issues. However, we should never convey information using color alone."),r.createElement(s.xvT,{as:"p",mb:2},"For our designers, we have tested contrast for every color in Fusion and provided a 'contrasting' color that should be used with each. This information is available in Figma."),r.createElement(s.xvT,{as:"p",mb:5},"→ ",r.createElement(s.rUS,{href:"accessibility"},"Learn more about accessibility in Fusion")),r.createElement(x.Z,{anchor:"Our palettes"},r.createElement(s.xvT,{variant:"heading2",className:"h2"},"Our palettes")),r.createElement(x.Z,{anchor:"System colors"},r.createElement(s.xvT,{variant:"heading3"},"System colors")),r.createElement(s.xvT,{as:"p"},"Our system palette consists of our primary color and our neutrals (greys). These are the most widely used colors in Fusion and are used for default states in all components, borders, page backgrounds, etc."))),r.createElement(s.xuv,{style:u},r.createElement(o.Z,null,r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.primary,color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: primary")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex:#00253D"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 15.77:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.primaryHover,color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: primaryHover")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #003E66"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 11.1:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.primaryActive,color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: primaryActive")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #004D80"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 8.82:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)"))))),r.createElement(o.Z,null,r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.text,color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: textPrimary")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #333333"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 12.63:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.textSecondary,color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: textSecondary")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #777777"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 4.52:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.grey4,color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: grey4")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #c5cdcf"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 7.82:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.grey3,color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: grey3")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #e5e5e5"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 10.02:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.grey2,color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: grey2")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #f2f2f2"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 11.31:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.grey1,color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: grey1")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #f9f9f9"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 12:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)")))))),r.createElement(l.Z,null,r.createElement(s.xuv,{className:"textControl"},r.createElement(x.Z,{anchor:"Standard colors"},r.createElement(s.xvT,{variant:"heading3"},"Standard colors")),r.createElement(s.xvT,{as:"p"},"Our standard colors are a collection of swatches that can be used as utilities to convey state or offer the affordance of interactivity."),r.createElement(s.xvT,{as:"p",mt:2},"Black, white and transparent variables are also included here so that we can manage them as we do with the rest of the colors in the system. This helps us to keep a handle on how many variations of these colors we use in the UI so that we can edit these colors as variables when we go into dark-mode."),r.createElement(s.xvT,{as:"p",mt:2},"We have red, green, and orange swatches included here so that we can communicate error, success, and warning states consistently in the designs. As well as representing positive and negative changes in data."),r.createElement(s.xvT,{as:"p",mt:2},"We also have a blue ‘info' color that can be used to draw attention and convey an affordance of interaction. For example, this is the color we use on hyperlinks. This info color is also used as our default for data visualizations."))),r.createElement(s.xuv,{style:u},r.createElement(o.Z,null,r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.success[500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: success [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #328736"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 4.5:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.warning[500],color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: warning [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #FA8B2C"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 5.29:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.error[500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: error [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #D12C2C"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 5.11:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors.info[500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: info [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #125495"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 7.69:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)")))))),r.createElement(l.Z,null,r.createElement(s.xuv,{className:"textControl"},r.createElement(x.Z,{anchor:"Accent colors"},r.createElement(s.xvT,{variant:"heading3"},"Accent colors")),r.createElement(s.xvT,{as:"p"},"Our accent colors are used when we want to categorize elements in the UI. We do this in Fusion components and when showing categorical data in maps or in charts."),r.createElement(s.xvT,{as:"p",mt:2},"Each one of our accent colors has been assigned a ‘CRE role’ so that we can communicate this information using color in a consistent way across experiences."),r.createElement(s.xvT,{as:"p",mt:2},"As the system grows, we may add other categories to our accent palettes so let us know if you discover something that we could standardize on."))),r.createElement(s.xuv,{style:u},r.createElement(o.Z,null,r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-1"][500],color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: accent-1 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #2CDE93"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 7.19:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Multifamily")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-2"][500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: accent-2 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #D82B6A"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 4.69:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Retail")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-3"][500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: accent-3 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #3949AB"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 7.73:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Mixed use")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-4"][500],color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: accent-4 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #36B49D"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 4.91:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Hosiptality")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-5"][500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: accent-5 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #9133AA"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 6.44:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Commercial")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-6"][500],color:s.rSc.colors.black},r.createElement(s.xvT,{as:"p"},"Token: accent-6 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #D8542B"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: black"),r.createElement(s.xvT,{as:"p"},"Contrast: 5.2:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Other")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-7"][500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: accent-7 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #286384"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 6.54:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Vacant land")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-8"][500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: accent-8 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #5d35b1"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 8.04:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AAA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Industrial")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-9"][500],color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: accent-9 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #CCA82B"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 5.53:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Office")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-10"][500],color:s.rSc.colors.white},r.createElement(s.xvT,{as:"p"},"Token: accent-10 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #385FFF"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: white"),r.createElement(s.xvT,{as:"p"},"Contrast: 4.93:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Spec. purpose")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-11"][500],color:s.rSc.colors.text},r.createElement(s.xvT,{as:"p"},"Token: accent-11 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #A3BF39"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: textPrimary"),r.createElement(s.xvT,{as:"p"},"Contrast: 6.06:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Agricultural")))),r.createElement(s.xuv,{style:p},r.createElement(s.xuv,{style:v,bg:s.rSc.colors["accent-12"][500],color:s.rSc.colors.black},r.createElement(s.xvT,{as:"p"},"Token: accent-12 [500]")),r.createElement(s.xuv,{style:E},r.createElement(s.xvT,{mb:1,as:"p"},"Hex: #D941AE"),r.createElement(s.xvT,{mb:1,as:"p"},"Use with: black"),r.createElement(s.xvT,{as:"p"},"Contrast:5.31:1 ",r.createElement("span",{style:{color:s.rSc.colors.success[500]}}," (AA)"),r.createElement(s.xvT,{mb:1,as:"p"},"Category: Public/semi")))))),r.createElement(l.Z,null,r.createElement(s.xuv,{className:"textControl"},r.createElement(x.Z,{anchor:"Palette extentions"},r.createElement(s.xvT,{variant:"heading3"},"Palette extentions")),r.createElement(s.xvT,{mb:2,as:"p"},"Each of our standard and accent colors comes with 10 variations, [500] is always our base color. The variations range from 50 (lightest) to 900 (darkest) as shown below."),r.createElement("img",{style:{width:"100%",maxWidth:"666px"},src:m}),r.createElement(s.xvT,{as:"p",mt:2},"→ ",r.createElement(s.rUS,{href:"https://www.figma.com/file/SLn5GA1m3uhHFu0bnGvffh/1.-FDS---Foundations?node-id=2%3A2"},"View our complete range of colors on Figma.")))),r.createElement(l.Z,null,r.createElement(s.xuv,{className:"textControl"},r.createElement(x.Z,{anchor:"Dark-theme"},r.createElement(s.xvT,{variant:"heading3"},"Dark-theme")),r.createElement(s.xvT,{as:"p"},"All colors used in the designs and in the code need to be linked to the system libraries, with no exceptions. There are a few reasons why this is necessary but dark-theme is at the top of the list."),r.createElement(s.xvT,{as:"p",mt:2},"Theming works by taking the colors we’ve used from the system and swapping them for a dark-theme version of that color that is also provided by the system. If colors are hardcoded, they will not change and dark-theme will not work."),r.createElement(s.xvT,{as:"p",mt:2},"→  ",r.createElement(s.rUS,{href:"#"},"Learn more about dark-theme in Figma"))))))}}}]);
//# sourceMappingURL=component---src-pages-foundations-color-tsx-9ea7048edfaabd847469.js.map