import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./index-ZH-6pyQh.js";import{c as g}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-CqkleIqs.js";function v({options:p,value:c,onChange:m,className:u,...Y}){return e.jsx("div",{className:g("inline-flex gap-1 rounded-lg bg-[#e0e4e8] p-0.5",u),role:"tablist",...Y,children:p.map(a=>{const O=a.value===c;return e.jsx("button",{type:"button",role:"tab","aria-selected":O,onClick:()=>m(a.value),className:g("flex-1 flex items-center justify-center h-7 px-6 rounded-md text-xs font-medium leading-6 tracking-[0.15px] whitespace-nowrap transition-all",O?"bg-white text-[#212629] shadow-card":"text-[#636d7b] hover:text-[#212629]"),children:a.label},a.value)})})}v.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedControlOption"}],raw:"SegmentedControlOption[]"},description:"The list of options to display"},value:{required:!0,tsType:{name:"string"},description:"The currently selected value"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when the selected value changes"}},composes:["Omit"]};const L={title:"Components/SegmentedControl",component:v,tags:["autodocs"]},x=[{label:"Option A",value:"a"},{label:"Option B",value:"b"}],f=[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"}],P=[{label:"All",value:"all"},{label:"Active",value:"active"},{label:"Paused",value:"paused"},{label:"Ended",value:"ended"}],R=[{label:"1D",value:"1d"},{label:"1W",value:"1w"},{label:"1M",value:"1m"},{label:"3M",value:"3m"},{label:"1Y",value:"1y"}],n={args:{options:x,value:"a",onChange:()=>{}}};function t({options:p,defaultValue:c}){const[m,u]=z.useState(c);return e.jsx(v,{options:p,value:m,onChange:u})}const o={render:()=>e.jsx(t,{options:f,defaultValue:"daily"})},s={name:"2 Options",render:()=>e.jsx(t,{options:x,defaultValue:"a"})},r={name:"3 Options",render:()=>e.jsx(t,{options:f,defaultValue:"daily"})},l={name:"4 Options",render:()=>e.jsx(t,{options:P,defaultValue:"all"})},i={name:"5 Options",render:()=>e.jsx(t,{options:R,defaultValue:"1d"})},d={name:"All Option Counts",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"2 Options"}),e.jsx(t,{options:x,defaultValue:"a"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"3 Options"}),e.jsx(t,{options:f,defaultValue:"daily"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"4 Options"}),e.jsx(t,{options:P,defaultValue:"all"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"5 Options"}),e.jsx(t,{options:R,defaultValue:"1d"})]})]})};var y,h,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: TwoOptions,
    value: "a",
    onChange: () => {}
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var j,S,V;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <InteractiveDemo options={ThreeOptions} defaultValue="daily" />
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var T,w,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "2 Options",
  render: () => <InteractiveDemo options={TwoOptions} defaultValue="a" />
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,I,N;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "3 Options",
  render: () => <InteractiveDemo options={ThreeOptions} defaultValue="daily" />
}`,...(N=(I=r.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var F,A,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "4 Options",
  render: () => <InteractiveDemo options={FourOptions} defaultValue="all" />
}`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var E,_,q;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "5 Options",
  render: () => <InteractiveDemo options={FiveOptions} defaultValue="1d" />
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var M,W,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "All Option Counts",
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          2 Options
        </p>
        <InteractiveDemo options={TwoOptions} defaultValue="a" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          3 Options
        </p>
        <InteractiveDemo options={ThreeOptions} defaultValue="daily" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          4 Options
        </p>
        <InteractiveDemo options={FourOptions} defaultValue="all" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          5 Options
        </p>
        <InteractiveDemo options={FiveOptions} defaultValue="1d" />
      </div>
    </div>
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Q=["Default","Interactive","TwoOptionsStory","ThreeOptionsStory","FourOptionsStory","FiveOptionsStory","AllVariants"];export{d as AllVariants,n as Default,i as FiveOptionsStory,l as FourOptionsStory,o as Interactive,r as ThreeOptionsStory,s as TwoOptionsStory,Q as __namedExportsOrder,L as default};
