import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories =[
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "MYSTERY & THRILLER",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Romantasy",
    "Romance",    
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Historical Fiction",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);
const handleChangeSelectedValue = (event) =>{
  //console.log(event.target.value);
  setSelectedBookCategory(event.target.value);
}



//handle book submission
const handleBookSubmit =(event) =>{
  event.preventDefault();
  const form =event.target;

  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageUrl = form.imageUrl.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPdfUrl = form.bookPdfUrl.value;

  const bookObj = {
    bookTitle, authorName,imageUrl,category,bookDescription,bookPdfUrl
  }
  console.log(bookObj)
  //send data to db

  fetch("http://localhost:3000/upload-book",{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(bookObj)
  }).then(res => res.json()).then(data => {
    //console.log(data)
  alert("Book uploaded successfully!!!")
  form.reset();
  
  
  }) 
}
  return (
    <div className='px-4 my-12'>  
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      
      <form onSubmit={handleBookSubmit}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" 
          value="Book Title" />
         </div>
        <TextInput 
        id="bookTitle" 
        name = "bookTitle"
        type="text" 
        placeholder="Book Name" 
        required />
     
      </div>
      
      
      {/* imageUrl */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" 
          value="Author Name" />
         </div>
        <TextInput 
        id="authorName" 
        name = "authorName"
        type="text" 
        placeholder="Author Name" 
        required />
     
      </div>
      </div>

      {/* second row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" 
          value="Book Image URL" />
         </div>
        <TextInput 
        id="imageUrl" 
        name = "imageUrl"
        type="text" 
        placeholder="Book Image URL" 
        required />
     
      </div>
      
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" 
          value="Book Category" />
         </div>

         <Select id ='inputState' name ='categoryName' className = 'w-full rounded' value= {selectedBookCategory}
         onChange ={handleChangeSelectedValue}>
          {
          bookCategories.map((option) => <option key ={option} value ={option}>{option}</option>)
        }


         </Select>

        
     
      
      
      </div>
      </div>

     {/* bookDescription */}
     <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea 
        id="bookDescription"
        name = 'bookDescription' 
        placeholder="Write your book description..." 
        required 
        className='w-full'
        rows={6} 
        />


       
      </div>
    
      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" 
          value="Book PDF URL" />
        </div>
        <TextInput 
        id="bookPdfUrl" 
        name ="bookPdfUrl"
        type="text" 
        placeholder="Book PDF URL" 
        required 
        />
      </div>
      <Button type="submit" className='mt-5'>Upload Book</Button>
      





    </form>
    </div>
   
  )
}

export default UploadBook