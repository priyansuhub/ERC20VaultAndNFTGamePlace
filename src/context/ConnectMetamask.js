import React, { createContext, useState } from "react";
//create context object
const Obj = createContext({
  account: null,
  connectMetamask: () => null,
  changeAccount: () => null,
});
const ConnectMetamask = ({ children }) => {
  const [account, setAccount] = useState(null);
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Metamask is not installed");
    }
  };
  const changeAccount = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
  };
  return (
    <Obj.Provider value={{ account, connectMetamask, changeAccount }}>
      {children}
    </Obj.Provider>
  );
};

export { ConnectMetamask, Obj };
