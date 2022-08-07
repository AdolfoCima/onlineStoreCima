import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link, Navigate } from 'react-router-dom';
import './CartForm.css';


export const CartForm = (props) => {
  const { cartTotal, cart, thanksForYourPurchase } = useContext(CartContext);
  const [buyerName, setBuyerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [formIsSaving, setFormIsSaving] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const buyerNameHandler = (event) => {
    setBuyerName(event.target.value);
  };

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newBuyer = {
      name: buyerName,
      phone: phoneNumber,
      email: email,
    };

    const order = {
      buyer: newBuyer,
      items: cart.map((CartItem) => {
        return {
          id: CartItem.item.id,
          title: CartItem.item.name,
          price: CartItem.item.price,
          quantity: CartItem.quantity,
        };
      }),
      date: new Date().toString(),
      total: cartTotal(),
    };
    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, 'ordersCollection');

    setFormIsSaving(true);
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      thanksForYourPurchase(id);
      setBuyerName('');
      setEmail('');
      setPhoneNumber('');
      setFormIsSaving(false);
      setTimeout(() => {
        setRedirectToHome(true);
      }, 2000);
    });
  };

  return (
    <div className="container">
      {redirectToHome ? (
        <Navigate to="/" />
      ) : (
        <form onSubmit={submitHandler}>
          <h2>Complete los siguientes datos para finalizar su compra:</h2>
          <div className="mb-3">
            <label className="form-label">Nombre y Apellido:</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              value={buyerName}
              onChange={buyerNameHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={emailHandler}
            />
            <div id="emailHelp" className="form-text">
              Nosotros nunca compartiremos su email con alguien más.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Telefono:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Escriba su número telefónico"
              value={phoneNumber}
              onChange={phoneNumberHandler}
            />
          </div>
          <div className="modal-footer">
            <Link
              to="/"
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Volver
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              disabled={formIsSaving}
            >
              Finalizar compra
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
