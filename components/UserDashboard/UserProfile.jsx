"use client";

export default function UserProfile({ firstName, lastName, profileURL }) {
  return (
    <main className="flex hidden max-w-xs flex-col bg-blue-600 text-white md:block md:h-screen">
      <div className="md:mb-8 md:h-8"></div>
      <section className="flex flex-row md:items-center md:border-t-2 md:border-black">
        <img
          className="rounded-full md:mx-8 md:my-4 md:h-20 md:w-20 md:object-cover"
          src={
            profileURL
              ? profileURL
              : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
          }
        />
        <div>
          <div>{firstName ? firstName : "first"}</div>
          <div>{lastName ? lastName : "last"}</div>
        </div>
      </section>
      <a href="/#" className="flex md:px-8 md:py-4 md:hover:bg-blue-900">
        <span className="mr-2">[icon]</span>
        <span>Donations</span>
      </a>
      <a href="/#" className="flex md:px-8 md:py-4 md:hover:bg-blue-900">
        <span className="mr-2">[icon]</span>
        <span>Messages</span>
      </a>
    </main>
  );
}
