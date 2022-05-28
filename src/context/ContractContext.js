import Web3 from "web3";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ABI, Contract } from "../Contract";

export const ContractContext = createContext({
  contract: null,
});

export const ContractProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = Web3.givenProvider;
    setWeb3(new Web3(provider));
  }, []);

  useEffect(() => {
    const loadContract = async () => {
      const contractTemp = await new web3.eth.Contract(ABI, Contract);

      setContract(contractTemp);
    };

    web3 && loadContract();
  }, [web3]);

  return (
    <ContractContext.Provider value={{ contract }}>
      {children}
    </ContractContext.Provider>
  );
};
