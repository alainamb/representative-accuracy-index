"use strict";(self.webpackChunkrepresentative_accuracy_index=self.webpackChunkrepresentative_accuracy_index||[]).push([[1649],{6681:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var r=a(1410),s=a(6289);a(797);var i=a(4848);const n={footer:"footer_vs6F",footerNav:"footerNav__lMu",copyright:"copyright_HG4G"};function o(){return(0,i.jsx)("footer",{className:n.footer,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("nav",{className:n.footerNav,children:[(0,i.jsx)(s.A,{to:"https://github.com/alainamb/representative-accuracy-index",children:"GitHub"}),(0,i.jsx)(s.A,{to:"/privacy",children:"Privacy Policy"}),(0,i.jsx)(s.A,{to:"/terms",children:"Terms of Service"})]}),(0,i.jsxs)("p",{className:n.copyright,children:["\xa9 ",(new Date).getFullYear()," Alaina Brandt. Representative Accuracy Index. Built with Docusaurus."]})]})})}function l(e){let{children:t,...a}=e;return(0,i.jsxs)(r.A,{...a,children:[t,(0,i.jsx)(o,{})]})}},7126:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(6540),s=(a(1410),a(6681)),i=a(4848);const n=[{id:1,title:"Why Diverse Teams Are Smarter",author:"David Rock and Heidi Grant",publication:"Harvard Business Review",year:2016,type:"Academic",url:"https://hbr.org/2016/11/why-diverse-teams-are-smarter"},{id:2,title:"The Trouble with Homogenous Teams",author:"Evan Apfelbaum",publication:"MIT Sloan Management Review",year:2017,type:"Academic",url:"https://sloanreview.mit.edu/article/the-trouble-with-homogeneous-teams/"},{id:3,title:"Projected Age Groups and Sex Composition",author:"U.S. Census Bureau",publication:"Population Division",year:2017,type:"Government",url:"https://www.census.gov/data/tables/2017/demo/popproj/2017-summary-tables.html"},{id:4,title:"Nonbinary LGBTQ Adults in the United States",author:"Bianca D.M. Wilson and Ilan H. Meyer",publication:"The Williams Institute, UCLA School of Law",year:2021,type:"Academic",url:"https://williamsinstitute.law.ucla.edu/publications/nonbinary-lgbtq-adults-us/"}];function o(){const[e,t]=(0,r.useState)(""),[a,o]=(0,r.useState)("All"),l=n.filter((t=>("All"===a||t.type===a)&&(t.title.toLowerCase().includes(e.toLowerCase())||t.author.toLowerCase().includes(e.toLowerCase())||t.publication.toLowerCase().includes(e.toLowerCase()))));return(0,i.jsx)(s.A,{title:"Resources",children:(0,i.jsxs)("div",{className:"container margin-vert--lg",children:[(0,i.jsx)("h1",{children:"Research Resources"}),(0,i.jsx)("div",{className:"margin-bottom--lg",children:(0,i.jsx)("input",{type:"text",placeholder:"Search resources...",value:e,onChange:e=>t(e.target.value),className:"form-control"})}),(0,i.jsxs)("div",{className:"margin-bottom--lg",children:[(0,i.jsx)("button",{className:"button "+("All"===a?"button--primary":"button--outline"),onClick:()=>o("All"),children:"All"}),["Academic","Government","Data"].map((e=>(0,i.jsx)("button",{className:"button margin-left--sm "+(a===e?"button--primary":"button--outline"),onClick:()=>o(e),children:e},e)))]}),(0,i.jsx)("div",{children:l.map((e=>(0,i.jsxs)("div",{className:"card margin-bottom--md",children:[(0,i.jsx)("div",{className:"card__header",children:(0,i.jsx)("h3",{children:e.title})}),(0,i.jsxs)("div",{className:"card__body",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Author:"})," ",e.author,(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Publication:"})," ",e.publication,", ",e.year,(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Type:"})," ",e.type]}),(0,i.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"button button--secondary button--sm",children:"View Resource"})]})]},e.id)))})]})})}}}]);