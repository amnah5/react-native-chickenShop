import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  removeItem = (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
  };
  checkout = () => {
    this.items = [];
    alert("thank you for shopping");
  };
  addItemToCart = (product, quantity) => {
  try {
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );
    if (foundItem) {
      foundItem.quantity = quantity;
    } else {
      const newItem = {
        product: product,
        quantity: quantity,
      };
    }
    this.items.push(newItem);
  
  } catch (error) {
    console.log("error")
  } 
  }
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchCart;
export default cartStore;
