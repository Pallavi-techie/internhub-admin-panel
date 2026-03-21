import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Internship Management Platform",
    description:
      "A full-stack platform to manage internships, applications, admin dashboards, and verification workflows.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    category: "Web Application",
  },
  {
    title: "Business Portfolio Website",
    description:
      "A modern, responsive corporate website designed for brand presence and lead generation.",
    tech: ["React", "Tailwind CSS"],
    category: "Website",
  },
  {
    title: "Admin Dashboard System",
    description:
      "Role-based admin dashboard with analytics, user management, and secure authentication.",
    tech: ["React", "Express", "MongoDB"],
    category: "Admin Panel",
  },
  {
    title: "Student Training Portal",
    description:
      "An online learning portal with courses, progress tracking, and certification.",
    tech: ["MERN Stack"],
    category: "EdTech",
  },
  {
    title: "Client Verification System",
    description:
      "A secure verification system for validating credentials and certificates.",
    tech: ["Node.js", "MongoDB", "API"],
    category: "Security",
  },
  {
    title: "Startup Landing Page",
    description:
      "High-conversion landing page for startups with performance optimization.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Landing Page",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse of projects we have built for businesses, startups, and learners.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Featured Projects
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
              >
                <span className="inline-block text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR WORK */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Our Work Stands Out
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">User-Centric Design</h4>
              <p className="mt-2 text-gray-600">
                Every project is designed with usability and experience in mind.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Scalable Architecture</h4>
              <p className="mt-2 text-gray-600">
                Our solutions are built to grow with your business.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Secure & Reliable</h4>
              <p className="mt-2 text-gray-600">
                Security and performance are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Want to Build Something Similar?
          </h2>
          <p className="mt-4 text-lg">
            Let’s discuss your project and create a powerful solution together.
          </p>

          <Link
            to="/free-consultant"
            className="inline-block mt-6 bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}
