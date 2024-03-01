import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100" style={{ display: "flex", justifyContent: "center" ,backgroundColor:"#212731",color:"white" }}>

            {/* <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Categories</a></li>
                        <li><a>Website Builders</a></li>
                        <li><a>Today's deals </a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div> */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">



                    <div style={{ width: "258px", height: "37px" ,border:"2px solid gray",borderRadius:"10px",display:"flex",alignItems:"center",paddingLeft:"3px",backgroundColor:"white"}}>
                        <svg style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>

                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                    <li className='pl-10'><a>Categories</a></li>
                    <li  className='pl-10'><a>Website Builders</a></li>
                    <li  className='pl-10'><a>Today's deals </a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;