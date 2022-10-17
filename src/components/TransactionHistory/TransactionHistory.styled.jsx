import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 480px;
  margin: 0 auto;
  background-color: white;

  th {
    padding: 8px 0;
    text-transform: uppercase;
    background-color: darkcyan;
    color: #fff;
  }

  td {
    width: 33.3333%;
    padding: 8px 0;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid darkgrey;
  }

  td:first-child {
    text-align: left;
    padding-left: 52px;
  }

  td:nth-child(2) {
    text-align: right;
    padding-right: 60px;
  }

  tr:nth-of-type(2n + 1) {
    background-color: lightblue;
  }
`;
