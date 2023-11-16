//Imports:
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'

const SideDrawer = ({ isOpen, onClose }) => {
    //Return:
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
{/* //Components: */}
            <SideNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
//Exports:
export default SideDrawer
