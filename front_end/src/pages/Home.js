import * as React from "react";
import "./Home.css";
const Home = () => {
  const propsData = {
    dashboard: {
      dashboard: {
        search: "search",
        events: "Events\n",
        myTickets: "My Tickets\n",
        connectWallet: "Connect Wallet",
        createEvent: "Create Event\n\n",
      },
    },
  };
  return (
    <div className="home">
      <br />
      <br />
      <span className="nf-ticket">FSE Project Home</span>
      <span className="create-events-view-a">
        Website Motto {" "}
      </span>
      <div className="rectangle-4">
        <span className="website-description">website description</span>
      </div>
    </div>
  );
};
export default Home;
