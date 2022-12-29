export const fetchCarDetails = (id) => ({
    type: "CAR_DETAILS_REQUEST", id

});

export const fetchCarPrice = (price, model) => ({
    type: "CAR_PRICE", price, model

});