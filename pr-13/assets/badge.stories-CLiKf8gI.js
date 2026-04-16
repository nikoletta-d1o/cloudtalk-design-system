import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as I}from"./index-CZtRLH7z.js";import{a as O}from"./utils-DDt1maD9.js";import{X}from"./x-CDsTmnuk.js";import{fn as F}from"./index-CH2Su9EI.js";import"./createLucideIcon-huI5jBd3.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const G=I("inline-flex items-center font-medium",{variants:{variant:{default:"bg-primary-100 text-gray-cool-800",success:"bg-success-100 text-gray-cool-800",warning:"bg-warning-100 text-gray-cool-800",error:"bg-error-light text-gray-cool-800",neutral:"bg-gray-cool-100 text-gray-cool-800",primary:"bg-primary-50 text-primary-700",blue:"bg-primary-100 text-gray-cool-800"},size:{sm:"rounded-[4px] px-2 py-0.5 text-xs",md:"rounded-[8px] px-2 py-1 text-xs",lg:"rounded-[8px] px-2.5 py-1 text-sm"}},defaultVariants:{variant:"default",size:"md"}});function e({variant:C,size:L,onRemove:l,className:M,children:T,...k}){return r.jsxs("span",{className:O(G({variant:C,size:L}),M),...k,children:[T,l&&r.jsx("button",{onClick:q=>{q.stopPropagation(),l()},className:"ml-1 inline-flex items-center text-current opacity-60 hover:opacity-100",children:r.jsx(X,{className:"h-3 w-3"})})]})}e.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const rr={title:"Components/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","neutral","primary","blue"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Badge",variant:"default",size:"md"}},s={args:{children:"Success",variant:"success"}},n={args:{children:"Warning",variant:"warning"}},t={args:{children:"Error",variant:"error"}},i={args:{children:"Neutral",variant:"neutral"}},o={args:{children:"Removable",variant:"primary",onRemove:F()}},c={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(e,{variant:"default",children:"Default"}),r.jsx(e,{variant:"success",children:"Success"}),r.jsx(e,{variant:"warning",children:"Warning"}),r.jsx(e,{variant:"error",children:"Error"}),r.jsx(e,{variant:"neutral",children:"Neutral"}),r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"blue",children:"Blue"})]})},d={render:()=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})};var m,g,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default",
    size: "md"
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,v,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Success",
    variant: "success"
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,h,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Warning",
    variant: "warning"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,S,j;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Error",
    variant: "error"
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,N,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Neutral",
    variant: "neutral"
  }
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var w,E,W;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Removable",
    variant: "primary",
    onRemove: fn()
  }
}`,...(W=(E=o.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var R,V,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="blue">Blue</Badge>
    </div>
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var D,P,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const er=["Default","Success","Warning","Error","Neutral","WithRemove","AllVariants","AllSizes"];export{d as AllSizes,c as AllVariants,a as Default,t as Error,i as Neutral,s as Success,n as Warning,o as WithRemove,er as __namedExportsOrder,rr as default};
