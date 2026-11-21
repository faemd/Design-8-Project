
const Button = ({content,className}) => {
  return (
    <div className={`bg-primary-500 rounded-full px-3 py-5 text-white text-center heading-24 ${className||""}`}>
      {content}
    </div>
  )
}

export default Button