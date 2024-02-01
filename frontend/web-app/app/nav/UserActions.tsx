'use client'
import { Button, } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function UserActions() {
  return (
    <Button outline>
      <Link href='/session'>
        Session
      </Link>
    </Button>
    // <Dropdown
    //   inline
    //   label={`Welcome ${user.name}`}
    // >
    //   <Dropdown.Item icon={HiUser}>
    //     <Link href='/'>
    //       My Auctions
    //     </Link>
    //   </Dropdown.Item>
    //   <Dropdown.Item icon={AiFillTrophy}>
    //     <Link href='/'>
    //       Auctions won
    //     </Link>
    //   </Dropdown.Item>
    //   <Dropdown.Item icon={AiFillCar}>
    //     <Link href='/'>
    //       Sell my car
    //     </Link>
    //   </Dropdown.Item>
    //   <Dropdown.Item icon={HiCog}>
    //     <Link href='/session'>
    //       Session (dev only)
    //     </Link>
    //   </Dropdown.Item>
    //   <Dropdown.Divider />
    //   <Dropdown.Item icon={AiOutlineLogout} onClick={() => signOut({callbackUrl: '/'})}>
    //     Sign out
    //   </Dropdown.Item>
    // </Dropdown>
  )
}