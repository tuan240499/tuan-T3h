import { Button, Modal, Box, Typography, Input, Grid, TextField } from "@mui/material"
import React, { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import '../header/Header.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loginForm, setLoginForm] = useState({})
  const [checkuser, setCheckuser] = useState('')
  const [checkpass, setCheckpass] = useState('')
  // const username ='admin'
  // const password='admin';

  const handleLogin = () => {

    if (!loginForm.username || !loginForm.password) {
      if (!loginForm.username) {
        setCheckuser('Chuwa dien username')
      } else {
        setCheckuser('')
      }
      if (!loginForm.password) {
        setCheckpass('Chuwa dien password')
      } else {
        setCheckpass('')
      }
    } else {
      if (loginForm.username === "admin" && loginForm.password === "admin") {
        alert('ddawng nhap thanh cong')
        setOpen(false)
      } else {
        if (loginForm.username !== "admin") {
          setCheckuser('Sai user')
        }
        if (loginForm.password !== "admin") {
          setCheckpass('Sai pass')
        }
      }
    }
  }
  const handleRegister = () => {

  }
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className="form-user">
              <Button onClick={handleOpen} style={{ padding: "0" }}>
                <i className='fa fa-user icon-circle' style={{ color: "black" }}></i>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Grid className="mb-16" container sx={style} >
                  <p className="text-login ">Login Form</p>
                  <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginBottom: "20px" }}>
                    <TextField
                      className="w-200 mb-8"
                      label={
                        <span className="font">
                          <span style={{ color: "red" }}> * </span>
                          {"Username"}
                        </span>
                      }
                      onChange={(event) => {
                        setLoginForm({ ...loginForm, username: event.target.value })
                        setCheckuser('')
                      }}
                      value={loginForm.username}
                      type="text"
                      name="username"
                      variant="outlined"
                      size="small"
                    ></TextField><span>{checkuser}</span>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      className="w-200 mb-8"
                      label={
                        <span className="font">
                          <span style={{ color: "red" }}> * </span>
                          {"Password"}
                        </span>
                      }
                      onChange={(event) => {
                        setLoginForm({ ...loginForm, password: event.target.value })
                        setCheckpass('')
                      }}
                      type="password"
                      name="password"
                      value={loginForm.password}
                      variant="outlined"
                      size="small"
                    ></TextField><span>{checkpass}</span>
                  </Grid>
                  <div>
                    <Button className="login" onClick={handleLogin}>Đăng nhập</Button>
                    <hr />
                    <Button className="register" onClick={handleRegister}>Đăng ky</Button>
                  </div>
                </Grid>
              </Modal>

            </div>

            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
