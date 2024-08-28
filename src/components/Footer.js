import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdCallMade } from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer-section overflow-hidden py-3">
            <div className="footer-box d-flex align-items-center">
                <div className="footer-contact-detail-box d-flex">
                    <a className="footer-phone fw-bold" href="tel:+91 6371785300" target="blank"><MdCallMade /> +91 6371785300</a>
                    <a className="footer-mail fw-bold" href="mailto:badrithamba@gmail.com" target="blank"><IoMdMail /> badrithamba@gmail.com</a>
                </div>
                <div className="footer-social d-flex align-items-center mt-2">
                    <div className="footer-social-icon me-3">
                        <a href="https://www.linkedin.com/in/badri-narayan-thamba/"><FaLinkedinIn /></a>
                    </div>
                    <div className="footer-social-icon me-3">
                        <a href="https://github.com/Badrinarayan2003"><FaGithub /></a>
                    </div>
                    <div className="footer-social-icon me-3">
                        <a href="/"><FaXTwitter /></a>
                    </div>
                    <div className="footer-social-icon me-3">
                        <a href="/"><GrInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;