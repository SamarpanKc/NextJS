import Link from "next/link";

const SinglePage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="top justify-between pb-4">
            <div className="postTitle flex justify-between pt-8">
              <h1 className="text-3xl font-bold mb-2">Blog post title</h1>
              <div className="buttons flex gap-6">
                <Link href={"/4/edit"}>
                  <button className="buttons-edit px-8 rounded-lg p-2 bg-blue-600 hover:bg-blue-700 text-white ">
                    Edit
                  </button>
                </Link>
                <button className="buttons-delete px-8 rounded-lg p-2 bg-red-600 hover:bg-red-700 text-white ">
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Published on <time dateTime="2022-04-05">April 5, 2022</time>
            </p>
          </div>

          <img
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            className="w-full h-auto mb-8 rounded-md"
          />

          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              varius fringilla augue, vel vestibulum nisl mattis vel. Praesent
              porttitor pharetra purus eu tincidunt.
            </p>
            <p>
              Nullam vitae sapien non est suscipit blandit quis sit amet ipsum.
              Aliquam euismod accumsan nunc, in convallis felis luctus in. Sed
              rhoncus metus a elit rutrum aliquam.
            </p>
            <p>
              Integer ullamcorper leo nulla, nec commodo metus vehicula eget.
              Duis vel vestibulum tellus, eget mattis quam. Nullam euismod
              libero sed nibh tristique, vel eleifend risus sagittis. In hac
              habitasse platea dictumst. Sed dapibus magna at arcu euismod, a
              pulvinar turpis tristique. Suspendisse imperdiet velit nec lectus
              rutrum varius.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
