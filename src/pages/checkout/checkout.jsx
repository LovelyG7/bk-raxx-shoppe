import React from 'react'


export const Checkout = () => {
  return (
    <div className='salutation'>
      <form className='payment'>
  <label>
    Name:
    <input type="text" name="name"
    placeholder='name' />
  </label>
  <label>
  Email:
    <input type="text" name="email" />
  </label>
  <label>
  Card Info:
  <input type="text" 
  placeholder='card number'name="" />
</label>
<label>
  Exp. Date:
    <input type="text" name="Exp. Date" />
  </label>
  <label>
  Zip Code:
    <input type="text" name="zip-code" />
  </label>
  <input type="submit" value="Submit" />
</form>
      Thank you for shopping at BK-Raxx!
      </div>
  )
}
