import PropTypes from 'prop-types';
import {
  Table,
  TableRow,
  Title,
  Type,
  Amount,
  Currency,
} from './TransactionHistory.styled';

function TransactionHistory({ transactions }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </TableRow>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <Type>{type}</Type>
              <Amount>{amount}</Amount>
              <Currency>{currency}</Currency>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
