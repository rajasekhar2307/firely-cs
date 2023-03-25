"use client";

import Container from "@mui/material/Container";
import { useState } from "react";
import { isForOfStatement } from "typescript";
import Button from "./Button";
import WaitListForm from "./WaitListForm";

enum iconTypeEnum {
  arrowRight = "ARROW_RIGHT",
}
const Banner = () => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const handleJoinWaitList = () => {
    setIsFormVisible(true);
  };
  return (
    <div className="hero-section__container">
      <div className="banner-bg">
        {!isFormVisible && (
          <Container>
            <div className="hero-section">
              <h1 className="hero-section__text">
                Reading is an adventure, and we&apos;ve got your ticket.
              </h1>
              <p className="hero-section__subtext">
                We present you to the world of books where you can find the best
                at affordable rates, so escape reality and find your books with
                us.
              </p>
              <div className="cta-buttons">
                <Button
                  disabled={false}
                  text="Coming soon!"
                  className="mt-16"
                />
                <Button
                  disabled={false}
                  text="Join the waitlist!"
                  className="mt-16"
                  onClick={handleJoinWaitList}
                />
              </div>
            </div>
          </Container>
        )}
        {isFormVisible && (
          <Container>
            <div className="form-container">
              <WaitListForm />
            </div>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Banner;
