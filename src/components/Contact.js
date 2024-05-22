import React,{useState} from 'react'
  const Contact = () =>{
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      let valid = true;
      const newErrors = { name: "", email: "", message: "" };
  
      // Validate name
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
        valid = false;
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        newErrors.email = "Valid email is required";
        valid = false;
      }
  
      // Validate message
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Perform form submission logic here
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }};
  return (
    <>
 <div className="image-container">
  <img
    src="https://www.maharanacab.com/wp-content/uploads/2021/09/Himachal-Pradesh.jpg"
    alt="Your Image"
  />
  <div className="overlay-text">Contact</div>
</div>


{/* image end=------------------------------------------------- */}




<div id='container'>
  <h4>Offline Address</h4><br>
  </br>
<div className='container-3'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={40}
  height={40}
  fill="currentColor"
  className="bi bi-bank2"
  viewBox="0 0 16 16"
>
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z" />
</svg>
<h4>Tourism & Civil Aviation Department</h4>
<p> Block No.28,SDA Complex<br></br>
Kasumpti, Shimla-171009</p><br></br>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={40}
  height={40}
  fill="currentColor"
  className="bi bi-telephone-forward-fill"
  viewBox="0 0 16 16"
>
  <path
    fillRule="evenodd"
    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
  />
</svg>

<h4>Phone:0177-2625924</h4>
<h4>Fax:0177-2625456</h4><br>
</br>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={40}
  height={40}
  fill="currentColor"
  className="bi bi-envelope-arrow-up-fill"
  viewBox="0 0 16 16"
>
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207z" />
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
</svg>

<h4>Email:tourism.hp@nic.in,</h4>
<h4>tourismmm-hp@nic.in</h4>

</div>
</div>
<div>
<p2>Contact details of Distict Tourism Development Offices and Tourist Informtion Centre</p2></div>



<table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
      <th scope="col">Ph.No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Distict Tourism Development Office</td>
      <td>Kullu at Dhalpur(h.p) pin-175101</td>
      <td>+91-8978425671</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Distict Tourism Development Office</td>
      <td>Manali</td>
      <td>+91-8978425671</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Distict Tourism Development Office</td>
      <td>Mandi</td>
      <td>+91-8978425671</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Distict Tourism Development Office</td>
      <td>Shimla</td>
      <td>+91-8978425671</td>
    </tr>
    <tr></tr>
  </tbody>
</table>

<div className='form-1'>
     <div className='form-2'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <span className="error">{errors.message}</span>
        </div>

        <button className='hie' type="submit">Submit</button>
      </form>
    </div>
    </div>




  </>)
  
}

export default Contact
