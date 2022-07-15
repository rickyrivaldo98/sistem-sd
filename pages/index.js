import React, { useState } from "react";
import styles from '../styles/login.module.scss'
import axios from "axios";
import { setUserSession } from "../lib/common";
import Router, { withRouter } from 'next/router'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleChange1 = (e) => setUsername(e.target.value);
  const handleChange2 = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("here");
    setError(null);
    const user = {
      username: username,
      password: password,
    };

    axios
      .get(`https://methodist-app.vercel.app/login?username=${username}&password=${password}`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data)
        setUserSession(res.data.data.api_token, res.data.data.user.id, res.data.data.user.lvl_akses);
        // console.log(user);
        alert("Login Berhasil");
        setTimeout(() => {
          Router.push({
            pathname: '/dashboard'
          })
        }, 3000);
      })
      .catch((err) => {
        alert("Akun Tidak Ditemukan");
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHalfLeft}>
          <div className="">
            <img src="/images/login/bg.png" alt="logo" />
          </div>
        </div>
        <div className={styles.containerHalfRight}>
          <form className='flex flex-col h-screen' onSubmit={handleLogin}>
            <div className='m-auto w-3/5 '>
              <div className={styles.headerContent}>Sistem Manajemen <br /> Penilaian Siswa</div>
              <div className={styles.logo}>
                <img src="/images/login/logo.png" alt="" />
              </div>
              <div className={styles.headerInput}>
                Username
              </div>
              <input
                className={`${styles.input} focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                placeholder="Silahkan Input Username"
                onChange={handleChange1}
              />
              <div className={styles.headerInput}>Password</div>
              <input
                className={`${styles.input} focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                placeholder="Silahkan Input Password"
                onChange={handleChange2}
                type="password"
              />
              <div className='flex flex-col justify-center'>
                <button className={styles.login}>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
