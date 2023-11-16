//Imports:
import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
} from '@chakra-ui/react'
import React from 'react'
import { PiBellRingingLight } from 'react-icons/pi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'

const TopNav = ({ title, onOpen }) => {
  //Return:
  return (
    <Flex
      bgColor={'rgba(113, 113, 113,0)'}
      py={2}
      px={5}
      justifyContent={'space-between'}
    >
      <HStack>
        <Icon
          fontSize={'20px'}
          as={FiMenu}
          onClick={onOpen}
          display={{
            base: 'block',
            lg: 'none',
          }}
        />
        <Heading fontSize={'25px'}>{title}</Heading>
      </HStack>

      <Input
        boxShadow={'md'}
        maxW={'20vw'}
        placeholder="Search"
        display={{
          base: 'none',
          lg: 'block',
        }}
      />

      <HStack justify={'space-between'}>
        <Switch size="md" />

        <Button bg={'transparent'}>
          <Icon fontSize={'20px'} as={PiBellRingingLight} />
        </Button>
        <Menu>
          <MenuButton bg={'transparent'} as={Button}>
            <Icon fontSize={'20px'} as={AiOutlineQuestionCircle} />
          </MenuButton>
          <MenuList>
            <MenuItem>Help</MenuItem>
            <MenuItem>Contact Us</MenuItem>
            <MenuItem color={'red'}>Delete Account</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  )
}
//Exports:
export default TopNav
