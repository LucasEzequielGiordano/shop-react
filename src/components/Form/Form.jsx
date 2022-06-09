import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext/CartContext";

const Formu = () => {
  // meto el valor en una variable, si toda son != '' que se pueda mandar

  const { buyOrder } = useCartContext();
  return (
    <Form>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input id="name" type="email" placeholder="Ingrese Su Nombre" />
        </div>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input id="lastName" type="email" placeholder="Ingrese Su Apellido" />
        </div>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input id="email" type="email" placeholder="Ingrese Su Email" />
        </div>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input
            id="repeatEmail"
            type="email"
            placeholder="Ingrese Nuevamente su Email"
          />
        </div>
      </FormGroup>

      <Button className="delete-button" onClick={(e) => buyOrder(e)}>
        comprar
      </Button>
    </Form>
  );
};

export default Formu;
