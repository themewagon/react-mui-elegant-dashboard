import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
    defaultProps: {

    },
    styleOverrides: {
        root: {
            backgroundColor: 'transparent',
            paddingTop: 0,
            paddingBottom: 0,
            'label + &': {
                marginTop: '25px',
            },
            ":before": {
                border: 0,
            },
            ":hover :before": {
                border: 0,
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
                border: 0,
            },
            ":focus" : {
                border: 0
            },
            "::after": {
                border: 0,
            },
            "&.Mui-focused" : {
                "::before": {
                    border: 0,
                },
                ":focus" : {
                    border: 0,
                    borderColor: '#E1E1E1',
                }
            }
        },
    }
};

export default InputBase;