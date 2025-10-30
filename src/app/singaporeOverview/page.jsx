import React from "react";

/**
 * CompanyOverview - a single-file React component (Tailwind CSS)
 * - Default-exported component
 * - Accepts an optional `data` prop to override content
 * - Built for clarity, accessibility, and easy theming
 */

const defaultData = {
  companyName: "CMP Solutions (Singapore) Pte. Ltd.",
  tagline: " A NEW DIMENSION FOR YOUR BUSINESS.",
  intro:
    "CMP Solutions (Singapore) Pte. Ltd. is a technology and consulting firm specializing in digital transformation, e-governance solutions, and enterprise IT services. Established as an international arm of CMP Techsseract LLP (India), the company brings deep expertise in government sector projects, smart infrastructure, disaster management systems, and AI-driven platforms, now tailored to the needs of Singapore and the broader ASEAN region.",
  mission:
    "Our mission is to bridge innovation and governance, enabling organizations to deliver smarter, faster, and more secure services through scalable technology solutions.",
  coreCompetencies: [
    {
      title: "E-Governance & Public Sector",
      items: [
        "Citizen service portals",
        "Disaster & relief management systems",
        "Media & communication monitoring platforms",
        "AI-powered analytics dashboards",
      ],
    },
    {
      title: "Enterprise IT & Digital Platforms",
      items: [
        "Cloud migration & managed services",
        "Secure data center solutions",
        "ERP & workflow automation",
        "Mobile and web application development",
      ],
    },
    {
      title: "Emerging Technologies",
      items: [
        "Artificial Intelligence AI/ML & predictive analytics",
        "Geospatial mapping & GIS-based platforms",
        "IoT & smart infrastructure integration",
        "Blockchain for secure data exchange",
      ],
    },
  ],
  regionFocus: [
    "Digital solutions for smart cities and public utilities",
    "Enterprise automation for private sector businesses",
    "Cross-border technology collaborations in the ASEAN region",
    "Compliance with Singapore’s IMDA, PDPA, and data security regulations",
  ],
  strengths: [
    "Proven track record in large-scale government IT projects in India",
    "Strong domain knowledge in public governance and citizen engagement",
    "Commitment to security, scalability, and compliance",
    "Ability to customize solutions for both public and private sector needs",
  ],
  corporateInfo: {
    companyName: "CMP Solutions (Singapore) Pte. Ltd.",
    businessDomains: "E-Governance, Enterprise IT, AI, Cloud, GIS, IoT",
    jurisdiction: "Registered in Singapore",
    targetMarket:
      "Government agencies, Enterprises, Smart city initiatives, ASEAN collaborations",
  },
};

export default function CompanyOverview({ data = {} }) {
  const d = { ...defaultData, ...data };

  return (
    <>
      <nav className="px-4 sm:px-6 md:px-8 fixed w-full bg-white/95 backdrop-blur-lg shadow-md z-50 top-0 flex justify-between items-center h-16 lg:h-20">
        <img
          src="images/footer/singapore-logo.png"
          alt="Singapore logo"
          className="sm:h-15 h-10 mb-5 mt-4"
        />
        <button className="flex justify-center items-center gap-1.5">
          <div className="no-underline text-red-500 font-bold text-5xl mb-3">&laquo; </div> 
          <a href="/" className="text-red-500 font-bold text-xl hover:text-blue-500 hover:underline">Home</a>
        </button>
      </nav>
      <section className="w-[95%] mx-auto my-8 p-6 mt-25 text-black rounded-2xl shadow-lg inset-shadow-xs">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-red-500">
              {d.companyName}
            </h1>
            <p className="mt-1 text-sm text-blue-500 font-semibold"><span className="text-orange-500">CREATE.</span>{d.tagline}</p>
          </div>
          <div className="text-right">
            <p className="text-sm ">Jurisdiction</p>
            <strong className="block">{d.corporateInfo.jurisdiction}</strong>
          </div>
        </header>

        <hr className="my-6 border-blue-300" />

        <article className="grid grid-cols-1 lg:grid-cols-3 gap-3 relative">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold mb-2 text-blue-500">Overview</h2>
            <p className="text-justify">{d.intro}</p>

            <div className="mt-3">
              <p className=" mt-2">{d.mission}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-bold text-blue-500">Core Competencies</h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {d.coreCompetencies.map((c) => (
                  <div
                    key={c.title}
                    className="p-4 shadow-md bg-blue-500 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-600 transition"
                  >
                    <h4 className="font-medium text-white">{c.title}</h4>
                    <ul className="mt-2 text-sm text-slate-300 list-disc ml-5 space-y-1">
                      {c.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:border-l lg:border-blue-300 pl-3">
            <div className="p-4 bg-red-500 rounded-lg shadow-md">
              <h3 className="font-semibold text-white">
                Singapore & ASEAN Focus
              </h3>
              <hr className="border-white" />
              <ul className="mt-2 text-sm text-white list-disc ml-5 space-y-1">
                {d.regionFocus.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-500 shadow-xl inset-shadow-md inset-shadow-white">
              <h4 className="font-semibold text-slate-800 dark:text-white">
                Our Strengths
              </h4>
              <hr className="border-white" />
              <ul className="mt-2 text-sm text-white list-disc ml-5 space-y-1">
                {d.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-500 shadow-xl inset-shadow-md inset-shadow-white">
              <h4 className="font-semibold text-white">
                Corporate Information
              </h4>
              <hr className="border-white" />
              <dl className="mt-2 text-sm text-white space-y-1">
                <div>
                  <dt className="font-medium text-white">Company</dt>
                  <dd>{d.corporateInfo.companyName}</dd>
                </div>
                <div>
                  <dt className="font-medium">
                    Business Domains
                  </dt>
                  <dd>{d.corporateInfo.businessDomains}</dd>
                </div>
                <div>
                  <dt className="font-medium">
                    Target Market
                  </dt>
                  <dd>{d.corporateInfo.targetMarket}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </article>
{/* 
        <footer className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-blue-500">
            Need this as a one-pager or PDF? Integrate with your print
            stylesheet or export via HTML-to-PDF on the server.
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="#ContactUs"
              className="inline-block px-4 py-2 rounded-full bg-blue-500 text-white text-sm hover:opacity-95"
              aria-label="Contact CMP Solutions Singapore"
            >
              Contact Sales
            </a>
          </div>
        </footer> */}
      </section>
    </>
  );
}
