import {Flex, Grid, Img, Select, Text} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
export default function Footer () {
    return (
        <>
        <Grid 
            templateColumns={{base:"1fr", sm:"1fr", md:"repeat(3,1fr)", lg:"repeat(3,1fr)" }}
            px = {{base:"2.5%",sm:"2.5", md:"2.5", lg:"10%"}}
            py={5}
            gap={10}
            alignItems="center"
            justifyContent="center"
            border="1px solid rgba(187, 187, 187, 0.555)"
        >
            <Select>
                <option value="India">KE</option>
                <option value="India">UG</option>
                <option value="India">TZ</option>
            </Select>
            <Grid templateColumns={{base:"repeat(2,1fr)", sm : "repeat(2,1fr)" , md:"1fr", lg:"repeat(2,1fr)"}}>
                <div>
                    <p>Tell no. : +254769174044</p>
                </div>
                <a href="mailto: akondo.jack@students.kyu.ac.ke">akondo.jack@students.kyu.ac.ke </a>
            </Grid>

            <Flex className="social">
                <Img src="https://cdn-icons-png.flaticon.com/512/733/733614.png" alt="" />
                <Img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
                <Img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="" />
                <Img src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png" />
            </Flex>

        </Grid>

        <Grid bg="primary"  color="white" templateColumns={{base:"1fr 1fr",sm:"1fr 1fr", md:"1fr 1fr",lg:"repeat(5,1fr)"}} 
                px = {{base:"2.5%",sm:"2.5", md:"2.5", lg:"10%"}}
                py="50px"
                gap={10}
                >
            <Grid>
                <Text className="Sub-Heading">Job Seekers</Text>
                <NavLink to="/search">Job Search</NavLink>
                <NavLink to="/login"> Job Seekers Login</NavLink>
                <Text>Upload Resume</Text>
                <Text>Career Advice</Text>
                <Text>Search Tips</Text>
                <Text>Free Job Alerts</Text>
                <Text>Find Companies</Text>
                <Text>Help</Text>
            </Grid>
            <Grid>
                <Text className="Sub-Heading">Employers</Text>
                <NavLink to="/employer">Employee Login</NavLink>
                <NavLink to="/login"> Job Posting</NavLink>
                <Text>Access Resume Database</Text>
                <Text>Join mREcruiters</Text>
                <Text>Buy Online</Text>
                </Grid>
            <Grid>
                <Text className="Sub-Heading">Hustle Hub</Text>
                <Text>About us</Text>
                <Text>Contact us</Text>
                <Text>Career with us</Text>
                <Text>Send feedback</Text>
                <Text>testimonials</Text>
                <Text>HTML Sitemap</Text>
                <Text>XML Sitemap</Text>
                <Text>Jobs App</Text>
            </Grid>
            <Grid gap={1}>
                <Text className="Sub-Heading">Stay Connected</Text>
                <Text>Facebook</Text>
                <Text>Twitter</Text>
                <Text>Linkedin</Text>
                <Text>Instagram</Text>
                <Text>Youtube</Text>
            </Grid>
            <Grid>
                <Text className="Sub-Heading">Legal</Text>
                <Text>Security & Fraud</Text>
                <Text>Privacy Policy</Text>
                <Text>Terms of Use</Text>
                <Text>Career Advice</Text>
                <Text>Beware of Fraudster</Text>
                <Text>Be Safe</Text>
                <Text>Complaints</Text>
            </Grid>
        </Grid>
        <Flex justifyContent="center" py={2}>
            © 2024 AJVinnie - All Rights Reserved
        </Flex>
        </>
    )
}