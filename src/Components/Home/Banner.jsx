const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/MNVCB2D/john-t-3-HN5kh-Xw-PE-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Elevate Your Stride with Every Step
          </h1>
          <p className="mb-5">
            Discover our latest collection designed for unparalleled comfort and
            style. Your journey starts here
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
