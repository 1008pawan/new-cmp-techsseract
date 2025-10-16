import React from "react";

const MobileApp = () => {
  return (
    <div>
      <section>
        <div
          className="bg-cover bg-center md:h-[100vh] h-[60vh] w-full transition-opacity duration-700 flex flex-col justify-between relative"
          style={{
            backgroundImage: `url("images/mobileApp/mobileAppHero.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative z-10">
            <img
              src="images/icons/hero_bg_shape2_1.jpg"
              alt="bg-shape"
              className="h-15 sm:h-16 md:h-25 w-auto"
            />
          </div>

          <div className="flex flex-col justify-center items-center z-20 h-[80vh]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              UTTAM-FDR
            </h1>
            <ul className="flex gap-2 mt-4 font-semibold text-white">
              <li>
                <a href="/" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>{`>`}</li>
              <li>
                <a href="/portfolio" className="hover:text-orange-500">
                  projects
                </a>
              </li>
              <li>{`>`}</li>
              <li className="text-blue-500">Portfolio</li>
            </ul>
          </div>

          <div className="relative z-10">
            <img
              src="images/icons/hero_bg_shape2_2.jpg"
              alt="bg-shape"
              className="h-15 sm:h-16 md:h-25 w-auto"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-12 grid-cols-2 gap-10 m-10">
          <div className="bg-zinc-100 md:col-span-3 col-span-2">
            <div className="border-b border-dashed border-blue-500 p-8 m-8 flex flex-col justify-center items-center">
              <img
                src="images/icons/icon-date.svg"
                alt="Date Svg"
                className="h-12"
              />
              <p className="text-zinc-600 mt-2">Since</p>
              <h1 className="text-zinc-600 text-xl font-bold">2023</h1>
            </div>
            <div className="border-b border-dashed border-blue-500 p-8 py-12 m-8 flex flex-col justify-center items-center">
              <img
                src="images/icons/icon-client.svg"
                alt="Date Svg"
                className="h-12"
              />
              <p className="text-zinc-600 mt-2">Client</p>
              <h1 className="text-zinc-600 text-xl font-bold">government</h1>
            </div>
            <div className="border-b border-dashed border-blue-500 p-8 py-12 m-8 flex flex-col justify-center items-center">
              <img
                src="images/icons/icon-website.svg"
                alt="Date Svg"
                className="h-12"
              />
              <p className="text-zinc-600 mt-2">website</p>
              <h1 className="text-zinc-600 text-xl font-bold">
                <a
                  href="https://upfdr.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:underline"
                >
                  https://upfdr.org/
                </a>
              </h1>
            </div>
            <div className="border-b border-dashed border-blue-500 p-5 py-12 m-8 flex flex-col justify-center items-center">
              <img
                src="images/icons/icon-location-1.svg"
                alt="Date Svg"
                className="h-12"
              />
              <p className="text-zinc-600 mt-2">location</p>
              <h1 className="text-zinc-600 text-xl text-nowrap font-bold">
                Lucknow, Uttar Pradesh
              </h1>
            </div>
          </div>
          <div className="w-full text-zinc-500 md:px-10 md:col-span-9 col-span-2">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold text-zinc-600 md:py-10 py-5">
                project overview
              </h1>
              <p className="md:text-base text-xs">
                The UPNOMS project, titled 'Quality Tests and Billing Management
                for FDR Projects in Uttar Pradesh,' focuses on the development
                of the UTTAM Portal. This specialized software application is
                designed to manage and monitor quality tests conducted at road
                construction sites, ensuring compliance with project standards
                and regulatory requirements. Additionally, the portal provides
                contractors with a streamlined platform to submit billing
                information, which can then be tracked, reviewed, and approved
                by relevant stakeholders. This initiative is critical for
                enhancing transparency, efficiency, and accountability in road
                construction projects within Uttar Pradesh. The core
                technologies utilized in this project include HTML, CSS,
                Bootstrap, JavaScript, jQuery, PHP, and SQL, ensuring a robust
                and user-friendly interface that facilitates seamless
                interactions between all involved parties.
              </p>
            </div>
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold text-zinc-600 py-10">
                Project summary :
              </h1>
              <p className="md:text-base text-xs">
                The UTTAM Portal, part of the UPNOMS project, offers an
                integrated solution for managing quality tests and billing
                processes for Full Depth Reclamation (FDR) road projects in
                Uttar Pradesh. This live application enables site contractors to
                efficiently document and submit quality test results, which are
                crucial for maintaining construction standards. Moreover,
                contractors can raise bills through the portal, with
                functionalities for tracking the billing status and obtaining
                necessary approvals from other stakeholders, thereby reducing
                delays and administrative burdens. Leveraging a tech stack
                comprising HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, and
                SQL, the portal ensures a responsive and intuitive user
                experience. Ultimately, the UTTAM Portal aims to foster a more
                organized, transparent, and accountable management system for
                road construction projects, significantly contributing to the
                infrastructure development goals of Uttar Pradesh.
              </p>
            </div>
            <div className="py-8">
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 p-2 md:p-0 bg-blue-500 text-white flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-forward"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                    <path d="M13 8l3 3l-3 3" />
                    <path d="M16 11h-8" />
                  </svg>
                </div>
                <h1 className="md:text-lg text-sm font-semibold text-zinc-600 py-3">
                  This project ensures that no duplicate entries are provided.
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 p-2 md:p-0 bg-blue-500 text-white flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-forward"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                    <path d="M13 8l3 3l-3 3" />
                    <path d="M16 11h-8" />
                  </svg>
                </div>
                <h1 className="md:text-lg text-sm font-semibold text-zinc-600 py-1">
                  It has appropriate security measures implemented to prevent
                  dump data entry.
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 p-2 md:p-0 bg-blue-500 text-white flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-forward"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                    <path d="M13 8l3 3l-3 3" />
                    <path d="M16 11h-8" />
                  </svg>
                </div>
                <h1 className="md:text-lg text-sm font-semibold text-zinc-600 py-1">
                  It provides easy and efficient method to store data, thus
                  providing better data security and integrity.
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 p-2 md:p-0 bg-blue-500 text-white flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-forward"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                    <path d="M13 8l3 3l-3 3" />
                    <path d="M16 11h-8" />
                  </svg>
                </div>
                <h1 className="md:text-lg text-sm font-semibold text-zinc-600 py-1">
                  Mobile app provides easy and quick access to maintain
                  everything on the go
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto justify-center items-center gap-8 py-10">
          <div className="shadow-xl h-75 md:w-105 md:p-0 px-2 inset-shadow-sm/30 flex justify-center items-center w-full rounded-md">
            <img
              src="images/mobileApp/updemp-img-1.jpg"
              alt="UTTAM-FDR-1"
              className="h-70 md:w-100 w-full rounded-md"
            />
          </div>
          <div className="shadow-xl h-75 md:w-105 md:p-0 px-2 inset-shadow-sm/30 flex justify-center items-center w-full rounded-md">
            <img
              src="images/mobileApp/updemp-img-2.jpg"
              alt="UTTAM-FDR-2"
              className="h-70 md:w-100 w-full rounded-md"
            />
          </div>
          <div className="shadow-xl h-75 md:w-105 md:p-0 px-2 inset-shadow-sm/30 flex justify-center items-center w-full rounded-md">
            <img
              src="images/mobileApp/updemp-img-3.jpg"
              alt="UTTAM-FDR-3"
              className="h-70 md:w-100 w-full rounded-md"
            />
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-5xl font-semibold text-zinc-600 text-center">
          App Preview
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 py-20 w-6/7 mx-auto gap-5">
          <div className=" flex justify-center items-center">
            <img
              src="images/mobileApp/updemp-app-img-1.png"
              alt="mobile view-1"
            />
          </div>
          <div className=" flex justify-center items-center">
            <img
              src="images/mobileApp/updemp-app-img-2.png"
              alt="mobile view-2"
            />
          </div>
          <div className=" flex justify-center items-center">
            <img
              src="images/mobileApp/updemp-app-img-3.png"
              alt="mobile view-3"
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl shadow-2xl inset-shadow-sm/30 p-5 bg-white max-w-6xl mx-auto md:h-full h-100 mb-20 py-5">
          <div className="project-feature-image">
            <figure>
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full md:h-full h-90 rounded-lg"
                  src="https://upfdr.org/"
                  title="description"
                  allowFullScreen
                />
              </div>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
