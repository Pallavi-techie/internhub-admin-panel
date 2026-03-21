import React from "react";

export default function BlogPublic() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights, updates, and knowledge from the InternHub team
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* BLOG CARD */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                Blog Image
              </div>
              <div className="p-6">
                <span className="text-sm text-sky-600 font-semibold">
                  Technology
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  How Internships Shape Your Career
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Learn why internships are essential for building real-world skills
                  and confidence in today’s job market.
                </p>
                <button className="mt-4 text-sky-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            {/* BLOG CARD */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                Blog Image
              </div>
              <div className="p-6">
                <span className="text-sm text-sky-600 font-semibold">
                  Career
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  Top Skills Employers Look For in 2025
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Discover the most in-demand skills companies expect from freshers
                  and professionals.
                </p>
                <button className="mt-4 text-sky-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            {/* BLOG CARD */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                Blog Image
              </div>
              <div className="p-6">
                <span className="text-sm text-sky-600 font-semibold">
                  Business
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  Why Businesses Need Digital Transformation
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Understand how technology helps businesses grow, scale,
                  and stay competitive.
                </p>
                <button className="mt-4 text-sky-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Want to Learn More?
          </h2>
          <p className="mt-4 text-lg">
            Follow our blog for updates, tips, and opportunities.
          </p>
        </div>
      </section>

    </div>
  );
}
