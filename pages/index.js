import Page from "../components/Page";

export default function Home() {
  const buynow = (e) => {
    window.dataLayer.push({
      event: "custom_buy_now",
      eventTarget: e.target.id,
      eventAction: e.type,
    });
    console.log(e.target.id);
  };
  return (
    <Page>
      <h1>This is the Home page</h1>
      <button id="add_cart">Add to Cart</button>
      <button id="buy_now_button" onClick={buynow}>
        Buy Now
      </button>
    </Page>
  );
}
