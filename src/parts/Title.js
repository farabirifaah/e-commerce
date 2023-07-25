import React from "react";

export default function Title(props) {
  return (
    <h1 className="mt-6 text-2xl font-semibold leading-8 text-center text-gray-600 mb-10">
      {props.title}
    </h1>
  );
}
