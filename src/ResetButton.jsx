import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setCount }) {
  const handelClick = (event) => {
    setCount(0);
    event.currentTarget.blur()
  };

  return (
    <button onClick={handelClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
