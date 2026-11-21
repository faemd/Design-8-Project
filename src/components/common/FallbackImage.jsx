import { useState } from "react"

const FallbackImage = ({src,fallbackSrc,className,alt}) => {
const [hasError,setHasError]=useState(false)
const imageSrc= hasError || !src ? fallbackSrc :src;

return (
    <img
    src={imageSrc}
    alt={alt}
    className={className}
    onError={()=>setHasError(true)}
    />
)
}

export default FallbackImage