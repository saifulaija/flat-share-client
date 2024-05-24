import DetailsCard from "./components/DetailsCard"


type TProps={
    params:{
        flatId:string
    }
}

const FlatDetailsPage = ({params}:TProps) => {
  const id= params.flatId
 
 
  return (
    <div>
      <DetailsCard id={id}/>
    </div>
  )
}

export default FlatDetailsPage