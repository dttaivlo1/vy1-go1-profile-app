import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ticket.css';

class Ticket extends Component {
    render() {
        return (
          <div className="container">
                
          <Row xs={1} md={2} className="g-4">
          <Col>
               <a  href="#">
               <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"/>
                  <Card.Body>
                    <Card.Title>Nhà hàng</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
               </a>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title>Tour du lịch</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title>Thuê biệt thự - villas</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title>Đưa đón sân bay</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            
          </Row> 
          <br/>
          <Row xs={1} md={2} className="g-4">
          <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title>Thuê xe</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title><a href="157.245.207.242:3000">Khách sạn</a></Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title>Combo</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_forest.jpg"  />
                  <Card.Body>
                    <Card.Title>Voucher</Card.Title>
                    <Card.Text>
                      Decription
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            
          </Row> 
          </div>
        );
    }
}
export default Ticket;
