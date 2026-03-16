import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./utils-BQHNewu7.js";function _(a){return a>=70?{bg:"bg-[#f1fedb]",dot:"bg-success",text:"text-success"}:a>=50?{bg:"bg-[#fff6e9]",dot:"bg-warning",text:"text-warning"}:{bg:"bg-[#ffeced]",dot:"bg-error",text:"text-error"}}function r({score:a,variant:T="badge",className:g}){const d=_(a);return T==="text"?e.jsx("span",{className:i("font-mono text-xs font-bold",d.text,g),children:a}):e.jsxs("span",{className:i("inline-flex items-center gap-1.5 rounded-[5px] px-2 py-0.5 text-xs font-medium text-neutral-800",d.bg,g),children:[e.jsx("span",{className:i("h-1.5 w-1.5 rounded-full",d.dot)}),a]})}r.__docgenInfo={description:"",methods:[],displayName:"ScoreBadge",props:{score:{required:!0,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"badge" | "text"',elements:[{name:"literal",value:'"badge"'},{name:"literal",value:'"text"'}]},description:'"badge" renders the pill with dot; "text" renders just colored text',defaultValue:{value:'"badge"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/ScoreBadge",component:r,tags:["autodocs"],argTypes:{score:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["badge","text"]}}},t={args:{score:85,variant:"badge"}},s={args:{score:60,variant:"badge"}},o={args:{score:30,variant:"badge"}},n={args:{score:85,variant:"text"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{score:92}),e.jsx(r,{score:65}),e.jsx(r,{score:35}),e.jsx(r,{score:92,variant:"text"}),e.jsx(r,{score:65,variant:"text"}),e.jsx(r,{score:35,variant:"text"})]})};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    score: 85,
    variant: "badge"
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var x,u,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    score: 60,
    variant: "badge"
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,S,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    score: 30,
    variant: "badge"
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,h,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    score: 85,
    variant: "text"
  }
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var w,y,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <ScoreBadge score={92} />
      <ScoreBadge score={65} />
      <ScoreBadge score={35} />
      <ScoreBadge score={92} variant="text" />
      <ScoreBadge score={65} variant="text" />
      <ScoreBadge score={35} variant="text" />
    </div>
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const C=["HighScore","MediumScore","LowScore","TextVariant","AllScores"];export{c as AllScores,t as HighScore,o as LowScore,s as MediumScore,n as TextVariant,C as __namedExportsOrder,A as default};
