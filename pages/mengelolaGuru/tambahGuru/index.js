import { useEffect, useState } from "react";
import { getId, getLevel } from "../../../pages/utils/common";
import axios from "axios";
import Link from 'next/link'
import { Layout } from "../../../components/layout";
import styles from '../../../styles/login.module.scss'

const TambahSiswaPage = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [dataRapot, setDataRapot] = useState([]);
    const [tahunAjaran, setTahunAjaran] = useState();
    const [sakit, setSakit] = useState("");
    const [izin, setIzin] = useState("");
    const [tanpaAlasan, setTanpaAlasan] = useState("");
    const [sikapSpiritual, setSikapSpiritual] = useState("");
    const [kerajinan, setKerajinan] = useState("");
    const [kebersihan, setKebersihan] = useState("");
    const [kerapian, setKerapian] = useState("");
    const [catatanWalikelas, setCatatanWalikelas] = useState("");
    const [ekstrakulikuler, setEkstrakulikuler] = useState("");

    const handleChange1 = (e) => setSakit(e.target.value);
    const handleChange2 = (e) => setIzin(e.target.value);
    const handleChange3 = (e) => setTanpaAlasan(e.target.value);
    const handleChange4 = (e) => setSikapSpiritual(e.target.value);
    const handleChange5 = (e) => setKerajinan(e.target.value);
    const handleChange6 = (e) => setKebersihan(e.target.value);
    const handleChange7 = (e) => setKerapian(e.target.value);
    const handleChange8 = (e) => setCatatanWalikelas(e.target.value);
    const handleChange9 = (e) => setEkstrakulikuler(e.target.value);

    useEffect(() => {
        // axios
        //     .get(`https://methodist-app.vercel.app/siswa/show/${id}`)
        //     .then((res) => {
        //         // alert("masuk");
        //         setLoading(true);
        //         // console.log(res.data.data)
        //         setData(res.data.data.user)
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });

    }, []);
    // console.log(tahunAjaran)
    // useEffect(() => {
    //     // console.log(dataRapot)
    //     // console.log(tahunAjaran)

    //     if (dataRapot.length > 0) {
    //         axios
    //             .get(`https://methodist-app.vercel.app/tahun-ajaran/show/${dataRapot.filter(y => y.siswa_id == data.id).map((x) => (x.tahun_ajar_id))}`)
    //             .then((res) => {
    //                 // alert("masuk");
    //                 setLoading(true);
    //                 // console.log(res.data.data)
    //                 setTahunAjaran(res.data.data.user)
    //                 setLoading(false);
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             });
    //     }

    // }, []);
    // console.log(dataRapot.filter(y => y.siswa_id == data.id).map((x) => (x.tahun_ajar_id)))
    // console.log(tahunAjaran)

    const handleSubmit = (e) => {
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
                            <div className="text-4xl font-semibold text-white mb-3">Tambah Guru Baru</div>
                        </div>
                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="w-full text-sm text-left">
                                <div className="ml-10 my-10">
                                    <div>
                                        <div className="text-2xl font-semibold mb-3">Informasi Umum</div>
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Nama</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan Input nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Password</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <div className="text-2xl font-semibold mb-3">Mata Pelajaran</div>
                                        <div className="flex">
                                            <label className={styles.radioLabel}>
                                                <input className={styles.radioInput} type="radio" name="ekskul" value="berenang" /><span>Berenang</span>
                                            </label>
                                            <label className={styles.radioLabel}>
                                                <input className={styles.radioInput} type="radio" name="ekskul" value="berenang" /><span>Baca Buku</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-2xl mb-2 font-semibold">Wali Kelas</div>
                                                <select className="px-9 py-3 rounded-xl text-lg font-semibold border-2 border-black">
                                                    <option value="" key="">Kelas A</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='mr-10 flex flex-col'>
                                        <button className={styles.submit}>Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
TambahSiswaPage.getLayout = Layout;
export default TambahSiswaPage