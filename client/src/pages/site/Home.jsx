import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-sky-700 leading-tight">
              InternHub <br /> Next Innovation
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We help businesses, startups, and students grow with powerful
              digital solutions, real-world internships, and expert guidance.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/free-consultant"
                className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Free Consultation
              </Link>

              <Link
                to="/services"
                className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Trusted by learners & businesses
              </h3>
              <p className="mt-4 text-gray-600">
                Building solutions that are reliable, scalable, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            InternHub is a technology-driven organization focused on building
            innovative digital products, providing industry-oriented internships,
            and helping businesses succeed through smart technology solutions.
          </p>

          <Link
            to="/about"
            className="inline-block mt-6 text-sky-600 font-semibold hover:underline"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Core Services
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-sky-700">
                Web Development
              </h3>
              <p className="mt-3 text-gray-600">
                Modern, responsive, and scalable websites using latest
                technologies.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-sky-700">
                Internship Programs
              </h3>
              <p className="mt-3 text-gray-600">
                Practical, real-world internship programs guided by industry
                experts.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-sky-700">
                Business Solutions
              </h3>
              <p className="mt-3 text-gray-600">
                Custom software and consulting services tailored to your
                business needs.
              </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="text-sky-600 font-semibold hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Why Choose InternHub
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Quality</h4>
              <p className="mt-2 text-gray-600">
                High-quality solutions with attention to detail.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Innovation</h4>
              <p className="mt-2 text-gray-600">
                We use modern tools and best practices.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Support</h4>
              <p className="mt-2 text-gray-600">
                Continuous support even after delivery.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Growth</h4>
              <p className="mt-2 text-gray-600">
                We grow when our clients succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Let’s Build Your Idea Together
          </h2>
          <p className="mt-4 text-lg">
            Get expert guidance and start your journey with InternHub today.
          </p>

          <Link
            to="/free-consultant"
            className="inline-block mt-6 bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-800 transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
