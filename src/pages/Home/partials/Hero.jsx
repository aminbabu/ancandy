import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import heroBgImg from "../../../assets/images/site-bg.svg";
import Button from "../../../components/Button";

const options = {
  type: "loop",
  speed: 750,
  focus: "center",
  gap: "1.125rem",
  padding: "1rem",
  arrows: false,
  pagination: true,
  easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  autoplay: true,
  updateOnMove: true,
  mediaQuery: "min",
  breakpoints: {
    576: {
      gap: "1rem",
      arrows: true,
      padding: "10%",
    },
    768: {
      gap: "1.5rem",
      padding: "15%",
    },
    992: {
      gap: "1.875rem",
      padding: "20%",
    },
  },
};

const Hero = () => {
  return (
    <section className="hero-banner hero-padding-top section">
      <div
        className="bg-holder"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      ></div>
      {/*// bg-holder  */}
      <Splide
        className="banner-carousel"
        options={options}
        hasTrack={false}
        aria-label="Hero banner carousel"
      >
        <SplideTrack>
          <SplideSlide>
            <div className="card card-lg banner-blog">
              <div className="ac-card-img-top">
                <img
                  src="https://images.unsplash.com/photo-1496309732348-3627f3f040ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Design & Creative
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
                <h2>
                  <a href="#" className="card-title line-clamp">
                    Lorem ipsum dolor sit amet consectetur
                  </a>
                </h2>
                <p className="banner-blog--desc line-clamp line-clamp--2">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                </p>
                <Button href="#" className="btn-outline-primary fw-medium">
                  Read More
                </Button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card card-lg banner-blog">
              <div className="ac-card-img-top">
                <img
                  src="https://images.unsplash.com/photo-1688408958906-48319544f983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Design & Creative
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
                <h2>
                  <a href="#" className="card-title line-clamp">
                    Egestas aliquet quam consectetur elementum aenean frin
                  </a>
                </h2>
                <p className="banner-blog--desc line-clamp line-clamp--2">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                </p>
                <Button href="#" className="btn-outline-primary fw-medium">
                  Read More
                </Button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card card-lg banner-blog">
              <div className="ac-card-img-top">
                <img
                  src="https://images.unsplash.com/photo-1496309732348-3627f3f040ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Design & Creative
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
                <h2>
                  <a href="#" className="card-title line-clamp">
                    Lorem ipsum dolor sit amet consectetur
                  </a>
                </h2>
                <p className="banner-blog--desc line-clamp line-clamp--2">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                </p>
                <Button href="#" className="btn-outline-primary fw-medium">
                  Read More
                </Button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card card-lg banner-blog">
              <div className="ac-card-img-top">
                <img
                  src="https://images.unsplash.com/photo-1688408958906-48319544f983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Design & Creative
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
                <h2>
                  <a href="#" className="card-title line-clamp">
                    Egestas aliquet quam consectetur elementum aenean frin
                  </a>
                </h2>
                <p className="banner-blog--desc line-clamp line-clamp--2">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                </p>
                <Button href="#" className="btn-outline-primary fw-medium">
                  Read More
                </Button>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_15_47)">
                <path
                  d="M18.56 9.43991L13.52 4.39991C13.2 4.07991 12.72 4.07991 12.4 4.39991C12.08 4.71991 12.08 5.19991 12.4 5.51991L16.08 9.19991H2.00001C1.52001 9.19991 1.20001 9.51991 1.20001 9.99991C1.20001 10.4799 1.52001 10.7999 2.00001 10.7999H16.08L12.4 14.4799C12.08 14.7999 12.08 15.2799 12.4 15.5999C12.56 15.7599 12.8 15.8399 12.96 15.8399C13.12 15.8399 13.36 15.7599 13.52 15.5999L18.56 10.5599C18.72 10.3999 18.8 10.2399 18.8 9.99991C18.8 9.75991 18.72 9.59991 18.56 9.43991Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_47">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_15_47)">
                <path
                  d="M18.56 9.43991L13.52 4.39991C13.2 4.07991 12.72 4.07991 12.4 4.39991C12.08 4.71991 12.08 5.19991 12.4 5.51991L16.08 9.19991H2.00001C1.52001 9.19991 1.20001 9.51991 1.20001 9.99991C1.20001 10.4799 1.52001 10.7999 2.00001 10.7999H16.08L12.4 14.4799C12.08 14.7999 12.08 15.2799 12.4 15.5999C12.56 15.7599 12.8 15.8399 12.96 15.8399C13.12 15.8399 13.36 15.7599 13.52 15.5999L18.56 10.5599C18.72 10.3999 18.8 10.2399 18.8 9.99991C18.8 9.75991 18.72 9.59991 18.56 9.43991Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_47">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </Splide>
    </section>
  );
};

export default Hero;
