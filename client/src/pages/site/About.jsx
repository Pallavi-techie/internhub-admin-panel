import React from "react";

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            About InternHub
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Building the next generation of digital solutions with innovation,
            quality, and trust.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              InternHub is a technology-driven organization focused on delivering
              scalable, secure, and high-quality digital products. We work with
              startups, enterprises, and individuals to transform ideas into
              real-world solutions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From web and application development to training and internship
              programs, we aim to bridge the gap between technology and business
              growth.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Our Core Focus
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
              <li>Web & Software Development</li>
              <li>Internships & Skill Training</li>
              <li>Startup & Business Solutions</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-sky-700">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to empower businesses and individuals by providing
              innovative, reliable, and cost-effective technology solutions
              that create real impact.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-sky-700">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become a globally trusted technology partner known for
              excellence, innovation, and nurturing future tech leaders.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Why Choose InternHub
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-sky-700">
                Quality First
              </h4>
              <p className="mt-3 text-gray-600">
                We focus on delivering high-quality solutions with attention to
                detail and performance.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-sky-700">
                Skilled Team
              </h4>
              <p className="mt-3 text-gray-600">
                Our team consists of skilled developers, designers, and mentors
                passionate about technology.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-sky-700">
                Trusted Support
              </h4>
              <p className="mt-3 text-gray-600">
                We believe in long-term relationships and provide continuous
                support even after project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-sky-700 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg">
            Partner with InternHub to turn your ideas into impactful digital
            products.
          </p>
        </div>
      </section>

    </div>
  );
}
