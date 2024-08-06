function Hello(){
  let myname='rahil Yusuf';
  let number=42
  let fullname = () => {
    return 'Rahil Yusuf abubakkar';
  }
  return <h1>
    hello my name is {fullname()} and rollno is {number}
    </h1>
}
export default Hello;