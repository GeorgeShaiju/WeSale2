import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <a href="#">Legal And Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: grey;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  .footer-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer-column {
    width: 20%;
    padding: 0 10px;
  }

  .footer-column h3 {
    margin-top: 0;
    font-size: 18px;
  }

  .footer-column ul {
    list-style-type: none;
    padding: 0;
  }

  .footer-column li {
    margin-bottom: 10px;
  }

  .footer-column a {
    color: #fff;
    text-decoration: none;
  }

  .footer-column a:hover {
    color: #ccc;
  }

  .fa {
    font-size: 20px;
  }
`;

export default Footer;