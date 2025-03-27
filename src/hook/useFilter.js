
export function useFilter () {

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= 20
      )
    })
  }

  return {filterProducts}
}
