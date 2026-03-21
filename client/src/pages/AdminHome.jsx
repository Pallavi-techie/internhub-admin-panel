import React from "react";
import CardBox from "../components/CardBox";
import QuickActions from "../components/QuickActions";
import {
  FaPlus,
  FaBriefcase,
  FaClipboardList,
  FaClipboardCheck,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaCalendarAlt,
  FaQuestionCircle,
  FaUserFriends,
  FaBuilding,
  FaUsers,
  FaImages,
  FaBloggerB,
  FaUserCog
} from "react-icons/fa";

export default function AdminHome() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-black text-blue-700 flex items-center gap-2">
          <span className="text-3xl">🏠</span> Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back, <strong>Super Admin!</strong> Manage your InternHub
          platform from here.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          admin@internhub.com{" "}
          <span className="ml-2 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-[10px]">
            Admin
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardBox icon={<FaPlus />} title="Post Internship" desc="Create and publish a new internship listing." link="/admin/post-internship" />
        <CardBox icon={<FaBriefcase />} title="Post Job" desc="Create and publish a new full-time job opening." link="/admin/post-job" />
        <CardBox icon={<FaClipboardList />} title="Internship Applications" desc="View and manage all incoming internship applications." link="/admin/internship-applications" />
        <CardBox icon={<FaClipboardCheck />} title="Job Applications" desc="Review candidates who applied for jobs." link="/admin/job-applications" />
        <CardBox icon={<FaShieldAlt />} title="Manage Verifications" desc="Add and manage employee & intern verification records." link="/admin/manage-verifications" />
        <CardBox icon={<FaCloudUploadAlt />} title="Uploaded Internships" desc="Manage and review your internship posts." link="/admin/uploaded-internships" />
        <CardBox icon={<FaCloudUploadAlt />} title="Uploaded Jobs" desc="Manage and review your job postings." link="/admin/uploaded-jobs" />
        <CardBox icon={<FaCalendarAlt />} title="Interview Scheduler" desc="Schedule and manage interviews." link="/admin/interview-scheduler" />
        <CardBox icon={<FaQuestionCircle />} title="User Queries" desc="Handle customer questions." link="/admin/user-queries" />
        <CardBox icon={<FaUserFriends />} title="Connection Requests" desc="Review and respond to connection requests." link="/admin/connection-requests" />
        <CardBox icon={<FaBuilding />} title="Manage Clients" desc="Add, delete, and reorder client logos." link="/admin/manage-clients" />
        <CardBox icon={<FaUsers />} title="Manage Team" desc="Add or remove team members." link="/admin/manage-team" />
        <CardBox icon={<FaImages />} title="Manage Slider Ads" desc="Upload & manage homepage sliders." link="/admin/manage-slider-ads" />
        <CardBox icon={<FaBloggerB />} title="Blog Management" desc="Create & manage blog posts." link="/admin/blog/list" />
        <CardBox icon={<FaUserCog />} title="Manage Users" desc="Manage admin & employee accounts." link="/admin/manage-users" />
      </div>

      <QuickActions />
    </div>
  );
}

