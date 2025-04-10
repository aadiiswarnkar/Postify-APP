import React from 'react'
import { Container, LogoutBtn, Logo } from '../index'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'


const Header = () => {

    const authstatus = useSelector((state) => 
        state.auth.status
    )
    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authstatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authstatus,
        },
        {
            name: "All Post",
            slug: "/allpost",
            active: authstatus,
        },
        {
            name: "Add Post",
            slug: "/addpost",
            active: authstatus,
        },
    ]



    return (
        <header className='py-3 shadow bg-orange-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {
                            navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                        className='bg-[#0D47A1] text-white px-4 py-2 mx-6 rounded-md hover:bg-[#1565C0] transition-colors duration-200'
                                        onClick={() => navigate(item.slug)}
                                        >{item.name}</button>
                                    </li>
                                ) : null
                            )}

                    {authstatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}

                        

                    </ul>
                </nav>
            </Container>


            </header>
    )
}

export default Header