import React from 'react';

const GlobalContext = React.createContext({
  selectedCardData: null,
  setSelectedCardData: (index) => {},
});

export default GlobalContext;
