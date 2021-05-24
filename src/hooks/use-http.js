import { useCallback, useReducer } from 'react';

const httpReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending'
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed'
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed'
    };
  }

  return {
    data: null,
    error: null,
    status: 'pending'
  };
};

const useHttp = (requestFn) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: 'pending',
    data: null,
    error: null
  });

  const sendRequest = useCallback(async (requestData) => {
    dispatch({ type: 'SEND' });
    try {
      const responseData = await requestFn(requestData);
      dispatch({ type: 'SUCCESS', responseData });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'ERROR', errorMessage: error.message || 'Something went wrong!' });
    }
  }, []);

  return {
    sendRequest,
    ...httpState
  };
};

export default useHttp;
