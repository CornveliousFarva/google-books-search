import React from 'react';

const BookCard = (props) => {
    const { volumeInfo } = props.info;
    const {title, authors, subtiitle, publishedDate} = props.info.volumeInfo;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') ==false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;

    return (
      
        <div className="card-container">
          <img src={thumbNail} alt=""/>
          <div className="desc">
            <h2>{title}</h2>
            <h3>Author: {authors}</h3>
            <p>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0,4)}</p>                        
          </div>
        </div>
        
        
      );
  }
    

export default BookCard;