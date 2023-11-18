import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


function AddProduct() {
  const navigate = useNavigate();
  const { category, subcategory } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage,setpreviewImage ] = useState(null);
  const [imageUrl,setImageUrl] = useState("")
  const [fileUploaded, setFileUploaded] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    quantity: '',
    amount: '',
    description: '',
    category: category,
    subCategory: subcategory,
    uId: localStorage.getItem("uId")
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file)
    const reader = new FileReader();
    reader.onload = (e) => {
      setpreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault(); //
    if (selectedFile) {
      const storageRef = ref(storage);
      const imagesRef = ref(storageRef, `images/${generateString(8)}`+selectedFile.name);
      console.log(selectedFile)
      console.log(imagesRef)
      console.log('Uploading file:', selectedFile.name);
      await uploadBytes(imagesRef, selectedFile).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot)
      });

      await  getDownloadURL(imagesRef)
      .then((url) => {
        console.log(url+"this is the image url")
        setImageUrl(url)
      })
      .catch((error) => {
        console.error('Error getting download URL: ', error);
      });
      console.log("done")
      setFileUploaded(true);
    } else {
      alert('Please select a file before uploading.');
    }
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    // Create an object that contains all the input data, including the image data.

    const postData = {
      ...productData,
      image: imageUrl,

  }
  try {
    console.log(postData)
    
    const response = await axios.post('http://localhost:5000/api/product/sell', postData);

    if (response.status === 200) {
      console.log('Data saved successfully to MongoDB');
      navigate("/")
      // Optionally, you can redirect the user to a success page or perform other actions here.
    } else {
      console.error('Failed to save data to MongoDB');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

};
  return (
    <Paper>
    <Navbar/>
    <form onSubmit={handleSubmit}>

    <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={2} marginTop={5}>
      <Grid item xs>
      <h4>Product Details</h4>
      </Grid>
      <Grid item xs>
      <div>
        <TextField
          required
          name="name"
          id="outlined-required"
          label="Name"
          multiline
          defaultValue=" "
          value={productData.name}
          onChange={handleInputChange}
          style={{width:'400px'}}
          
        />
       
      </div>
    </Grid>
    <Grid item xs>
  <div>
      <TextField
          required
          name="quantity"
          id="outlined-required"
          label="Quantity"
          multiline
          defaultValue=" "
          value={productData.quantity}
          onChange={handleInputChange}
          style={{width:'400px'}}
          
        />
      </div>
    </Grid>

    <Grid item xs>
  <div>
    <TextField
          required
          name="amount"
          id="outlined-required"
          label="Amount"
          multiline
          defaultValue=" "
          value={productData.amount}
          onChange={handleInputChange}
          style={{width:'400px'}}
          
        />
      </div>
    </Grid>
    <Grid item xs>
    <div>
    <TextField
         name="description"
          required
          id="outlined-required"
          label="Product Description"
          rows={6}
          multiline
          defaultValue=" "
          value={productData.description}
          onChange={handleInputChange}
          style={{width:'400px'}}
          
        />
   </div>
  </Grid>
  <Grid item xs>
  <div>
      <TextField
          required
          name="category"
          id="outlined-required"
          label="Category"
          multiline
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
          // value={category}
          value={productData.category}
          onChange={handleInputChange}
          style={{width:'400px'}}
        />
      </div>
  </Grid>
  <Grid item xs>
  <div>
      <TextField
          required
          name="subCategory"
          id="outlined-required"
          label="subCategory"
          multiline
          defaultValue={subcategory}
          InputProps={{
            readOnly: true,
          }}
          // value={subcategory}
          value={productData.subCategory}
          onChange={handleInputChange}
          style={{width:'400px'}}
        />
      </div>
  </Grid>
</Grid>

<Grid container spacing={2} marginTop={2} direction={'column'} justifyContent={'center'} alignItems={'center'}>
<Grid item xs> 
  <h4>Add Image</h4>
  </Grid>
<Grid item xs>
<div>
      {!fileUploaded ? (
        <div>
          <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange}/>
          <button class="fileBtn" onClick={(e)=>{handleUpload(e)}}>Upload File</button>
        </div>
      ) : null}
      {selectedFile && (
        <div>
          <img
            src={previewImage}
            alt="Uploaded Preview"
            style={{ maxWidth: '100%', height: '400px', width: '400px' }} // Adjust the width as needed
          />
        </div>
      )}
    </div>
</Grid>
<Grid items xs marginTop={3} marginBottom={5}>
<Button type="submit" name="submit" sx =  {{backgroundColor: '#04AA6D', color:'#fff', border:'none', padding:'10px', borderRadius:'10px'}}>Submit</Button>
{/* <Buttons
variant="contained"
text="Submit"
/> */}
</Grid>
</Grid>
</form>
<Footer/>

 </Paper>
  )
}


export default AddProduct