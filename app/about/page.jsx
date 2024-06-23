"use client";

export default function Page() {
  return (
    <div className="container flex flex-col gap-10 p-4 text-xl">
      <h2 className="text-center">
        <strong className="text-[40px]">About Us</strong>
      </h2>
      <p className="m-auto">
        Inspired by a life-changing event, the Murphy Foundation Uganda was
        established in 2018 as a registered non-governmental, humanitarian
        organization. Our mission is to support the rights and meet the needs of
        underprivileged individuals in their communities.
      </p>
      <p>
        Operating primarily in Eastern Uganda, we are committed to improving the
        quality of life amongst vulnerable groups by providing them with
        education, healthcare, clean water, and other basic needs. Our vision is
        to transform families in Ugandan communities by providing them with
        basic needs, promoting gender equality, and empowering them to reduce
        poverty nationwide.
      </p>

      <p>Our key initiatives include: </p>
      <ul className="m-4 flex flex-col gap-2">
        <li className="ml-8 list-disc pl-4">
          <strong>Women Empowerment:</strong> We offer financial management
          strategies and hand skill courses such as tailoring, hairdressing,
          baking, and bracelet making.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Library and Movie Project:</strong> We are constructing a
          library to provide children and youths with access to quality
          educational content, motivational movies, and computer resources.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Youth Empowerment:</strong> We mentor and equip youth with
          essential skills such as financial literacy, budgeting, and various
          vocational abilities.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Community Health Clinics:</strong> We are dedicated to
          enhancing access to healthcare services and bolstering the overall
          health infrastructure within local communities.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Improving Education:</strong> We empower rural schools in
          eastern Uganda with solar energy, extend study hours, integrate
          technology, promote environmental education, and empower students.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Cancer Awareness:</strong> We raise cancer awareness across
          Uganda, specifically targeting teenagers and adults.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Water and Environment:</strong> We are deeply committed to
          addressing the water crisis in needy communities.
        </li>
        <li className="ml-8 list-disc pl-4">
          <strong>Outreach Program:</strong> We visit various schools to spend
          quality time with children.
        </li>
      </ul>
      <p>
        We believe in starting where you are, using what you have, and doing
        what you can.
      </p>
      <p>
        <a href="/">
          <strong>Join us</strong>
        </a>{" "}
        in our mission to transform Ugandan communities and reduce poverty
        nationwide.
      </p>
    </div>
  );
}
