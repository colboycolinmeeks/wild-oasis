import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function EditCabin({ cabin }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form"></Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm cabinToEdit={cabin} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default EditCabin;
