import { useEffect, useState } from "react";
import { getId, getLevel } from "../../lib/common";
import axios from "axios";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from "../../components/layout";
import styles from '../../styles/login.module.scss'
import Router, { withRouter } from 'next/router'

const MengelolaSiswaDetail = () => {
    const [Loading, setLoading] = useState(true);
    const [listKelas, setListKelas] = useState([]);
    const [listTahunPelajaran, setListTahunPelajaran] = useState([]);
    const [listEkstrakulikuler, setListEkstrakuliker] = useState([]);

    const [nama, setNama] = useState();
    const [ttl, setTtl] = useState("");
    const [nis, setNis] = useState("");
    const [kelas, setKelas] = useState("");
    const [tahunPelajaran, setTahunPelajaran] = useState("");
    const [semester, setSemester] = useState("");
    const [ekstrakulikuler, setEkstrakulikuler] = useState("");

    const handleChange1 = (e) => setNama(e.target.value);
    const handleChange2 = (e) => setTtl(e.target.value);
    const handleChange3 = (e) => setNis(e.target.value);
    const handleChange4 = (e) => setKelas(e);
    const handleChange5 = (e) => setTahunPelajaran(e);
    const handleChange6 = (e) => setSemester(e);
    const handleChange7 = (e) => setEkstrakulikuler(e.currentTarget.value);

    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://methodist-app.vercel.app/siswa/show/${id}`)
                .then((res) => {
                    setLoading(true);
                    setNama(res.data.data.user.nama_siswa)
                    setTtl(res.data.data.user.tgl_lahir)
                    setNis(res.data.data.user.nis)
                    setKelas(res.data.data.user.kelas_id)
                    setTahunPelajaran(res.data.data.user.tahun_ajar_id)
                    setEkstrakulikuler(res.data.data.user.ekskul_id)
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
                .get(`https://methodist-app.vercel.app/tahun-ajaran/index`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setListTahunPelajaran(res.data.data.user)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });
            axios
                .get(`https://methodist-app.vercel.app/ekstra-kulikuler/index`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setListEkstrakuliker(res.data.data.user)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });

        } else {

        }
    }, [router.isReady,]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("nama" + nama)
        console.log("ttl" + ttl)
        console.log("nis" + nis)
        console.log("kelas" + kelas)
        console.log("tahun" + tahunPelajaran)
        console.log("ekskul" + ekstrakulikuler)

        axios
            .post(`https://methodist-app.vercel.app/siswa/update/${id}?nis=${nis}&nama_siswa=${nama}&nisn=${nis}&kelas_id=${kelas}`)
            .then((res) => {
                alert("Siswa Berhasil diEdit");
                setTimeout(() => {
                    Router.push({
                        pathname: '/mengelolaSiswa'
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
                            <div className="text-4xl font-semibold text-white mb-3">Edit Siswa</div>
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
                                                    value={nama}
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan Input nilai"
                                                    onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Tanggal Lahir</div>
                                                <input
                                                    value={ttl}
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="DD/MM/YYYY"
                                                    onChange={handleChange2}
                                                    type="date"
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">NIS</div>
                                                <input
                                                    value={nis}
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan masukkan nilai"
                                                    onChange={handleChange3}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <div className="flex">
                                            <div className="w-60 ">
                                                <div className="text-2xl mb-2 font-semibold">Kelas</div>
                                                <select value={kelas} onChange={e => handleChange4(e.target.value)} className="px-9 border-2 border-blue-300 py-2 rounded-xl text-lg font-semibold">
                                                    <option disabled={parseInt(kelas) > 0 ? `disabled` : ``}>Pilih Kelas</option>
                                                    {listKelas.map((x) => (
                                                        <>
                                                            <option value={x.id}>{x.nama_kelas}</option>
                                                        </>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-2xl mb-2 font-semibold">Tahun Pelajaran</div>
                                                <select value={tahunPelajaran} onChange={e => handleChange5(e.target.value)} className="px-9 border-2 border-blue-300 py-2 rounded-xl text-lg font-semibold">
                                                    <option disabled={parseInt(tahunPelajaran) > 0 ? `disabled` : ``}>Pilih Tahun Pelajaran</option>
                                                    {listTahunPelajaran.map((x) => (
                                                        <>
                                                            <option value={x.id}>{x.tahun_ajar} {x.semester}</option>
                                                        </>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold mb-3">Ekstrakulikuler</div>
                                        <div className="mb-10 w-1/2 flex flex-wrap">
                                            {
                                                listEkstrakulikuler.map((x) => (

                                                    <>
                                                        <label className={styles.radioLabel}>
                                                            <input onChange={handleChange7} className={styles.radioInput} checked={x.id == ekstrakulikuler} type="radio" name="ekskul" value={x.id} /><span>{x.nama_ekskul}</span>
                                                        </label>
                                                    </>
                                                ))
                                            }

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
MengelolaSiswaDetail.getLayout = Layout;
export default MengelolaSiswaDetail