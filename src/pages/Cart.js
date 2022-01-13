import { Add, Remove } from "@material-ui/icons";
import styled from 'styled-components';
import React from 'react';  
import { mobile } from "../responsive";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })} 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;



const ProductQuantity = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


function Cart() {
    return (
        <Container>
            <Wrapper>
                <Title>My CART</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>My Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CheckOut Now</TopButton>
                    
                </Top>
<Bottom>
    <Info>
        <Product>
            <ProductDetail>
            <Image src="https://www.netmeds.com/images/product-v1/600x600/977198/netmeds_3_ply_face_mask_with_nose_pin_100s_0_1.jpg" />
            <Details>
                <ProductName><b>Product:</b>Surgical Mask</ProductName>
                <ProductId><b>ID</b>67578775</ProductId>
                <ProductQuantity></ProductQuantity>
            </Details>

            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs.30</ProductPrice>
            </PriceDetail>
           
        </Product>
        <Hr/>
        <Product>
            <ProductDetail>
            <Image src="https://www.netmeds.com/images/product-v1/600x600/977198/netmeds_3_ply_face_mask_with_nose_pin_100s_0_1.jpg" />
            <Details>
                <ProductName><b>Product:</b>Surgical Mask</ProductName>
                <ProductId><b>ID</b>67578775</ProductId>
                <ProductQuantity></ProductQuantity>
            </Details>

            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs.30</ProductPrice>
            </PriceDetail>
           
        </Product>
    </Info>
    <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
        <SummaryItem type="total">
            <SummaryItemText>SubTotal</SummaryItemText>
            <SummaryItemPrice>Rs.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Shipping Charges</SummaryItemText>
            <SummaryItemPrice>Rs.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>Rs.50</SummaryItemPrice>
        </SummaryItem>
        <Button>CheckOut Now</Button>
        </Summary>
</Bottom>

            </Wrapper>
            
        </Container>
    )
}

export default Cart
