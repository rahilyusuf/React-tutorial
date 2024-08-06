function Random(){
  let Number=Math.random() *10;
  return <h1 style={{'background-color':'#766751'}}>random number is {Math.round(Number)}</h1>
}
export default Random;