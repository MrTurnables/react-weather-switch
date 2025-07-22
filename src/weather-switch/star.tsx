
const Star = ({size}:{size:number}) => {
  return (
    <div style={{
        position:'absolute',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }}>
        <div style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            backgroundColor:"#fff",
            height:`${size * 0.04}rem`,
            aspectRatio:"1/3",
            boxShadow:"0px 0px 5px 0px #fff",
            borderRadius:"50%"
        }}></div>
        <div style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            backgroundColor:"#fff",
            width:`${size * 0.035}rem`,
            aspectRatio:"3/1",
            boxShadow:"0px 0px 5px 0px #fff",
            borderRadius:"50%"
        }}></div>
    </div>
  )
}

export default Star