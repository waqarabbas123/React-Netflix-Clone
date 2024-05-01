import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="bdy">
          <div className="navbar">
            <img src="./images-removebg-preview.png" alt="" />
            <button className="btn1">Sign in</button>
          </div>

          <div className="content">
            <h3>
              Unlimited movies, <br /> TV shows, and more
            </h3>
            <p className="p-1">Starts at Rs 250. Cancel anytime.</p>
            <p className="p-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="input">
              <input type="text" placeholder="Email address" required />
              <button className="btn2">
                Get Started <i class="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
