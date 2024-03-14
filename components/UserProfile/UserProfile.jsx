"use client";

export default function UserProfile({ firstName, lastName, profileURL }) {
  return (
    <main className="hidden max-w-xs md:block md:h-screen flex flex-col bg-blue-600 text-white">
      <div className="md:h-8 md:mb-8"></div>
      <section className="flex flex-row md:border-t-2 md:border-black md:items-center">
        <img
          className="md:my-4 md:mx-8 md:h-20 md:w-20 md:object-cover rounded-full"
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
      <a href="/#" className="flex md:hover:bg-blue-900 md:py-4 md:px-8">
        <span className="mr-2">[icon]</span>
        <span>Donations</span>
      </a>
      <a href="/#" className="flex md:hover:bg-blue-900 md:py-4 md:px-8">
        <span className="mr-2">[icon]</span>
        <span>Messages</span>
      </a>
    </main>
  );
}
