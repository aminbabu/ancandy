import teamBgImg from "../../../assets/images/team-bg.png";
import Button from "../../../components/Button";

const Team = () => {
  return (
    <section className="team-jubotron">
      <div
        className="bg-holder"
        style={{ backgroundImage: `url(${teamBgImg})` }}
      ></div>
      {/*// bg-holder  */}
      <div className="container">
        <div className="inner-content text-center">
          <h2 className="text-white ff-dm-sans">
            Creative team, intuitive solution
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur. Enim vitae hendrerit
            consectetur cras in nulla. Non suspendisse at ac enim. Facilisi
            nulla tortor nec mollis faucibus odio sodales.
          </p>
          <Button
            className="btn-lg btn-white fw-medium"
            data-bs-toggle="modal"
            data-bs-target="#contactUsModal"
          >
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
