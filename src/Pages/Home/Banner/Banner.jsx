import banner from "../../../assets/banner/banner-1.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Tiny Tire Trek</h1>
          <p className="text-3xl w-[60%] py-6">
            Discover the Miniature Marvel: Tiny Tire Trek – Where Adventure
            Rolls into Playtime Bliss!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
