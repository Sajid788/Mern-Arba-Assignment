import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Carousel from "../componants/Coursel";
import Product from "./Product";

export const Homepage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const handleConfirm = () => {
    setIsOpen(false);
  }
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms and Conditions</ModalHeader>
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              beatae rem fuga iusto adipisci, quasi hic atque molestias ipsum
              tempora sit dolor architecto similique temporibus deserunt ipsa,
              facere unde? Sit, voluptatibus cum. Consectetur totam deleniti
              vero iste architecto veritatis sint, asperiores ex incidunt, ullam
              possimus officia eveniet, ad quaerat laudantium.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={handleConfirm}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Carousel />
      </Box>
      <Box>
      <Product />
      </Box>
    </>
  );
};
