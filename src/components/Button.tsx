import styled from "styled-components";

const PrimaryButton = styled.button`
  background: #a5e2e2;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  font-weight: 500;
  display: block;
`;

const SecondaryButton = styled(PrimaryButton)`
  background: #6B8AB9;
`;

export { PrimaryButton, SecondaryButton };
