
type ButtonContactTypeProps = {
  className: string
  classContainer: string,
  img: string,
  paragraph: string
};

const ButtonContact = ({ className, classContainer, img, paragraph }: ButtonContactTypeProps) => {
  return (
    <div className={className}>
      <img className='w-6 h-6' src={img} alt="img" />
      <p className={classContainer}>{paragraph}</p>
    </div>
  )
}

export default ButtonContact