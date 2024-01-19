export const Navbar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>A-Z Library</span>
        <button type='button' className='navbar-toggler'
          data-bs-toggle= 'collapse' data-bs-target= '#navbarNavDropdown'
          aria-controls= 'navbarDropdown' aria-expanded= 'false'
          aria-label= 'Toggle Navigation'
        >
          <span className='navbar-toggle-icon'></span>
        </button>
         
        <div className='collapse navbar-collapse' id='navbarDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Search Books</a>
            </li>
          </ul>
          <ul className='navba-nav ms-auto list-unstyled'>
            <li className='nav-item'>
              <a href="#" className='btn btn-outline-light' type='button'>Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
} 