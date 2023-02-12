import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import Header from "../../components/Header"
import { ExpandMore } from "@mui/icons-material"
import { tokens } from "../../theme"

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box margin="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus 
                        inventore recusandae veritatis, voluptatum aut officiis quisquam est 
                        neque blanditiis explicabo nisi dolor iusto laborum dolorem. 
                        Ducimus ullam veniam repellat eos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus 
                        inventore recusandae veritatis, voluptatum aut officiis quisquam est 
                        neque blanditiis explicabo nisi dolor iusto laborum dolorem. 
                        Ducimus ullam veniam repellat eos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus 
                        inventore recusandae veritatis, voluptatum aut officiis quisquam est 
                        neque blanditiis explicabo nisi dolor iusto laborum dolorem. 
                        Ducimus ullam veniam repellat eos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus 
                        inventore recusandae veritatis, voluptatum aut officiis quisquam est 
                        neque blanditiis explicabo nisi dolor iusto laborum dolorem. 
                        Ducimus ullam veniam repellat eos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus 
                        inventore recusandae veritatis, voluptatum aut officiis quisquam est 
                        neque blanditiis explicabo nisi dolor iusto laborum dolorem. 
                        Ducimus ullam veniam repellat eos.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ