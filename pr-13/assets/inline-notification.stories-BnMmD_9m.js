import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as d}from"./utils-DDt1maD9.js";import{C as L,I as _,a as E}from"./info-CetV_P7q.js";import{c as W}from"./createLucideIcon-huI5jBd3.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],P=W("CircleCheck",H),D={warning:{container:"border-warning-100 bg-warning-light",icon:"text-warning",link:"text-warning-700 hover:text-warning-800",Icon:E},info:{container:"border-primary-200 bg-primary-50",icon:"text-primary-600",link:"text-primary-600 hover:text-primary-700",Icon:_},success:{container:"border-success-100 bg-success-50",icon:"text-success",link:"text-success-600 hover:text-success-600",Icon:P},error:{container:"border-error bg-error/5",icon:"text-error",link:"text-error hover:text-error",Icon:L}};function n({variant:S="warning",children:R,link:l,className:V}){const r=D[S],q=r.Icon;return e.jsxs("div",{className:d("flex items-start gap-3 rounded-lg border px-3 py-2",r.container,V),role:"alert",children:[e.jsx(q,{className:d("mt-0.5 h-4 w-4 shrink-0",r.icon)}),e.jsxs("div",{className:"flex flex-1 items-center justify-between gap-4",children:[e.jsx("div",{className:"text-sm text-gray-cool-900",children:R}),l&&e.jsxs("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:d("shrink-0 text-sm font-medium hover:underline",r.link),children:[l.label," →"]})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"InlineNotification",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof variants",elements:[{name:"literal",value:"warning"},{name:"literal",value:"info"},{name:"literal",value:"success"},{name:"literal",value:"error"}]},description:'Visual style. Default "warning".',defaultValue:{value:'"warning"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main message displayed in the banner."},link:{required:!1,tsType:{name:"InlineNotificationLink"},description:"Optional action link shown on the right side."},className:{required:!1,tsType:{name:"string"},description:"Additional classes on the outer container."}}};const F={title:"Components/InlineNotification",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["warning","info","success","error"]}}},a={args:{variant:"warning",children:"High RTT detected (214 ms). This is commonly linked to geographic distance, VPN overhead, or ISP-level issues.",link:{label:"Troubleshoot",href:"#"}}},i={args:{variant:"info",children:"A new version of the call quality engine is available. Review the changelog for details.",link:{label:"Learn more",href:"#"}}},t={args:{variant:"success",children:"All quality metrics are within healthy thresholds. No action needed."}},s={args:{variant:"error",children:"Critical packet loss detected on carrier Deutsche Telekom. Calls may be dropping.",link:{label:"View details",href:"#"}}},o={args:{variant:"warning",children:"This is a notification without an action link."}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(n,{variant:"warning",link:{label:"Troubleshoot",href:"#"},children:"Warning: High RTT detected (214 ms)."}),e.jsx(n,{variant:"info",link:{label:"Learn more",href:"#"},children:"Info: A new version is available."}),e.jsx(n,{variant:"success",children:"Success: All metrics are healthy."}),e.jsx(n,{variant:"error",link:{label:"View details",href:"#"},children:"Error: Critical packet loss detected."})]})};var m,h,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "High RTT detected (214 ms). This is commonly linked to geographic distance, VPN overhead, or ISP-level issues.",
    link: {
      label: "Troubleshoot",
      href: "#"
    }
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,g,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "A new version of the call quality engine is available. Review the changelog for details.",
    link: {
      label: "Learn more",
      href: "#"
    }
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,k,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "All quality metrics are within healthy thresholds. No action needed."
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,b,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "Critical packet loss detected on carrier Deutsche Telekom. Calls may be dropping.",
    link: {
      label: "View details",
      href: "#"
    }
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var I,N,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "This is a notification without an action link."
  }
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,j,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <InlineNotification variant="warning" link={{
      label: "Troubleshoot",
      href: "#"
    }}>
        Warning: High RTT detected (214 ms).
      </InlineNotification>
      <InlineNotification variant="info" link={{
      label: "Learn more",
      href: "#"
    }}>
        Info: A new version is available.
      </InlineNotification>
      <InlineNotification variant="success">
        Success: All metrics are healthy.
      </InlineNotification>
      <InlineNotification variant="error" link={{
      label: "View details",
      href: "#"
    }}>
        Error: Critical packet loss detected.
      </InlineNotification>
    </div>
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const G=["Warning","Info","Success","Error","WithoutLink","AllVariants"];export{c as AllVariants,s as Error,i as Info,t as Success,a as Warning,o as WithoutLink,G as __namedExportsOrder,F as default};
