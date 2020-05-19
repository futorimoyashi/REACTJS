import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [{
                "id": "809dcf15-074f-43cc-b588-4a3743e62645",
                "name": "Stock - Beef, Brown",
                "description": "lacinia aenean sit amet justo morbi ut odio cras mi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "cc8ac586-0207-4bbc-827c-39763f6584d5",
                "name": "Garbage Bags - Clear",
                "description": "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "3774f2a4-730f-4475-8c5f-eb6ac786c0d0",
                "name": "Blue Curacao - Marie Brizard",
                "description": "dui luctus rutrum nulla tellus in sagittis dui vel nisl",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "48cc56da-d68e-425d-9208-0479b5ff7a5c",
                "name": "Crackers - Melba Toast",
                "description": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "7dd83622-a4be-41a4-8f9e-40b7a02082aa",
                "name": "Lettuce - Curly Endive",
                "description": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "63461ea1-8ca6-4baa-a0aa-68321a29d0f0",
                "name": "Pepper - Yellow Bell",
                "description": "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "9c38c9f1-4e44-4e90-a0c3-c1bee297867f",
                "name": "Wine - Chenin Blanc K.w.v.",
                "description": "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "f0ea6b86-8eb7-432e-8981-945a8b70bf43",
                "name": "Avocado",
                "description": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "ef06933c-bbfa-47b4-8670-7aad9059fc9d",
                "name": "Banana Turning",
                "description": "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "35b9abe9-8fe5-4474-9e68-f8ed6e596292",
                "name": "Lamb Shoulder Boneless Nz",
                "description": "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "ff4bd53b-dae0-475e-92ff-cd5dcda2857f",
                "name": "Sauce - Black Current, Dry Mix",
                "description": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "e3c3745c-2cf7-48f1-abbf-6d4d0f682852",
                "name": "Squid - U - 10 Thailand",
                "description": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "20b58ff9-9e86-4e74-a68f-47ac9965dc8d",
                "name": "Sachet",
                "description": "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "91d8819e-7ddd-44e4-b8f5-e8047bf68ef3",
                "name": "Yoghurt Tubes",
                "description": "nulla sed vel enim sit amet nunc viverra dapibus nulla",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "0b8b94be-96ce-40a0-a127-130635807021",
                "name": "Ranchero - Primerba, Paste",
                "description": "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "59277775-0aa6-446e-b240-cbaa42a0262f",
                "name": "Table Cloth 144x90 White",
                "description": "est et tempus semper est quam pharetra magna ac consequat metus sapien ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "14a688e9-c9a4-4543-adab-a4433a9c0a6c",
                "name": "Coffee Swiss Choc Almond",
                "description": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "80ed757e-a352-4e3d-a7e4-e904fc9047ac",
                "name": "Table Cloth 62x120 Colour",
                "description": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "8e82d541-d6d5-414f-8ad0-488faeb3ee45",
                "name": "Yoghurt Tubes",
                "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "43f21e8b-37b0-41e5-bc48-a72268a5531e",
                "name": "Cheese - Feta",
                "description": "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }]
        }
    }
    render() {
        const { products } = this.state
        return(
            <Container>
              <Row>
                { products.map(product => (
                  <Col sm="4">
                    <Card>
                      <CardImg top width="100%" src={product.imageUrl} alt="" />
                      <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>{product.description}</CardText>
                        <Button>Add to cart</Button>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
        );
    }
}

export default Products