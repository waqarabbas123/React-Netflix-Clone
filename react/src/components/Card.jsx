import "./Card.css";

function Card() {
  return (
    <div>
      <div className="outer">
        <h2 className="h-2">A Plan To Suit Your Needs</h2>
        <div className="main">
          <div className="card">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            <p className="p-2">Rs 1,100/month</p>
          </div>
          {/* ------2------- */}
          <div className="card">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            <p className="p-2">Rs 1,100/month</p>
          </div>
          {/* ------3-------- */}
          <div className="card">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            <p className="p-2">Rs 1,100/month</p>
          </div>
          {/* ------4------- */}
          <div className="card">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            <p className="p-2">Rs 1,100/month</p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      <div className="outer">
        <h2 className="h-2">A Plan To Suit Your Needs</h2>
        <div className="main">
          <div className="card card-2">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
          </div>
          {/* ------2------- */}
          <div className="card card-2">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            <i class="bi bi-arrow-down-circle-fill"></i>
          </div>
          {/* ------3-------- */}
          <div className="card card-2">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            
          </div>
          {/* ------4------- */}
          <div className="card card-2">
            <h2>PREMIUM</h2>
            <p className="p-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, laboriosam.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
