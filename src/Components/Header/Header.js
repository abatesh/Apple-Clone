import React from 'react';
import logo from '../../images/icons/logo-sm.png';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';
import HeaderList from './HeaderList/HeaderList';

function Header() {
    return (
		<div class="nav-wrapper fixed-top">
		<div class="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="#">
					<img src={logo}/>
					</a>
			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-jus tified w-100 nav-fill">
						{/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li> */}
						<HeaderList LinkUrl="/mac" LinkName="Mac"></HeaderList>
						<HeaderList LinkUrl="/iphone" LinkName="Iphone"></HeaderList>
						<HeaderList LinkUrl="#" LinkName="iPad"></HeaderList>
						<HeaderList LinkUrl="#" LinkName="Watch"></HeaderList>.
						<HeaderList LinkUrl="#" LinkName="tv"></HeaderList>
						<HeaderList LinkUrl="/music" LinkName="MMusic"></HeaderList>
						<HeaderList LinkUrl="/support" LinkName="Support"></HeaderList>
						{/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li> */}
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/">
							<img src={search}/></a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
			        </ul>`
			    </div>
			</nav>
			</div>
			</div>

)
}
export default Header;
