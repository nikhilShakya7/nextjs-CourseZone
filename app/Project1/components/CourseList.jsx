"use client";
import React from "react";
import { courses } from "../../data.js";
import "./CourseList.css";
import Link from "next/link";

const CourseList = () => {
  return (
    <div className="container coursezone-container">
      <h1 className="text-center my-4">COURSEZONE</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h5 className="course-title">{course.title}</h5>
              <Link
                href={`/project1/${course.id}`}
                className="btn btn-outline-warning mt-4"
              >
                Explore Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
