"use client";
import React from "react";
import { courseDetails } from "../../data";
const page = ({ params }) => {
  const { slug } = React.use(params);
  const course = courseDetails.find((course) =>
    course.title.toLowerCase().includes(slug.toLowerCase())
  );
  console.log("course", course);

  return <div>page={slug}</div>;
};

export default page;
