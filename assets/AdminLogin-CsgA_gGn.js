import{r as t,u as p,j as e,l as g,b as f}from"./index-ERbocpv0.js";import{a as w}from"./firebase-CCE-f_Ja.js";import{G as b}from"./iconBase-CfP91xP9.js";function y(a){return b({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(a)}const S=()=>{const[a,c]=t.useState(""),[d,m]=t.useState(""),[i,l]=t.useState(""),[r,n]=t.useState(!1),[o,u]=t.useState(!1),x=p(),h=async s=>{s.preventDefault(),n(!0),l("");try{await f(w,a,d),x("/admin-dashboard")}catch{l("Invalid email or password. Please try again."),n(!1)}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 via-white to-gray-100 px-4",children:e.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-xl max-w-md w-full space-y-8 transition-all duration-500 relative",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("img",{src:g,alt:"Red Cross Logo",className:"h-16 mx-auto"}),e.jsx("h2",{className:"mt-6 text-2xl font-bold text-red-600",children:"Admin Login"})]}),i&&e.jsx("p",{className:"text-red-600 text-center mb-4 animate-pulse",children:i}),e.jsxs("form",{onSubmit:h,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",value:a,onChange:s=>c(s.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm",placeholder:"admin@example.com","aria-label":"Enter your email address"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{type:o?"text":"password",id:"password",value:d,onChange:s=>m(s.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm",placeholder:"********","aria-label":"Enter your password"}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500 focus:outline-none",onClick:()=>u(!o),"aria-label":o?"Hide password":"Show password",children:o?"Hide":"Show"})]}),e.jsx("button",{type:"submit",disabled:r,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${r?"bg-red-400 cursor-not-allowed":"bg-red-600 hover:bg-red-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300`,"aria-busy":r,children:r?e.jsx(y,{className:"animate-spin h-5 w-5"}):"Login"})]}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx("a",{href:"#",className:"text-sm text-red-600 hover:text-red-500",children:"Forgot password?"})}),e.jsx("div",{className:"text-center text-gray-500 text-xs mt-6",children:e.jsx("p",{children:"For security purposes, ensure your password is strong."})})]})})};export{S as default};
