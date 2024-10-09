import{f as d,j as e,L as t}from"./index-BT2NFm00.js";import{A as l,a as o,b as c}from"./index-DWiXOw7B.js";import{a as m}from"./index-BWqvzL3T.js";import"./iconBase-DtSaPzl4.js";const i={username:"JohnDoe",email:"johndoe@example.com",activities:["Participated in First Aid Training","Joined Blood Donation Drive"],certificates:[{name:"First Aid Training Certificate",link:"#"},{name:"Blood Donation Certificate",link:"#"}],upcomingEvents:[{name:"First Aid Training",date:"2024-10-15"},{name:"Blood Donation Drive",date:"2024-10-22"}],donations:[{amount:20,purpose:"Health Campaign"},{amount:10,purpose:"Emergency Relief Fund"}]},j=()=>{const n=d(),r=s=>n.pathname===s;return e.jsxs("div",{className:"min-h-screen flex bg-gray-100",children:[e.jsxs("aside",{className:"bg-white w-64 shadow-lg",children:[e.jsxs("div",{className:"p-4 border-b flex flex-col items-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:"User Dashboard"}),e.jsx("img",{src:"profile-pic-url.jpg",alt:"Profile",className:"rounded-full w-24 h-24 mt-4"}),e.jsx("p",{className:"mt-2 text-gray-700",children:i.username})]}),e.jsxs("nav",{className:"flex flex-col p-4 space-y-2",children:[e.jsxs(t,{to:"/dashboard",className:`flex items-center p-2 rounded-md transition-colors duration-200 ${r("/dashboard")?"bg-red-100 text-red-600 font-semibold":"text-gray-700 hover:bg-red-100"}`,children:[e.jsx(l,{className:"mr-2"})," Home"]}),e.jsxs(t,{to:"/dashboard/activities",className:`flex items-center p-2 rounded-md transition-colors duration-200 ${r("/dashboard/activities")?"bg-red-100 text-red-600 font-semibold":"text-gray-700 hover:bg-red-100"}`,children:[e.jsx(o,{className:"mr-2"})," Activities"]}),e.jsxs(t,{to:"/dashboard/events",className:`flex items-center p-2 rounded-md transition-colors duration-200 ${r("/dashboard/events")?"bg-red-100 text-red-600 font-semibold":"text-gray-700 hover:bg-red-100"}`,children:[e.jsx(c,{className:"mr-2"})," Events"]}),e.jsxs(t,{to:"/dashboard/donations",className:`flex items-center p-2 rounded-md transition-colors duration-200 ${r("/dashboard/donations")?"bg-red-100 text-red-600 font-semibold":"text-gray-700 hover:bg-red-100"}`,children:[e.jsx(m,{className:"mr-2"})," Donations"]}),e.jsxs(t,{to:"/dashboard/certificates",className:`flex items-center p-2 rounded-md transition-colors duration-200 ${r("/dashboard/certificates")?"bg-red-100 text-red-600 font-semibold":"text-gray-700 hover:bg-red-100"}`,children:[e.jsx(o,{className:"mr-2"})," Certificates"]})]}),e.jsxs("div",{className:"p-4 border-t",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"User Profile"}),e.jsx(t,{to:"/profile",className:"text-gray-700 hover:text-red-600",children:"Profile Settings"}),e.jsx(t,{to:"/logout",className:"text-gray-700 hover:text-red-600",children:"Logout"})]})]}),e.jsxs("div",{className:"flex-grow p-4",children:[e.jsxs("header",{className:"mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Welcome to Your Dashboard"}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",placeholder:"Search...",className:"border rounded-lg p-2 w-full"})})]}),e.jsxs("section",{className:"user-info bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Your Information"}),e.jsxs("p",{children:["Username: ",e.jsx("strong",{children:i.username})]}),e.jsxs("p",{children:["Email: ",e.jsx("strong",{children:i.email})]})]}),e.jsxs("section",{className:"activities bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Your Activities"}),e.jsx("ul",{children:i.activities.map((s,a)=>e.jsx("li",{className:"mb-1",children:s},a))})]}),e.jsxs("section",{className:"certificates bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Your Certificates"}),e.jsx("ul",{children:i.certificates.map((s,a)=>e.jsx("li",{className:"mb-1",children:e.jsx("a",{href:s.link,className:"text-blue-600 hover:underline",children:s.name})},a))})]}),e.jsxs("section",{className:"events bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Upcoming Events"}),e.jsx("ul",{children:i.upcomingEvents.map((s,a)=>e.jsxs("li",{className:"mb-1 flex justify-between items-center",children:[e.jsxs("span",{children:[s.name," on ",e.jsx("strong",{children:s.date})]}),e.jsx("button",{className:"bg-red-600 text-white rounded px-2 py-1 hover:bg-red-500 transition",children:"Register"})]},a))})]}),e.jsxs("section",{className:"donations bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Your Donations"}),e.jsx("ul",{children:i.donations.map((s,a)=>e.jsxs("li",{className:"mb-1",children:["$",s.amount," for ",s.purpose]},a))})]})]})]})};export{j as default};
