import { Tooltip, withStyles } from '@material-ui/core'

//custmized tooltip
export const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f5',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: '0.8rem',

    },
}))(Tooltip);
