import { Stack, HStack, Icon, Text, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { GoHome } from 'react-icons/go'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdPersonOutline } from 'react-icons/md'
import { CiSquareInfo } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import { TbLogout } from 'react-icons/tb'
import { FaRobot } from 'react-icons/fa'

const SideNav = () => {
  //Variables:
  const navLinks = [
    //TODO: use react router and do all the routing work! Provide links and use them in HStack1 and HStack2
    {
      icon: GoHome,
      text: 'Dashboard',
      link: '/',
    },
    {
      icon: FaRegEnvelope,
      text: 'Messages',
      link: '/',
    },
  ]

  const setLinks = [
    {
      icon: MdPersonOutline,
      text: 'Profile',
      link: '/',
    },
    {
      icon: CiSquareInfo,
      text: 'FAQs',
      link: '/',
    },
    {
      icon: FiPhoneCall,
      text: 'Contact Us',
      link: '/',
    },
    {
      icon: TbLogout,
      text: 'Logout',
      link: '/',
    },
  ]

  return (
    <>
      <Stack
        gap={8}
        padding={7}
        px={4}
        boxShadow={'2xl'}
        m={2}
        maxW={'230px'}
        height={'98vh'}
        borderRadius={30}
      >
        <HStack justify={'start'} fontWeight={'bold'} gap={5} py={'1'}>
          <Image
            borderRadius="8px"
            boxSize="48px"
            objectFit={'cover'}
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="User"
          />

          <Text>John Doe</Text>
        </HStack>

        <Stack gap={'160px'}>
          <Stack gap={10}>
            <Stack gap={3}>
              <Heading
                color={'#405D9F'}
                fontWeight={'medium'}
                fontSize={'18px'}
              >
                Menu
              </Heading>

              {navLinks.map(nav => (
                //FIXME: Below is HStack1 this is for Menu items
                <HStack
                  color={'#797E82'}
                  borderRadius={'8px'}
                  p={'3'}
                  gap={5}
                  py={'2'}
                  _hover={{
                    bg: '#ececec',
                    color: '#171717',
                    cursor: 'pointer',
                  }}
                  key={nav.text}
                >
                  <Icon fontSize={'17px'} as={nav.icon}></Icon>
                  <Text fontSize={'16px'}> {nav.text}</Text>
                </HStack>
              ))}
            </Stack>

            <Stack>
              <Heading
                color={'#405D9F'}
                fontWeight={'medium'}
                fontSize={'18px'}
              >
                Settings
              </Heading>

              {setLinks.map(lins => (
                //FIXME: Below is HStack2 this is for Settings items
                <HStack
                  color={'#797E82'}
                  borderRadius={'8px'}
                  p={'3'}
                  gap={5}
                  py={'2'}
                  _hover={{
                    bg: '#ececec',
                    color: '#171717',
                    cursor: 'pointer',
                  }}
                  key={lins.text}
                >
                  <Icon fontSize={'17px'} as={lins.icon}></Icon>
                  <Text fontSize={'16px'}> {lins.text}</Text>
                </HStack>
              ))}
            </Stack>
          </Stack>

          <Stack gap={5}>
            <Image
              alignSelf={'center'}
              maxWidth={'15vw'}
              src="../../public/logo.svg"
            />

            <HStack
              justify={'center'}
              fontWeight={'bold'}
              color={'#405D9F'}
              borderRadius={'8px'}
              gap={3}
              py={'2'}
              bg={'#CCDBFD'}
              _hover={{
                bg: '#0272ce8e',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <Icon fontSize={'20px'} as={FaRobot}></Icon>
              <Text fontSize={'19px'}>Chat Bot</Text>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default SideNav
