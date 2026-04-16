import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as M}from"./index-CZtRLH7z.js";import{a as k}from"./utils-DDt1maD9.js";const q=M("relative inline-flex flex-col items-start text-white text-xs font-normal leading-[18px] tracking-[0.4px] text-center bg-brand-blue-900 shadow-[0px_4px_24px_rgba(0,0,0,0.16)]",{variants:{size:{sm:"px-1 py-0.5 rounded-md",lg:"p-2 rounded-lg"}},defaultVariants:{size:"lg"}}),I={"top-left":"before:absolute before:top-0 before:left-2 before:-translate-y-full before:border-[6px] before:border-transparent before:border-b-brand-blue-900","top-center":"before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-[6px] before:border-transparent before:border-b-brand-blue-900","top-right":"before:absolute before:top-0 before:right-2 before:-translate-y-full before:border-[6px] before:border-transparent before:border-b-brand-blue-900","bottom-left":"before:absolute before:bottom-0 before:left-2 before:translate-y-full before:border-[6px] before:border-transparent before:border-t-brand-blue-900","bottom-center":"before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-full before:border-[6px] before:border-transparent before:border-t-brand-blue-900","bottom-right":"before:absolute before:bottom-0 before:right-2 before:translate-y-full before:border-[6px] before:border-transparent before:border-t-brand-blue-900",left:"before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:border-[6px] before:border-transparent before:border-r-brand-blue-900",right:"before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:translate-x-full before:border-[6px] before:border-transparent before:border-l-brand-blue-900"};function r({size:p,arrow:b,className:V,children:D,...E}){return e.jsx("div",{className:k(q({size:p}),"before:content-['']",b&&I[b],V),role:"tooltip",...E,children:D})}r.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrow:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"
| "left"
| "right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Position of the arrow caret"}},composes:["VariantProps"]};const F={title:"Components/Tooltip",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","lg"]},arrow:{control:"select",options:[void 0,"top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left","right"]}},decorators:[p=>e.jsx("div",{className:"p-16 flex items-center justify-center",children:e.jsx(p,{})})]},o={args:{children:"Tooltip",size:"lg",arrow:"bottom-center"}},t={args:{children:"Tooltip",size:"sm",arrow:"bottom-center"}},n={args:{children:"Tooltip",size:"lg",arrow:"bottom-center"}},a={args:{children:"Tooltip",size:"lg"}},l={name:"All Arrow Positions",render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-12 items-center justify-items-center",children:[e.jsx(r,{size:"lg",arrow:"top-left",children:"top-left"}),e.jsx(r,{size:"lg",arrow:"top-center",children:"top-center"}),e.jsx(r,{size:"lg",arrow:"top-right",children:"top-right"}),e.jsx(r,{size:"lg",arrow:"left",children:"left"}),e.jsx(r,{size:"lg",children:"no arrow"}),e.jsx(r,{size:"lg",arrow:"right",children:"right"}),e.jsx(r,{size:"lg",arrow:"bottom-left",children:"bottom-left"}),e.jsx(r,{size:"lg",arrow:"bottom-center",children:"bottom-center"}),e.jsx(r,{size:"lg",arrow:"bottom-right",children:"bottom-right"})]})},s={name:"Size Comparison",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{size:"lg",arrow:"bottom-center",children:"Large"}),e.jsx(r,{size:"sm",arrow:"bottom-center",children:"Small"})]})},i={name:"Long Content",render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-6",children:[e.jsx(r,{size:"lg",arrow:"bottom-left",children:"This is a longer tooltip message"}),e.jsx(r,{size:"sm",arrow:"top-center",children:"Multi-word tooltip"})]})};var c,m,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Tooltip",
    size: "lg",
    arrow: "bottom-center"
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Tooltip",
    size: "sm",
    arrow: "bottom-center"
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Tooltip",
    size: "lg",
    arrow: "bottom-center"
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,T,j;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Tooltip",
    size: "lg"
  }
}`,...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var v,y,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "All Arrow Positions",
  render: () => <div className="grid grid-cols-3 gap-12 items-center justify-items-center">
      <Tooltip size="lg" arrow="top-left">
        top-left
      </Tooltip>
      <Tooltip size="lg" arrow="top-center">
        top-center
      </Tooltip>
      <Tooltip size="lg" arrow="top-right">
        top-right
      </Tooltip>
      <Tooltip size="lg" arrow="left">
        left
      </Tooltip>
      <Tooltip size="lg">no arrow</Tooltip>
      <Tooltip size="lg" arrow="right">
        right
      </Tooltip>
      <Tooltip size="lg" arrow="bottom-left">
        bottom-left
      </Tooltip>
      <Tooltip size="lg" arrow="bottom-center">
        bottom-center
      </Tooltip>
      <Tooltip size="lg" arrow="bottom-right">
        bottom-right
      </Tooltip>
    </div>
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var N,A,C;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Size Comparison",
  render: () => <div className="flex items-center gap-6">
      <Tooltip size="lg" arrow="bottom-center">
        Large
      </Tooltip>
      <Tooltip size="sm" arrow="bottom-center">
        Small
      </Tooltip>
    </div>
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var L,_,P;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Long Content",
  render: () => <div className="flex flex-col items-start gap-6">
      <Tooltip size="lg" arrow="bottom-left">
        This is a longer tooltip message
      </Tooltip>
      <Tooltip size="sm" arrow="top-center">
        Multi-word tooltip
      </Tooltip>
    </div>
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const G=["Default","Small","Large","NoArrow","AllArrowPositions","SizeComparison","LongContent"];export{l as AllArrowPositions,o as Default,n as Large,i as LongContent,a as NoArrow,s as SizeComparison,t as Small,G as __namedExportsOrder,F as default};
