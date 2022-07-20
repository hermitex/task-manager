import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";

const FormModal = ({form}) => {
  console.log(form)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
      Add New Task
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
         {form}
        </ModalBody>       
      </Modal>
    </div>
  );
};

export default FormModal;
