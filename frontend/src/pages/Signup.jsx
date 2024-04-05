import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { signupFunction } from "../utils/signup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (username && fullName && email && password) {
      const userData = { username, fullName, email, password };
      let res = await signupFunction(userData);

      if (res === true) {
        toast({
          title: "User Created Successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        setIsCreated(true);
        setIsLoading(false);
      } else {
        toast({
          title: "User Can't Be Created",
          description: `${res}`,
          status: "warning",
          duration: 9000,
          isClosable: true,
          icon: <UnlockIcon />,
          position: "top",
        });
        setIsLoading(false);
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isCreated) {
      navigate("/login", { replace: true });
    }
  }, [isCreated]);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box
        width={{ base: "90%", sm: "400px" }}
        padding="6"
        borderRadius="md"
        boxShadow="lg"
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.6,
          },
        }}
        initial={{ y: -100, opacity: 0 }}
      >
        <Heading
          as={motion.h2}
          size="lg"
          textAlign="center"
          mb="6"
          color="teal.500"
          fontFamily="sans-serif"
          fontSize="xl"
          fontWeight="extrabold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Sign Up for ARBA
        </Heading>
        <Text textAlign="center" mb="6" color="gray.600">
        ArBa Development Studios: Your journey, our support, from planning to growth!
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            mb="4"
          />
          <Input
            type="text"
            placeholder="Fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            mb="4"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="4"
          />
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pr="4.5rem"
              mb="4"
              minLength={8}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={handleTogglePassword}
                icon={showPassword ? <FiEyeOff /> : <FiEye />}
                aria-label={showPassword ? "Hide password" : "Show password"}
              />
            </InputRightElement>
          </InputGroup>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            width="100%"
            leftIcon={<FiUserPlus />}
            isLoading={isLoading}
            loadingText="Signing Up..."
            spinner={<Spinner color="white" size="sm" />}
            isDisabled={!username || !fullName || !email || !password}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Sign Up
          </Button>
        </form>
        <Text mt="4" textAlign="center" color="gray.500">
          Already have an account?{" "}
          <Link to="/login" color="teal.500">
            Login
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Signup;
