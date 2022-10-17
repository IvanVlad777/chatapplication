const Label = ({ forEl, children }) => {
    return (
        <label htmlFor={forEl}>{children}</label>
    );
}

export default Label;