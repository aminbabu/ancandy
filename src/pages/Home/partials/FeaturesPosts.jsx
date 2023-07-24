import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import blogImg1 from "../../../assets/images/blog-1.png";
import blogImg2 from "../../../assets/images/blog-2.png";
import Button from "../../../components/Button";
import WatchModal from "../../../components/WatchModal";

const options = {
  type: "loop",
  speed: 750,
  pagination: true,
  easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  autoplay: true,
  arrows: false,
};

const tags = ["Sports", "Sports Car", "Bike"];

const FeaturesPosts = () => {
  return (
    <section className="featured-posts mb-4 pb-3">
      <div className="container">
        <div className="row gx-3 align-items-center mb-4 pb-3">
          <div className="col-lg-6">
            <div className="d-flex flex-wrap justify-content-between justify-content-lg-start">
              <h2 className="h1 fw-bold ff-dm-sans mb-3 mb-lg-0 me-4 pe-3">
                Blog
              </h2>
              <div className="btn-group flex-wrap gap-3 align-self-center mb-3 mb-lg-0">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    className="btn-dark btn-dark-10 fw-normal rounded-pill"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form method="post">
              <div className="input-group input-search">
                <span className="input-group-text" id="search-addon">
                  <svg
                    className="ac-icon"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.8936 13.0096C14.9997 11.703 15.6667 10.0127 15.6667 8.16663C15.6667 4.02449 12.3088 0.666626 8.16666 0.666626C4.02452 0.666626 0.666656 4.02449 0.666656 8.16663C0.666656 12.3088 4.02452 15.6666 8.16666 15.6666C10.0127 15.6666 11.703 14.9996 13.0097 13.8935L15.2247 16.1085C15.4688 16.3526 15.8645 16.3526 16.1086 16.1085C16.3527 15.8645 16.3527 15.4688 16.1086 15.2247L13.8936 13.0096ZM14.4167 8.16663C14.4167 11.6184 11.6184 14.4166 8.16666 14.4166C4.71487 14.4166 1.91666 11.6184 1.91666 8.16663C1.91666 4.71484 4.71487 1.91663 8.16666 1.91663C11.6184 1.91663 14.4167 4.71484 14.4167 8.16663Z"
                      fill="#2C2347"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row g-4 gy-lg-0">
          <div className="col-lg-6">
            <div className="card featured-post--item">
              <Splide
                options={options}
                hasTrack={false}
                className="featured-post-carousel"
              >
                <SplideTrack>
                  <SplideSlide>
                    <div className="ac-card-img-top">
                      <img
                        src={blogImg1}
                        alt="Blog"
                        width="850"
                        height="400"
                        className="img-fluid"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="ac-card-img-top">
                      <img
                        src={blogImg2}
                        alt="Blog"
                        width="850"
                        height="400"
                        className="img-fluid"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="ac-card-img-top">
                      <img
                        src={blogImg1}
                        alt="Blog"
                        width="850"
                        height="400"
                        className="img-fluid"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="ac-card-img-top">
                      <img
                        src={blogImg1}
                        alt="Blog"
                        width="850"
                        height="400"
                        className="img-fluid"
                      />
                    </div>
                  </SplideSlide>
                </SplideTrack>
              </Splide>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Design & Creative
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
                <div className="px-2">
                  <h4>
                    <a href="#" className="card-title line-clamp">
                      Lorem ipsum dolor sit amet consectetur
                    </a>
                  </h4>
                  <p className="banner-blog--desc line-clamp line-clamp--2">
                    Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                    consectetur elementum aenean fringilla amet blandit duis.
                    Neque habitant odio donec adipiscing etiam lobortis volutpat
                  </p>
                  <p className="mb-0">
                    by
                    <a href="#" className="author link-dark fw-medium">
                      John Doe
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card featured-post--item has-overlay">
              <div className="ac-card-img-top">
                <img
                  src={blogImg1}
                  alt="Blog"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
                <Button
                  type="button"
                  className="play-btn fw-medium"
                  data-bs-toggle="modal"
                  data-bs-target="#watchNowModal"
                >
                  Watch Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(var(--ac-white), var(--ac-fillOpacity))",
                    }}
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="m9 17 8-5-8-5z"></path>
                  </svg>
                </Button>
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Corporate
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
                <div className="px-2">
                  <h4>
                    <a href="#" className="card-title line-clamp line-clamp--2">
                      Lorem ipsum dolor sit amet consectetur bibendum nunc in
                      amet auctor enim massa
                    </a>
                  </h4>
                  <Button
                    href="javascript();"
                    className="btn-outline-primary fw-medium mt-2"
                    data-bs-toggle="modal"
                    data-bs-target="#watchNowModal"
                  >
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watch Now Modal */}
      <WatchModal />
      {/* Watch Now Modal */}
    </section>
  );
};

export default FeaturesPosts;
