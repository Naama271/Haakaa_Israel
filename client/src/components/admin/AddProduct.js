import React from "react";
import axios from "axios";

function AddProduct() {
  const onSubmit = (e) => {
    e.preventDefault();
    const productname = e.target.productname.value;
    const price = e.target.price.value;
    const describe = e.target.describe.value;
    const primarying = e.target.primarying.value;
    const thumbimg = e.target.thumbimg.value;
    const video = e.target.video.value;
    const breastfeedsentence = e.target.breastfeedsentence.value;
    const question = e.target.question.value;
    const answer = e.target.answer.value;
    const ins_clean = e.target.ins_clean.value;

    const newData = {
      title: productname,
      price: price,
      describe: describe,
      primarying: primarying,
      video: video,
      breastfeedsentence: breastfeedsentence,
      question: question,
      thumbimg: thumbimg,
      answer: answer,
      ins_clean: ins_clean,
    };

    test(newData);
  };
  const test = async (data) => {
    try {
      console.log(data);
      const req = await axios.post(
        "http://localhost:5000/api/products",
        data
      );
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  };

  return (<div>
<h3>
הוספת מוצר חדש
</h3>
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="שם המוצר" name="productname" required/>
        <input type="number" placeholder="מחיר" name="price" />
        <input type="text" placeholder="תיאור המוצר" name="describe" required/>
        <label htmlFor="primarying">תמונה ראשית</label>
        <input type="file" placeholder="תמונה ראשית" name="primarying" />
        <label htmlFor="thumbimg">תמונה נוספות</label>
        <input type="file" placeholder="תמונות נוספות" name="thumbimg" />
        <label htmlFor="video">סרטון</label>
        <input type="text" placeholder="סרטון" name="video" />       
        <input type="text" placeholder="משפט כללי על הנקה" name="breastfeedsentence" />
        <input type="text" placeholder="מה זה -שם המוצר-?" name="question" />
        <input type="text" placeholder="תשובה על המוצר" name="answer" />
        <textarea type="textarea" placeholder="הוראות ניקוי " name="ins_clean" />     
         
        <button type="submit">שמירת מוצר</button>
  </form>
  </div>
  );
}

export default AddProduct;
