import{j as e}from"./index-DDIDTibN.js";const n={username:"JohnDoe",email:"johndoe@example.com",activities:["Participated in First Aid Training","Joined Blood Donation Drive"],certificates:[{name:"First Aid Training Certificate",link:"#"},{name:"Blood Donation Certificate",link:"#"}],upcomingEvents:[{name:"First Aid Training",date:"2024-10-15"},{name:"Blood Donation Drive",date:"2024-10-22"}],donations:[{amount:20,purpose:"Health Campaign"},{amount:10,purpose:"Emergency Relief Fund"}]},l=()=>e.jsxs("div",{className:"p-8 bg-gray-100 min-h-screen",children:[e.jsxs("header",{className:"mb-6",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"User Dashboard"}),e.jsx("nav",{children:e.jsxs("ul",{className:"flex space-x-4",children:[e.jsx("li",{children:e.jsx("a",{href:"/profile",className:"text-blue-600 hover:underline",children:"Profile"})}),e.jsx("li",{children:e.jsx("a",{href:"/events",className:"text-blue-600 hover:underline",children:"Events"})}),e.jsx("li",{children:e.jsx("a",{href:"/donations",className:"text-blue-600 hover:underline",children:"Donations"})}),e.jsx("li",{children:e.jsx("a",{href:"/certificates",className:"text-blue-600 hover:underline",children:"Certificates"})})]})})]}),e.jsxs("section",{className:"user-info bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Your Information"}),e.jsxs("p",{children:["Username: ",e.jsx("strong",{children:n.username})]}),e.jsxs("p",{children:["Email: ",e.jsx("strong",{children:n.email})]})]}),e.jsxs("section",{className:"activities bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Your Activities"}),e.jsx("ul",{children:n.activities.map((s,i)=>e.jsx("li",{className:"mb-1",children:s},i))})]}),e.jsxs("section",{className:"certificates bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Your Certificates"}),e.jsx("ul",{children:n.certificates.map((s,i)=>e.jsx("li",{className:"mb-1",children:e.jsx("a",{href:s.link,className:"text-blue-600 hover:underline",children:s.name})},i))})]}),e.jsxs("section",{className:"events bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Upcoming Events"}),e.jsx("ul",{children:n.upcomingEvents.map((s,i)=>e.jsxs("li",{className:"mb-1 flex justify-between items-center",children:[e.jsxs("span",{children:[s.name," on ",e.jsx("strong",{children:s.date})]}),e.jsx("button",{className:"bg-red-600 text-white rounded px-2 py-1 hover:bg-red-500 transition",children:"Register"})]},i))})]}),e.jsxs("section",{className:"donations bg-white shadow-md rounded-lg p-4 mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Your Donations"}),e.jsx("ul",{children:n.donations.map((s,i)=>e.jsxs("li",{className:"mb-1",children:["$",s.amount," for ",s.purpose]},i))})]})]});export{l as default};
