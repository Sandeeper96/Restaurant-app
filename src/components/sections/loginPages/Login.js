import HeroImage from "../../../assets/food/food4.webp";
export default function Login() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <div style={{display:"flex"}}>
          <label htmlFor="">User Name:</label>
          <input type="text" name="" id="" placeholder="Enter User Name" />
          </div>
          <div>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter Your" />
          </div>
          <div>
            <button className="login-but">Login</button>
          </div>
          
        
      </div>
    </header>
  );
}
