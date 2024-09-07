"use client";

import EnquiryModal from "./EnquiryModal";
import { useModal } from "./context/ModalContext";

export default function EnquiryFormContainer() {
  const { isOpen, closeModal } = useModal();
  return <div>{isOpen && <EnquiryModal closeModal={closeModal} />}</div>;
}
