export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExistItem = cartItems.find((item) => item.id === cartItemToAdd.id)
  if (isExistItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    })
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
