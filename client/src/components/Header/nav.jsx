"use client"
import { Button } from '@mui/material'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import React, { useState } from 'react'
import Link from 'next/link';
import { GoRocket } from "react-icons/go";
import {Collapse} from 'react-collapse';


const Nav = () => {

const [isOpenCatMenu, setisOpenCatMenu] = useState(true);

const handleClickMenu = ()=>{
    setisOpenCatMenu(!isOpenCatMenu)
}

  return (
     <nav>
             <div className='container flex items-center gap-4'>
                <div className='w-[20%] relative'>
                         <div className='allCategoryTab absolute -top-[15px] left-0 w-full'>
                      <Button className='!bg-primary w-full !text-white !text-[13px] 
                      !font-[600] gap-2 !py-2 !rounded-sm' onClick={handleClickMenu}>
                        <RiMenu2Fill size={18} className='text-white'/>
                        SHOP BY CATEGORYTAB<LiaAngleDownSolid size={15} className='text-white' /></Button>
                      <Collapse isOpened={isOpenCatMenu}>
                      <div className='categoryPanel bg-white shadow-md rounded-sm  w-full'>
                            <ul className='w-full flex flex-col'>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[8px] !px-3 gap-2 hover:!bg-gray-200'>
                                    <img src="/navImg/fashion.jpg" alt="category" className="w-8" />  
                                    Fashion</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[8px] !px-3 gap-2 hover:!bg-gray-200'>
                                    <img src="/navImg/Elctronics.png" alt="category" className="w-8" />Elctronics</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[8px] !px-3 gap-2 hover:!bg-gray-200'>
                                    <img src="/navImg/Bags1.jpg" alt="category" className="w-8" />Bags</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[8px] !px-3 gap-2 hover:!bg-gray-200'>
                                    <img src="/navImg/Footwear.svg" alt="category" className="w-8" />Footwear</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[10px] !px-3 gap-2 hover:!bg-gray-200'>
                                     <img src="/navImg/Groceries.png" alt="category" className="w-8" />Groceries</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[10px] !px-3 gap-2 hover:!bg-gray-200'>
                                     <img src="/navImg/Beauty.jpg" alt="category" className="w-8" />Beauty</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[10px] !px-3 gap-2 hover:!bg-gray-200'>
                                     <img src="/navImg/Wellness1.jpg" alt="category" className="w-8" />Wellness</Button>
                                </li>
                                <li className='w-full'>
                                    <Button className='!w-full !rounded-none !capitalize !text-[14px] 
                                    !font-[500] !text-left !justify-start !text-gray-900 !py-[10px] !px-3 gap-2 hover:!bg-gray-200'>
                                    <img src="/navImg/Jewellery.jpg" alt="category" className="w-8" />Jewellery</Button>
                                </li>
                            </ul>
                      </div>
                      </Collapse>
                  </div>
                </div>

                  <div className='nav m-auto'>
                    <ul className='flex items-center gap-3'>
                        {/* <li>
                        <Link href={"#"}>
                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600 hover:!text-primary'>
                            Home
                        </Button>
                        </Link>
                        </li> */}
                        <li className='relative group'>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Fashion
                        </Button>
                        </Link>
                            <div className='submenu absolute top-[110%] left-[0%] bg-white 
                            shadow-md w-[180px] transition-all opacity-0 invisible '>
                                <ul className='flex flex-col w-full'>
                                    <li className='w-full relative'>
                                         <Link href={"#"} className='w-full block'>
                                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[500] 
                                             !text-gray-800 hover:!text-primary !text-left !justify-start !w-full'>
                                            Men
                                        </Button>
                                        </Link>
                                         <div className='submenu submenu2 absolute top-[0%] left-[100%] bg-white 
                            shadow-md w-[180px] transition-all opacity-0 invisible '>
                                <ul className='flex flex-col w-full'>
                                    <li className='w-full'>
                                         <Link href={"#"} className='w-full block'>
                                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[500] 
                                             !text-gray-800 hover:!text-primary !text-left !justify-start !w-full'>
                                            Men
                                        </Button>
                                        </Link>
                                    </li>
                                     <li className='w-full'>
                                         <Link href={"#"} className='w-full block'>
                                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[500] !text-gray-800 
                                             hover:!text-primary !text-left !justify-start !w-full'>
                                            Wonmen
                                        </Button>
                                        </Link>
                                    </li>
                                    <li className='w-full'>
                                         <Link href={"#"} className='w-full block'>
                                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[500] !text-gray-800 
                                             hover:!text-primary !text-left !justify-start !w-full'>
                                            Kids
                                        </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                                    </li>
                                     <li className='w-full'>
                                         <Link href={"#"} className='w-full block'>
                                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[500] !text-gray-800 
                                             hover:!text-primary !text-left !justify-start !w-full'>
                                            Wonmen
                                        </Button>
                                        </Link>
                                    </li>
                                    <li className='w-full'>
                                         <Link href={"#"} className='w-full block'>
                                            <Button className='!bg-transparent !capitalize !text-[14px] !font-[500] !text-gray-800 
                                             hover:!text-primary !text-left !justify-start !w-full'>
                                            Kids
                                        </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Elctronics
                        </Button>
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Bags
                        </Button>
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Footwear
                        </Button>
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Groceries
                        </Button>
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Beauty
                        </Button>
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Wellness
                        </Button>
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"}>
                        <Button className='!bg-transparent !capitalize !text-[14px] !font-[600] !text-gray-600  hover:!text-primary'>
                            Jewellery
                        </Button>
                        </Link>
                        </li>
                    </ul>
                  </div>
                  <span className='!text-[14px] !font-[400] flex items-center gap-2 ml-auto'> <GoRocket size={20} /> Free International Delivery</span>
                </div>
          </nav>
)
}
export default Nav