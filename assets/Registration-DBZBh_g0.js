import{g as $,e as F,f as R,h as q,r,j as e}from"./index-DR2q9T4n.js";import{d as A}from"./firebase-_f8pvppO.js";import{j as U,k as W,l as I,m as L}from"./index-BU46MDr6.js";import"./iconBase-Ce0PE0NQ.js";const V=async(o,h,n,f)=>{const l=$();try{const i=(await F(l,o,h)).user;return await R(q(A,"users",i.uid),{username:n,email:o,phone:f}),{success:!0,message:"User registered successfully"}}catch(c){return{success:!1,message:c.message}}},Z=()=>{const[o,h]=r.useState(""),[n,f]=r.useState(""),[l,c]=r.useState(""),[i,y]=r.useState(""),[p,w]=r.useState(""),[u,j]=r.useState(!1),[m,g]=r.useState(""),[t,a]=r.useState(!1),[b,d]=r.useState(null),[N,v]=r.useState(!1),S=()=>j(!u),C=s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).toLowerCase()),P=s=>/^[0-9]{10,15}$/.test(s),E=s=>{y(s),s.length<6?g("Weak"):s.length>=6&&/\d/.test(s)&&/[A-Z]/.test(s)&&/[@$!%*?&#]/.test(s)?g("Strong"):s.length>=6&&/\d/.test(s)?g("Moderate"):g("Weak")},k=async s=>{if(s.preventDefault(),a(!0),d(null),!C(l)){d("Invalid email address"),a(!1);return}if(!P(n)){d("Invalid phone number. It should be between 10 and 15 digits."),a(!1);return}if(i!==p){d("Passwords do not match"),a(!1);return}const x=await V(l,i,o,n);x.success?(v(!0),a(!1),setTimeout(()=>{window.location.href="/login"},2e3)):(d(x.message||"Registration failed."),a(!1))};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 via-gray-300 to-gray-400",children:e.jsxs("div",{className:"bg-white p-10 rounded-lg shadow-xl w-full max-w-md",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-black",children:"Create Your Account"}),b&&e.jsxs("div",{className:"text-red-600 bg-red-100 p-3 rounded mb-4 flex items-center transition-all duration-300 ease-in-out",children:[e.jsx(U,{className:"mr-2"})," ",b]}),N&&e.jsxs("div",{className:"text-green-600 bg-green-100 p-3 rounded mb-4 flex items-center transition-all duration-300 ease-in-out",children:[e.jsx(W,{className:"mr-2"})," Registration successful! Redirecting to login..."]}),e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"username",className:"block mb-2 text-sm font-medium text-gray-600",children:"Username"}),e.jsx("input",{id:"username",type:"text",value:o,onChange:s=>h(s.target.value),placeholder:"Enter your username",required:!0,disabled:t,className:`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${t?"opacity-50":""}`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"phone",className:"block mb-2 text-sm font-medium text-gray-600",children:"Phone"}),e.jsx("input",{id:"phone",type:"tel",value:n,onChange:s=>f(s.target.value),placeholder:"Enter your phone number",required:!0,disabled:t,className:`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${t?"opacity-50":""}`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-600",children:"Email"}),e.jsx("input",{id:"email",type:"email",value:l,onChange:s=>c(s.target.value),placeholder:"Enter your email",required:!0,disabled:t,className:`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${t?"opacity-50":""}`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-600",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"password",type:u?"text":"password",value:i,onChange:s=>E(s.target.value),placeholder:"Enter your password",required:!0,disabled:t,className:`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${t?"opacity-50":""}`}),e.jsx("button",{type:"button",onClick:S,className:"absolute right-2 top-2 text-gray-500",children:u?e.jsx(I,{}):e.jsx(L,{})})]}),e.jsx("p",{className:`mt-1 text-sm ${m==="Weak"?"text-red-500":m==="Moderate"?"text-yellow-500":"text-green-500"}`,children:m&&`Password Strength: ${m}`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"confirm-password",className:"block mb-2 text-sm font-medium text-gray-600",children:"Confirm Password"}),e.jsx("input",{id:"confirm-password",type:u?"text":"password",value:p,onChange:s=>w(s.target.value),placeholder:"Confirm your password",required:!0,disabled:t,className:`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${t?"opacity-50":""}`})]}),e.jsx("button",{type:"submit",disabled:t,className:`w-full bg-red-600 text-white py-3 rounded-lg font-semibold transition duration-300 ${t?"opacity-50 cursor-not-allowed":"hover:bg-red-700 hover:scale-105"}`,children:t?"Registering...":"Register"})]}),e.jsxs("p",{className:"mt-4 text-center text-sm text-gray-500",children:["Already have an account? ",e.jsx("a",{href:"/login",className:"text-red-600 underline",children:"Log in"})]})]})})};export{Z as default};
