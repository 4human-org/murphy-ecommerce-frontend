"use client";

export default function Page() {
  return (
    <div className="container mt-10 text-xl">
      <h2 className="my-2 text-[36px] font-bold">Accessibility Statement</h2>
      <p className="my-4 mb-4">
        We are committed to ensuring digital accessibility for people with
        disabilities. We are continually improving the user experience for
        everyone and applying the relevant accessibility standards.
      </p>

      <h3 className="text-[24px] font-bold">
        Measures to Support Accessibility
      </h3>
      <p className="my-4 mb-4">
        We take the following measures to ensure accessibility:
      </p>
      <ul className="mb-4 ml-12 list-disc">
        <li>Include accessibility as part of our mission statement.</li>
        <li>Integrate accessibility into our procurement practices.</li>
        <li>Assign clear accessibility targets and responsibilities.</li>
      </ul>

      <h3 className="text-[24px] font-bold">Conformance Status</h3>
      <p className="my-4 mb-4">
        The Web Content Accessibility Guidelines (WCAG) defines requirements for
        designers and developers to improve accessibility for people with
        disabilities. We are partially conformant with WCAG 2.1 level AA,
        meaning that some parts of the content do not fully conform to the
        accessibility standard.
      </p>

      <h3 className="text-[24px] font-bold">Feedback</h3>
      <p className="my-4 mb-4">
        We are always working toward continued improvement in adding
        accessibility standards to our website. We apologize if there is any
        inconvenience.
      </p>
      <p className="my-4 mb-4">
        We also welcome your feedback on the accessibility of our website.
        Please let us know if you encounter any accessibility barriers.
      </p>

      <h3 className="text-[24px] font-bold">Contact Information</h3>
      <p className="my-4 mb-4">
        Please reach out to us if you have any specific accessibility concerns
        and we will address them as soon as possible.
      </p>
      <ul className="mb-10">
        <li className="m-2">
          Email:{" "}
          <a href="mailto:info@yourwebsite.com" className="text-blue-600">
            info@yourwebsite.com
          </a>
        </li>
        <li className="m-2">
          Phone:{" "}
          <a href="tel:11234567890" className="text-blue-600">
            +1 (123) 456-7890
          </a>
        </li>
      </ul>
    </div>
  );
}
