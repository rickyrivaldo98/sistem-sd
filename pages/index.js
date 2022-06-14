import styles from '../styles/login.module.scss'
import Image from 'next/image'

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHalfLeft}>
          <div className="">
            <img src="/images/login/bg.png" alt="logo" />
          </div>
        </div>
        <div className={styles.containerHalfRight}>
          <div className='flex flex-col h-screen'>
            <div className='m-auto w-3/5 '>
              <div className={styles.headerContent}>Sistem Manajemen <br /> Penilaian Siswa</div>
              <div className={styles.logo}>
                <Image src="/images/login/logo.png" alt="logo" width={441} height={99} />
              </div>
              <div className={styles.headerInput}>
                Username
              </div>
              <input className={`${styles.input} focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`} placeholder="Silahkan Input Username" />
              <div className={styles.headerInput}>Password</div>
              <input className={`${styles.input} focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`} placeholder="Silahkan Input Password" />
              <div className='flex flex-col justify-center'>
                <button className={styles.login}>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
