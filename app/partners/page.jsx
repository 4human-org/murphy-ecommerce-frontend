"use client";

export default function Page() {
  const partners = [
    { name: "Partner 1", description: "Description for Partner 1" },
    { name: "Partner 2", description: "Description for Partner 2" },
    { name: "Partner 3", description: "Description for Partner 3" },
    // Add more partners here
  ];

  return (
    <div className="container mb-10 text-xl">
      <h2 className="m-10 text-center text-[36px] font-bold">Our Partners</h2>
      <p>
        We are proud to work with a diverse group of partners who share our
        commitment to creating positive change in the world.
      </p>
      {partners.map((partner, index) => (
        <div key={index}>
          <h2>{partner.name}</h2>
          <p>{partner.description}</p>
        </div>
      ))}
    </div>
  );
}
