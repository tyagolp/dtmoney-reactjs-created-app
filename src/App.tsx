import { Dashboard } from "./componets/Dashboard";
import { Header } from "./componets/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./componets/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {


  const [isNewTransactionModalpen, serIsNewTransactionModalpen] = useState(false);

  function handleOpenNewTransactionModal() {
    serIsNewTransactionModalpen(true)
  }

  function handleCloseNewTransactionModal() {
    serIsNewTransactionModalpen(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}