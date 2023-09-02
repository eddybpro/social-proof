import Rating from "./Rating";

function Head() {
  return (
    <header>
      <div className="Head">
        <h1 className="Head-Title">10,000+ of our users love our products.</h1>
        <p className="Head-Para">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services
        </p>
      </div>
      <Rating />
    </header>
  );
}
export default Head;
