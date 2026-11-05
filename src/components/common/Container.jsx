

const Container = ({children,className}) => {
  return (
    <div className={`mx-auto w-full p-4 xl:p-8 ${className} `}>
       {children} 
    </div>
  )
}

export default Container