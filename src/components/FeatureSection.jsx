function FeatureSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          Simply work together
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
          Decentralized data storage and local sovereign AI
        </p>
        <p className="mt-6 text-lg/8 text-gray-300">
          All data is stored and processed locally using IPFS - it cannot be
          manipulated
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              Sovereign
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                All the data on your server. With open code. Nothing to hide.
                Full control of the data - and with content-based addressing no
                chance for hackers.
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
              Decentralized
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                You can't agree who should host the data? You don't have to. The
                IPFS cluster syncs everything across everyone who likes to join
                the network. And no one else.
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </div>
              AI-infused
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                Pre-analyse all documents for summaries, inconsistencies and
                everything you like. Of course with locally hosted AI and the
                engine that you choose.
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default FeatureSection;
