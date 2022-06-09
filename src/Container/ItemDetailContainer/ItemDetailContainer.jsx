import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loader/Loader";

const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState({});
  const { detailId } = useParams();

  /* A hook that is called when the component is mounted. It is a function that is called when the
  component is mounted. */
  useEffect(() => {
    const db = getFirestore();

    const dbQuery = doc(db, "products", detailId);

    getDoc(dbQuery)
      .then((resp) => setProducts({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div>
      {loader ? (
        <Loading greeting={"Cargando..."} />
      ) : (
        <ItemDetail product={products} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
