import Footer from "@/components/shared/Header/Footer"
import Header from "@/components/shared/Header/Header"



const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex h-screen flex-col">
        <Header/>
        <main className='flex-1 wrapper'>
      {children}
      </main>
     <Footer/>
    </div>
  )
}

export default CommonLayout