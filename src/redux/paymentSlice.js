const initialState = {
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    isProcessing: false,
    isSuccess: false,
    isError: false,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_CARD_NUMBER':
        return { ...state, cardNumber: action.payload };
      case 'SET_EXPIRY_DATE':
        return { ...state, expiryDate: action.payload };
      case 'SET_CVV':
        return { ...state, cvv: action.payload };
      case 'SET_CARDHOLDER_NAME':
        return { ...state, cardholderName: action.payload };
      case 'START_PROCESSING':
        return { ...state, isProcessing: true, isSuccess: false, isError: false };
      case 'PAYMENT_SUCCESS':
        return { ...state, isProcessing: false, isSuccess: true, isError: false };
      case 'PAYMENT_ERROR':
        return { ...state, isProcessing: false, isSuccess: false, isError: true };
      default:
        return state;
    }
  };
  
  export default paymentReducer;
  