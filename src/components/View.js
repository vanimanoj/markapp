import { value } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Navbar from './Navbar'

const View = () => {
    var marklist=[{"name":"aa","admissionno":" r","cgpa":"t"}]
  return (

    <div>
        <Navbar/>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">ADMISSION NO</th>
      <th scope="col">CGPA</th>
    </tr>
  </thead>
  <tbody>
      {marklist.map((value,key)=>{
    
    return <tr>
      <th scope="row">1</th>
      <td>{value.name}</td>
      <td>{value.addmissionno}</td>
      <td>{value.cgpa}</td>
    </tr>
      })}
  </tbody>
</table>

    </div>
  )
}

export default View