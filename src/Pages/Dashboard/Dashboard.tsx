//Imports:
import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { Box, HStack, Heading, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { FaKitchenSet } from 'react-icons/fa6'

const Dashboard = () => {
  //Variables:
  const roomTabs = [
    {
      icon: MdOutlineBedroomParent,
      roomname: 'Bedroom',
      link: '/',
    },
    {
      icon: FaKitchenSet,
      roomname: 'Kitchen',
      link: '/',
    },
  ]
    //Return:
  return (
    //Components:
    <DashboardLayout title={'Dashboard'}>
      <Stack>
        <Stack>
          <Heading fontWeight={'md'} fontSize={'20px'}>
            Rooms
          </Heading>
          <HStack>
            {roomTabs.map(room => (
              <HStack
                mx={2}
                fontSize={'15px'}
                padding={3}
                boxShadow={'md'}
                minW={'140px'}
                color={'#3F7DF8'}
                maxH={'55px'}
                borderRadius={'15px'}
                bg={'white'}
                gap={5}
                _hover={{
                  bg: '#3F7DF8',
                  color: 'white',
                  cursor: 'pointer',
                }}
                key={room.roomname}
              >
                <Icon
                  bg={'rgba(35, 151, 239, 0.410)'}
                  fontSize={'40px'}
                  as={room.icon}
                  p={1}
                  borderRadius={6}
                />
                <Box>
                  <Text> {room.roomname}</Text>
                  <Tag
                    size={'sm'}
                    variant="outline"
                    fontWeight={'black'}
                    colorScheme="red"
                  >
                    Bad
                  </Tag>
                </Box>
              </HStack>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </DashboardLayout>
  )
}
//Exports:
export default Dashboard
