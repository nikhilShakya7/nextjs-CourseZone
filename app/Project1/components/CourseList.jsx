import React from "react";
import { courses, courseDetails } from "../../data.js";

const CourseList = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h1 className="text-center my-4">COURSEZONE</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card p-3 text-center shadow-sm">
              <div className="mb-3" style={{ fontSize: "2rem" }}>
                {course.icon}
              </div>
              <h5>{course.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
