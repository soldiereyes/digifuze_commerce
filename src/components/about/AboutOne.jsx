import React, { useEffect } from "react";
import $ from "jquery";
import AboutA from "../../assets/img/about/a.png";
import About1 from "../../assets/img/about/01.jpg";
import About2 from "../../assets/img/about/02.jpg";
import About3 from "../../assets/img/about/03.jpg";
import { Link } from "react-router-dom";

export const AboutOne = () => {
  const panelData = [
    {
      id: "01",
      title: "HR Researches",
      image: About1,
      linkTitle: "Unique & modern business tips for our clients.",
      description:
        "Elevate your experience with our premium services tailored to your needs.",
      childClass: "child-one",
    },
    {
      id: "02",
      title: "Data Analysis",
      image: About2,
      linkTitle: "Unique & modern business tips for our clients.",
      description:
        "Elevate your experience with our premium services tailored to your needs.",
      childClass: "child-two",
    },
    {
      id: "03",
      title: "Unique & modern",
      image: About3,
      linkTitle: "Unique & modern business tips for our clients.",
      description:
        "Elevate your experience with our premium services tailored to your needs.",
      childClass: "child-three",
      isActive: true,
    },
  ];

  useEffect(() => {
    function mediaSize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".col-custom").on("click", function () {
          $(".col-custom").removeClass("active");
          $(this).addClass("active");
        });
      } else {
        $(".col-custom").addClass("active");
      }
    }

    mediaSize();
    $(window).on("resize", mediaSize);

    // Cleanup function
    return () => {
      $(window).off("resize", mediaSize);
      $(".col-custom").off("click");
    };
  }, []);

  return (
    <div className="td-about-area fix pt-145 pb-120">
      <div className="container">
        <div className="row">
          {/* left side */}
          <div className="col-xl-6 col-lg-7 col-md-12 mb-30">
            <div
              className="row-custom-wrapper wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="row-custom">
                {panelData.map((x, i, arr) => {
                  const lastItem = i === arr.length - 1;

                  return (
                    <div
                      key={x.id}
                      className={`col-custom ${lastItem ? "active" : ""}`}
                    >
                      <div className="td-panel-item">
                        <div className="td-panel-content">
                          <span>{x.id}.</span>
                          <h4 className={`td-panel-title ${x.childClass}`}>
                            {x.title}
                          </h4>
                        </div>
                      </div>
                      <div className="td-panel-item-2">
                        <div className="td-panel-content-2">
                          <div className="td-panel-thumb">
                            <img className="w-100" src={x.image} alt="thumb" />
                          </div>
                          <div className="td-panel-content-inner fix p-relative">
                            <span className="td-panel-shape">{x.id}</span>
                            <h4 className="td-panel-title-2 mb-10">
                              <Link to="/about">{x.linkTitle}</Link>
                            </h4>
                            <p className="mb-160">{x.description}</p>
                            <div className="td-panel-btn">
                              <Link
                                className="td-btn td-left-right"
                                to="/about"
                              >
                                Read More
                                <span className="td-arrow-angle ml-10">
                                  <svg
                                    className="td-arrow-svg-top-right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10.00 10.00"
                                  >
                                    <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                    <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="col-xl-6 col-lg-5 mb-30">
            <div
              className="td-about-content-wrap p-relative ml-45 wow fadeInRight"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <img
                className="td-about-text-big d-none d-xl-block"
                src={AboutA}
                alt="a"
              />
              <span className="td-section-title-pre mb-10">Our Services</span>
              <h2 className="td-section-title td-about-right-space">
                Fields of expertise that our great team excels in
              </h2>
              <p className="td-about-para pr-10">
                Elevate your experience with our premium services tailored to
                your needs. From expert consultations to seamless solutions,
                we're here to exceed your expectations let us handle the
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
