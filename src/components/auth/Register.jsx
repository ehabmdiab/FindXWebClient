import React, { useState } from "react";
import {
  Center,
  Flex,
  Input,
  Box,
  Button,
  FormControl,
  Heading,
  Link,
  VStack,
  HStack,
  Text,
} from "native-base";
import "./continueWith.css";

export default function Register({ setToken }) {
  const [formData, setFormData] = useState({});

  const setEmail = (value) => {
    setFormData({ ...formData, email: value });
  };

  const setPassword = (value) => {
    setFormData({ ...formData, password: value });
  };

  const submitRegisterData = () => {
    console.log(formData);
  };

  const setFirstName = (value) => {
    setFormData({ ...formData, firstName: value });
  };

  const setLastName = (value) => {
    setFormData({ ...formData, lastName: value });
  };

  const setPhoneNumber = (value) => {
    setFormData({ ...formData, phone: value });
  };

  return (
    // <Flex height="xl" alignItems="center" justifyContent="center">
    //   <Center>
    //     <Heading marginBottom="5">Register</Heading>
    //     <FormControl>
    //       <Box padding="10" backgroundColor="lightBlue.300" borderRadius="2xl">
    //         <Input
    //           size="xl"
    //           placeholder="First Name"
    //           onChangeText={(value) => setFirstName(value)}
    //         />
    //         <Input
    //           size="xl"
    //           marginTop="1.5"
    //           placeholder="Last Name"
    //           onChangeText={(value) => setLastName(value)}
    //         />
    //         <Input
    //           size="xl"
    //           marginTop="1.5"
    //           placeholder="Phone Number"
    //           onChangeText={(value) => setPhoneNumber(value)}
    //         />
    //         <Input
    //           size="xl"
    //           marginTop="1.5"
    //           placeholder="Email"
    //           onChangeText={(value) => setEmail(value)}
    //         />
    //         <Input
    //           marginTop="1.5"
    //           size="xl"
    //           type="password"
    //           placeholder="Password"
    //           onChangeText={(value) => setPassword(value)}
    //         />
    //         <FormControl.HelperText>
    //           Password must be strong
    //         </FormControl.HelperText>
    //         <Button
    //           colorScheme="success"
    //           onPress={submitRegisterData}
    //           marginTop="1.5"
    //         >
    //           Register
    //         </Button>
    //       </Box>
    //     </FormControl>
    //   </Center>
    // </Flex>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Register
        </Heading>
        <VStack space={3} mt="5">
          <Input
            size="xl"
            placeholder="First Name"
            onChangeText={(value) => setFirstName(value)}
          />
          <FormControl>
            <Input
              size="xl"
              marginTop="1.5"
              placeholder="Last Name"
              onChangeText={(value) => setLastName(value)}
            />
          </FormControl>

          <FormControl>
            <Input
              size="xl"
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
          </FormControl>
          <FormControl>
            <Input
              marginTop="1.5"
              size="xl"
              type="password"
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
            />
          </FormControl>
          <FormControl>
            <Input
              marginTop="1.5"
              size="xl"
              type="password"
              placeholder="Confirm Password"
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Not registerd yet?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="/register"
            >
              Register
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
