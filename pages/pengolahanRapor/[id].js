import { useEffect, useState } from "react";
import { getId, getLevel } from "../../lib/common";
import axios from "axios";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from "../../components/layout";
import styles from '../../styles/login.module.scss'

const PengolahanRaporPageDetail = () => {
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

    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://methodist-app.vercel.app/siswa/show/${id}`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setData(res.data.data.user)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });
            axios
                .get(`https://methodist-app.vercel.app/rapot/index`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data.user)
                    setDataRapot(res.data.data.user)
                    // let value
                    // value = res.data.data.user
                    // // console.log(value)
                    // if (dataRapot.length > 0) {
                    //     axios
                    //         .get(`https://methodist-app.vercel.app/tahun-ajaran/show/${value.filter(y => y.siswa_id == data.id).map((x) => (x.tahun_ajar_id))}`)
                    //         .then((res) => {
                    //             // alert("masuk");
                    //             setLoading(true);
                    //             // console.log(res.data.data)
                    //             setTahunAjaran(res.data.data.user)
                    //             setLoading(false);
                    //         })
                    //         .catch((err) => {
                    //             console.log(err)
                    //         });
                    // }

                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });

            axios
                .get(`https://methodist-app.vercel.app/rapot/show-siswa/${id}`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setTahunAjaran(res.data.data.user)
                    // console.log(res.data.data.user[0])
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });

        } else {

        }
    }, [router.isReady, dataRapot, tahunAjaran]);
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
                        <img src="/images/pengolahanRapor/gambar2.png" className="mr-8 mb-8" alt="logo" />
                        <div>
                            {
                                Loading ? (
                                    <>
                                        <div>loading</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-3xl font-semibold text-white mb-3">{data.nama_siswa}</div>
                                        <div className="text-3xl font-semibold text-white mb-3">{data.nisn}</div>
                                        <div className="text-3xl font-semibold text-white mb-3">Tahun Ajaran
                                            {/* {tahunAjaran.map((x) => x.tahun_ajar)} */}
                                        </div>
                                    </>
                                )
                            }

                        </div>
                    </div>

                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="w-full text-sm text-left">
                                <div className="ml-10 my-10">
                                    <div>
                                        <div className="text-2xl font-semibold mb-3">Absensi</div>
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Sakit</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan Input nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Izin</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Tanpa Alasan</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold mb-3">Sikap</div>
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Sikap Spiritual</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Kerajinan</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Kebersihan</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Kerapian</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Catatan WaliKelas</div>
                                                <textarea
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold mb-3">Ekstrakulikuler</div>
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Melukis</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                // onChange={handleChange1}
                                                />
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
PengolahanRaporPageDetail.getLayout = Layout;
export default PengolahanRaporPageDetail