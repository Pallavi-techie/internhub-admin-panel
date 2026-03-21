import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Pricing Plans
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Simple, transparent pricing designed for startups, businesses, and learners.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            {/* STARTER PLAN */}
            <div className="border rounded-xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                Starter
              </h3>
              <p className="mt-2 text-gray-500">
                Best for individuals & small ideas
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-sky-700">₹9,999</span>
                <span className="text-gray-500 text-sm"> / project</span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li>✔ Basic website / landing page</li>
                <li>✔ Responsive design</li>
                <li>✔ 5–7 pages</li>
                <li>✔ Basic SEO setup</li>
                <li>✔ Email support</li>
              </ul>

              <Link
                to="/contact"
                className="inline-block mt-8 w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Get Started
              </Link>
            </div>

            {/* PROFESSIONAL PLAN */}
            <div className="border-2 border-sky-600 rounded-xl p-8 text-center shadow-lg scale-105">
              <h3 className="text-xl font-semibold text-sky-700">
                Professional
              </h3>
              <p className="mt-2 text-gray-500">
                Ideal for startups & growing businesses
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-sky-700">₹24,999</span>
                <span className="text-gray-500 text-sm"> / project</span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li>✔ Custom website / web app</li>
                <li>✔ Advanced UI/UX</li>
                <li>✔ API integration</li>
                <li>✔ SEO optimization</li>
                <li>✔ Priority support</li>
              </ul>

              <Link
                to="/free-consultant"
                className="inline-block mt-8 w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Free Consultation
              </Link>
            </div>

            {/* ENTERPRISE PLAN */}
            <div className="border rounded-xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                Enterprise
              </h3>
              <p className="mt-2 text-gray-500">
                For large-scale & custom solutions
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-sky-700">Custom</span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li>✔ Full-stack applications</li>
                <li>✔ Admin dashboards</li>
                <li>✔ Scalable architecture</li>
                <li>✔ Dedicated team</li>
                <li>✔ Long-term support</li>
              </ul>

              <Link
                to="/contact"
                className="inline-block mt-8 w-full border border-sky-600 text-sky-600 py-2 rounded-lg font-semibold hover:bg-sky-50 transition"
              >
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PRICING */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Our Pricing Works for You
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Transparent</h4>
              <p className="mt-2 text-gray-600">
                No hidden charges. Clear scope and pricing.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Flexible</h4>
              <p className="mt-2 text-gray-600">
                Plans that grow with your business needs.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">Value Driven</h4>
              <p className="mt-2 text-gray-600">
                Maximum value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Not Sure Which Plan Fits You?
          </h2>
          <p className="mt-4 text-lg">
            Talk to our experts and get personalized guidance.
          </p>

          <Link
            to="/free-consultant"
            className="inline-block mt-6 bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
