import { BrowserRouter as Router, Link } from "react-router-dom";
function Header(props) {  
    return (
      <Router>
          <header>
            <nav>
                <div className="main-nav-left">
                  <img className="logo" src="https://s3-alpha-sig.figma.com/img/c41d/424d/f87fdc4ba5fd3b7131ea8a02647b4e4b?Expires=1609718400&Signature=YGzbxQekaAaLMY6~G5ZIcC86kwum5InIlTmEcNgbcnXZmN5gqhraXkWA5ITvdjMOUzc8ROTLvJwpq3Xfl8EMvAc~wCdo6RsdQM5nk7Rul4RORpYl8KTrsdfhuwpCcBWD6eZI8k76PLgRAFTOq~aX6Z9SizFIeE6ZQz6ol58jptN8dDkyhiNz3DoPRwCf92N9Qnc7o3svMa3wPyJ3Z4Xx4Z4Y-15Ae9SGEDMIt4-AkrXmGaLVYvxiZHnZskBW4GPSBvvHNqO2qMBZJElHWgkzYduE2Zlx1SQL8yVxyS3J2u7H39qX83jbNQoM00im3HLb7GLXnnT~gP8IPP4VPr~8PA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                  <ul className="main-nav">
                      <li>
                        <Link to="/">Khách sạn</Link>
                      </li>
                      <li>
                        <Link to="/Chỗ ở riêng">Chỗ ở riêng</Link>
                      </li>
                      <li>
                        <Link to="/Ưu đãi">Ưu đãi</Link>
                      </li>
                    </ul>   
                    <div className="sign-in">
                      <Link to="/Become a part of us">Become a part of us</Link>
                    </div> 
                </div>
              </nav>
          </header>  
      </Router>        
    );
}

export default Header;