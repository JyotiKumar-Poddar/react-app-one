import React from 'react'
import PropTypes from 'prop-types'


function SelectInput(props) {
    let wrapperClass = "form-group";
    if (props.error.length > 0) {
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <select
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    className="form-control">
                    <option value="" />
                    {props.data.map(v => {
                        return <option id={v.id}
                            value={v.id}>
                            {v.name}
                        </option>
                    })}
                </select>
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>
    );


}
SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

SelectInput.defaultProps = {
    error: ""
};

export default SelectInput;