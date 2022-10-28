import "./App.css";
import profileImg from "./assets/images/profile__img.svg";
import Button from "./components/Button";
import { buttonNames } from "./components/buttonNames";
import slackImg from "./assets/images/slack__img.svg";
import githubImg from "./assets/images/github__img.svg";
import zuriImg from "./assets/images/zuri__img.svg";
import ingressiveImg from "./assets/images/ingressive__img.svg";

function App() {
  return (
    <div className="App px-4 md:px-28 w-full">
      <section className="md:px-8">
        <header className="pt-16 pb-14">
          <article className="flex items-center justify-center">
            <img src={profileImg} alt="profile__img" />
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
