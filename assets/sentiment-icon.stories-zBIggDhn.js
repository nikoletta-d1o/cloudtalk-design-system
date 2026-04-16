import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as r}from"./utils-DDt1maD9.js";import{c as d}from"./createLucideIcon-huI5jBd3.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],T=d("Frown",q);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],p=d("Meh",C);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],A=d("Smile",b),E={sm:"h-4 w-4",md:"h-5 w-5"};function l({sentiment:s,size:M="sm",className:t}){const n=E[M];switch(s){case"positive":return e.jsx(A,{className:r(n,"text-success",t)});case"negative":return e.jsx(T,{className:r(n,"text-error",t)});case"mixed":return e.jsx(p,{className:r(n,"text-warning",t)});default:return e.jsx(p,{className:r(n,"text-gray-cool-400",t)})}}l.__docgenInfo={description:"",methods:[],displayName:"SentimentIcon",props:{sentiment:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"sm = h-4 w-4, md = h-5 w-5",defaultValue:{value:'"sm"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/SentimentIcon",component:l,tags:["autodocs"],argTypes:{sentiment:{control:"select",options:["positive","negative","mixed","neutral"]},size:{control:"select",options:["sm","md"]}}},a={args:{sentiment:"positive",size:"md"}},i={args:{sentiment:"negative",size:"md"}},o={args:{sentiment:"mixed",size:"md"}},c={args:{sentiment:"neutral",size:"md"}},m={render:()=>e.jsx("div",{className:"flex items-center gap-4",children:["positive","negative","mixed","neutral"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(l,{sentiment:s,size:"md"}),e.jsx("span",{className:"text-xs text-gray-cool-500",children:s})]},s))})};var x,y,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    sentiment: "positive",
    size: "md"
  }
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,v,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    sentiment: "negative",
    size: "md"
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var N,z,h;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    sentiment: "mixed",
    size: "md"
  }
}`,...(h=(z=o.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var k,S,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    sentiment: "neutral",
    size: "md"
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var _,w,I;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      {(["positive", "negative", "mixed", "neutral"] as const).map(s => <div key={s} className="flex flex-col items-center gap-1">
          <SentimentIcon sentiment={s} size="md" />
          <span className="text-xs text-gray-cool-500">{s}</span>
        </div>)}
    </div>
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const V=["Positive","Negative","Mixed","Neutral","AllSentiments"];export{m as AllSentiments,o as Mixed,i as Negative,c as Neutral,a as Positive,V as __namedExportsOrder,R as default};
