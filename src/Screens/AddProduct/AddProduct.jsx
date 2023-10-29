import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Buttons from "../../components/Button"
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useParams } from 'react-router-dom';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


function AddProduct() {
  const { category, subcategory } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    quantity: '',
    amount: '',
    description: '',
    category: category,
    subCategory: subcategory,
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a FileReader to read the file and convert it to Base64.
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64Image(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setBase64Image(null);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement the file upload logic here, e.g., send the Base64 data to a server.
      // For simplicity, we will just log the file details.
      console.log('Uploading file:', selectedFile.name);
      console.log('Uploading file:', base64Image);
      // setBase64Image({ ...base64Image, myFile : base64Image})
      setFileUploaded(true);
    } else {
      alert('Please select a file before uploading.');
    }
  };

  // const url="http://localhost:3000/sell"

  // const createPost=async(newImage)=>{

  //   try {
  //     await axios.post(url,newImage)
      
  //   } catch (error) {
      
  //   }
    

  // }



  const handleSubmit=async(e)=>{
    e.preventDefault();

    // Create an object that contains all the input data, including the image data.
    const postData = {
      ...productData,
      image: base64Image,

   
  }
  try {
    console.log(postData)
    // Send a POST request to your backend API to save the data in MongoDB.
    const response = await axios.post('http://localhost:5000/api/product/sell', postData);


    if (response.status === 200) {
      console.log('Data saved successfully to MongoDB');
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
          <button class="fileBtn" onClick={handleUpload}>Upload File</button>
        </div>
      ) : null}
      {base64Image && (
        <div>
          <img
            src={base64Image}
            alt="Uploaded Preview"
            style={{ maxWidth: '100%', height: '400px', width: '400px' }} // Adjust the width as needed
          />
        </div>
      )}
    </div>
</Grid>
<Grid items xs marginTop={3} marginBottom={5}>
  <button type="submit" name="submit">Submit</button>
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