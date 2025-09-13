
type ButtonProps = {
      className: string,
      label: string,
      handleClick?: () => void
}

const Button = ({ className, label, handleClick }: ButtonProps) => {
      return (
            <button className={className} onClick={handleClick}>{label}</button>
      )
}

export default Button