import { useContext, useState } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import BuyerForm from "./BuyerForm";
import {db} from "../../utils/firebase";
import { Timestamp, addDoc, collection, updateDoc, doc } from "firebase/firestore";


export default function Cart() {
    const cartContext = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);	

    const cartItems = cartContext.cart.map(product => (
        <CartItem
            key={`cart-item-${product.item.id}`}
            product={product}
            removeFromCart={cartContext.removeFromCart}
        />
    ));

    const cartEmpty = (<>
        <div className="cart-empty">
            <h3>Tu carrito está vacío :( </h3>
        </div>
        <div>
            <Link to="/">
                <Button variant="secondary" className="button-back">
                    Volver a la tienda
                </Button>
            </Link>
        </div>
    </>
    );


    const cartContent = cartContext.cart.length ? cartItems : cartEmpty;

    const cartTotal = (
        <div className="cart-total">
            <h3>Total: ${cartContext.total}</h3>
            <Button onClick={cartContext.emptyCart}>Eliminar {cartContext.quantity} productos del carrito</Button>
        </div>
    );

    const cart = (<div className="cart">
        <h2>Carrito</h2>
        {cartContent}
        {cartTotal}
    </div>
    );

    const onSubmitBuyerInfo = async (e)=>{
        e.preventDefault();
        console.log(e);
        let order = {
            buyer: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value
            },
            items: cartContext.cart.map(product => ({
                id: product.item.id,
                title: product.item.title,
                quantity: product.quantity
            })),
            date: Timestamp.fromDate(new Date()),
            total: cartContext.total
        };
        console.log(order);
        const queryCollection = collection( db, "orders" );
        try {
            const docRef = await addDoc(queryCollection, order);
            console.log('docref', docRef.id);
            updateOrderElementsStock(order);
            setOrderId(docRef.id);
        } catch(error) {
            console.log('error',error);
        }
        
    };

    const updateOrderElementsStock = (order)=>{
        order.items.forEach(item => {
            const queryDoc = doc( db, "items", order.items[0].id );
            updateStock(queryDoc, {stock: item.stock - item.quantity});
        });
    };

    const updateStock = async (queryDoc, data)=>{ 
       await updateDoc(queryDoc, data);
    };


    return (<>
    {orderId !== null? 
        (<>
        <div className="cart-container">
            {cart}
        </div>
        {cartContext.cart.length &&
            (<div className="cart-order">
                <BuyerForm onSubmitOrder={onSubmitBuyerInfo} />
            </div>)
        }
        </>) : (
            <div className="container p-5">
                <h2>Tu pedido ha sido realizado con éxito</h2>
                <p>En breve recibirás un correo con los detalles de tu pedido</p>
                <h2> Tu número de orden es: { orderId }</h2>
                <Link to="/">
                    {/* todo limpiar valores carrito y orden */}
                    <Button variant="secondary" className="button-back">
                        Volver a la tienda
                    </Button>
                </Link>
            </div>
        )
    } 
    </>);
}