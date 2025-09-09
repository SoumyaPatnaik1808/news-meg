import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand badge text-bg-light" href="#">NewsMag</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <div className="nav-link" href="#">Technology</div>
      </li>
        <li className="nav-item">
          <div className="nav-link" href="#">Business</div>
      </li>
        <li className="nav-item">
          <div className="nav-link" href="#">Health</div>
      </li>
        <li className="nav-item">
          <div className="nav-link" href="#">Sports</div>
      </li>
      
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
