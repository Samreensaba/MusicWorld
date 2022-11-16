/** @format */
import { CardElement } from "@stripe/react-stripe-js";
import "../css/FormComponent.css";

const FormComponent = () => {
  return (
    <div className="container form">
      <div id="Checkout" className="inline">
        <h1>Payment</h1>
        <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
        </div>
        <div className="all">
          <div className="form-group">
            <label>Name on card</label>
            <input id="NameOnCard" className="form-control" type="text"></input>
          </div>
          <div className="form-group">
            <label>Card number</label>
            <CardElement className="card-elem" />
          </div>

          <div className="cvc-preview-container two-card hide">
            <div className="amex-cvc-preview"></div>
            <div className="visa-mc-dis-cvc-preview"></div>
          </div>
          {/* <div className="zip-code-group form-group">
            <label>ZIP/Postal code</label>
            <div className="input-container">
              <input id="ZIPCode" className="form-control" type="text"></input>
            </div>
          </div> */}
          <button
            type="submit"
            id="PayButton"
            className="btn btn-block btn-success submit-button">
            <span className="align-middle">Pay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
