import React from "react";

// one testimonial card: initials on the left, quote + name on the right
function TestimonialCard({
  initials,
  name,
  affiliation,
  quote,
}: {
  initials: string;
  name: string;
  affiliation: string;
  quote: string;
}) {
  return (
    <div className="row align-items-center mb-60 lg-mb-40">
      <div className="col-md-3 text-center mb-30 mb-md-0">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
          style={{
            width: "160px",
            height: "160px",
            background: "#1F3B57",
            color: "#fff",
            fontSize: "42px",
            fontWeight: 700,
          }}
        >
          {initials}
        </div>
      </div>
      <div className="col-md-9">
        <blockquote className="fs-5 fst-italic mb-20">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="fw-bold">{name}</div>
        <p className="m0">{affiliation}</p>
      </div>
    </div>
  );
}

const TestimonialsSection = () => {
  return (
    <div className="service-details pt-80 lg-pt-60">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>What Experts Say</h2>
              <p className="mb-60 lg-mb-40">
                Trusted by researchers and educators in biomechanics and
                orthopedic engineering.
              </p>

              <TestimonialCard
                initials="MP"
                name="Dr. M. Pullela"
                affiliation="IIT Kharagpur"
                quote="The Podiascan system provides the precise, cost-effective static pressure mapping required to validate our 3D-printed orthopedic insoles. Its high-resolution digital data allows students and researchers to easily identify peak pressure zones, directly guiding our CAD custom-gait optimization. It is an indispensable, high-utility tool for bridging the gap between digital biomechanical analysis and additive manufacturing."
              />

              <TestimonialCard
                initials="VP"
                name="Dr. N. Vinayaga Muruga Pandy"
                affiliation="Sri Sai Ram Engineering College"
                quote="I found the Podiascanner Mat to be a simple and effective tool for assessing foot pressure distribution and balance. The system is easy to use, and the visual outputs help in understanding gait and posture characteristics quickly. It has been a valuable addition to our biomechanics lab. Overall, it offers good functionality and value for academic and clinical applications."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;