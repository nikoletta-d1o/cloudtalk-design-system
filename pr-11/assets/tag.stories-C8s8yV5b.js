import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as le}from"./index-D1SQP9Z-.js";import{c as u}from"./utils-BQHNewu7.js";import{c as oe}from"./createLucideIcon-huI5jBd3.js";import{X as ie}from"./x-CDsTmnuk.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],te=oe("Sparkles",ce),de=le("inline-flex items-center font-medium rounded-full text-gray-cool-800 border-2 border-transparent",{variants:{size:{sm:"px-1.5 py-0.5 text-xs gap-1",md:"px-2 py-1 text-xs gap-1.5",lg:"px-3 py-2 text-sm gap-1.5"},color:{grey:"bg-tag-grey",blue:"bg-tag-blue",cyan:"bg-tag-cyan",green:"bg-tag-green",indigo:"bg-tag-indigo",brown:"bg-tag-brown",yellow:"bg-tag-yellow",pink:"bg-tag-pink"},selected:{true:"border-gray-cool-800",false:""}},defaultVariants:{size:"md",color:"grey",selected:!1}});function s({size:a,color:h,selected:f,aiAssigned:$,onRemove:v,className:ee,children:se,...ae}){const re=a==="sm"?"h-3 w-3":"h-4 w-4";return e.jsxs("span",{className:u(de({size:a,color:h,selected:f}),ee),...ae,children:[$&&e.jsx(te,{className:u(re,"text-gray-cool-500 shrink-0")}),se,v&&e.jsx("button",{type:"button",onClick:ne=>{ne.stopPropagation(),v()},className:"inline-flex items-center text-gray-cool-800 opacity-60 hover:opacity-100",children:e.jsx(ie,{className:u("h-3 w-3","shrink-0")})})]})}function r({className:a,children:h,...f}){return e.jsx("div",{className:u("flex flex-wrap gap-1.5",a),...f,children:h})}s.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{aiAssigned:{required:!1,tsType:{name:"boolean"},description:"When true, renders a sparkle icon indicating the tag was AI-assigned"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the remove button is clicked (renders the tag as removable)"}},composes:["Omit","VariantProps"]};r.__docgenInfo={description:"",methods:[],displayName:"TagGroup"};const ve={title:"Components/Tag",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["grey","blue","cyan","green","indigo","brown","yellow","pink"]},selected:{control:"boolean"},aiAssigned:{control:"boolean"}}},n={args:{children:"Tag",size:"md",color:"grey"}},l={args:{children:"Salesforce",size:"md",color:"grey",aiAssigned:!0}},o={args:{children:"Tag",size:"md",color:"grey",onRemove:()=>alert("Remove clicked")}},i={args:{children:"Tag",size:"md",color:"grey",selected:!0}},T=["grey","blue","cyan","green","indigo","brown","yellow","pink"],c={name:"All Colors",render:()=>e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:T.map(a=>e.jsx(s,{color:a,children:a},a))})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{size:"md",children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})},d={name:"All Sizes (AI Assigned)",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"sm",aiAssigned:!0,children:"Small AI"}),e.jsx(s,{size:"md",aiAssigned:!0,children:"Medium AI"}),e.jsx(s,{size:"lg",aiAssigned:!0,children:"Large AI"})]})},g={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"Default"}),e.jsx("div",{className:"flex items-center gap-2",children:T.map(a=>e.jsx(s,{size:"lg",color:a,children:a},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"Removable"}),e.jsx("div",{className:"flex items-center gap-2",children:T.map(a=>e.jsx(s,{size:"lg",color:a,onRemove:()=>{},children:a},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"Selected"}),e.jsx("div",{className:"flex items-center gap-2",children:T.map(a=>e.jsx(s,{size:"lg",color:a,selected:!0,children:a},a))})]})]})},m={name:"Size × State Matrix",render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:["sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:["Size: ",a]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:a,color:"blue",children:"Default"}),e.jsx(s,{size:a,color:"blue",aiAssigned:!0,children:"AI Tag"}),e.jsx(s,{size:a,color:"blue",onRemove:()=>{},children:"Removable"}),e.jsx(s,{size:a,color:"blue",selected:!0,children:"Selected"}),e.jsx(s,{size:a,color:"blue",selected:!0,aiAssigned:!0,children:"Selected AI"})]})]},a))})},p={name:"Tag Group",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"Large Group"}),e.jsxs(r,{children:[e.jsx(s,{size:"lg",children:"Interested"}),e.jsx(s,{size:"lg",aiAssigned:!0,children:"Salesforce"}),e.jsx(s,{size:"lg",children:"Campaigns"}),e.jsx(s,{size:"lg",aiAssigned:!0,children:"Campaigns"}),e.jsx(s,{size:"lg",children:"French"}),e.jsx(s,{size:"lg",aiAssigned:!0,children:"Corporation"}),e.jsx(s,{size:"lg",children:"Demo"}),e.jsx(s,{size:"lg",children:"Positive"}),e.jsx(s,{size:"lg",children:"Lead"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"Medium Group"}),e.jsxs(r,{children:[e.jsx(s,{children:"Interested"}),e.jsx(s,{aiAssigned:!0,children:"Salesforce"}),e.jsx(s,{children:"Campaigns"}),e.jsx(s,{children:"French"}),e.jsx(s,{children:"Demo"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-gray-cool-500",children:"Small Group"}),e.jsxs(r,{children:[e.jsx(s,{size:"sm",children:"Interested"}),e.jsx(s,{size:"sm",aiAssigned:!0,children:"Salesforce"}),e.jsx(s,{size:"sm",children:"Campaigns"}),e.jsx(s,{size:"sm",children:"French"})]})]})]})},x={name:"Mixed Color Group",render:()=>e.jsxs(r,{children:[e.jsx(s,{color:"blue",children:"Sales"}),e.jsx(s,{color:"green",aiAssigned:!0,children:"Qualified"}),e.jsx(s,{color:"pink",children:"VIP"}),e.jsx(s,{color:"yellow",children:"Pending"}),e.jsx(s,{color:"indigo",children:"Enterprise"}),e.jsx(s,{color:"cyan",children:"Support"}),e.jsx(s,{color:"brown",children:"Escalated"}),e.jsx(s,{color:"grey",children:"Other"})]})};var j,z,A;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Tag",
    size: "md",
    color: "grey"
  }
}`,...(A=(z=n.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var y,S,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Salesforce",
    size: "md",
    color: "grey",
    aiAssigned: true
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var N,G,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Tag",
    size: "md",
    color: "grey",
    onRemove: () => alert("Remove clicked")
  }
}`,...(k=(G=o.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var C,I,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Tag",
    size: "md",
    color: "grey",
    selected: true
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var R,L,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "All Colors",
  render: () => <div className="flex flex-wrap items-center gap-2">
      {TAG_COLORS.map(color => <Tag key={color} color={color}>
          {color}
        </Tag>)}
    </div>
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,_,D;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
}`,...(D=(_=t.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,E,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "All Sizes (AI Assigned)",
  render: () => <div className="flex items-center gap-2">
      <Tag size="sm" aiAssigned>
        Small AI
      </Tag>
      <Tag size="md" aiAssigned>
        Medium AI
      </Tag>
      <Tag size="lg" aiAssigned>
        Large AI
      </Tag>
    </div>
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,q,Q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">Default</p>
        <div className="flex items-center gap-2">
          {TAG_COLORS.map(color => <Tag key={color} size="lg" color={color}>
              {color}
            </Tag>)}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Removable
        </p>
        <div className="flex items-center gap-2">
          {TAG_COLORS.map(color => <Tag key={color} size="lg" color={color} onRemove={() => {}}>
              {color}
            </Tag>)}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">Selected</p>
        <div className="flex items-center gap-2">
          {TAG_COLORS.map(color => <Tag key={color} size="lg" color={color} selected>
              {color}
            </Tag>)}
        </div>
      </div>
    </div>
}`,...(Q=(q=g.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var H,W,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Size × State Matrix",
  render: () => <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map(size => <div key={size}>
          <p className="mb-2 text-sm font-medium text-gray-cool-500">
            Size: {size}
          </p>
          <div className="flex items-center gap-3">
            <Tag size={size} color="blue">
              Default
            </Tag>
            <Tag size={size} color="blue" aiAssigned>
              AI Tag
            </Tag>
            <Tag size={size} color="blue" onRemove={() => {}}>
              Removable
            </Tag>
            <Tag size={size} color="blue" selected>
              Selected
            </Tag>
            <Tag size={size} color="blue" selected aiAssigned>
              Selected AI
            </Tag>
          </div>
        </div>)}
    </div>
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var B,J,K;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Tag Group",
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Large Group
        </p>
        <TagGroup>
          <Tag size="lg">Interested</Tag>
          <Tag size="lg" aiAssigned>
            Salesforce
          </Tag>
          <Tag size="lg">Campaigns</Tag>
          <Tag size="lg" aiAssigned>
            Campaigns
          </Tag>
          <Tag size="lg">French</Tag>
          <Tag size="lg" aiAssigned>
            Corporation
          </Tag>
          <Tag size="lg">Demo</Tag>
          <Tag size="lg">Positive</Tag>
          <Tag size="lg">Lead</Tag>
        </TagGroup>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Medium Group
        </p>
        <TagGroup>
          <Tag>Interested</Tag>
          <Tag aiAssigned>Salesforce</Tag>
          <Tag>Campaigns</Tag>
          <Tag>French</Tag>
          <Tag>Demo</Tag>
        </TagGroup>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Small Group
        </p>
        <TagGroup>
          <Tag size="sm">Interested</Tag>
          <Tag size="sm" aiAssigned>
            Salesforce
          </Tag>
          <Tag size="sm">Campaigns</Tag>
          <Tag size="sm">French</Tag>
        </TagGroup>
      </div>
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,Y,Z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Mixed Color Group",
  render: () => <TagGroup>
      <Tag color="blue">Sales</Tag>
      <Tag color="green" aiAssigned>
        Qualified
      </Tag>
      <Tag color="pink">VIP</Tag>
      <Tag color="yellow">Pending</Tag>
      <Tag color="indigo">Enterprise</Tag>
      <Tag color="cyan">Support</Tag>
      <Tag color="brown">Escalated</Tag>
      <Tag color="grey">Other</Tag>
    </TagGroup>
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const je=["Default","AiAssigned","Removable","Selected","AllColors","AllSizes","AllSizesAi","AllStates","AllSizesAllStates","TagGroupStory","MixedColorGroup"];export{l as AiAssigned,c as AllColors,t as AllSizes,d as AllSizesAi,m as AllSizesAllStates,g as AllStates,n as Default,x as MixedColorGroup,o as Removable,i as Selected,p as TagGroupStory,je as __namedExportsOrder,ve as default};
