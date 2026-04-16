import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as u}from"./utils-DDt1maD9.js";function m({padding:s="default",className:i,children:p,...x}){return e.jsx("div",{className:u("rounded-[8px] border border-gray-cool-200 bg-white shadow-card",s==="default"&&"p-5",s==="flush"&&"overflow-hidden",i),...x,children:p})}m.__docgenInfo={description:"",methods:[],displayName:"Card",props:{padding:{required:!1,tsType:{name:"union",raw:'"default" | "flush"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"flush"'}]},description:'"default" adds p-5 padding, "flush" has no padding + overflow-hidden (for tables)',defaultValue:{value:'"default"',computed:!1}}}};const f={title:"Components/Card",component:m,tags:["autodocs"],argTypes:{padding:{control:"select",options:["default","flush"]}}},t={args:{padding:"default",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-cool-900",children:"Card Title"}),e.jsx("p",{className:"mt-1 text-sm text-gray-cool-500",children:"This is a default card with padding."})]})}},a={args:{padding:"flush",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-cool-200 bg-gray-cool-50",children:[e.jsx("th",{className:"px-4 py-2 text-left font-medium text-gray-cool-600",children:"Name"}),e.jsx("th",{className:"px-4 py-2 text-left font-medium text-gray-cool-600",children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-cool-100",children:[e.jsx("td",{className:"px-4 py-2 text-gray-cool-800",children:"Item 1"}),e.jsx("td",{className:"px-4 py-2 text-gray-cool-500",children:"Active"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-gray-cool-800",children:"Item 2"}),e.jsx("td",{className:"px-4 py-2 text-gray-cool-500",children:"Inactive"})]})]})]})}};var r,l,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    padding: "default",
    children: <div>
        <h3 className="text-sm font-medium text-gray-cool-900">Card Title</h3>
        <p className="mt-1 text-sm text-gray-cool-500">
          This is a default card with padding.
        </p>
      </div>
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    padding: "flush",
    children: <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-cool-200 bg-gray-cool-50">
            <th className="px-4 py-2 text-left font-medium text-gray-cool-600">Name</th>
            <th className="px-4 py-2 text-left font-medium text-gray-cool-600">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-cool-100">
            <td className="px-4 py-2 text-gray-cool-800">Item 1</td>
            <td className="px-4 py-2 text-gray-cool-500">Active</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-cool-800">Item 2</td>
            <td className="px-4 py-2 text-gray-cool-500">Inactive</td>
          </tr>
        </tbody>
      </table>
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const y=["Default","Flush"];export{t as Default,a as Flush,y as __namedExportsOrder,f as default};
