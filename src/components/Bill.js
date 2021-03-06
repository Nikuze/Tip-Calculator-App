import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import iconDollar from "../images/icon-dollar.svg";

const Bill = ({ handleBill, value }) => {
  return (
    <Box mb={6}>
      <h4
        style={{
          color: "hsl(186, 14%, 43%)",
          fontSize: "1rem",
          fontWeight: "700",
          marginBottom: "5px",
        }}
      >
        Bill
      </h4>

      <InputGroup>
        <InputLeftElement
          children={<Image src={iconDollar} alt="iconDollar"></Image>}
        />
        <Input
          onChange={handleBill}
          value={value}
          placeholder="0"
          textAlign="right"
          fontSize=" 1.31875rem"
          fontWeight={{ base: "500", sm: "500", md: "700", lg: "700" }}
          h="45px"
          bg="hsl(189, 41%, 97%)"
          color="hsl(183, 100%, 15%)"
          _hover={{ border: "2px solid  hsl(172, 67%, 45%)" }}
          _focus={{ border: "2px solid  hsl(172, 67%, 45%)" }}
        />
      </InputGroup>
    </Box>
  );
};

export default Bill;
