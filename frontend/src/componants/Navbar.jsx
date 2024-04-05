import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
  Avatar,
  Icon
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import {
    FaShoppingCart,
  } from "react-icons/fa";
import { handleLogoutFunction } from "../redux/authentication/action";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { userID, name } = useSelector(({ authReducer }) => authReducer);
  const { loading } = useSelector(({ authReducer }) => authReducer);
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem("userResponse");
    dispatch(handleLogoutFunction());
    toast({
      title: "Logout successful",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      position={"sticky"}
      top="0"
      zIndex={"100"}
      bg="white"
      boxShadow="0px 7px 7px -5px rgba(120,108,120,0.2)"
    >
      <Flex
        height={{ base: "3.2rem", md: "4.94rem" }}
        px={{ base: "1rem", md: "3rem" }}
        gap="2rem"
        justify={"space-between"}
        align={"center"}
      >
        <Link to="/">
          <Box minW={"6rem"}>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5e185abfc76307064fbf9623/1601657483135-2RZDLSDC83SZMJLWK1AY/Large+ArBa+Logo+2.PNG?format=1500w"
              alt="logo"
              width="8rem"
              height={{ base: "5rem", md: "100%" }}
            />
          </Box>
        </Link>
        <Box
          minWidth={"10rem"}
          width="30rem"
          display={{ base: "none", lg: "block" }}
        >
        </Box>
        <Flex gap={{ base: "1rem", md: "2rem" }} align="center">
        <Icon as={FaShoppingCart} boxSize={6} mr={2} color={"teal"}/>
          <Popover>
            <PopoverTrigger>
              <Flex flexDir={"column"} align={"center"} cursor="pointer">
                <Text>
                  {!userID ? (
                    <BsPerson  fontSize={"1.26rem"}  />
                  ) : (
                    <Avatar name={name} size="sm" />
                  )}
                </Text>
                <Text
                  fontSize={"0.8rem"}
                  fontWeight="bold"
                  display={{ base: "none", md: "block" }}
                  color={"blackAlpha.600"}
                >
                  {!userID ? "Profile" : ""}
                </Text>
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader py="1rem"></PopoverHeader>
              <PopoverBody>
                <Flex flexDir={"column"} gap="3" textTransform={"capitalize"}>
                
                  {!userID ? (
                    <Link to="/login">
                      <Text
                        pl="2rem"
                        bg="gray.100"
                        borderRadius={"md"}
                        py="0.5rem"
                      >
                        Signin 
                      </Text>
                    </Link>
                  ) : (
                    <Box
                      pl="2rem"
                      bg="gray.100"
                      borderRadius={"md"}
                      py="0.3rem"
                    >
                      <Text>{name}</Text>
                    </Box>
                  )}
                  
                  {userID && (
                    <Link to="/profile">
                      <Text pl="2rem">Profill</Text>
                    </Link>
                  )}
                  {userID && (
                    <Link>
                      <Button width="full" onClick={handleLogout}>
                        Logout
                      </Button>
                    </Link>
                  )}
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Box display={{ lg: "none" }}></Box>
        </Flex>
      </Flex>
      <Box padding={"8px"} display={{ lg: "none" }}></Box>
    </Box>
  );
};

// import {
//     Icon,
//     Menu,
//     MenuButton,
//     MenuItem,
//     MenuList,
//     useToast,
//   } from "@chakra-ui/react";
//   import { FaUserShield } from "react-icons/fa";
//   import { FiLogOut, FiUser, FiUserPlus } from "react-icons/fi";
//   import { useDispatch, useSelector } from "react-redux";
//   import { Link as ReactLink, useNavigate } from "react-router-dom";
//   import { handleLogoutFunction } from "../redux/authentication/action";
//   const Navbar = ({ children }) => {
//     const { isAuth } = useSelector((store) => store.authReducer);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const toast = useToast();
//     const handleLogout = () => {
//       dispatch(handleLogoutFunction());
//       setTimeout(() => {
//         toast({
//           title: "Logout Success",
//           status: "warning",
//           duration: 2000,
//           isClosable: true,
//           position: "top",
//         });

//         navigate("/", { replace: true });
//       }, 1000);
//     };

//     return (
//       <Menu closeOnSelect={false}>
//         <MenuButton
//           p={1}
//           rounded="full"
//           bg={isAuth ? "green" : "red.200"}
//           _hover={{ bg: "gray.300" }}
//         >
//           {children}
//         </MenuButton>
//         {isAuth ? (
//           <MenuList
//             position="fixed"
//             right={0}
//             zIndex="100"
//             borderRadius="md"
//             boxShadow="md"
//             bg="white"
//             maxW="30px"
//             padding={1}
//           >
//             <MenuItem
//               textAlign="center"
//               onClick={handleLogout}
//               icon={<Icon as={FiLogOut} boxSize={4} color="red.500" mr={2} />}
//               _hover={{ bg: "red.100" }}
//               transition="background 0.3s ease"
//             >
//               Logout
//             </MenuItem>
//           </MenuList>
//         ) : (
//           <MenuList
//             maxW="120px"
//             position="fixed"
//             right={0}
//             zIndex="100"
//             borderRadius="md"
//             boxShadow="md"
//             bg="white"
//             padding={1}
//           >
//             <MenuItem
//               as={ReactLink}
//               to="/login"
//               textAlign="center"
//               icon={<Icon as={FiUser} boxSize={4} color="blue.500" mr={2} />}
//               _hover={{ bg: "blue.100" }}
//               transition="background 0.3s ease"
//             >
//               Login
//             </MenuItem>

//             <MenuItem
//               as={ReactLink}
//               to="/signup"
//               textAlign="center"
//               icon={
//                 <Icon as={FiUserPlus} boxSize={4} color="purple.500" mr={2} />
//               }
//               _hover={{ bg: "purple.100" }}
//               transition="background 0.3s ease"
//             >
//               Signup
//             </MenuItem>
//             <MenuItem
//               as={ReactLink}
//               to="/admin/login"
//               textAlign="center"
//               icon={
//                 <Icon as={FaUserShield} boxSize={4} color="purple.500" mr={2} />
//               }
//               _hover={{ bg: "blue.100" }}
//               transition="background 0.3s ease"
//             >
//               Admin Login
//             </MenuItem>
//           </MenuList>
//         )}
//       </Menu>
//     );
//   };

//   export default Navbar;
