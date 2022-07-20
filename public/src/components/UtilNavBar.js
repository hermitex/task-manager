import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import FormModal from "./Modal";

const UtilNavBar = ({ form }) => {
  return (
    <div>
      <Navbar dark={false}>
        <NavbarBrand className="me-auto">
          <div>Tasks</div>
          <small>19/07/2022</small>
        </NavbarBrand>
        <FormModal form={form} />
      </Navbar>
    </div>
  );
};

export default UtilNavBar;
