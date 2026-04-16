import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as p}from"./utils-DDt1maD9.js";import{c as d}from"./createLucideIcon-huI5jBd3.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],g=d("ArrowDownLeft",U);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],b=d("ArrowLeftRight",B);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],f=d("ArrowUpRight",F);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]],m=d("Voicemail",G),w={"inbound-answered":{bg:"bg-[#eef0ff]",iconColor:"text-[#4856e0]",Icon:g},"outbound-answered":{bg:"bg-[#e0fff4]",iconColor:"text-[#17784e]",Icon:f},"inbound-missed":{bg:"bg-[#fef3f2]",iconColor:"text-[#f04438]",Icon:g},"outbound-missed":{bg:"bg-[#fef3f2]",iconColor:"text-[#f04438]",Icon:f},"inbound-voicemail":{bg:"bg-[#fef9e8]",iconColor:"text-[#d4a00a]",Icon:m},"outbound-voicemail":{bg:"bg-[#fef9e8]",iconColor:"text-[#d4a00a]",Icon:m},"internal-answered":{bg:"bg-[#f0f0ff]",iconColor:"text-[#6b5ce7]",Icon:b},"internal-missed":{bg:"bg-[#fef3f2]",iconColor:"text-[#f04438]",Icon:b},"internal-voicemail":{bg:"bg-[#fef9e8]",iconColor:"text-[#d4a00a]",Icon:m}};function l({direction:o,outcome:n,size:u="md"}){const R=`${o}-${n}`,{bg:q,iconColor:D,Icon:O}=w[R]??w["inbound-answered"],E=u==="sm"?"h-7 w-7":"h-9 w-9",H=u==="sm"?"h-3.5 w-3.5":"h-4 w-4";return e.jsx("div",{className:p("flex shrink-0 items-center justify-center rounded-[13px]",E,q),children:e.jsx(O,{className:p(H,D)})})}l.__docgenInfo={description:"",methods:[],displayName:"CallTypeIcon",props:{direction:{required:!0,tsType:{name:"union",raw:'"inbound" | "outbound" | "internal"',elements:[{name:"literal",value:'"inbound"'},{name:"literal",value:'"outbound"'},{name:"literal",value:'"internal"'}]},description:""},outcome:{required:!0,tsType:{name:"union",raw:'"answered" | "missed" | "voicemail"',elements:[{name:"literal",value:'"answered"'},{name:"literal",value:'"missed"'},{name:"literal",value:'"voicemail"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:'Icon container size. Default "md" (36px). "sm" = 28px.',defaultValue:{value:'"md"',computed:!1}}}};const Z={title:"Components/CallTypeIcon",component:l,tags:["autodocs"],argTypes:{direction:{control:"select",options:["inbound","outbound","internal"]},outcome:{control:"select",options:["answered","missed","voicemail"]},size:{control:"select",options:["sm","md"]}}},s={args:{direction:"inbound",outcome:"answered",size:"md"}},r={args:{direction:"outbound",outcome:"answered",size:"md"}},t={args:{direction:"inbound",outcome:"missed",size:"md"}},i={args:{direction:"inbound",outcome:"voicemail",size:"md"}},a={args:{direction:"internal",outcome:"answered",size:"md"}},J=["inbound","outbound","internal"],K=["answered","missed","voicemail"],c={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:J.map(o=>K.map(n=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{direction:o,outcome:n,size:"md"}),e.jsxs("span",{className:"text-xs text-gray-cool-600",children:[o," / ",n]})]},`${o}-${n}`)))})};var x,v,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    direction: "inbound",
    outcome: "answered",
    size: "md"
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,I,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    direction: "outbound",
    outcome: "answered",
    size: "md"
  }
}`,...(z=(I=r.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var C,k,A;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    direction: "inbound",
    outcome: "missed",
    size: "md"
  }
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var N,_,j;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: "inbound",
    outcome: "voicemail",
    size: "md"
  }
}`,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var $,M,T;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    direction: "internal",
    outcome: "answered",
    size: "md"
  }
}`,...(T=(M=a.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var S,V,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {directions.map(dir => outcomes.map(out => <div key={\`\${dir}-\${out}\`} className="flex items-center gap-2">
            <CallTypeIcon direction={dir} outcome={out} size="md" />
            <span className="text-xs text-gray-cool-600">
              {dir} / {out}
            </span>
          </div>))}
    </div>
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const ee=["InboundAnswered","OutboundAnswered","InboundMissed","Voicemail","InternalAnswered","AllCombinations"];export{c as AllCombinations,s as InboundAnswered,t as InboundMissed,a as InternalAnswered,r as OutboundAnswered,i as Voicemail,ee as __namedExportsOrder,Z as default};
