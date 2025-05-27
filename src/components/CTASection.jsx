import "../index.css";

function CTASection() {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width="200"
            height="200"
            x="50%"
            y="0"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="0" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
        />
      </svg>
      <div
        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20 clip-polygon-hero"></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Try it out - if you like it, keep it
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
          It&#39;s open source and MIT licensed. Enjoy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://truspace.dev/login"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Login
          </a>
          <a
            href="https://truspace.dev/register"
            className="text-sm/6 font-semibold text-white hover:text-white hover:underline"
          >
            Register<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
