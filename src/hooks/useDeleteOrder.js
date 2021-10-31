import axios from 'axios';

const useDeleteOrder = (id) => {
  const url = `https://chilling-barrow-28883.herokuapp.com/orders/${id}`;
  axios.delete(url).then((res) => console.log(res));
};
export default useDeleteOrder;
