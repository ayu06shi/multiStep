import React from 'react';
import { Container, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetail from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const Review = ({ form, navigation }) => {
    const { go } = navigation;
    const {
        firstName,
        lastName,
        gender,
        city,
        pincode,
        state,
        country,
        phone,
        email,
        cardNo,
        expiryDate,
        cvv,
    } = form;

  return (
    <Container maxWidth="sm" className="bg-white justify-center mt-6 gap-y-4 mx-auto border p-8 shadow-lg">
        <h3 className="font-bold text-purple-700 text-center text-2xl mb-4">Review</h3>
        <RenderAccordion summary="Personal Info" go={ go } details={[
            {'First Name': firstName},
            {'Last Name': lastName},
            {'Gender': gender},
        ]} />
        <RenderAccordion summary="Address" go={ go } details={[
            {'City': city},
            {'Pincode': pincode},
            {'State': state},
            {'Country': country}
        ]}/>
        <RenderAccordion summary="Contact Info" go={ go } details={[
            {'Phone': phone},
            {'Email': email},
        ]}/>
        <RenderAccordion summary="Payment Details" go={ go } details={[
            {'Card No': cardNo},
            {'Expiry Date': expiryDate},
            {'CVV': cvv}
        ]}/>
        <Button color='primary' variant='contained' fullWidth style={{marginTop: '1.5rem'}} onClick={() => go(`submit`)}>
            Submit
        </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary
            expandIcon = {<ExpandMoreIcon/>}
        >
            {summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                { details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objVal = data[Object.keys(data)[0]];

                    return <ListItemText key={index}>{`${objKey}: ${objVal}`}</ListItemText>
                }) }
                <IconButton color='primary' component="span" onClick={()=> go(`${summary.toLowerCase()}`)}><EditIcon/></IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
)

export default Review;
