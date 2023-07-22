
export const CardContent =({title, duration, price}) => {
return (
    <div className='card-content-conteiner'>
        <h2>{title}</h2>
        <p>{duration}</p>
         <p><span>$</span>{price}</p>  
    </div>
)

}