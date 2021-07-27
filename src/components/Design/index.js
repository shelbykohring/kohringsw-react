import React from "react";
import moosicImg from '../../assets/images/moosic.png';
import hikeNowImg from "../../assets/images/hike-now.png";
import planItImg from "../../assets/images/simply-plan-it.png";
import bookfastClubImg from "../../assets/images/bookfast-club.png";

function Design() {
  return (
    <main>
      <div className="project">
        <section className="projects col-12">

          <div className="section-title d-flex justify-content-center">
            <h1 className="m-5 font-weight-light">GRAPHIC DESIGN</h1>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://kohringsw.github.io/hike-now/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 d-block w-100 h-auto"
                  src={hikeNowImg}
                  alt="Hike Now landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://kohringsw.github.io/hike-now/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/kohringsw/hike-now"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://lit-escarpment-33126.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 d-block w-100 h-auto"
                  src={moosicImg}
                  alt="Hike Now landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://lit-escarpment-33126.herokuapp.com/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/Ondayko14/Moosic"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://kohringsw.github.io/simply-plan-it/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={planItImg}
                  alt="Simply Plan It landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://kohringsw.github.io/simply-plan-it/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/kohringsw/simply-plan-it"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://the-bookfast-club.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={bookfastClubImg}
                  alt="Bookfast Club landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://the-bookfast-club.herokuapp.com/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/BeatyPete/the-bookfast-club.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Design;