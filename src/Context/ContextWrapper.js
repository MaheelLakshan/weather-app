import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
  const [selectedCardData, setSelectedCardData] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        selectedCardData,
        setSelectedCardData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
