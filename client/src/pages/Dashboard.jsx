
// import React from "react";
// import CardBox from "../components/CardBox";
// import {
//   FaPlus,
//   FaBriefcase,
//   FaUserFriends,
//   FaUserEdit,
//   FaBlogger,
//   FaUserShield,
//   FaImage,
//   FaEnvelope,
// } from "react-icons/fa";

// export default function Dashboard() {
//   return (
//     <div className="px-2 sm:px-4 lg:px-0">
//       {/* heading like original */}
//       <h1 className="text-3xl font-black mb-1 text-blue-700 flex items-center gap-2">
//         <span className="text-2xl">🏠</span> Admin Dashboard
//       </h1>
//       <p className="text-gray-600 mb-6">
//         Welcome back, <span className="font-semibold">Super Admin!</span>
//       </p>

//       {/* cards grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <CardBox
//           icon={<FaPlus />}
//           title="Post Internship"
//           desc="Create new internship listings."
//           link="/post-internship"
//         />
//         <CardBox
//           icon={<FaBriefcase />}
//           title="Post Job"
//           desc="Publish full-time job openings."
//           link="/post-job"
//         />
//         <CardBox
//           icon={<FaUserFriends />}
//           title="Internship Applications"
//           desc="View incoming internship applications."
//           link="/internship-applications"
//         />
//         <CardBox
//           icon={<FaUserFriends />}
//           title="Job Applications"
//           desc="Review job applicants."
//           link="/job-applications"
//         />
//         <CardBox
//           icon={<FaImage />}
//           title="Manage Slider Ads"
//           desc="Upload & manage homepage sliders."
//           link="/manage-slider-ads"
//         />
//         <CardBox
//           icon={<FaBlogger />}
//           title="Blog Management"
//           desc="Create and manage blog posts."
//           link="/admin/blog/list"
//         />
//         <CardBox
//           icon={<FaEnvelope />}
//           title="User Queries"
//           desc="Handle contact form messages."
//           link="/user-queries"
//         />
//         <CardBox
//           icon={<FaUserEdit />}
//           title="Manage Users"
//           desc="Admin & employee accounts."
//           link="/manage-users"
//         />
//       </div>

//       {/* you can add QuickActions component below to match screenshot */}
//       {/* <QuickActions /> */}
//     </div>
//   );
// }
import React from "react";
import {
  FaBriefcase,
  FaClipboardList,
  FaUsers,
  FaUser,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaCalendarAlt,
  FaQuestionCircle,
  FaHandshake,
  FaBuilding,
  FaCog,
  FaPhotoVideo,
  FaPencilAlt,
} from "react-icons/fa";
import Card from "../components/Card";
import QuickActions from "../components/QuickActions";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    { id: "post-internship", title: "Post Internship", desc: "Create and publish a new internship listing for students.", path: "/admin/post-internship", icon: <FaBriefcase className="text-indigo-600" /> },

    { id: "post-job", title: "Post Job", desc: "Create and publish a new full-time job opening.", path: "/admin/post-job", icon: <FaClipboardList className="text-green-600" /> },

    { id: "internship-app", title: "Internship Applications", desc: "View and manage all incoming internship applications.", path: "/admin/internship-applications", icon: <FaUsers className="text-blue-600" /> },

    { id: "job-app", title: "Job Applications", desc: "Review candidates who have applied for job positions.", path: "/admin/job-applications", icon: <FaUser className="text-emerald-600" /> },

    { id: "manage-verifications", title: "Manage Verifications", desc: "Add and manage employee & intern verification records.", path: "/admin/manage-verifications", icon: <FaShieldAlt className="text-emerald-600" /> },

    { id: "uploaded-internships", title: "Uploaded Internships", desc: "Manage and review existing internship posts.", path: "/admin/uploaded-internships", icon: <FaCloudUploadAlt className="text-purple-600" /> },

    { id: "uploaded-jobs", title: "Uploaded Jobs", desc: "Manage and review existing job posts.", path: "/admin/uploaded-jobs", icon: <FaCloudUploadAlt className="text-indigo-600" /> },

    { id: "interview", title: "Interview Scheduler", desc: "Schedule and manage interviews.", path: "/admin/interview-scheduler", icon: <FaCalendarAlt className="text-teal-600" /> },

    { id: "user-queries", title: "User Queries", desc: "Read and address customer questions.", path: "/admin/user-queries", icon: <FaQuestionCircle className="text-red-500" /> },

    { id: "connection-requests", title: "Connection Requests", desc: "Review professional connection requests.", path: "/admin/connection-requests", icon: <FaHandshake className="text-yellow-600" /> },

    { id: "manage-clients", title: "Manage Clients", desc: "Add, delete, reorder client logos.", path: "/admin/manage-clients", icon: <FaBuilding className="text-slate-700" /> },

    { id: "manage-team", title: "Manage Team", desc: "Add, edit, reorder team members.", path: "/admin/manage-team", icon: <FaCog className="text-cyan-600" /> },

    { id: "slider-ads", title: "Manage Slider Ads", desc: "Upload and manage promotional sliders.", path: "/admin/manage-slider-ads", icon: <FaPhotoVideo className="text-orange-500" /> },

    { id: "blog-management", title: "Blog Management", desc: "Create and manage news articles.", path: "/admin/blog/list", icon: <FaPencilAlt className="text-violet-600" /> },

    { id: "manage-users", title: "Manage Users", desc: "Create and manage admin accounts.", path: "/admin/manage-users", icon: <FaUsers className="text-indigo-600" /> }
  ];
  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
  navigate("/login");
};

  return (
    
    <div className="pt-24 px-8">

      {/* TOP HEADER */}
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-sky-700 flex items-center gap-3">
            <span className="text-3xl">🏠</span> Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-1">
            Welcome back, <span className="font-semibold">Super Admin</span>! Manage your InternHub platform from here.
          </p>

          <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
            <span>admin@internhub.com</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs">Admin</span>
          </div>
        </div>

       <button
  onClick={handleLogout}
  className="px-4 py-2 rounded-lg bg-rose-500 text-white shadow hover:bg-rose-600"
>
  Logout
</button>

      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            desc={c.desc}
            icon={c.icon}
            onClick={() => navigate(c.path)}
          />
        ))}
      </div>

      <QuickActions />

      {/* FLOATING BOT BUTTON */}
      <div className="fixed right-6 bottom-6">
        <button className="w-14 h-14 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center text-xl">
          🤖
        </button>
      </div>
    </div>
  );
}
