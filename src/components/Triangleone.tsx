
const Triangleone = () => {
//  const PrintTrianlge =(n:number): void => {
//     for (let i = n; i > 0; i++){
//         console.log(" *". repeat(i))

//     }
//  }
 const takeAvg= (x: number, y: number): void => {
    const avg =(x+y)/2;
    console.log(avg);
 }

 const CountNumber(x:number, ...n:number[]): number =>{
    let count = 0 
for(let i=0; i< n.length; i++){
if (n[i] === x) 
    count++
}
  console.log(count)
  return count
 }



  return (
    <div>
      <>
      
      <button className="bg-amber-600" onClick={() => takeAvg(5,2)}></button></>
     
    </div>
  )
}

export default Triangleone
