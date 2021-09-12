import { CartDisplay } from "../Components/CartDisplay"
import { SaveLaterDisplay } from "../Components/SaveLaterDisplay"
import { useGlobal } from "../Context/context"

export const CartPage = () => {
    const {state, dispatch} = useGlobal()
    return(
        <div>
            <h1>Cart</h1>
            <CartDisplay/>
            <hr/>
            {state.saveLater.length > 0 ? (
                <div>
                    <h1>Saved For later</h1>
            <SaveLaterDisplay/>
                </div>
            ): null}
        </div>
    )
}