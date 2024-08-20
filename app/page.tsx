import Header from "../components/Header";
import Spotlight from "@/components/Spotlight";
import Moveing from "@/components/moveing";
import About from "@/components/About";
import Experiance from "@/components/Experiance";
import Prtojects from "@/components/Prtojects";
import Pricing from "@/components/Pricing ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="site-content-contain">
                <div id="content" className="site-content container"> <label className="jnj-theme-preferences-false"> </label> </div>
                <div className="wrap">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main">
                            <article id="post-4240" className="post-4240 page type-page status-publish hentry">
                                <div className="entry-content">
                                    <Spotlight />
                                    <Moveing />
                                    <br />
                                    <About />
                                    <Experiance />
                                    <Prtojects />
                                    <Pricing />
                                    <Blog />
                                    <Footer />
                                </div>
                            </article>
                        </main>
                    </div>
                </div>

            </div>
        </div>
    );
}
