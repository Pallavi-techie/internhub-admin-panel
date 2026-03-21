import React from "react";

export default function Contact() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have a question or want to start a project? We’re here to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Get in Touch
            </h2>
            <p className="mt-4 text-gray-600">
              Reach out to us for business inquiries, internships, training
              programs, or general questions. Our team will respond as soon as
              possible.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <div>
                <span className="font-semibold text-sky-700">Email:</span>{" "}
                support@internhub.com
              </div>
              <div>
                <span className="font-semibold text-sky-700">Phone:</span>{" "}
                +91 90000 00000
              </div>
              <div>
                <span className="font-semibold text-sky-700">Address:</span>{" "}
                India (Remote Operations)
              </div>
            </div>

            <div className="mt-8 bg-sky-50 rounded-xl p-6">
              <h4 className="font-semibold text-sky-700">
                Business Hours
              </h4>
              <p className="mt-2 text-gray-600">
                Monday – Friday: 10:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h3>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Let’s Start a Conversation
          </h2>
          <p className="mt-4 text-lg">
            Whether you’re a business, student, or startup — we’d love to hear from you.
          </p>
        </div>
      </section>

    </div>
  );
}
