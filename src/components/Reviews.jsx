import ColtonImg from "../assets/image-colton.jpg";
import IreneImg from "../assets/image-irene.jpg";
import AnneImg from "../assets/image-anne.jpg";

function Reviews() {
  return (
    <main>
      <div className="Review">
        <div className="Review-User">
          <img src={ColtonImg} alt="colton smith" className="Review-User-Img" />
          <div>
            <h4 className="Review-User-Name">Colton Smith</h4>
            <p className="Review-User-Position">Verified Buyer</p>
          </div>
        </div>
        <p className="Review-Para">
          &quot;We needed the same printed design as the one we had ordered a
          week prior. Not only did they find the original order, but we also
          received it in time. Excellent!&quot;
        </p>
      </div>
      <div className="Review">
        <div className="Review-User">
          <img src={IreneImg} alt="irene roberts" className="Review-User-Img" />
          <div>
            <h4 className="Review-User-Name">Irene Roberts</h4>
            <p className="Review-User-Position">Verified Buyer</p>
          </div>
        </div>
        <p className="Review-Para">
          &quot;Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery.&quot;
        </p>
      </div>
      <div className="Review">
        <div className="Review-User">
          <img src={AnneImg} alt="anne wallace" className="Review-User-Img" />
          <div>
            <h4 className="Review-User-Name">Anne Wallace</h4>
            <p className="Review-User-Position">Verified Buyer</p>
          </div>
        </div>
        <p className="Review-Para">
          &quot;Put an order with this company and can only praise them for the
          very high standard. Will definitely use them again and recommend them
          to everyone!&quot;
        </p>
      </div>
    </main>
  );
}
export default Reviews;
