import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as ye}from"./index-CZtRLH7z.js";import{a as s}from"./utils-DDt1maD9.js";import{C as he,a as be,I as qe}from"./info-CetV_P7q.js";import{c as Se}from"./createLucideIcon-huI5jBd3.js";import{X as N}from"./x-CDsTmnuk.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ve=Se("CircleCheckBig",Ae),k=ye("bg-white rounded-xl shadow-[0px_0px_1px_0px_rgba(10,22,76,0.4),0px_12px_36px_0px_rgba(24,34,67,0.08)] w-[400px]",{variants:{variant:{info:"",success:"",warning:"",error:""}},defaultVariants:{variant:"info"}}),je={info:{icon:qe,className:"bg-brand-blue text-white"},success:{icon:Ve,className:"bg-success-400 text-white"},warning:{icon:be,className:"bg-warning-400 text-white"},error:{icon:he,className:"bg-error text-white"}};function t({variant:n="info",title:b,message:a,actionLabel:q,onAction:ge,onClose:i,layout:fe="horizontal",cancelLabel:xe="Cancel",confirmLabel:ve="Ok",onCancel:y,onConfirm:h,className:S,...A}){const Ce=n??"info",{icon:V,className:j}=je[Ce];return fe==="vertical"?e.jsxs("div",{className:s(k({variant:n}),"flex flex-col",S),...A,children:[e.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:s("inline-flex items-center justify-center shrink-0 size-6 rounded-full",j),children:e.jsx(V,{className:"size-3.5"})}),e.jsx("p",{className:"flex-1 text-base font-medium leading-[22px] tracking-[0.05px] text-gray-cool-900",children:b}),i&&e.jsx("button",{type:"button",onClick:i,className:"inline-flex items-center justify-center shrink-0 size-6 rounded-full bg-neutral-100 text-gray-cool-700 hover:bg-neutral-200",children:e.jsx(N,{className:"size-3"})})]}),a&&e.jsx("p",{className:"text-sm leading-5 tracking-[0.05px] text-gray-cool-700",children:a})]}),(y||h)&&e.jsxs("div",{className:"flex items-center justify-end gap-2 px-4 pb-4",children:[y&&e.jsx("button",{type:"button",onClick:y,className:"min-w-[80px] px-2 py-1 rounded-md text-[13px] font-medium leading-5 tracking-[0.15px] text-gray-cool-700 hover:bg-neutral-50",children:xe}),h&&e.jsx("button",{type:"button",onClick:h,className:"min-w-[80px] px-2 py-1 rounded-md text-[13px] font-medium leading-5 tracking-[0.15px] text-white bg-brand-blue hover:bg-primary-700",children:ve})]})]}):e.jsxs("div",{className:s(k({variant:n}),"flex items-center gap-4 p-4",S),...A,children:[e.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[e.jsx("span",{className:s("inline-flex items-center justify-center shrink-0 size-5 rounded-full",j),children:e.jsx(V,{className:"size-3"})}),e.jsxs("p",{className:"flex-1 text-sm leading-5 tracking-[0.15px] text-neutral-900",children:[e.jsx("span",{className:"font-medium",children:b}),a&&e.jsx("span",{className:"tracking-[0.05px]",children:` ${a}`})]})]}),q&&e.jsx("button",{type:"button",onClick:ge,className:"shrink-0 text-sm font-medium leading-5 tracking-[0.05px] text-brand-blue hover:underline",children:q}),i&&e.jsx("button",{type:"button",onClick:i,className:"shrink-0 text-gray-cool-400 hover:text-gray-cool-600",children:e.jsx(N,{className:"size-5"})})]})}t.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!0,tsType:{name:"string"},description:"Toast title (bold text)"},message:{required:!1,tsType:{name:"string"},description:"Message shown inline with title (horizontal) or as description (vertical)"},actionLabel:{required:!1,tsType:{name:"string"},description:"Optional action link text (horizontal layout only)"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when action link is clicked"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Layout type",defaultValue:{value:'"horizontal"',computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Label for the cancel button (vertical layout only)",defaultValue:{value:'"Cancel"',computed:!1}},confirmLabel:{required:!1,tsType:{name:"string"},description:"Label for the confirm button (vertical layout only)",defaultValue:{value:'"Ok"',computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when cancel button is clicked (vertical layout only)"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when confirm button is clicked (vertical layout only)"},variant:{defaultValue:{value:'"info"',computed:!1},required:!1}},composes:["Omit","VariantProps"]};const Ee={title:"Components/Toast",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]},layout:{control:"select",options:["horizontal","vertical"]}},decorators:[n=>e.jsx("div",{className:"p-8 bg-gray-cool-50 rounded-lg",children:e.jsx(n,{})})]},r={args:{variant:"info",title:"Info",message:"toast notification",actionLabel:"Action",onAction:()=>alert("Action clicked"),onClose:()=>alert("Close clicked")}},o={args:{variant:"success",title:"Success",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}}},c={args:{variant:"warning",title:"Warning",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}}},l={args:{variant:"error",title:"Error",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}}},u={name:"All Horizontal Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{variant:"info",title:"Info",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}}),e.jsx(t,{variant:"success",title:"Success",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}}),e.jsx(t,{variant:"warning",title:"Warning",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}}),e.jsx(t,{variant:"error",title:"Error",message:"toast notification",actionLabel:"Action",onAction:()=>{},onClose:()=>{}})]})},m={name:"Vertical / Info",args:{variant:"info",layout:"vertical",title:"Info",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}},d={name:"Vertical / Success",args:{variant:"success",layout:"vertical",title:"Success",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}},p={name:"Vertical / Warning",args:{variant:"warning",layout:"vertical",title:"Warning",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}},g={name:"Vertical / Error",args:{variant:"error",layout:"vertical",title:"Error",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}},f={name:"All Vertical Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{variant:"info",layout:"vertical",title:"Info",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}),e.jsx(t,{variant:"success",layout:"vertical",title:"Success",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}),e.jsx(t,{variant:"warning",layout:"vertical",title:"Warning",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}}),e.jsx(t,{variant:"error",layout:"vertical",title:"Error",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onCancel:()=>{},onConfirm:()=>{}})]})},x={name:"Vertical with Close Button",args:{variant:"info",layout:"vertical",title:"Info",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onClose:()=>{},onCancel:()=>{},onConfirm:()=>{}}},v={name:"Horizontal (no action)",args:{variant:"info",title:"Info",message:"toast notification",onClose:()=>{}}},C={name:"Vertical (no footer)",args:{variant:"success",layout:"vertical",title:"Success",message:"Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",onClose:()=>{}}};var w,z,L;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Info",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => alert("Action clicked"),
    onClose: () => alert("Close clicked")
  }
}`,...(L=(z=r.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var T,D,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => {},
    onClose: () => {}
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var E,W,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => {},
    onClose: () => {}
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,B,O;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => {},
    onClose: () => {}
  }
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var F,M,X;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All Horizontal Variants",
  render: () => <div className="flex flex-col gap-4">
      <Toast variant="info" title="Info" message="toast notification" actionLabel="Action" onAction={() => {}} onClose={() => {}} />
      <Toast variant="success" title="Success" message="toast notification" actionLabel="Action" onAction={() => {}} onClose={() => {}} />
      <Toast variant="warning" title="Warning" message="toast notification" actionLabel="Action" onAction={() => {}} onClose={() => {}} />
      <Toast variant="error" title="Error" message="toast notification" actionLabel="Action" onAction={() => {}} onClose={() => {}} />
    </div>
}`,...(X=(M=u.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var P,R,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Vertical / Info",
  args: {
    variant: "info",
    layout: "vertical",
    title: "Info",
    message: "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {}
  }
}`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Vertical / Success",
  args: {
    variant: "success",
    layout: "vertical",
    title: "Success",
    message: "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {}
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Vertical / Warning",
  args: {
    variant: "warning",
    layout: "vertical",
    title: "Warning",
    message: "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {}
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Vertical / Error",
  args: {
    variant: "error",
    layout: "vertical",
    title: "Error",
    message: "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {}
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "All Vertical Variants",
  render: () => <div className="flex flex-col gap-4">
      <Toast variant="info" layout="vertical" title="Info" message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique." onCancel={() => {}} onConfirm={() => {}} />
      <Toast variant="success" layout="vertical" title="Success" message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique." onCancel={() => {}} onConfirm={() => {}} />
      <Toast variant="warning" layout="vertical" title="Warning" message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique." onCancel={() => {}} onConfirm={() => {}} />
      <Toast variant="error" layout="vertical" title="Error" message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique." onCancel={() => {}} onConfirm={() => {}} />
    </div>
}`,...(ie=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var se,re,oe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Vertical with Close Button",
  args: {
    variant: "info",
    layout: "vertical",
    title: "Info",
    message: "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onClose: () => {},
    onCancel: () => {},
    onConfirm: () => {}
  }
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,le,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Horizontal (no action)",
  args: {
    variant: "info",
    title: "Info",
    message: "toast notification",
    onClose: () => {}
  }
}`,...(ue=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var me,de,pe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Vertical (no footer)",
  args: {
    variant: "success",
    layout: "vertical",
    title: "Success",
    message: "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onClose: () => {}
  }
}`,...(pe=(de=C.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const We=["Default","Success","Warning","Error","AllHorizontalVariants","VerticalInfo","VerticalSuccess","VerticalWarning","VerticalError","AllVerticalVariants","WithCloseButton","HorizontalNoAction","VerticalNoFooter"];export{u as AllHorizontalVariants,f as AllVerticalVariants,r as Default,l as Error,v as HorizontalNoAction,o as Success,g as VerticalError,m as VerticalInfo,C as VerticalNoFooter,d as VerticalSuccess,p as VerticalWarning,c as Warning,x as WithCloseButton,We as __namedExportsOrder,Ee as default};
