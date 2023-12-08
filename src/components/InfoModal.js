import {React, useState, useRef } from 'react'
import './InfoModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.module.css'

function InfoModal(props) {
  const [publishDate, setPublishDate] = useState(null);
  const [updateDate, setUpdateDate] = useState(null);

  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
      inputRef.current.click();
  }

  const handleImageChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='modal-header-custom' closeButton>
        
      </Modal.Header>
      <Modal.Body>
      <div className="update-book-container">
            <div className="container">
                <div className="row top-form">
                    <div className="book-img col-md-6 col-sm-12">
                        <div onClick={handleImageClick}>
                            {image ? (
                                <img key={image} src={URL.createObjectURL(image)} alt=""/>
                            ) : (
                                <img src="https://www.iforium.com/wp-content/uploads/Placeholder-Image-400.png" alt=""/>
                            )}
                            <input type="file" ref={inputRef} onChange={handleImageChange} style={{display: "none"}}/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form className="row g-1">
                            <div className="col-md-10">
                                <label for="ID" className="form-label">ID</label>
                                <input  type="text" className="form-control" id="inputID"></input>
                            </div>

                            <div className="col-md-10">
                                <label for="ISBN" className="form-label">ISBN</label>
                                <input  type="text" className="form-control" id="ISBN"></input>
                            </div>

                            <div className="col-md-10">
                                <label for="BookQuantity" className="form-label">Số ẩn bản</label>
                                <input  type="number" className="form-control" id="BookQuantity"></input>
                            </div>

                            <div className="col-md-10">
                                <label for="BookName" className="form-label">Tựa đề</label>
                                <input  type="text" className="form-control" id="BookName"></input>
                            </div>
                        </form>
                    </div>
                </div>

                <form className="info-book-form row">
                    <div className="col-md-6">
                        <label for="AuthorName" className="form-label">Tên tác giả</label>
                        <input  type="text" className="form-control" id="AuthorName"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="BookGenre" className="form-label">Thể loại</label>
                        <input  type="text" className="form-control" id="BookGenre"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="Language" className="form-label">Ngôn ngữ</label>
                        <input  type="text" className="form-control" id="Language"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="Location" className="form-label">Vị trí</label>
                        <input  type="text" className="form-control" id="Location"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="Price" className="form-label">Giá</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" id="Price"></input>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label for="Publisher" className="form-label">Nhà xuất bản</label>
                        <input  type="text" className="form-control" id="Publisher"></input>      
                    </div>
                    

                    <div className="col-md-6">
                        <label for="date" class="form-label">Ngày xuất bản</label>
                        <div class="input-group date" id="datepicker">
                            <Datepicker className="form-control custom" selected={publishDate} onChange={date => setPublishDate(date)}
                                maxDate = {new Date()}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label for="date" class="form-label">Ngày cập nhật</label>
                        <div class="input-group date" id="datepicker">
                            <Datepicker className="form-control custom" selected={updateDate} onChange={date => setUpdateDate(date)}
                                maxDate = {new Date()}
                            />
                        </div>
                    </div>
                    
                    <div className="book-description">
                        <div className="mb-4 col-md-6">
                            <label for="Description" className="form-label">Mô tả</label>
                            <textarea className="form-control" id="Description" rows="4"></textarea>
                        </div>
                    </div>

                
                </form>
            </div>
        </div>
        
      </Modal.Body>
      <Modal.Footer className='modal-footer-custom'>
        <Button className='update-btn' onClick={props.onHide}>Xác nhận</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal

// function UpdateInfoModal({ setOpenModal }) {
//   return (
//     <div className='modal-background'>
//         <div className='modal-container'>
//           <div className='title-close-btn'>
//              <button  onClick={() => {setOpenModal(false)}}>
//              <i class="fa-solid fa-xmark"></i>
//               </button>
//           </div>
//           <div className="title">
//           </div>
//           <div className="body">
//             Hello
//           </div>
//           <div className="footer">
//             <button>Cập nhật</button>
//           </div>
//         </div>
//     </div>
//   )
// }

