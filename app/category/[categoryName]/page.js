import React from 'react'

const page = (props) => {
    const categoryName = props.params.categoryName;
  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="main-grid">hello i am main grid</div>
    </div>
  )
}

export default page
