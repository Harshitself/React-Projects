// ./components/Dialog.jsx
import { useEffect, useRef } from "react";

function Modal(props) { 
  const ref = useRef(null);

  useEffect(() => {
    props?.isShowing? ref.current?.showModal() : ref.current?.close();
  }, [props.isShowing]);

  return (
    <dialog ref={ref}> {props.children} </dialog>
  );
}

export default Modal;