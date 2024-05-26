const CountDown = () => {
  return (
    <div className="grid justify-items-center m-5 gap-5">
      <h1 className="text-2xl text-center font-bold text-accent">
        Grab Before offer end{" "}
      </h1>
      <div>
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 32 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
