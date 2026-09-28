import React from "react";
import DepositForm from "./DepositForm";
import { Container } from "reactstrap";

const Deposit = () => {
  document.title = "Deposit | Equivest";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <DepositForm />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Deposit;


