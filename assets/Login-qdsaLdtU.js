import{r as t,j as e}from"./index-C1LtwbyQ.js";import{l as i}from"./auth-DuoA1tct.js";const m=()=>{const[s,o]=t.useState(""),[a,l]=t.useState(""),n=async r=>{r.preventDefault();const d=await i(s,a);alert(d?"Login successful!":"Login failed.")};return e.jsxs("div",{className:"max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded shadow",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Login"}),e.jsxs("form",{onSubmit:n,className:"space-y-4",children:[e.jsx("input",{type:"email",value:s,onChange:r=>o(r.target.value),placeholder:"Email",required:!0,className:"w-full p-2 border border-gray-300 rounded"}),e.jsx("input",{type:"password",value:a,onChange:r=>l(r.target.value),placeholder:"Password",required:!0,className:"w-full p-2 border border-gray-300 rounded"}),e.jsx("button",{type:"submit",className:"w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition",children:"Login"})]})]})};export{m as default};
