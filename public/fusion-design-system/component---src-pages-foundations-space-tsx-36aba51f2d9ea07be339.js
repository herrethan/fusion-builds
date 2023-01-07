"use strict";(self.webpackChunkfusion_design_system=self.webpackChunkfusion_design_system||[]).push([[5081],{9683:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4043),i=(0,n(3431).iv)({padding:"24px 40px",width:"100%",maxWidth:"960px",display:"flex",flexDirection:"column",alignContent:"flex-start",gap:"8px",margin:"0 auto","@media (max-width: 780px)":{padding:"24px"}});function o(e){var t=e.children;return a.createElement(r.xu,{css:i},t)}},625:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1051),r=n(7294),i={backgroundColor:a.rSc.colors.grey1,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px",marginTop:"24px",bottom:"0",width:"100%",fontSize:"14px"};function o(){return r.createElement("footer",{style:i},r.createElement(a.xvT,null,"© 2022 Altus Group"),r.createElement(a.xvT,{as:"p",style:{textAlign:"right",display:"flex"}},r.createElement(a.zxk,{ml:2,variant:"tertiary",size:"small"},"Share feedback")))}},4643:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(3431),i=n(1051),o=(0,r.iv)({display:"flex",alignItems:"baseline",marginLeft:"-28px",marginBottom:"8px","& .link":{height:"100%",marginRight:"8px",color:i.rSc.colors.textSecondary,transition:"opacity .2s",opacity:0,"&:hover":{color:i.rSc.colors.text}},"&:hover":{"& .link":{cursor:"pointer",opacity:1}},"& .h2":{marginBottom:"8px"}});function l(e){var t=a.useState(!1),n=t[0],r=t[1];return a.createElement(i.xuv,{id:e.anchor,css:o},!n&&a.createElement(i.ua7,{title:"Copy link to heading",placement:"left",style:{fontSize:"12px"},components:void 0,componentsProps:void 0},a.createElement("a",{className:"link",onClick:function(){return navigator.clipboard.writeText(location.pathname+"#"+e.anchor),void r(!0)}},a.createElement(i.JHz,{size:"medium",style:{marginTop:"-8px"}}))),n&&a.createElement(i.ua7,{title:"Copied!",placement:"left",style:{fontSize:"12px"},components:void 0,componentsProps:void 0},a.createElement("a",{className:"link",onMouseLeave:function(){return r(!1)}},a.createElement(i.JHz,{size:"medium",style:{marginTop:"-8px"}}))),e.children)}},7508:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4043),i=n(625),o=(0,n(3431).iv)({scrollBehavior:"smooth",marginLeft:"264px",zIndex:"-2",position:"absolute",overflowY:"auto",width:"calc(100% - 264px)",height:"calc(100vh - 56px)",display:"flex",flexDirection:"column",justifyContent:"space-between","@media (max-width: 780px)":{marginLeft:"0px",width:"100%",minWidth:"320px"}});function l(e){var t=e.children;return a.createElement(r.xu,{css:o},a.createElement(r.xu,null,a.createElement(r.xu,{id:"scroll-top"}),t),a.createElement(i.Z,null))}},1498:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1051),r=n(7294),i={background:a.rSc.colors.grey1},o={padding:"56px 40px",maxWidth:"960px",margin:"0 auto","@media (max-width: 780px)":{padding:"56px 24px"}},l={fontSize:"16px",marginTop:"8px"};function s(e){return r.createElement(a.xuv,{style:i},r.createElement(a.xuv,{css:o},r.createElement(a.xvT,{variant:"heading1"},e.heading),r.createElement(a.xuv,{style:l,className:"textControl"},e.description)))}},9454:function(e,t,n){n.d(t,{H:function(){return i}});var a=n(7294),r=n(1082),i=function(e){var t=e.title,n=e.description,i=e.pathname,o=e.children,l=(0,r.K2)("1946181227").site.siteMetadata,s=l.title,c=l.description,m=l.image,p=l.siteUrl,h={title:t||s,description:n||c,image:""+p+m,url:""+p+(i||"")};return a.createElement(a.Fragment,null,a.createElement("title",null,h.title),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{name:"image",content:h.image}),a.createElement("link",{rel:"icon",type:"image/x-icon",href:"../fusion.ico"}),o)}},2295:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),r=n(1498),i=n(7508),o=n(1051),l=n(9683),s=n.p+"static/8ptGrid-f961c96515b76d3f047528ebdbb450a6.png",c=n.p+"static/opticalAdjustment-2bd3e46eec35f52cb5b17f3bc9bf588c.png",m=n(9454),p=n(4643),h={border:"1px solid #E5E5E5",borderRadius:"8px",width:"100%",maxHeight:"224px",minHeight:"150px",objectFit:"cover"},u="Space";function d(){return a.createElement(a.Fragment,null,a.createElement(m.H,{title:u}),a.createElement(i.Z,null,a.createElement(r.Z,{heading:u,description:"Space is the distance between the different elements in the UI. The spacing we use helps to create clear visual hierarchies and makes our content become more usable and understandable."}),a.createElement(l.Z,null,a.createElement(o.xuv,{className:"textControl"},a.createElement(p.Z,{anchor:"Principles"},a.createElement(o.xvT,{variant:"heading2",className:"h2"},"Principles")),a.createElement(p.Z,{anchor:"8pt grid"},a.createElement(o.xvT,{variant:"heading3"},"8pt grid")),a.createElement(o.xvT,{mb:4,as:"p"},"The 8pt grid is the foundation for all spacing in Fusion. For our purposes 1pt(point) = 8px (pixels). The principle of 8pt Grid is that use multiples of 8 (8, 16, 24, 32, 40, 48, 56, etc.) for layout, dimensions, padding, and margin of all our UI elements.",a.createElement(o.xvT,{mt:2,mb:3,as:"p"},"Internally in Fusion, we take a soft 8pt grid approach. This means that we occasionally use 4px and 2px values when we are working within smaller components. This allows us to account for optical adjustments and optimize our use of space."),a.createElement("img",{alt:"8pt grid example",style:h,src:s})),a.createElement(p.Z,{anchor:"Create visual groups"},a.createElement(o.xvT,{variant:"heading3"},"Create visual groups")),a.createElement(o.xvT,{mb:4,as:"p"},"If UI elements are related, they should be closer together and use a lower spacing value. The closer the relationship, the lower the value should be. This helps us to create a visual hierarchy that is understandable at a glance and minimizes cognitive load."),a.createElement(p.Z,{anchor:"Maintain consistency"},a.createElement(o.xvT,{variant:"heading3"},"Maintain consistency")),a.createElement(o.xvT,{mb:4,as:"p"},"Use spacing values consistently in your designs and ensure that your approach is consistent with how spacing has been implemented in other parts of the platform."),a.createElement(p.Z,{anchor:"Maintain consistency"},a.createElement(o.xvT,{variant:"heading3"},"Choose appropriate values")),a.createElement(o.xvT,{mb:5,as:"p"},"Use values that are appropriate for your use case, for large amounts of information, use low spacing values. Use larger values for content that doesn't have a lot of elements."),a.createElement(p.Z,{anchor:"Maintain consistency"},a.createElement(o.xvT,{variant:"heading2",className:"h2"},"Designing with space")),a.createElement(p.Z,{anchor:"Gestalt principles"},a.createElement(o.xvT,{variant:"heading3"},"Gestalt principles")),a.createElement(o.xvT,{mb:4,as:"p"},"When working with spacing, we need to leverage the following principles to organize content so that it's both aesthetically pleasing and easy to understand.",a.createElement(o.xvT,{mt:2,mb:4},"→ ",a.createElement(o.rUS,{href:"https://www.interaction-design.org/literature/topics/gestalt-principles"},"Learn more about Gestalt principiles"),"."),a.createElement(p.Z,{anchor:"Proximity"},a.createElement(o.xvT,{variant:"heading4"},"Proximity")),a.createElement(o.xvT,{mb:4,as:"p"},"Group elements using contrasting spacing values. The principle of proximity states that things that are close together appear to be more related than things that are spaced farther apart."),a.createElement(p.Z,{anchor:"Common region"},a.createElement(o.xvT,{variant:"heading4"},"Common region")),a.createElement(o.xvT,{mb:4,as:"p"},"The principle of common region is highly related to proximity. It states that when objects are located within the same closed region, we perceive them as being grouped together.",a.createElement(o.xvT,{mt:2,mb:4,as:"p"},"Adding containers or separators are a great way to create a perceived separation between groups of objects—even if they have varying proximity, shape, size, color, etc.")),a.createElement(p.Z,{anchor:"Common fate"},a.createElement(o.xvT,{variant:"heading4"},"Common fate")),a.createElement(o.xvT,{mb:4,as:"p"},"Group things based on how they will move/scroll. The Gestalt law of common fate states that humans perceive visual elements that move in the same speed and/or direction as parts of a single entity. A common example of this is a flock of birds. When several birds fly in the same direction, we normally assume that they belong to a single group."),a.createElement(p.Z,{anchor:"Continuity"},a.createElement(o.xvT,{variant:"heading4"},"Continuity")),a.createElement(o.xvT,{mb:4,as:"p"},"The principle of continuity states that elements that are arranged on a line or curve are perceived to be more related than elements not on the line or curve.")),a.createElement(p.Z,{anchor:"Density"},a.createElement(o.xvT,{variant:"heading3"},"Density")),a.createElement(o.xvT,{mb:2,as:"p"},"Tighter spacing makes it easier to scan and comprehend large sets of data, like lists and tables. It also naturally enables us to fit more elements within the space available. Looser space can help attract the user's attention and make a layout feel more user-friendly."),a.createElement(o.xvT,{mb:4,as:"p"},"Try to give our UI elements room to breathe where you can. But, be mindful of what the user is trying to achieve and don't be afraid to tighten things up if you need to present a lot of information at once."),a.createElement(p.Z,{anchor:"Optical adjustments"},a.createElement(o.xvT,{variant:"heading3"},"Optical adjustments")),a.createElement(o.xvT,{mb:3,as:"p"},"Try to avoid relying on the numbers too much. Sometimes using equal values results in something that looks visually imbalanced. When creating components, change your spacing values to achieve something that looks balanced."),a.createElement(o.xuv,{mb:4},a.createElement("img",{alt:"optical adjustment example",style:{width:"100%",border:"1px solid #E5E5E5",borderRadius:"8px"},src:c})),a.createElement(p.Z,{anchor:"Designers"},a.createElement(o.xvT,{variant:"heading2",className:"h2"},"Tools & resources")),a.createElement(p.Z,{anchor:"Designers"},a.createElement(o.xvT,{variant:"heading3"},"Designers")),a.createElement(o.xvT,{mb:4,as:"p"},"Reference the following links to get started with spacing in Fusion:",a.createElement("ul",null,a.createElement("li",null,a.createElement(o.rUS,{href:"https://www.figma.com/file/SLn5GA1m3uhHFu0bnGvffh/1.-FDS---Foundations?node-id=3%3A5"},"FDS - Grids and spacing")),a.createElement("li",null,a.createElement(o.rUS,{href:"https://www.figma.com/file/XVKJxQZJP1GJ6AUiNHYIdJ/2.-FDS-Components?node-id=301%3A2786"},"FDS - Page layouts")),a.createElement("li",null,a.createElement(o.rUS,{href:"https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"},"Figma - Autolayout")))),a.createElement(p.Z,{anchor:"Developers"},a.createElement(o.xvT,{variant:"heading3"},"Developers")),a.createElement(o.xvT,{mb:4,as:"p"},"Reference the following components for managing space:",a.createElement("ul",null,a.createElement("li",null,a.createElement(o.rUS,null,"Box")),a.createElement("li",null,a.createElement(o.rUS,null,"Grid")),a.createElement("li",null,a.createElement(o.rUS,null,"Flex"))))))))}}}]);
//# sourceMappingURL=component---src-pages-foundations-space-tsx-36aba51f2d9ea07be339.js.map