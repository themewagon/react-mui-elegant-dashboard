import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const TablePagination: Components<Omit<Theme, 'components'>>['MuiTablePagination'] = {
  defaultProps: {
    labelDisplayedRows: ({ from, to, count }) => {
      return `Showing ${to - from + 1} of ${count} products`;
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      ':last-child': {
        borderRadius: theme.shape.borderRadius * 5,
      },
      borderRadius: theme.shape.borderRadius * 5,
    }),
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 0',
    },
    spacer: {
      flex: 'none',
    },
    select: {
      display: 'none !important',
    },
    selectLabel: {
      display: 'none',
    },
    input: {
      display: 'none',
    },
    displayedRows: {
      flex: 'auto',
      fontSize: '12px',
      fontWeight: 400,
      color: '#6F757E',
    },
    actions: {},
  },
};

export default TablePagination;
