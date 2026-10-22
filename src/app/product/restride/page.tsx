import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import Image from "next/image";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/banners/diaspmat.jpg";
import restride_img from "@/assets/images/pistar/restride.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restride Smart Insole - Pistar Tech",
  description:
    "Restride is PiStar Tech's upcoming smart insole for everyday gait and pressure tracking. Preorder now to be among the first to experience it.",
  keywords: "Restride, smart insole, gait tracking, foot pressure, wearable sensor",
};

const Restride = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Restride Smart Insole"
            subtitle="A Smart Insole for Everyday Gait & Pressure Tracking"
            page="Restride"
            maincls="bg-bottom"
            bg_img={about_bg}
            style_2={true}
          />

          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            style={{ background: "#fff" }}
          >
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row align-items-center">
                  <div className="col-lg-6 wow fadeInRight">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={restride_img}
                        alt="Restride smart insole"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      <div className="upper-title d-flex align-items-center">
                        <div className="line-2"></div> COMING SOON
                      </div>
                      <h3>Available for Preorder</h3>
                    </div>
                    <p className="text-lg mt-20 lg-mt-10 mb-30">
                        Restride is our upcoming smart insole, built on the same
                        precision foot-pressure and gait-analysis technology behind
                        our Podiascanner line. We're excited to bring this innovation
                        to life — full details are coming soon, so preorder now to be
                        among the first to experience it.
                    </p>
                    <Link href="/contact" className="btn-four mt-15 me-4">
                      Preorder Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default Restride;