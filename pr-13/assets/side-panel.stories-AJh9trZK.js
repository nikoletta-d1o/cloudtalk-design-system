import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-ZH-6pyQh.js";import{a as u}from"./utils-DDt1maD9.js";import{X as k}from"./x-CDsTmnuk.js";import{B as i}from"./button-Y_dUXWx2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-huI5jBd3.js";import"./index-CZtRLH7z.js";import"./chevron-down-fFlMvKyS.js";function l({open:a,onClose:t,width:N="560px",header:j,children:b,footer:c,className:w}){const[S,d]=s.useState(!1),[p,m]=s.useState(!1);return s.useEffect(()=>{if(a)d(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>m(!0))});else{m(!1);const n=setTimeout(()=>d(!1),300);return()=>clearTimeout(n)}},[a]),s.useEffect(()=>{if(!a)return;const n=P=>{P.key==="Escape"&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[a,t]),S?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:u("fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",p?"opacity-100":"opacity-0"),onClick:t}),e.jsxs("div",{style:{width:N},className:u("fixed right-0 top-0 z-50 flex h-full max-w-[calc(100vw-84px)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out",p?"translate-x-0":"translate-x-full",w),children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-gray-cool-200 px-6 py-5",children:[e.jsx("div",{className:"flex items-center gap-3",children:j}),e.jsx("button",{onClick:t,className:"flex h-8 w-8 items-center justify-center rounded-full text-gray-cool-400 hover:bg-gray-cool-100 hover:text-gray-cool-600 transition-colors",children:e.jsx(k,{className:"h-5 w-5"})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:b}),c&&e.jsx("div",{className:"border-t border-gray-cool-200",children:c})]})]}):null}l.__docgenInfo={description:"",methods:[],displayName:"SidePanel",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"string"},description:'Panel width. Default "560px"',defaultValue:{value:'"560px"',computed:!1}},header:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header content (rendered inside the header bar, alongside the close button)"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main scrollable content"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional sticky footer (e.g. a chat input)"},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/SidePanel",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={render:()=>{const[a,t]=s.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Panel"}),e.jsx(l,{open:a,onClose:()=>t(!1),header:e.jsx("h2",{className:"text-lg font-semibold text-gray-cool-900",children:"Panel Title"}),children:e.jsx("div",{className:"p-6",children:e.jsx("p",{className:"text-sm text-gray-cool-600",children:"Panel content goes here."})})})]})}},o={render:()=>{const[a,t]=s.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Panel with Footer"}),e.jsx(l,{open:a,onClose:()=>t(!1),header:e.jsx("h2",{className:"text-lg font-semibold text-gray-cool-900",children:"Details"}),footer:e.jsxs("div",{className:"flex justify-end gap-2 p-4",children:[e.jsx(i,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(i,{children:"Save"})]}),children:e.jsx("div",{className:"p-6",children:e.jsx("p",{className:"text-sm text-gray-cool-600",children:"This panel has a sticky footer with action buttons."})})})]})}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-6">
        <Button onClick={() => setOpen(true)}>Open Panel</Button>
        <SidePanel open={open} onClose={() => setOpen(false)} header={<h2 className="text-lg font-semibold text-gray-cool-900">Panel Title</h2>}>
          <div className="p-6">
            <p className="text-sm text-gray-cool-600">Panel content goes here.</p>
          </div>
        </SidePanel>
      </div>;
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-6">
        <Button onClick={() => setOpen(true)}>Open Panel with Footer</Button>
        <SidePanel open={open} onClose={() => setOpen(false)} header={<h2 className="text-lg font-semibold text-gray-cool-900">Details</h2>} footer={<div className="flex justify-end gap-2 p-4">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button>Save</Button>
            </div>}>
          <div className="p-6">
            <p className="text-sm text-gray-cool-600">
              This panel has a sticky footer with action buttons.
            </p>
          </div>
        </SidePanel>
      </div>;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const A=["Default","WithFooter"];export{r as Default,o as WithFooter,A as __namedExportsOrder,_ as default};
