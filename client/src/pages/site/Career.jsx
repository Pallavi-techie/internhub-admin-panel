import React from "react";

export default function Career() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Careers at InternHub
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Build your future with innovation, learning, and real-world impact.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Why Join InternHub?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-700">
                Real-World Experience
              </h3>
              <p className="mt-3 text-gray-600">
                Work on live projects that impact real businesses and users.
              </p>
            </div>

            <div className="p-6 border rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-700">
                Growth & Learning
              </h3>
              <p className="mt-3 text-gray-600">
                Mentorship, skill development, and exposure to modern technologies.
              </p>
            </div>

            <div className="p-6 border rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-700">
                Flexible Work Culture
              </h3>
              <p className="mt-3 text-gray-600">
                Remote-friendly, collaborative, and innovation-driven environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Open Positions
          </h2>

          <div className="mt-12 space-y-6">

            {/* CARD */}
            <div className="bg-white border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Web Development Intern
                </h3>
                <p className="text-gray-600 mt-1">
                  Remote · 3–6 Months · Internship
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700">
                Apply Now
              </button>
            </div>

            <div className="bg-white border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Backend Developer
                </h3>
                <p className="text-gray-600 mt-1">
                  Remote · Full-Time
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700">
                Apply Now
              </button>
            </div>

            <div className="bg-white border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Digital Marketing Executive
                </h3>
                <p className="text-gray-600 mt-1">
                  Hybrid · Full-Time
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12 text-center">
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold text-sky-700">1. Apply</h4>
              <p className="mt-2 text-gray-600">
                Submit your application online.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold text-sky-700">2. Review</h4>
              <p className="mt-2 text-gray-600">
                Our team reviews your profile.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold text-sky-700">3. Interview</h4>
              <p className="mt-2 text-gray-600">
                Technical & HR interaction.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold text-sky-700">4. Onboard</h4>
              <p className="mt-2 text-gray-600">
                Welcome to InternHub 🎉
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Join Our Team?
          </h2>
          <p className="mt-4 text-lg">
            Send your resume to careers@internhub.com
          </p>
        </div>
      </section>

    </div>
  );
}
