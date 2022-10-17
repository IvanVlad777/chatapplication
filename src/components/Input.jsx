const Input = (props) => {
    return(
        <input 
            type={props.type}
            id={props.id}
            name={props.name}
            className={props.className}
            onChange={props.onChange}
            value={props.value}
        />
    );
}

export default Input;