import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  border-radius: 10px;
  margin: 0 auto 30px;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;

  color: rgb(105, 105, 105);
  background-color: rgb(240, 240, 240);

  :nth-of-type(even) {
    background-color: rgb(247, 247, 247);
  }

  & td {
    padding: 10px 20px;
  }

  :last-of-type td:first-of-type {
    border-bottom-left-radius: 10px;
  }

  :last-of-type td:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

export const Title = styled.th`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 20px;
  color: white;
  text-transform: uppercase;

  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0, 183, 255),
    rgb(0, 183, 255) 10px,
    rgb(75, 204, 255) 10px,
    rgb(75, 204, 255) 10.5px
  );

  :first-of-type {
    border-top-left-radius: 10px;
  }

  :last-of-type {
    border-top-right-radius: 10px;
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
  text-align: start;
  padding: 10px 40px;
`;

export const Amount = styled.td`
  font-weight: 700;
`;

export const Currency = styled.td``;
