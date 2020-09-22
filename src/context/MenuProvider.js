import React from "react";
import data from "../menu.json";

export const MenuContext = React.createContext();

const MenuProvider = (props) => {
  const [productos, setProductos] = React.useState([]);
  const [breakfast, setBreakfast] = React.useState([]);
  const [lunch, setLunch] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [order, setOrder] = React.useState([]);
  const [sum] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState([]);

  React.useEffect(() => {
    getMenu();
    getProduct();
  }, []);

  const getMenu = async () => {
    try {
      const res = data;

      setProductos(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const arrayBreakfast = data.breakfast;
      const arrayLunch = data.lunch;
      const arrayDrinks = data.drinks;
      setBreakfast(arrayBreakfast);
      setLunch(arrayLunch);
      setDrinks(arrayDrinks);
    } catch (error) {
      console.log(error);
    }
  };

  const clickProduct = (product) => {
    let orderr = {
      name: product.name,
      price: product.price,
    };

    setOrder([...order, orderr]);

    const productPrice = parseInt(product.price);

    sum.push = totalPrice.reduce(
      (price1, price2) => price1 + price2,
      product.price
    );

    totalPrice.push(productPrice);
    setTotalPrice([...totalPrice]);

    const nameProduct = order.map((objt) => objt.name);

    const priceProduct = order.map((objt) => objt.price);

    const sumName = nameProduct.reduce((contadorName, name) => {
      contadorName[name] = (contadorName[name] || 0) + 1;
      return contadorName;
    }, {});

    const sumPrice = priceProduct.reduce((contadorPrice, price) => {
      contadorPrice[price] = (contadorPrice[price] || 0) + 1;
      return contadorPrice;
    }, {});
  };
  return (
    <MenuContext.Provider
      value={{
        productos,
        breakfast,
        lunch,
        drinks,
        clickProduct,
        order,
        setOrder,
        sum,
        totalPrice,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
