import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="profilePage flex flex-col justify-center">
        <div className="Title px-36 m-8">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <div className=" grid grid-cols-2 py-4 justify-between">
            <div className="pic flex flex-col justify-center items-center">
              <Image
                className="size-40 relative object-cover rounded-full"
                width={500}
                height={500}
                src={
                  "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
              />
              <div className="buttons flex gap-4 py-4">
                <button className="px-8 rounded-lg p-2 bg-blue-600 hover:bg-blue-700 text-white">
                  View
                </button>
                <button className="px-8 rounded-lg p-2 bg-blue-600 hover:bg-blue-700 text-white">
                  Edit
                </button>
              </div>
            </div>

            <div className="details flex flex-col">
              <div className="name py-2">
                <h1 className="text-x underline">username</h1>
                <h1 className="font-semibold text-2xl">@unishh05</h1>
              </div>
              <div className="bio pb-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  atque velit itaque. Quibusdam iure tenetur autem numquam quos
                  deleniti nemo, velit nesciunt fugit voluptas aut repudiandae?
                </p>
              </div>
              <div className="follow grid grid-cols-2">
                <div className="follower py-2">
                  <h1 className="text-x underline">Followers</h1>
                  <h1 className="font-semibold text-2xl">12,407</h1>
                </div>
                <div className="following py-2 ">
                  <h1 className="text-x underline">Following</h1>
                  <h1 className="font-semibold text-2xl">271</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
