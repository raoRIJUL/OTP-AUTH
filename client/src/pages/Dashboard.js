import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Newsboard from "../components/Newsboard"
const Dashboard = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    <Newsboard category={category}/>
  )
}

export default Dashboard