import React, { useState } from "react";
import "./App.css";
import profileImg from "./assets/images/profile__img.svg";
import Button from "./components/Button";
import { buttonNames } from "./components/buttonNames";
import slackImg from "./assets/images/slack__img.svg";
import githubImg from "./assets/images/github__img.svg";
import zuriImg from "./assets/images/zuri__img.svg";
import ingressiveImg from "./assets/images/ingressive__img.svg";
import cameraIcon from "./assets/images/camera__icon.svg";
import ReactTooltip from "react-tooltip";

function App() {
  const [isShown, setIsShown] = useState(false);

  console.log(isShown);

  return (
    <div className="App px-4 md:px-28 w-full">
      <section className="md:px-8">
        <header className="pt-16 pb-14">
          <ReactTooltip
            id="shareTip"
            place="left"
            effect="solid"
            padding="8px 12px"
            className="share_tip"
          >
            Share Link
          </ReactTooltip>
          {/* Destop Share Link button */}
          <svg
            className="btn_share cursor-pointer"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-tip
            data-for="shareTip"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <rect
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              fill={isShown ? "#F2F4F7" : "white"}
            />
            <path
              d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
              stroke={isShown ? "#667085" : "#98A2B3"}
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              stroke="#D0D5DD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 3"
            />
          </svg>
          {/* Mobile Share Link button */}
          <svg
            className="btn_share_mobile cursor-pointer"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <rect
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              fill={isShown ? "#F9FAFB" : "white"}
            />
            <path
              d="M21 21.8334C21.4602 21.8334 21.8333 21.4603 21.8333 21.0001C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21.0001C20.1666 21.4603 20.5397 21.8334 21 21.8334Z"
              stroke={isShown ? "#667085" : "#98A2B3"}
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.8333 21.8334C27.2935 21.8334 27.6666 21.4603 27.6666 21.0001C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21.0001C26 21.4603 26.3731 21.8334 26.8333 21.8334Z"
              stroke={isShown ? "#667085" : "#98A2B3"}
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.1666 21.8334C15.6269 21.8334 16 21.4603 16 21.0001C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21.0001C14.3333 21.4603 14.7064 21.8334 15.1666 21.8334Z"
              stroke={isShown ? "#667085" : "#98A2B3"}
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              stroke="#D0D5DD"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="1 3"
            />
          </svg>
          <article className="flex items-center justify-center">
            <div className="profile_container cursor-pointer">
              <img
                className="profile_img"
                src={profileImg}
                alt="profile__img"
              />

              <img className="camera_img" src={cameraIcon} alt="" />
            </div>
          </article>
          <h1 className="profile_heading pt-6">Annette Black</h1>
        </header>
        <section className="">
          {buttonNames.map((name, i) => (
            <Button name={name.name} link={name.link} id={name.id} key={i} />
          ))}
        </section>
        <article className="container flex items-center justify-center pb-16">
          <div className="flex space-x-6">
            <img src={slackImg} alt="slack" />
            <img src={githubImg} alt="github" />
          </div>
        </article>
      </section>
      <footer className=" w-full">
        <hr />
        <div className="space-y-4 md:flex items-center justify-between py-12 w-full md:space-y-0">
          <img src={zuriImg} alt="slack" />
          <p className="text-left">HNG Internship 9 Frontend Task</p>
          <img src={ingressiveImg} alt="github" />
        </div>
      </footer>
    </div>
  );
}

export default App;
