import React, { useState } from "react";
import { FaBriefcase, FaClipboardList, FaUsers, FaUser, FaShieldAlt, FaCloudUploadAlt, FaCalendarAlt, FaQuestionCircle, FaHandshake, FaBuilding, FaCog, FaPhotoVideo, FaPencilAlt } from "react-icons/fa";
import Card from "../components/Card";
import QuickActions from "../components/QuickActions";
import ModalForm from "../components/ModalForm";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { id: "post-internship", title: "Post Internship", desc: "Create and publish a new internship listing for students.",path: "/admin/internships/create", icon: <FaBriefcase className="text-indigo-600" /> },
    { id: "post-job", title: "Post Job", desc: "Create and publish a new full-time job opening.", icon: <FaClipboardList className="text-green-600" /> },
    { id: "intern-apply", title: "Internship Applications", desc: "View and manage all incoming internship applications.", icon: <FaUsers className="text-blue-600" /> },
    { id: "job-apply", title: "Job Applications", desc: "Review candidates who have applied for your job positions.", icon: <FaUser className="text-emerald-600" /> },
    { id: "manage-verifications", title: "Manage Verifications", desc: "Add and manage employee & intern verification records.", icon: <FaShieldAlt className="text-emerald-600" /> },
    { id: "uploaded-internships", title: "Uploaded Internships", desc: "Manage and review all your existing internship posts.", icon: <FaCloudUploadAlt className="text-purple-600" /> },
    { id: "uploaded-jobs", title: "Uploaded Jobs", desc: "Manage and review all your existing job postings.", icon: <FaCloudUploadAlt className="text-indigo-600" /> },
    { id: "interview", title: "Interview Scheduler", desc: "Schedule and manage interviews with potential candidates.", icon: <FaCalendarAlt className="text-teal-600" /> },
    { id: "user-queries", title: "User Queries", desc: "Read and address customer questions from the contact form.", icon: <FaQuestionCircle className="text-red-500" /> },
    { id: "connection-requests", title: "Connection Requests", desc: "Review and respond to new professional connection requests.", icon: <FaHandshake className="text-yellow-600" /> },
    { id: "manage-clients", title: "Manage Clients", desc: "Add, delete, and reorder client logos and partnerships.", icon: <FaBuilding className="text-slate-700" /> },
    { id: "manage-team", title: "Manage Team", desc: "Add, edit, reorder, or remove team members and their profiles.", icon: <FaCog className="text-cyan-600" /> },
    { id: "slider-ads", title: "Manage Slider Ads", desc: "Upload, reorder, and delete promotional slider advertisements.", icon: <FaPhotoVideo className="text-orange-500" /> },
    { id: "blog-management", title: "Blog Management", desc: "Create, edit, and manage all your blog content and news articles.", icon: <FaPencilAlt className="text-violet-600" /> },
    { id: "manage-users", title: "Manage Users", desc: "Create and manage admin and employee accounts.", icon: <FaUsers className="text-indigo-600" /> }
  ];

  function open(card) {
    setActiveCard(card);
    setOpenModal(true);
  }
  function close() {
    setActiveCard(null);
    setOpenModal(false);
  }

  return (
    <div className="pt-24 px-8 ">
    
      {/* Header */}
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

        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/logout")} className="px-4 py-2 rounded bg-rose-500 text-white shadow">Logout</button>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            desc={c.desc}
            icon={c.icon}
            onClick={() => {
              // keep specific routes as needed
              if (c.id === "blog-management") {
                navigate("/admin/blog");
              } else if (c.id === "manage-users") {
                navigate("/admin/users");
              } else {
                open(c);
              }
            }}
          />
        ))}
      </div>

      {/* Quick actions */}
      <QuickActions />

      {/* Floating chatbot / helper button (bottom-right) */}
      <div className="fixed right-6 bottom-6">
        <button
          onClick={() => alert("Open assistant (demo)")}
          className="w-14 h-14 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center"
          aria-label="Open assistant"
        >
          🤖
        </button>
      </div>

      {/* Modal */}
      <ModalForm isOpen={openModal} close={close} title={activeCard?.title || ""}>
        {/* Example forms per card */}
        {activeCard?.id === "post-job" && (
          <form onSubmit={(e) => { e.preventDefault(); alert("Job posted (demo)"); close(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Job Title</label>
              <input required className="mt-1 block w-full rounded border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input className="mt-1 block w-full rounded border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea className="mt-1 block w-full rounded border px-3 py-2" rows="4" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 rounded bg-sky-600 text-white">Publish</button>
            </div>
          </form>
        )}

        {activeCard?.id === "/admin/post-internship" && (
          <form onSubmit={(e) => { e.preventDefault(); alert("Internship posted (demo)"); close(); }} className="space-y-4">
            <input required placeholder="Internship title" className="w-full rounded border px-3 py-2" />
            <textarea placeholder="Short description" className="w-full rounded border px-3 py-2" rows="4" />
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 rounded bg-sky-600 text-white">Publish</button>
            </div>
          </form>
        )}

        {!activeCard?.id && <div>Select an action or close the modal.</div>}
      </ModalForm>
    </div>
  );
}
