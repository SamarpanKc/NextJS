const Form = () => {
  return (
    <>
      <div className="mx-14 mt-14 border-2 border-blue-600 border-opacity-60 rounded-lg">
        <div className="mt-10 text-center font-bold">Welcome</div>
        <div className="mt-3 text-center text-4xl font-bold">Create a Post</div>
        <div className="p-8">
          <div className="flex gap-4">
            <input
              type="Name"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-gray-700 bg-blackShade px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Full Name *"
            />
            <input
              type="email"
              name="email"
              className="mt-1 block w-1/2 rounded-md border border-gray-700 bg-blackShade px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email *"
            />
          </div>
          <div className="my-6 flex gap-4">
            <select
              name="select"
              id="select"
              className="block w-1/2 rounded-md border border-gray-700 bg-blackShade px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option className="font-semibold text-slate-300">
                Please Select
              </option>
            </select>
            <select
              name="select"
              id="select"
              className="block w-1/2 rounded-md border border-gray-700 bg-blackShade px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option className="font-semibold text-slate-300">
                4:00 Available
              </option>
            </select>
          </div>
          <div className="">
            <textarea
              name="textarea"
              id="text"
              cols="30"
              rows="10"
              className="mb-10 h-40 w-full resize-none rounded-md border border-gray-700 bg-blackShade p-5 font-semibold text-gray-300"
              defaultValue={"Your Content"}
            ></textarea>
          </div>
          <div className="text-center">
            <a className="cursor-pointer rounded-lg bg-blue-600 px-8 py-5 text-sm font-semibold text-white">
              Post Publicly
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form