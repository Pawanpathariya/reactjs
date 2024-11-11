const EmpDesign=(props)=>{
    return(
        <>
        <div className="popat">
<h2>Employee Id :{props.id}</h2>
   <h2>Name :{props.nm}</h2>
   <h2>Designation :{props.desi}</h2>
   <h2>Salary : {props.sal}</h2>
   </div>
        </>
    )
}

export default EmpDesign;