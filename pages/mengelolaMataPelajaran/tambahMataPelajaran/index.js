import { useEffect, useState } from "react";
import { getId, getLevel } from "../../../lib/common";
import axios from "axios";
import Link from 'next/link'
import { Layout } from "../../../components/layout";
import styles from '../../../styles/login.module.scss'
import Router, { withRouter } from 'next/router'
const TambahMataPelajaranPage = () => {
    const [matpel, setMatpel] = useState([]);
    const [Loading, setLoading] = useState(true);


    const handleChange1 = (e) => setMatpel(e.target.value);


    useEffect(() => {

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`https://methodist-app.vercel.app/mata-pelajaran/store?nama_mata_pelajaran=${matpel}&guru_id=0&enable_flag=Y`)
            .then((res) => {
                alert("Mata Pelajaran Berhasil Ditambahkan");
                setTimeout(() => {
                    Router.push({
                        pathname: '/mengelolaMataPelajaran'
                    })
                }, 3000);
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <div className="flex flex-wrap">
            <div className="w-full mb-12 px-8">
                <div className="mt-20">
                    <div className="flex items-center">
                        <img src="/images/mengelolaSiswa/gambar1.png" className="mr-8 mb-8" alt="logo" />
                        <div>
                            <div className="text-4xl font-semibold text-white mb-3">Tambah Mata Pelajaran</div>
                        </div>
                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="w-full text-sm text-left">
                                <form className="ml-10 my-10" onSubmit={handleSubmit}>
                                    <div>
                                        <div className="text-2xl font-semibold mb-3">Informasi Umum</div>
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Nama Mata Pelajaran</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan Input nilai"
                                                    onChange={handleChange1}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mr-10 flex flex-col'>
                                        <button className={styles.submit}>Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
TambahMataPelajaranPage.getLayout = Layout;
export default TambahMataPelajaranPage