import React from "react";
import { TeamOneItem } from "./TeamOneItem";
import teamMember1 from "../../assets/img/team/01.png";
import teamMember2 from "../../assets/img/team/02.png";
import teamMember3 from "../../assets/img/team/03.png";
import teamMember4 from "../../assets/img/team/04.png";

export const TeamOne = () => {
  const teamMembers = [
    {
      delay: ".3s",
      src: teamMember1,
      title: "Alson P. Paladin",
      designation: "Alson P. Paladin",
    },
    {
      delay: ".4s",
      src: teamMember2,
      title: "Teresa L. Marion",
      designation: "Hr Specialist",
    },
    {
      delay: ".5s",
      src: teamMember3,
      title: "Donna D. Dicken",
      designation: "Economy Manager",
    },
    {
      delay: ".6s",
      src: teamMember4,
      title: "Dianne M. Mason",
      designation: "Legal Officer",
    },
  ];

  return (
    <div className="td-team-area td-grey-bg pt-140 pb-100">
      <div className="container">
        <div className="row">
          {/* header */}
          <div className="col-12">
            <div
              className="td-team-title-wrap text-center mb-95 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Our Team</span>
              <h2 className="td-section-title">Meet our legends</h2>
            </div>
          </div>

          {/* Team members */}
          {teamMembers.map((member, index) => (
            <TeamOneItem key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};
