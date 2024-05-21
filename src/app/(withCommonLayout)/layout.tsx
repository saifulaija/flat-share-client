import Header from "@/components/shared/Header/Header"



const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Header/>
        <div className='min-h-[cal(100vh-190px)]'>
      {children}
      </div>
     
    </>
  )
}

export default CommonLayout