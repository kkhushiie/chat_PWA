import "./header.css";
import { HiOutlineExclamationTriangle, HiEllipsisVertical, HiUsers } from "react-icons/hi2";
import { ChakraProvider, Heading, IconButton, Text, Image , Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { ArrowBackIcon,EditIcon , PhoneIcon ,} from '@chakra-ui/icons'
export default function Header(){
 return (
   <div className="body">
    <ChakraProvider> 
    <div>
    <Flex>
    <Box p='4'><IconButton variant='no-outline'colorScheme='black' aria-label='go back' icon={<ArrowBackIcon />}/></Box>
    <Heading p='3' className="trip">Trip 1</Heading><Spacer />
    <Box p='4'><IconButton variant='no-outline'colorScheme='black' aria-label='edit' icon={<EditIcon />}/></Box>
    </Flex>  
    </div>
    <div>
    <Flex>
    <Box p='4'><Image borderRadius='full' boxSize='100px' src={require("./pfp.png")} /></Box>
    <Text p='3'><Text>From <strong> IGI Airport, T3 </strong></Text><Text>To <strong>Sector 28</strong></Text></Text><Spacer />
    <Box p='4'><Menu>
    <MenuButton as={IconButton} variant='no-outline' aria-label='Options' icon={<HiEllipsisVertical />} />
    <MenuList>
    <MenuItem icon={<HiUsers />}>Members</MenuItem>
    <MenuItem icon={<PhoneIcon />} >Share Number</MenuItem>
    <MenuItem icon={<HiOutlineExclamationTriangle />} >Report</MenuItem>
    </MenuList>
    </Menu>
    </Box>
    </Flex>
    </div>
    </ChakraProvider> 
    </div>
 )
}