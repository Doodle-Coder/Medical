import React from 'react'
import { Container,Grid,Box, Link } from '@mui/material'

function Footer() {
    return (
        <div>
        <Box px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor="text.disabled" color="white">
            <Container max-width="lg">
                <Grid container spacing={7}>
                    <Grid item xs={13} sm={4}>
                        <Box sx={{p:1}} borderBottom={1}>Help</Box>
                        <Box sx={{p:1}}><Link href="/" color="inherit">Contact </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit">Support </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit">Privacy </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit">Account </Link></Box>
                        <Box sx={{p:1}}><Link href="/" color="inherit">Login </Link></Box>

                        


                    </Grid>
                    <Grid item xs={13} sm={4}>
                        <Box sx={{p:1}} borderBottom={1}>Shopping</Box>
                        <Box sx={{p:1}}><Link href="/" color="inherit">Browse by Manufacturers </Link></Box>
                        <Box sx={{p:1}}><Link href="/" color="inherit">Health Articles </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit">FAQs </Link></Box>


                    </Grid>
                    <Grid item xs={13} sm={4}>
                        <Box sx={{p:1}} borderBottom={1}>Categories</Box>
                        <Box sx={{p:1}}><Link href="/" color="inherit">Ayush </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit"> Devices </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit">Family Care </Link></Box>

                        <Box sx={{p:1}}><Link href="/" color="inherit">Fitness </Link></Box>
                        <Box sx={{p:1}}><Link href="/" color="inherit">Lifestyle </Link></Box>

                       


                    </Grid>





                </Grid>

                <Box textAlign="center" pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}> Netmeds.com </Box>
            </Container>
        </Box>
            
        </div>
    )
}

export default Footer
