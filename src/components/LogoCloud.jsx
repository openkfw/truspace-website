function LogoCloud() {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <h2 className="text-center text-lg/8 font-semibold text-white">
        Web technologies used in our app
      </h2>
      <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10">
        <img
          className="col-span-2 h-20 w-full object-contain lg:col-span-1"
          src={`${import.meta.env.BASE_URL}ipfs-logo.svg`}
          alt="ipfs"
        />
        <img
          className="col-span-2 h-14 w-full object-contain lg:col-span-1"
          src={`${import.meta.env.BASE_URL}openwebui.svg`}
          alt="openwebui"
        />
        <img
          className="col-span-2 h-10 w-full object-contain lg:col-span-1"
          src={`${import.meta.env.BASE_URL}nextjs-logo.svg`}
          alt="nextjs"
        />
        <img
          className="col-span-2 h-12 w-full object-contain lg:col-span-1"
          src={`${import.meta.env.BASE_URL}tailwind-css-logo.svg`}
          alt="tailwindcss"
        />
      </div>
    </div>
  );
}

export default LogoCloud;
