import React from 'react';
import AdminHeader from "../components/Admin/AdminHeader";
import UpdateInfoModal from '../components/Admin/UpdateInfoModal';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Button from 'react-bootstrap/Button';
import 'bootstrap'
import './view-book-page.css'

export default function ViewBookPage() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="view-book-page">       
      <AdminHeader/>
      <div className='content'>
        <div className='view-book-info container'>

          <h1 className='book-title'>Beginning JavaScript / Paul Wilton, Jeremy McPeak.</h1>
          <div className='top-content row'>
            <div className='top-left-content col-8'>
              <div className='row'>
                <div className='info col-6'>
                  <p>Ngôn ngữ:</p>
                  <p>Tác giả:</p>
                  <p>ISBN:</p>
                  <p>Số ấn bản:</p>
                  <p>Thông tin xuất bản:</p>
                  
                </div>

                <div className='info-content col-6'>
                  <p>English</p>
                  <p>Wilton, Paul, 1969</p>
                  <p>9780470051511</p>
                  <p>10</p>
                  <p>Indianapolis, IN : Wrox/Wiley Pub., 2007.</p>
                </div>
              </div>
            </div>

            <div className='top-right-content col-4 mt-4'>
              <img src='https://contentcafe2.btol.com/ContentCafe/jacket.aspx?UserID=ebsco-test&Password=ebsco-test&Return=T&Type=M&Value=9780470051511'></img>
            </div>  

            
          </div>       

          <div className='bot-content row'>
            <div className='row mt-3'>
                <div className='info col-4'>
                  <p>Thể loại:</p>
                </div>

                <div className='info-content col-8'>
                  <p>JavaScript (Computer program language)</p>
                  <p>World Wide Web</p>
                  <p>Web servers</p>
                  <p>JAVA (Computer program language)</p>
                  <p>Ngôn ngữ lập trình JAVA</p>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='info col-4'>
                <p>Vị trí:</p>
              </div>

              <div className='info-content col-8'>
                <p>Kệ số 10</p>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='info col-4'>
                <p>Tình trạng:</p>
              </div>

              <div className='info-content book-status col-8'>
                <p>Có thể cho mượn</p>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='info col-4'>
                <p>Mô tả:</p>
              </div>

              <div className='info-content col-8'>
                <p>JavaScript is the definitive language for making the Web a dynamic, rich, interactive medium. This guide to JavaScript builds on the success of previous editions and introduces you to many new advances in JavaScript development. The reorganization of the chapters helps streamline your learning process while new examples provide you with updated JavaScript programming techniques.</p>
                <p>You'll get all-new coverage of Ajax for remote scripting, JavaScript frameworks, JavaScript and XML, and the latest features in modern Web browsers. Plus, all the featured code has been updated to ensure compliance with the most recent popular Web browsers.</p>
              </div>
            </div>
          </div>

          

          <div className='view-book-page-update-btn'>
            <Button className="update-btn" onClick={() => setModalShow(true)}>
              Cập nhật
            </Button>
          </div>
        </div>
      </div>
      

      

      

      <UpdateInfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Contact />
      <Footer/>
    </div>
  );
}
