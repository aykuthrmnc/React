import modals from "~/routes/modals";
import { removeModal } from "~/store/modal/actions";
import { useModal } from "~/store/modal/hooks";

const Modal = () => {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);

  return (
    currentModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--background-modal)]">
        <div className="max-h-[90vh] max-w-[600px] overflow-auto rounded-2xl bg-[color:var(--background-primary)]">
          <currentModal.element close={removeModal} />
        </div>
      </div>
    )
  );
};
export default Modal;
