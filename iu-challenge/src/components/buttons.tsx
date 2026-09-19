type ButtonProps = {
    label: string
}
function Button({label}: ButtonProps) {
    return (
        <button className="subscribe-btn">{label}</button>
    )
}

export default Button

