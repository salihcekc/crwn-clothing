import styled from "styled-components";

import Button from "../Button/Button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 200px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 20px;
  }
`;

export const FormContainer = styled.form`
  height: 200px;
  min-width: 500px;
  padding: 5px;

  @media screen and (max-width: 800px) {
    min-width: 300px;
    height: 150px;
    width: 100%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
