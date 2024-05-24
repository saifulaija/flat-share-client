type TProps={
    params:{
        flatId:string
    }
}

const FlatDetailsPage = ({params}:TProps) => {
  return (
    <div>FlatDetailsPage {params.flatId}</div>
  )
}

export default FlatDetailsPage