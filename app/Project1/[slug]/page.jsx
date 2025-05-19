"use client";
import React from "react";
import { courseDetails } from "../../data";
import "./page.css";

const Page = ({ params }) => {
  const { slug } = params;

  const course = courseDetails.find(
    (course) => course.id.toLowerCase() === slug.toLowerCase()
  );

  if (!course) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Course not found!</h2>
      </div>
    );
  }

  return (
    <div className="container-fluid course-container">
      <div className="card course-card">
        <div className="card-body text-center">
          <h1 className="course-title">{course.title}</h1>
          <p className="course-info">Duration: {course.duration}</p>
          <p className="course-info">Level: {course.level}</p>
          <h4 className="course-subheading">Projects</h4>
          <ul className="list-group project-list">
            {course.projects.map((project) => (
              <li key={project.id} className="list-group-item">
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
