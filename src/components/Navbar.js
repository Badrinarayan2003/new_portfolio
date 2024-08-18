const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg w-100 p-0 position-absolute nav-section">
            <div className="container">
                <div className="navbar-brand nav-logo text-light">
                    <h1 className="mb-0">B</h1>
                </div>

                <div className="nav-btn-box">
                    <a href="https://www.linkedin.com/in/badri-narayan-thamba/">
                        <button className='glowing-btn'><span className='glowing-txt'>@_<span className='faulty-letter'>CON</span>NECT</span></button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;