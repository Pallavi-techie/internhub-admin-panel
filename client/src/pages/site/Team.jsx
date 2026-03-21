import React from "react";

const teamMembers = [
  {
    name: "Founder & CEO",
    role: "Vision & Strategy",
    description:
      "Leads the organization with a focus on innovation, growth, and long-term impact.",
  },
  {
    name: "Technical Lead",
    role: "Architecture & Development",
    description:
      "Responsible for system design, scalability, and mentoring the development team.",
  },
  {
    name: "Frontend Developer",
    role: "UI / UX Development",
    description:
      "Builds modern, responsive, and user-friendly interfaces.",
  },
  {
    name: "Backend Developer",
    role: "API & Database",
    description:
      "Handles backend logic, APIs, authentication, and data security.",
  },
  {
    name: "Mentor & Trainer",
    role: "Training & Internships",
    description:
      "Guides interns and students with real-world projects and industry practices.",
  },
  {
    name: "Operations Manager",
    role: "Client & Process Management",
    description:
      "Ensures smooth project execution and client communication.",
  },
];

export default function Team() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A group of passionate professionals dedicated to building impactful digital solutions.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our People
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                {/* Placeholder Avatar */}
                <div className="w-24 h-24 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-sky-600 text-sm font-medium mt-1">
                  {member.role}
                </p>

                <p className="mt-3 text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Culture & Values
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Collaboration</h4>
              <p className="mt-2 text-gray-600">
                We believe the best solutions are built together.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Learning</h4>
              <p className="mt-2 text-gray-600">
                Continuous learning keeps us ahead in technology.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Integrity</h4>
              <p className="mt-2 text-gray-600">
                Honesty and transparency guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Want to Join Our Team?
          </h2>
          <p className="mt-4 text-lg">
            Explore career opportunities and grow with InternHub.
          </p>
        </div>
      </section>

    </div>
  );
}
