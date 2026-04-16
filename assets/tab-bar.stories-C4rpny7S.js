import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-ZH-6pyQh.js";import{a as c}from"./utils-DDt1maD9.js";import"./_commonjsHelpers-CqkleIqs.js";const A={primary:"bg-primary-600",brand:"bg-brand-blue"};function i({tabs:r,activeTab:t,onTabChange:x,accentColor:f="primary",className:h}){return e.jsx("div",{className:c("flex border-b border-gray-cool-200",h),children:r.map(a=>e.jsxs("button",{type:"button",onClick:()=>x(a),className:c("relative px-4 py-2.5 text-sm font-medium tracking-[0.05px] transition-colors whitespace-nowrap",t===a?"text-gray-cool-900":"text-gray-cool-500 hover:text-gray-cool-700"),children:[a,t===a&&e.jsx("span",{className:c("absolute bottom-0 left-3 right-3 h-[2px] rounded-t-full",A[f])})]},a))})}i.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{tabs:{required:!0,tsType:{name:"unknown"},description:""},activeTab:{required:!0,tsType:{name:"T"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: T) => void",signature:{arguments:[{type:{name:"T"},name:"tab"}],return:{name:"void"}}},description:""},accentColor:{required:!1,tsType:{name:"union",raw:'"primary" | "brand"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"brand"'}]},description:"Accent color for the active underline",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/TabBar",component:i,tags:["autodocs"],argTypes:{accentColor:{control:"select",options:["primary","brand"]}}},m=["Overview","Analytics","Settings"],n={args:{tabs:m,activeTab:"Overview",onTabChange:()=>{},accentColor:"primary"}},s={args:{tabs:m,activeTab:"Analytics",onTabChange:()=>{},accentColor:"brand"}},o={render:()=>{const[r,t]=C.useState("Overview");return e.jsxs("div",{children:[e.jsx(i,{tabs:m,activeTab:r,onTabChange:t}),e.jsxs("p",{className:"mt-4 text-sm text-gray-cool-600",children:["Active: ",r]})]})}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tabs,
    activeTab: "Overview",
    onTabChange: () => {},
    accentColor: "primary"
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,b,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tabs,
    activeTab: "Analytics",
    onTabChange: () => {},
    accentColor: "brand"
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,y,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState<(typeof tabs)[number]>("Overview");
    return <div>
        <TabBar tabs={tabs} activeTab={active} onTabChange={setActive} />
        <p className="mt-4 text-sm text-gray-cool-600">Active: {active}</p>
      </div>;
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const S=["Primary","BrandAccent","Interactive"];export{s as BrandAccent,o as Interactive,n as Primary,S as __namedExportsOrder,O as default};
