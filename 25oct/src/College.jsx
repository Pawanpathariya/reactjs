const College=({name ,city,cls,children})=>{
    return(
        <>
       <h1 style={{color:"red"}}> {children}</h1>
       <h1>my name is :{name}</h1>
        <h2>my city is: {city}</h2>
        <h2>my class is: {cls}</h2>
       <h1 style={{color:"red"}}> {children}</h1>
        </>
    )
}
export  default College;