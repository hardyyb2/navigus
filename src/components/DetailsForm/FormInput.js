import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    input: {
        color: '#f5f5f5',
        borderBottom: '1px solid #f5f5f5',
        outline: 'none'
    },
    label: {
        color: '#f5f5f5 !important',
        outline: 'none'
    },
}))


const FormInput = ({ elementConfig, elementType, label, valid, invalid, changed, value, touched }) => {
    const classes = useStyles()

    switch (elementType.toLowerCase()) {
        case 'input':
            return (
                <TextField
                    autoFocus={label.toLowerCase() === 'name'}
                    fullWidth
                    label={label}
                    type={elementConfig.type}
                    placeholder={elementConfig.placeholder}
                    value={value}
                    error={invalid && touched}
                    helperText={invalid && touched ? `Please fill a valid ${label}` : ' '}
                    onChange={changed}
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                />
            )
        default:
            return null
    }
}

export default FormInput