import { useEffect, useState } from "react";
import { getId, getLevel } from "../../lib/common";
import axios from "axios";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from "../../components/layout";
import styles from '../../styles/login.module.scss'
import Router, { withRouter } from 'next/router'

const MengelolaGuruDetail = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [dataRapot, setDataRapot] = useState([]);
    const [waliKelas, setWaliKelas] = useState(3);
    const [nama, setNama] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mataPelajaran, setMataPelajaran] = useState("");
    const [lvlAkses, setLvlAkses] = useState("");

    const [listKelas, setListKelas] = useState([]);
    const [listMataPelajaran, setListMataPelajaran] = useState([]);

    const handleChange1 = (e) => setNama(e.target.value);
    const handleChange2 = (e) => setUsername(e.target.value);
    const handleChange3 = (e) => setPassword(e.target.value);
    const handleChange4 = (e) => setMataPelajaran(e.currentTarget.value);
    const handleChange5 = (e) => setWaliKelas(e);
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://methodist-app.vercel.app/guru/show/${id}`)
                .then((res) => {
                    setLoading(true);
                    setNama(res.data.data.user.nama_guru)
                    setUsername(res.data.data.user.username)
                    setPassword(res.data.data.user.password)
                    setLvlAkses(res.data.data.user.lvl_akses)
                    setMataPelajaran(res.data.data.user.mata_pelajaran_id)
                    // setWaliKelas()
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });

            axios
                .get(`https://methodist-app.vercel.app/kelas/show-guru/${id}`)
                .then((res) => {
                    setLoading(true);
                    // setMataPelajaran(res.data.data.user.id)
                    setWaliKelas(res.data.data.user[0].id)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });
            axios
                .get(`https://methodist-app.vercel.app/kelas/index`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setListKelas(res.data.data.user)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });
            axios
                .get(`https://methodist-app.vercel.app/mata-pelajaran/index`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setListMataPelajaran(res.data.data.user)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });

        } else {

        }
    }, [router.isReady,]);
    console.log(waliKelas)

    const handleSubmit = (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('kd_guru', "");
        bodyFormData.append('nama_guru', nama);
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        if (waliKelas == 3) {
            bodyFormData.append('lvl_akses', waliKelas);
        } else if (waliKelas == '') {
            bodyFormData.append('lvl_akses', lvlAkses);
        } else {
            bodyFormData.append('kelas_id', waliKelas);
        }
        bodyFormData.append('mata_pelajaran_id', mataPelajaran);

        // bodyFormData.append('enable_flag', "Y");
        // bodyFormData.append('jns_kelamin', "Laki-Laki");
        // bodyFormData.append('tempat_lahir', "Medan");
        // bodyFormData.append('tgl_lahir', "27/04/1999");
        // bodyFormData.append('alamat', "johor");

        axios
            .post(`https://methodist-app.vercel.app/guru/update/${id}`, bodyFormData)
            .then((res) => {
                alert("Guru Berhasil DIedit");
                setTimeout(() => {
                    Router.push({
                        pathname: '/mengelolaGuru'
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
                            <div className="text-4xl font-semibold text-white mb-3">Edit Guru</div>
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
                                                <div className="text-lg mb-2">Nama</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan Input nilai"
                                                    onChange={handleChange1}
                                                    value={nama}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Username</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan Username"
                                                    onChange={handleChange2}
                                                    value={username}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Password</div>
                                                <input
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                    onChange={handleChange3}
                                                    value={password}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <div className="text-2xl font-semibold mb-3">Mata Pelajaran</div>
                                        <div className="flex flex-wrap">
                                            {
                                                listMataPelajaran.filter(y => y.enable_flag == "Y").map((x) => (
                                                    <>
                                                        <label className={styles.radioLabel}>
                                                            <input
                                                                onChange={handleChange4}
                                                                className={styles.radioInput}
                                                                type="radio"
                                                                name="matapelajaran"
                                                                checked={x.id == mataPelajaran}
                                                                value={x.id} /><span>{x.nama_mata_pelajaran} {x.kd_mata_pelajaran}</span>
                                                        </label>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div >
                                        <div className="flex">
                                            <div className="w-60 mr-10">
                                                <div className="text-2xl mb-2 font-semibold">Wali Kelas</div>
                                                <select value={waliKelas} onChange={e => handleChange5(e.target.value)} className="px-9 border-2 border-blue-300 py-2 rounded-xl text-lg font-semibold">
                                                    <option disabled={parseInt(waliKelas) > 0 ? `disabled` : ``}>Pilih Kelas</option>
                                                    {listKelas.map((x) => (
                                                        <>
                                                            <option value={x.id}>{x.nama_kelas}</option>
                                                        </>
                                                    ))}
                                                    <option value="3">Bukan Wali Kelas</option>
                                                </select>
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
MengelolaGuruDetail.getLayout = Layout;
export default MengelolaGuruDetail