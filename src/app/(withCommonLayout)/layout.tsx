import GoToTop from "@/components/shared/GoToTop/GoToTop"
import Footer from "@/components/shared/Header/Footer"
import Header from "@/components/shared/Header/Header"



const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Header/>
        <div className="min-h-screen wrapper">
      {children}
      </div>
      <Footer/>
     <GoToTop/>
    </div>
  )
}

export default CommonLayout