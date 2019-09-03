import React from "react";
import "./PageTemplate.css";

const PageTemplate = ({ form, children, onCreate }) => {
  return (
    <main className="item-template">
      <div className="title">
        Test
      </div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default PageTemplate;
