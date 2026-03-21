import React, { useState } from "react";

export default function VerifyCredential() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);

  function handleVerify(e) {
    e.preventDefault();

    // Demo logic (backend will replace this later)
    if (certificateId === "B2W12345") {
      setResult({
        status: "valid",
        name: "Rahul Sharma",
        course: "Full Stack Web Development",
        issueDate: "March 2025",
      });
    } else {
      setResult({ status: "invalid" });
    }
  }

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sky-700">
            Verify Credential
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Verify certificates issued by InternHub to ensure authenticity.
          </p>
        </div>
      </section>

      {/* VERIFY FORM */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Certificate Verification
            </h2>

            <form onSubmit={handleVerify} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Certificate ID
                </label>
                <input
                  type="text"
                  required
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="Enter Certificate ID"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Verify Certificate
              </button>
            </form>

            {/* RESULT */}
            {result && (
              <div className="mt-6">
                {result.status === "valid" ? (
                  <div className="bg-green-50 border border-green-400 text-green-700 rounded-lg p-4">
                    <h4 className="font-semibold">✅ Certificate Verified</h4>
                    <p className="mt-2">
                      <strong>Name:</strong> {result.name}
                    </p>
                    <p>
                      <strong>Course:</strong> {result.course}
                    </p>
                    <p>
                      <strong>Issue Date:</strong> {result.issueDate}
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-400 text-red-700 rounded-lg p-4">
                    ❌ Certificate not found or invalid.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Why Verify?
          </h3>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Verification helps employers and institutions confirm the authenticity
            of certificates issued by InternHub. This ensures trust, transparency,
            and credibility.
          </p>
        </div>
      </section>

    </div>
  );
}
