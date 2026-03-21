import React from "react";

export default function Services() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive technology solutions designed to help businesses grow
            and individuals succeed.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            What We Offer
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-sky-700">
                Web Development
              </h3>
              <p className="mt-3 text-gray-600">
                Responsive, scalable, and high-performance websites using
                modern technologies like React, Node.js, and MongoDB.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-sky-700">
                Software Solutions
              </h3>
              <p className="mt-3 text-gray-600">
                Custom software solutions tailored to your business needs,
                ensuring efficiency, security, and scalability.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-sky-700">
                Internship Programs
              </h3>
              <p className="mt-3 text-gray-600">
                Industry-focused internship programs to help students gain
                real-world experience and practical skills.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-sky-700">
                Training & Mentorship
              </h3>
              <p className="mt-3 text-gray-600">
                Structured training programs and mentorship to prepare
                individuals for careers in the tech industry.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-sky-700">
                Business Consulting
              </h3>
              <p className="mt-3 text-gray-600">
                Technical and strategic consulting to help startups and
                businesses make informed decisions.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-sky-700">
                Digital Transformation
              </h3>
              <p className="mt-3 text-gray-600">
                Modernizing existing systems and workflows to improve
                productivity and digital presence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            How We Work
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">1. Understand</h4>
              <p className="mt-2 text-gray-600">
                We analyze requirements and understand your goals.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">2. Plan</h4>
              <p className="mt-2 text-gray-600">
                We create a structured plan and technical roadmap.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">3. Build</h4>
              <p className="mt-2 text-gray-600">
                Our team develops and tests the solution.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">4. Deliver</h4>
              <p className="mt-2 text-gray-600">
                We deliver, deploy, and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg">
            Let InternHub help you turn ideas into powerful digital solutions.
          </p>
        </div>
      </section>

    </div>
  );
}
