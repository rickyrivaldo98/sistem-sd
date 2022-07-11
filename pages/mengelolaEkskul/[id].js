import { useEffect, useState } from "react";
import { getId, getLevel } from "../../lib/common";
import axios from "axios";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from "../../components/layout";
import styles from '../../styles/login.module.scss'
import Router, { withRouter } from 'next/router'

const MengelolaEkskulDetail = () => {
    const [namaEkskul, setNamaEkskul] = useState("");
    const [idGuru, setIdGuru] = useState("");

    const [namaPembimbing, setNamaPembimbing] = useState("");
    const [listGuru, setListGuru] = useState([]);
    const [Loading, setLoading] = useState(true);


    const handleChange1 = (e) => setNamaEkskul(e.target.value);
    const handleChange2 = (e) => setNamaPembimbing(e);

    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://methodist-app.vercel.app/ekstra-kulikuler/show/${id}`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setNamaEkskul(res.data.data.user.nama_ekskul)
                    setIdGuru(res.data.data.user.guru_id)
                    // console.log(res.data.data.user.guru_id)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });
            axios
                .get(`https://methodist-app.vercel.app/guru/index/`)
                .then((res) => {
                    // alert("masuk");
                    setLoading(true);
                    // console.log(res.data.data)
                    setListGuru(res.data.data.user)
                    setLoading(false);
                })
                .catch((err) => {
                    alert("Akun Tidak Ditemukan");
                });

        } else {

        }
    }, [router.isReady,]);


    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`https://methodist-app.vercel.app/ekstra-kulikuler/update/${id}?nama_ekskul=${namaEkskul}&guru_id=${namaPembimbing.length <= 0 ? idGuru : namaPembimbing}`)
            .then((res) => {
                alert("Ekstra Kulikuler Berhasil Diedit");
                setTimeout(() => {
                    Router.push({
                        pathname: '/mengelolaEkskul'
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
                            <div className="text-4xl font-semibold text-white mb-3">Edit Ekskul</div>
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
                                                <div className="text-lg mb-2">Nama Ekskul</div>
                                                <input
                                                    value={namaEkskul}
                                                    className={`shadow-sm border-gray-300 rounded-lg py-3 px-4 w-full  mb-10 focus: ring-2 focus:ring-indigo-200 focus:border-indigo-400`}
                                                    placeholder="Silahkan Input "
                                                    onChange={handleChange1}
                                                />
                                            </div>
                                            <div className="w-60 mr-10">
                                                <div className="text-lg mb-2">Nama Pembimbing</div>
                                                <select value={namaPembimbing} onChange={e => handleChange2(e.target.value)} className="px-9 border-2 border-blue-300 py-2 rounded-xl ml-3 text-lg font-semibold">
                                                    <option disabled={parseInt(namaPembimbing) > 0 ? `disabled` : ``}>Pilih Guru</option>
                                                    {listGuru.map((x) => (
                                                        <>
                                                            <option value={x.id}>{x.nama_guru}</option>
                                                        </>
                                                    ))}
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
MengelolaEkskulDetail.getLayout = Layout;
export default MengelolaEkskulDetail