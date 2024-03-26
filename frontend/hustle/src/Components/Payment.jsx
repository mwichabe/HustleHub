import { Box, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function PaymentScreen() {
    const price = 10000;

    const handleMpesaPayment = () => {
        //alert(`Initiating M-Pesa payment. Total amount: $${price}`);
    };

    const handlePaypalPayment = () => {
       // alert(`Initiating PayPal payment. Total amount: $${price}`);
    };

    return (
        <Box p={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Payment Screen</Text>
            <Text mb={6}>Choose your preferred payment method:</Text>
            <Flex direction="column" mb={6}>
                <Button colorScheme="blue" variant="solid" mb={2} onClick={handleMpesaPayment}>Pay with M-Pesa</Button>
                <Button colorScheme="blue" variant="solid" mb={2} onClick={handlePaypalPayment}>Pay with PayPal</Button>
            </Flex>
            <Text mb={4}>Total Amount: Ksh: ${price}</Text>
            <Spacer />
            <Button as={Link} to="/premium-services" colorScheme="primary" variant="solid">Go Back to Premium Services</Button>
        </Box>
    );
}
