import React from "react";
import SideNavbarStyle from "./SideNavbar.Style";
import Button from "../Button/Button";
import pp from "../../../assets/rishi.jpg";

function SideNavbar() {
  return (
    <SideNavbarStyle>
      <div className="Button">
        <Button img={pp} size="medium" link="/profile">
          Rishikesh Khakurel
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png"
          size="medium"
          link="/covid"
        >
          Covid-19 Information Center
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          size="medium"
          link="/friend"
        >
          Friends
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
          size="medium"
          link="/Group"
        >
          Groups
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
          size="medium"
          link="/marketplace"
        >
          MarketPlace
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          size="medium"
          link="/Watch"
        >
          Watch
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
          size="medium"
          link="/Events"
        >
          Events
        </Button>
      </div>
      <div className="border" />
      <div className="title">
        <p>Your Shortcuts</p>
      </div>
      <div className="Button">
        <Button
          img="https://scontent.fktm4-1.fna.fbcdn.net/v/t39.2081-6/c0.0.193.193a/p192x192/93784162_181015852954000_7621124819110592512_n.png?_nc_cat=1&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=3mtcSuUbYIoAX_bI-gJ&_nc_ht=scontent.fktm4-1.fna&oh=ff7fb09eb2d12d243055fe60a5ed7782&oe=60FE1F0F"
          size="medium"
          link="/Events"
        >
          Snakes & Ladders Multiplayer
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://scontent.fktm4-1.fna.fbcdn.net/v/t39.2081-6/c6.6.31.31a/p36x36/44126100_2264592917103954_8738803969570111488_n.png?_nc_cat=1&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=j8S04j3whL0AX-rsMed&_nc_ht=scontent.fktm4-1.fna&oh=e441ed66d35148d5565e4b0cce9b8f0d&oe=60FDE220"
          size="medium"
          link="/Events"
        >
          Ludo King
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-9/cp0/c0.4.50.50a/p50x50/196396949_177721137624811_4941167399412089315_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ac9ee4&_nc_ohc=9tI_-S4e5kYAX_64IUu&_nc_ht=scontent.fktm4-1.fna&oh=75b780847e99a2d347ca0365c9e3c6ea&oe=60FE491C"
          size="medium"
          link="/Events"
        >
          Smile Please
        </Button>
      </div>
      <div className="Button">
        <Button
          img="https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-0/cp0/c21.0.50.50a/p50x50/118319986_2718975631757623_1534347628832533872_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ac9ee4&_nc_ohc=nW1lXLGvnSoAX-mnEgz&_nc_ht=scontent.fktm4-1.fna&oh=13881df053590c6a561f2ef4d9f1c4bb&oe=60FD788E"
          size="medium"
          link="/Events"
        >
          Kathmandu University (KU) Pidit
        </Button>
      </div>
    </SideNavbarStyle>
  );
}

export default SideNavbar;
