type InputProps = {
    value: string;
    onChange: (value: string) => void;
}

function Input({ value, onChange }: InputProps) {
    return (
        <input
      className="input"
      type="email"
      placeholder="Enter your email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    )
}

export default Input