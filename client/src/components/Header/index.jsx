import Link from 'next/link'
import React from 'react'
import Search from './Search'
import { IoIosGitCompare } from "react-icons/io";
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { styled } from '@mui/material/styles';
import { FaRegHeart } from "react-icons/fa";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const Header = () => {
  return (
    <>
      <div className='top-strip py-2 w-full  border-b-[1px] border-[rgba(0,0,0,0.1)]'>
            <div className='container flex items-center justify-between'>
                <p className='text-[15px] text-gray-800'>Limited-Time Offers : 
                  Mid-Summer Season Sale Live Now - Shop Now - <Link href={"#"} className='link hover:text-primary'>Shop Now</Link></p>

                  <ul className='flex items-center gap-3'>
                    <li><Link href={"#"} className='text-[14px] font-[500] text-gray-800 hover:text-primary'>Store Locator</Link></li>
                    <li><Link href={"#"} className='text-[14px] font-[500] text-gray-800 hover:text-primary'>Order Tracking</Link></li>
                    {/* <li><Link href={"#"} className='text-[14px] font-[500] text-gray-800 hover:text-primary'></Link></li> */}
                    {/* <li><Link href={"#"} className='text-[14px] font-[500] text-gray-800 hover:text-primary'></Link></li> */}
                  </ul>
            </div>
        </div>
    <header className='py-3'>
      <div className='container flex items-center justify-between'>
          <div className='logo'>
              <Link href={"/"}><img src="/logo1.jpg" alt="logo" className="w-[220px] h-[85px]" /></Link>
          </div>
          <Search />

          <div className='flex items-center justify-end gap-5'>
            <div className='flex items-center gap-2'>
              <Link href={"/login"} className='text-[15px] font-[600] text-gray-500 hover:text-primary'>Login</Link>
              <span className='text-[15px] font-[600] text-gray-600'>/</span>
               <Link href={"/Register"} className='text-[15px] font-[600] text-gray-500 hover:text-primary'>Register</Link>
            </div>
            
             <IconButton className='!min-w-[45px] !w-[45px] !h-[45px] !rounded-full !bg-gray-100 hover:!bg-gray-200'>
              <IoIosGitCompare size={20} className='text-gray-700' />
              <CartBadge badgeContent={5} color="primary" overlap="circular" />
           </IconButton>

            <IconButton className='!min-w-[45px] !w-[45px] !h-[45px] !rounded-full !bg-gray-100 hover:!bg-gray-200'>
              <AiOutlineShoppingCart size={20} className='text-gray-700' />
              <CartBadge badgeContent={5} color="primary" overlap="circular" />
           </IconButton>

           <IconButton className='!min-w-[45px] !w-[45px] !h-[45px] !rounded-full !bg-gray-100 hover:!bg-gray-200'>
              <FaRegHeart size={20} className='text-gray-700' />
              <CartBadge badgeContent={5} color="primary" overlap="circular" />
           </IconButton>

            {/* <Button className='!min-w-[45px] !w-[45px] !h-[45px] !rounded-full !bg-gray-100 hover:!bg-gray-200 !text-gray-800'>
              <IoIosGitCompare size={20} className='text-gray-700' />
              <span className='text-[12px] flex items-center justify-center w-[20px] h-[20px]
               rounded-full bg-primary absolute -top-[5px] -right-[5px] text-white'>5</span>  
            </Button> */}
            
          </div>
      </div>
    </header>
    </>
  )
}

export default Header
