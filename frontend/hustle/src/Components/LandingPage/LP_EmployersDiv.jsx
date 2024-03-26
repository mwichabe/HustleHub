import { Box, Grid, Img, Text } from "@chakra-ui/react";

export default function EmployersDiv () {

    return (
    <Box w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} margin="auto" p={8} > 
        <Text className="Heading">Employers of Choice</Text>
        <Grid templateColumns={{base:"repeat(4,1fr)", sm:"repeat(4,1fr)", md:"repeat(4,1fr)" ,lg:"repeat(8,1fr)"}} py={5} gap={5}>
            <Img src="https://i.pinimg.com/736x/2f/6d/2e/2f6d2ea6d7f8419e193f4e1afb140155.jpg"></Img>
            <Img src="https://i.pinimg.com/736x/62/f1/89/62f1891a3e50faac43e7a46bb932af26.jpg"></Img>
            <Img src="https://i.pinimg.com/736x/15/1e/7a/151e7a902d35135d2d5a4bf600e076a7.jpg"></Img>
            <Img src="https://i.pinimg.com/736x/d9/1b/dc/d91bdcedd96429b8e562f871d802ca1d.jpg"></Img>
            <Img src="https://i.pinimg.com/736x/0d/fe/2d/0dfe2dd8e48374c58e23bb0ebb61b7c2.jpg"></Img>
            <Img src="https://i.pinimg.com/736x/20/ce/00/20ce00de0c9151174c87d83ee1c48e8c.jpg"></Img>
            <Img src="https://i.pinimg.com/564x/37/51/dd/3751ddac18051b8a887482c0ede5ddda.jpg"></Img>
            <Img src="https://i.pinimg.com/564x/89/9b/a5/899ba5bb245bd1d69b2cc65d565f7b8f.jpg" />
        </Grid>
    </Box>
    )
}