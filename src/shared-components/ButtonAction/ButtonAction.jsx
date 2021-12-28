import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./ButtonAction.css";

export default function ButtonAction({text,onClick}) {
  return (
    <>
    <a onClick={onClick} class="button-action">
      {text}
    </a>
    </>
  );
}
