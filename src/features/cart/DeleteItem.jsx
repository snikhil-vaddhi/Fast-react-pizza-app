import Buttons from "../../ui/Buttons";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Buttons type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Buttons>
  );
}

export default DeleteItem;
