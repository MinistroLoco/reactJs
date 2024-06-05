const Button = (props) => {
    const {name} = props;
    return (
        <>
        <button className="bg-accent px-5 py-2 text-white">{name}</button>
        </>
    )
}

export default Button;