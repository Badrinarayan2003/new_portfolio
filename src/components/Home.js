import Button from "./Button";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const Home = () => {
    return (
        <div className="home-section overflow-hidden">
            <video autoPlay loop muted playsInline className="bg-clip">
                <source src="./assets/videos/video-1.mp4" type="video/mp4" />
            </video>
            <div className="hero-section ">
                <div className="hero-content">
                    <h1 className="mb-3">Badri Narayan Thamba</h1>
                    <h4 className="mb-4">Frontend Developer</h4>
                    <a href="/">
                        <Button name="About Me" />
                    </a>
                </div>
            </div>
            <div className="social-box">
                <div className="home-social-icon mb-3">
                    <a href="https://www.linkedin.com/in/badri-narayan-thamba/"><FaLinkedinIn /></a>
                </div>
                <div className="home-social-icon mb-3">
                    <a href="mailto:badrithamba@gmail.com"><IoMail /></a>
                </div>
                <div className="home-social-icon mb-3">
                    <a href="https://github.com/Badrinarayan2003"><FaGithub /></a>
                </div>
                <div className="home-social-icon mb-3">
                    <a href="/"><FaXTwitter /></a>
                </div>
                <div className="home-social-icon mb-3">
                    <a href="/"><GrInstagram /></a>
                </div>
            </div>
            <div className="cv-btn-box">
                <a href="https://drive.google.com/file/d/1KDxt-ZU_lnY9HGhHYU2lksgRZmX7lKHW/view"><Button name="Download Cv" /></a>
            </div>

        </div>
    )
}

export default Home;