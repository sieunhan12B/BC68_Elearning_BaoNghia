// import React from "react";
// import { Link } from "react-router-dom";
// // import IconLogoHeader from "../Icon/IconLogoHeader";
// import { pathDefault } from "../../common/path";
// // import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";
// // import "./header.scss";
// import LinkCustom from "../LinkCustom/LinkCustom";
// import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
// const items = [
//   {
//     key: "1",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         2nd menu item (disabled)
//       </a>
//     ),
//     // icon: <SmileOutlined />,
//     disabled: true,
//   },
//   {
//     key: "3",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         3rd menu item (disabled)
//       </a>
//     ),
//     disabled: true,
//   },
//   {
//     key: "4",
//     danger: true,
//     label: "a danger item",
//   },
// ];

// const Header = () => {
//   return (
//     <>
//       <header>
//         <div className="container">
//           <nav className="">
//             <div className="">
//               <div className="relative flex h-16 items-center justify-between ">
//                 <div className="absolute inset-y-0 left-0 flex items-center xl:hidden ">
//                   {/* Mobile menu button*/}
//                   <button
//                     onClick={() => {
//                       let element =
//                         document.getElementById("mobile-menu").classList;
//                       if (element.contains("hidden")) {
//                         element.add("block");
//                         element.remove("hidden");
//                       } else {
//                         element.add("hidden");
//                         element.remove("block");
//                       }
//                     }}
//                     type="button"
//                     className="relative  inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                     aria-controls="mobile-menu"
//                     aria-expanded="false"
//                   >
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Open main menu</span>
//                     {/*
//       Icon when menu is closed.

//       Menu open: "hidden", Menu closed: "block"
//     */}
//                     <svg
//                       className="block h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                       />
//                     </svg>
//                     {/*
//       Icon when menu is open.

//       Menu open: "block", Menu closed: "hidden"
//     */}
//                     <svg
//                       className="hidden h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="flex flex-1 items-center justify-around sm:items-stretch  ">
//                   <div className="flex flex-shrink-0 items-center max-md:justify-end space-x-4   w-96">
//                     <Link to={pathDefault.homePage}>
//                       {/* <IconLogoHeader /> */}
//                       <img src="./public/logo.png" alt="" />
//                     </Link>
//                     <FormSearchProduct subClassName="lg:w-96" />
//                   </div>
//                   <div className="flex gap-10 items-center justify-center  sm:ml-6 ">
//                     <div className="max-xl:hidden  flex items-center space-x-6">
//                       {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//                       <Dropdown
//                         menu={{
//                           items,
//                         }}
//                         arrow={true}
//                         trigger={["click"]}
//                         className="cursor-pointer py-3 px-4 hover:bg-gray-100 duration-300 rounded-md"
//                         aria-current="page"
//                       >
//                         <a onClick={(e) => e.preventDefault()}>
//                           <Space>
//                             Hover me
//                             {/* <DownOutlined /> */}
//                           </Space>
//                         </a>
//                       </Dropdown>
//                       <button>English</button>
//                       <a href="#"> a Seller</a>
//                     </div>
//                     <div className="max-sm:hidden">
//                       <LinkCustom
//                         content={"Đăng nhập"}
//                         to={pathDefault.login}
//                         className={"border border-green-600 text-green-600"}
//                       />
//                       <LinkCustom
//                         content={"Đăng ký"}
//                         to={pathDefault.register}
//                         className={"bg-green-600 text-white"}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Mobile menu, show/hide based on menu state. */}
//             <div className="hidden" id="mobile-menu">
//               <div className="space-y-1 px-2 pb-3 pt-2">
//                 {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//                 <Dropdown
//                   menu={{
//                     items,
//                   }}
//                   arrow={true}
//                   trigger={["click"]}
//                   className="cursor-pointer py-3 px-3 hover:bg-gray-100 duration-300 r text-base font-medium "
//                   aria-current="page"
//                 >
//                   <a onClick={(e) => e.preventDefault()}>
//                     <Space>
//                       Hover me
//                       <DownOutlined />
//                     </Space>
//                   </a>
//                 </Dropdown>
//                 <button className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100  ">
//                   English
//                 </button>
//                 <Link
//                   className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
//                   href="#"
//                 >
//                    a Seller
//                 </Link>
//                 <div>
//                   <LinkCustom
//                     content={"Đăng nhập"}
//                     to={pathDefault.login}
//                     className={
//                       "border border-green-600 text-green-600 block w-1/6 rounded-md px-3 py-2 text-base font-medium hover:bg-green-600 mb-2 hover:text-white "
//                     }
//                   />
//                   <LinkCustom
//                     content={"Đăng ký"}
//                     to={pathDefault.register}
//                     className={
//                       "bg-green-600 text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-white border hover:border-green-600 w-1/6 hover:text-green-600"
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;



import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
     
      <img className='md:max-lg:flex' src="./public/header_1.jpeg" alt="" />
      
    </div>
  )
}

export default Header