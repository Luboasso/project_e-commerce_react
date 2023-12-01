export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      await axios.post(
        API_URL + "/orders",
        { productIds: order },

        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};