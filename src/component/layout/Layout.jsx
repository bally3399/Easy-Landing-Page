import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Section from "../../pages/homepage/section/Section";
import LatestArticles from "../../pages/homepage/latestArticles/LatestArticles";
import HeroPage from "../../pages/homepage/heroPage/HeroPage";

const Layout = () =>{
    return(
        <>
            <Navbar></Navbar>
            <HeroPage/>
            {/*<Section/>*/}
            <LatestArticles/>
            <Footer></Footer>
        </>
    )
}
export default Layout