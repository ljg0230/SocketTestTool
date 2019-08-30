import React from "react";
import "./item.css";

const item = ({ form, children, onCreate }) => {
  return (
    <main className="item-template">
      <div className="title">
        Test
        <div className="create-button" onClick={onCreate}>
          Start
        </div>
      </div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default item;
