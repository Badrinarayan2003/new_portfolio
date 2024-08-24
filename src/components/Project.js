import { projectData } from "./Data.js"
import { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";

function Project() {
    const [center, setCenter] = useState(false)

    const checkScreenSize = () => {
        if (window.innerWidth > 767) {
            setCenter(true);
        } else {
            setCenter(false);
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };

    }, []);


    return (
        <div className="project-section overflow-hidden">
            <h2 className="text-center fw-bold project-heading"><span>My Latest Works</span></h2>
            {
                projectData.map((item) => {
                    return (
                        <div className="row" key={item.p_id} style={{ flexDirection: item.row_direction }}>
                            <div className={`col-md-5 d-flex align-items-center project-img-parent-box ${center && item.position}`}>
                                <div className={`project-img-box ${center && `${item.position ? "me-4" : "ms-4"}`}`}>
                                    <img src={item.image} alt={`image-${item.p_id}`} />
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5 d-flex align-items-center project-content-parent-box">
                                <div className="project-content-box">
                                    <h4 className="fw-bold project-centent-heading"><a href={item.p_url} style={{ color: item.color }}>{item.p_name} <TbExternalLink /></a></h4>
                                    <p className="mb-2 project-centent-sub-heading" style={{ color: item.color }}>{item.p_type}</p>
                                    <p className="project-content-description">{item.p_desc}</p>
                                    <div className="project-used-technology-box d-flex">
                                        {
                                            item && item.p_tech.map((tech, index) => {
                                                return (
                                                    <p key={index} className="mb-2 me-2 project-used-technology-text">#{tech}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Project;