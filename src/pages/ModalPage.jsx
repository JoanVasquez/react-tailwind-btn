import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handlerClose = () => {
    setShowModal(false);
  };

  const handlerClick = () => {
    setShowModal(true);
  };

  const actionBar = (
    <>
      <Button primary onClick={handlerClose}>
        I Accept
      </Button>
    </>
  );

  const modal = (
    <Modal onClose={handlerClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde cum
        tempore nostrum fugit, distinctio dolor dicta fuga commodi velit
        adipisci quis error totam deleniti optio ipsa itaque dolores iure!
      </p>
    </Modal>
  );
  return (
    <div>
      <Button primary rounded outline onClick={handlerClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
