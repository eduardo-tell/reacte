import { useState } from "react";
import CardProduct from "../card-product/CardProduct";
import { useSelector } from "react-redux";
import './styles.scss';
import ButtonCount from "../buttonCount/ButtonCount";

export default function Cart() {
  const cartProducts = useSelector(state => state.cartProducts)
  // const [ styleListCartProducts, setstyleListCartProducts ] = useState(false)

  // function toggleCartProduct() {
  //   setstyleListCartProducts(!styleListCartProducts)
  // }

  return (
    <>
      <ButtonCount url="/carrinho" count={cartProducts?.length} name="Carrinho" />
      {/* <div className="p-1 relative">

        {/* <div className={`list-cartProducts list-cartProducts--${styleListCartProducts === true ? "open" : "close"} relative`}>
          <div className="list-cartProducts__items p-2 bg-white grid gap-2 rounded-md shadow-sm">
            {cartProducts?.map(cartProduct => {
              return (
                <CardProduct key={cartProduct.id} props={cartProduct} />
              )
            })}
          </div>
        </div>
      </div> */}
    </>
  )
}
