import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../Header/Header";
import TopHead from "../Header/TopHead";
import Footer from "../Footer/Footer";
import BottomFooter from "../Footer/BottomFooter";
import { Carousel, Container } from "react-bootstrap";
import desk from "../../Assets/pc.png";
import imac from "../../Assets/imac.png";
import laptop from "../../Assets/laptopc.png";
import mac from "../../Assets/macbook.jpeg";
import { RiMacLine, RiMacbookLine } from "react-icons/ri";
import { FaWindows, FaLaptop, FaKey } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SiMicrosoftoffice } from "react-icons/si";
import { GrTroubleshoot } from "react-icons/gr";
import Toasts from "../Helpers/Toasts";
import Quotes from "../Helpers/Quotes";

const ComputersRepair = () => {
  const [products, setProducts] = useState([]);
  const api = axios.create({
    baseURL: `https://localhost:5001/api/products`,
  });
  const [useToast, setUseToast] = useState(false);
  async function getData() {
    try {
      let res = await axios({
        url: "https://localhost:5001/api/products",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        setProducts(res);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  getData().then((res) => console.log(res));
  useEffect(() => {
    setUseToast(true);
  }, []);
  return (
    <ComputersRepairStyled>
      {useToast && (
        <Toasts
          title="Warning"
          text="kindly note that computer hardware repair needs at least couple days to get fixed!"
          color="warning"
        />
      )}
      <TopHead />
      <Header />
      <Carousel style={{ margintop: "2%", marginbuttom: "2%", zIndex: "-5" }}>
        <Carousel.Item>
          <img className="img" src={imac} alt="iMac slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={desk} alt="Desktop slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={laptop} alt="Laptop slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={mac} alt="Macbook slide" />
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <h1 className="headername">Computers Services</h1>
        <div className="bodyWrap">
          <div className="service">
            <div className="nestedService">
              <div className="serviceList">
                <p className="icons">
                  <HiOutlineDesktopComputer style={{ fontSize: "100px" }} />
                </p>
                <h4>Pc's</h4>
              </div>
              <div className="serviceList">
                <p className="icons">
                  <RiMacLine style={{ fontSize: "100px", color: "E0BFB8" }} />
                </p>
                <h4>iMac</h4>
              </div>
            </div>
            <div className="nestedService">
              <div className="serviceList">
                <p className="icons">
                  <RiMacbookLine
                    style={{ fontSize: "100px", color: "E0BFB8" }}
                  />
                </p>
                <h4>Macbook</h4>
              </div>
              <div className="serviceList">
                <p className="icons">
                  <FaLaptop style={{ fontSize: "100px", color: "gray" }} />
                </p>
                <h4>Laptop's</h4>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="nestedService">
              <div className="serviceList">
                <p className="icons">
                  <GrTroubleshoot style={{ fontSize: "50px" }} />
                </p>
                <h4>Troubleshooting</h4>
              </div>
              <div className="serviceList">
                <p className="icons">
                  <FaKey style={{ fontSize: "50px", color: "gold" }} />
                </p>
                <h4>Password bypass</h4>
              </div>
            </div>
            <div className="nestedService">
              <div className="serviceList">
                <p className="icons">
                  <FaWindows
                    style={{ fontSize: "50px", color: "DodgerBlue" }}
                  />
                </p>
                <h4>OS installation</h4>
              </div>
              <div className="serviceList">
                <p className="icons">
                  <SiMicrosoftoffice
                    style={{ fontSize: "50px", color: "red" }}
                  />
                </p>
                <h4>Software Issues</h4>
              </div>
            </div>
          </div>
        </div>
        <Quotes />
      </div>

      <Footer />
      <BottomFooter />
    </ComputersRepairStyled>
  );
};
const ComputersRepairStyled = styled.div`
  color: #081c4b;

  .img {
    width: 100%;
    height: 650px;
  }
  .container {
    align-items: center;
  }
  .bodyWrap {
    margin-right: 20%;
    align-items: center;
    flex-direction: column;
    display: flex;
  }
  .service {
    flex-direction: row;
    display: flex;
  }
  .nestedService {
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: row;
    display: flex;
  }
  .serviceList {
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: column;
    display: flex;
  }
  .headername {
    text-align: center;
  }

  .icons {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
  @media (max-width: 1000px) {
    .img {
      height: 200px;
    }
    .headername {
      text-align: center;
    }
    .bodyWrap {
      align-items: center;
      flex-direction: column;
      display: flex;
    }
    .service {
      flex-direction: column;
      display: flex;
    }
    .nestedService {
      flex-direction: row;
      display: flex;
    }
    .serviceList {
      flex-direction: column;
      display: flex;
    }
  }
`;
export default ComputersRepair;
