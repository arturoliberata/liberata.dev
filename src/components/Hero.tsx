import me from "../assets/me.png";

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Arturo Seoane Liberata</h1>
        <div className="tagline">
          I'm a .NET software developer based in Nebraska.
        </div>
      </div>
      <img src={me} alt="profile picture" className="avatar" />
    </div>
  );
}

export default Hero;
