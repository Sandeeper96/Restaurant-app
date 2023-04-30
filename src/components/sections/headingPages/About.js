export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>My Restaurant</h1>
        <h2>Varanasi</h2>
        <p className="about-subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          architecto fugit excepturi eaque nam tempora officiis dolore itaque.
          Id maxime sed eligendi libero quidem ut. Et deserunt sapiente totam
          nobis!
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-1"
          src={require("../../../assets/food/food3.jpeg")}
          alt="pic"
        ></img>
        <img
          className="about-2"
          src={require("../../../assets/food/food2.jpeg")}
          alt="pic"
        ></img>
      </section>
    </article>
  );
}
