import React, { useState } from "react";
import "./HomePage.css";
import {
  Input,
  Form,
  Button,
} from "../../Components/FormComponents/FormComponents";
import MainContent from "../../Components/MainContent/MainContent";
import Container from "../../Components/Container/Container";
import Location from "../../assets/Icons/location.svg";
import Phone from "../../assets/Icons/phone.svg";
import Email from "../../assets/Icons/email.svg";
import Article from "../../Components/Article/Article";
import Ocean from "../../assets/images/ocean.jpg";
import Mountains from "../../assets/images/mountains.jpg";
import Image from "../../Components/Image/Image";
import CinqueTerre from "../../assets/images/cinqueterre.jpg";
import NewYork from "../../assets/images/newyork.jpg";
import SanFrancisco from "../../assets/images/sanfran.jpg";
import Pisa from "../../assets/images/pisa.jpg";
import Paris from "../../assets/images/paris.jpg";
import NavForm from "../../Components/NavForm/NavForm";

const HomePage = () => {
  const [editForm, setEditForm] = useState("Flight");
  const [clicked1, setClicked1] = useState(false);

  // const showFlightForm = () => {
  //   setEditForm("Flight");
  // };

  // const showHotelForm = () => {
  //   setEditForm("Hotel");
  // };

  // const showRentalForm = (e) => {
  //   setEditForm("Rental");
  // };

  // const configNavForm = () => {

  // }

  return (
    <>
      <MainContent>
        <section className="travel-section">
          {window.innerWidth < 768 ? (
            <NavForm
              additionalClass="navForm"
              clicked1={true}

              manipulationFunction1={() => {

                setEditForm("Flight")


              }}

              manipulationFunction2={() => {
                setEditForm("Hotel")
              }}

              manipulationFunction3={() => {
                setEditForm("Rental")
              }}
            />
          ) : null}

          <Container>
            <div className="travel-section__content">
              {window.innerWidth >= 768 ? (
                <NavForm
                  additionalClass="navForm"

                clicked1={true}


                  manipulationFunction1={() => {

                    setEditForm("Flight")



                  }}

                  manipulationFunction2={() => {
                    setEditForm("Hotel")
                  }}

                  manipulationFunction3={() => {
                    setEditForm("Rental")
                  }}
                />
              ) : null}

              <Form additionalClass={"form-viagem"}>
                {editForm === "Flight" ? (
                  <>
                    <h1>Travel the worl with us</h1>
                    <div className="form-viagem__inputs">
                      <div className="form-viagem__box">
                        <label htmlFor="form-viagem__from">From</label>
                        <Input
                          type={`text`}
                          name={"form-viagem__input form-viagem__from"}
                          placeholder={"Departing"}
                          additionalClass="form-viagem__input form-viagem--from"
                          //manipulationFunction={""}
                          required={"required"}
                        />
                      </div>

                      <div className="form-viagem__box">
                        <label htmlFor="form-viagem__arriving">To</label>
                        <Input
                          type={`text`}
                          name={"form-viagem__input form-viagem--arriving"}
                          placeholder={"Arriving at"}
                          additionalClass="form-viagem__input form-viagem__arriving"
                          //manipulationFunction={""}
                          required={"required"}
                        />
                      </div>
                    </div>
                    <Button textButton={"Search and find dates"} />
                  </>
                ) : editForm === "Hotel" ? (
                  <>
                    <h1>Find the best hotels in the world with us</h1>
                    <div className="form-viagem__inputs">
                      <div className="form-viagem__box">
                        <label htmlFor="form-viagem__from">Find a Hotel:</label>
                        <Input
                          type={`text`}
                          name={"form-viagem__input form-viagem__from"}
                          placeholder={"Choose a hotel for you"}
                          additionalClass="form-viagem__input form-viagem--from"
                          //manipulationFunction={""}
                          required={"required"}
                        />
                      </div>
                      <div className="form-viagem__box">
                        <label htmlFor="form-viagem__from">Find a Hotel:</label>
                        <Input
                          type={`text`}
                          name={"form-viagem__input form-viagem__from"}
                          placeholder={"Choose a hotel for you"}
                          additionalClass="form-viagem__input form-viagem--from"
                          //manipulationFunction={""}
                          required={"required"}
                        />
                      </div>
                    </div>
                    <Button textButton={"Search and find hotels"} />
                  </>
                ) : (
                  <>
                    <h1>Rent a car for the lowest price with us</h1>
                    <div className="form-viagem__inputs">
                      <div className="form-viagem__box">
                        <label htmlFor="form-viagem__from">Rent a car:</label>
                        <Input
                          type={`text`}
                          name={"form-viagem__input form-viagem__from"}
                          placeholder={"Choose a hotel for you"}
                          additionalClass="form-viagem__input form-viagem--from"
                          //manipulationFunction={""}
                          required={"required"}
                        />
                      </div>
                    </div>
                    <Button textButton={"Search and find cars"} />
                  </>
                )}
              </Form>
            </div>
          </Container>
        </section>

        <section className="offers-section">
          <Container>
            <div className="offers-section__content">
              <div className="offers-section__title">
                <h2>Good Offers Right Now</h2>
                <p>
                  Up to <strong>50%</strong> discount.
                </p>
              </div>

              <div className="offers-section__images-5">
                <Image
                  imageRender={CinqueTerre}
                  figcaption="Cinque Terre"
                  additionalClass="offers-section__image-location"
                />

                <div className="offers-section__images--4">
                  <div className="offers-section__images--2">
                    <Image
                      imageRender={NewYork}
                      figcaption="New York"
                      additionalClass="offers-section__image-location"
                    />
                    <Image
                      imageRender={SanFrancisco}
                      figcaption="San Francisco"
                      additionalClass="offers-section__image-location"
                    />
                  </div>

                  <div className="offers-section__images--2">
                    <Image
                      imageRender={Pisa}
                      figcaption="Pisa"
                      additionalClass="offers-section__image-location"
                    />
                    <Image
                      imageRender={Paris}
                      figcaption="Paris"
                      additionalClass="offers-section__image-location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="explore-section">
          <Container>
            <div className="explore-section__content">
              <div className="explore-section__title">
                <h1>Explore Nature</h1>
                <p>Travel with us and see nature at its finest.</p>
              </div>
              <div className="explore-section__content-box">
                <Article
                  imageRender={Ocean}
                  title={"West Coast, Norway"}
                  price={"Roundtrip from $79"}
                />

                <Article
                  imageRender={Mountains}
                  title={"Mountains, Austria"}
                  price={"One-way from $39"}
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="newsletter-section">
          <Container>
            <Form additionalClass="newsletter-section__content">
              <div className="newsletter-section__title">
                <h2>Get the best offers first!</h2>
                <p>Join our newsletter.</p>
              </div>

              <div className="input-camp-newsletter">
                <label htmlFor="input-component--newsletter">E-mail</label>
                <Input
                  type={"email"}
                  placeholder={"Your Email address"}
                  additionalClass="input-component--newsletter"
                  name={"input-component--newsletter"}
                  required={"required"}
                />
              </div>
              <Button
                textButton={"Subscribe"}
                additionalClass="button-component--red"
              />
            </Form>
          </Container>
        </section>

        <section className="contact-section">
          <Container>
            <div className="contact-section__content">
              <div className="contact__info-box">
                <h2>Contact</h2>
                <p>Let us book your next trip!</p>

                <div className="info-box__content">
                  <div className="info-box__line">
                    <img src={Location} alt="" />
                    <p>Chicago, US</p>
                  </div>

                  <div className="info-box__line">
                    <img src={Phone} alt="" />
                    <p>Phone: +00 151515</p>
                  </div>

                  <div className="info-box__line">
                    <img src={Email} alt="" />
                    <p>Email: mail@mail.com</p>
                  </div>
                </div>
              </div>

              <Form additionalClass={"contact-form"}>
                <Input
                  type={"text"}
                  required={"required"}
                  placeholder={"Name"}
                  additionalClass="input-component input-component--component-form"
                />

                <Input
                  type={"email"}
                  required={"required"}
                  placeholder={"Email"}
                  additionalClass="input-component input-component--component-form"
                />

                <Input
                  type={"text"}
                  required={"required"}
                  placeholder={"Message"}
                  additionalClass="input-component input-component--component-form"
                />

                <Button
                  textButton={`SEND MESSAGE`}
                  additionalClass="button-component--black"
                />
              </Form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default HomePage;
