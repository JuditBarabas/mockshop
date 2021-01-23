function groupByCategory(productsArr) {
  const categoryObj = {};
  productsArr.forEach((obj) => {
    const { category } = obj;
    if (category in categoryObj) {
      categoryObj[category].push(obj);
    } else {
      categoryObj[category] = [obj];
    }
  });
  return categoryObj;
}

function productsReducer(state = {}, action) {
  switch (action.type) {
    case "POPULATE_PRODUCTS":
      return groupByCategory(action.payload);
    default:
      return state;
  }
}

export default productsReducer;

/*
  {
    "mens clothing": [
      {
        ...,
        category: "mens clothing"
      },

      {
        ...,
        category: "mens clothing"
      }
    ],

    "womens clothing": [
      {
        ...,
        category: "womens clothing"
      },
      
      {
        ...,
        category: "womens clothing"
      }
    ]
  }
  */
