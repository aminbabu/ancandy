import { useState } from "react";
import blogImg3 from "../../../assets/images/blog-3.png";
import blogImg4 from "../../../assets/images/blog-4.png";
import blogImg5 from "../../../assets/images/blog-5.png";
import blogImg6 from "../../../assets/images/blog-6.png";
import robotBannerImg from "../../../assets/images/robot-banner.png";
import Button from "../../../components/Button";

const BlogPosts = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <section className="blog-posts section">
      <div className="container">
        <div className="row g-4 gy-md-0 my-4 py-3">
          <div className="col-md-8 col-xl-9">
            <div className="card card-lg">
              <div className="ac-card-img-top">
                <img
                  src={blogImg3}
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Development
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
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card banner-add">
              <div className="card-img-top h-100">
                <img
                  src={robotBannerImg}
                  alt="Banner"
                  width="850"
                  height="400"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-img-overlay">
                <h2 className="h5 ff-dm-sans fw-bold mb-3">
                  Do you need any creative service for your business?
                </h2>

                <Button
                  className="btn-primary fw-medium"
                  data-bs-toggle="modal"
                  data-bs-target="#contactUsModal"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-4 pb-3">
          <div className="col-lg-4">
            <div className="card">
              <div className="ac-card-img-top">
                <img
                  src={blogImg4}
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
          <div className="col-lg-4">
            <div className="card">
              <div className="ac-card-img-top">
                <img
                  src={blogImg5}
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Marketing
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
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
          <div className="col-lg-4">
            <div className="card">
              <div className="ac-card-img-top">
                <img
                  src={blogImg6}
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Tools
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
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
          <div className={`col-lg-4 ${show ? "" : "loadable-post"}`}>
            <div className="card">
              <div className="ac-card-img-top">
                <img
                  src={blogImg4}
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
          <div className={`col-lg-4 ${show ? "" : "loadable-post"}`}>
            <div className="card">
              <div className="ac-card-img-top">
                <img
                  src={blogImg5}
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Marketing
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
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
          <div className={`col-lg-4 ${show ? "" : "loadable-post"}`}>
            <div className="card">
              <div className="ac-card-img-top">
                <img
                  src={blogImg6}
                  alt="Banner"
                  width="850"
                  height="400"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <div className="blog-meta">
                  <a href="#" className="blog-topic">
                    Tools
                  </a>
                  <div className="blog-published-date">10 June 2023</div>
                </div>
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
        <div className="text-center">
          {!show && (
            <Button
              className="btn-lg btn-outline-primary fw-medium"
              onClick={handleClick}
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
