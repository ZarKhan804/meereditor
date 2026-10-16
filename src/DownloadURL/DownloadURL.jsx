import React from "react";

const URL = () => {
  const apps = [
    {
      name: "CapCut Pro",
      image: "/logo100.jpeg",
      url: "https://www.mediafire.com/file/j6km6hd1n3cijf1/CapCutcom.lemon.lvoverseasv13.9.0.apk/file",
      description:
        "Download CapCut Pro and explore advanced video editing features.",
    },
    {
      name: "Remini Pro",
      image: "/logo101.jpeg",
      url: "https://drive.google.com/file/d/116vNlMblw9oFZFAvKW6X348R3hRS-jv_/view?usp=drivesdk",
      description:
        "Download Remini Pro and explore AI photo enhancement features.",
    },
  ];

  return (
    <section
      className="min-h-screen px-4 py-10 sm:py-14"
      style={{ backgroundColor: "#FBF8F0" }}
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          
          Download Premium Apps
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Explore CapCut Pro and Remini Pro. Select an app below to access its
          download page.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* App Image */}
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${app.name} download page`}
                className="block"
              >
                <img
                  src={app.image}
                  alt={`${app.name} download`}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </a>

              {/* App Details */}
              <div className="p-6 text-center">
                <h2 className="mb-3 text-2xl font-extrabold text-gray-900">
                  Download {app.name}
                </h2>

                <p className="mb-6 text-sm leading-6 text-gray-600">
                  {app.description}
                </p>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 text-lg font-extrabold text-black transition duration-300 hover:bg-yellow-500 sm:w-auto sm:min-w-64"
                >
                  Download {app.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default URL;