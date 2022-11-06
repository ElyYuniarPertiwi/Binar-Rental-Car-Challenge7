import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./Faq.css";

const Faq = () => {
  return (
    <div id="FAQ" className="container mt-5 pt-5 mb-5">
      <div className="row pt-4">
        <div className="col-lg-6 col-12">
          <h2 className="fw-bold mb-4">Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="col-lg-6 col-12">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-4">
              <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatem vitae, deleniti ratione ut nesciunt beatae possimus reiciendis, quisquam nihil ea aliquid accusantium velit a. Alias quos ab laborum iste?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-4 border">
              <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur perspiciatis dolores nam aut perferendis praesentium officiis rerum illo debitis, voluptas reiciendis. Maiores vel perferendis impedit adipisci placeat tempora deserunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-4 border">
              <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste totam quaerat reprehenderit sequi, qui officiis eius sunt cupiditate iusto aliquam placeat quasi corporis laudantium nulla dicta odio doloremque, rerum ad?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-4 border">
              <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem voluptatum recusandae vitae totam laudantium aut unde soluta voluptates inventore ab eaque eligendi natus minima consequuntur nostrum, voluptas expedita nobis!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mb-5 border">
              <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
              <Accordion.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum velit ipsam, voluptates pariatur temporibus eum, non alias debitis atque doloremque ex numquam amet quas. Quas suscipit perferendis odio quasi autem!
              </Accordion.Body>
            </Accordion.Item>
      </Accordion>
      </div>
    </div>
  </div>
  );
};

export default Faq;
