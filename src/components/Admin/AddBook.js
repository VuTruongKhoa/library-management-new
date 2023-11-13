import React, { useState, useRef } from "react";
import './AddBook.css'
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.module.css'
export default function AddBookForm(){
    
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
    
    return(
        <div className="add-book-container">
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
                                <label for="inputName" className="form-label">ID</label>
                                <input  type="text" className="form-control" id="inputName"></input>
                            </div>

                            <div className="col-md-10">
                                <label for="inputName" className="form-label">ISBN</label>
                                <input  type="text" className="form-control" id="inputName"></input>
                            </div>

                            <div className="col-md-10">
                                <label for="inputName" className="form-label">Tựa đề</label>
                                <input  type="text" className="form-control" id="inputName"></input>
                            </div>
                        </form>
                    </div>
                </div>

                <form className="info-book-form row">
                    <div className="col-md-6">
                        <label for="inputName" className="form-label">Tên tác giả</label>
                        <input  type="text" className="form-control" id="inputName"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="inputBookGenre" className="form-label">Thể loại</label>
                        <input  type="text" className="form-control" id="inputBookGenre"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="inputLanguage" className="form-label">Ngôn ngữ</label>
                        <input  type="text" className="form-control" id="inputLanguage"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="inputLocation" className="form-label">Vị trí</label>
                        <input  type="text" className="form-control" id="inputLocation"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="inputPrice" className="form-label">Giá</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label for="inputPublisher" className="form-label">Nhà xuất bản</label>
                        <input  type="text" className="form-control" id="inputPublisher"></input>      
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
                            <label for="bookDescription" className="form-label">Mô tả</label>
                            <textarea className="form-control" id="bookDescription" rows="4"></textarea>
                        </div>
                    </div>

                    <div class="add-book-btn col-12 mb-5">
                        <button type="submit" class="btn">Add book</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
