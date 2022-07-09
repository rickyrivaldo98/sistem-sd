import { useEffect, useState } from "react";
import { getId, getLevel } from "../../pages/utils/common";

import axios from "axios";
const DashboardPage = () => {
    const [loading, setLoading] = useState(true);
    const [level, setLevel] = useState("");
    const [data, setData] = useState([]);
    const [listGuru, setListGuru] = useState([]);
    const [kelasGuru, setKelasGuru] = useState([]);
    const [matpelGuru, setMatpelGuru] = useState([]);
    const [tests, setTests] = useState([]);




    useEffect(() => {
        setLevel(getLevel())
        // Matpel_index(38)
        // console.log(matpelGuru.map((x) => {
        //     x.nama_mata_pelajaran
        // }))
        // setLoading(true);
        // axios.get("https://ika.sarafdesign.com/category").then((res) => {
        //   setCategoryData(res.data);
        // });
        // setLoading(false);
        axios
            .get(`https://methodist-app.vercel.app/guru/show/${getId()}`)
            .then((res) => {
                // alert("masuk");
                setLoading(true);
                // console.log(res.data.data)
                setData(res.data.data.user)
                setLoading(false);
            })
            .catch((err) => {
                alert("Akun Tidak Ditemukan");
            });
        axios
            .get(`https://methodist-app.vercel.app/mata-pelajaran/show-mapel`)
            .then((res) => {
                // alert("masuk");
                setLoading(true);
                // console.log(res.data.data)
                setListGuru(res.data.data.user)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
        axios
            .get(`https://methodist-app.vercel.app/kelas/show-guru/${getId()}`)
            .then((res) => {
                setLoading(true);
                setKelasGuru(res.data.data.user)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
        axios
            .get(`https://methodist-app.vercel.app/mata-pelajaran/showByGuru/${getId()}`)
            .then((res) => {
                // alert("masuk");
                setLoading(true);
                // console.log(res.data.data)
                setMatpelGuru(res.data.data.user)
                setLoading(false)

            })
            .catch((err) => {
                console.log(err)
            });

    }, []);
    // console.log(data)
    // console.log(listGuru)


    // function Matpel_index(e) {
    //     axios
    //         .get(`https://methodist-app.vercel.app/mata-pelajaran/showByGuru/${e}`)
    //         .then((res) => {
    //             let test = res.data.data.user.nama_mata_pelajaran
    //             setTests(...tests, test)
    //         })
    //         .catch((err) => {
    //             setTests(...tests, "kosong")
    //         });
    // }


    // const test = (e) => {
    //     kelasGuru.filter(function (i, n) {
    //         console.log(n)
    //         // return n.guru_id === '58'
    //     })
    // };
    // console.log(test())

    return (
        <>
            {/* <div className="bg-utama"> */}

            <div className="flex flex-wrap">
                <div className="w-1/2 mb-12 px-8">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-40 shadow-lg rounded-2xl bg-white"
                    >
                        <div className=" my-5 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <img src="/images/dashboard/gambar1.png" className="mr-8" alt="logo" />
                                <div className="">
                                    <h3 className="font-light text-lg ">Good Morning,</h3>
                                    <h3 className="font-semibold text-2xl">

                                        {loading ? (
                                            <>
                                                <div className="container loading">
                                                    <div className='content'>
                                                        <div className='stripe medium-stripe'></div>
                                                    </div>
                                                </div>
                                            </>
                                        ) :
                                            <>
                                                {data.jns_kelamin == "Laki-Laki" ? "Bapak " + data.nama_guru : "Ibu " + data.nama_guru}
                                            </>

                                        }
                                    </h3>
                                    {console.log(matpelGuru > 0 ? "ada" : "kosong")}
                                    {loading ? (
                                        <></>
                                    ) : (
                                        level == 2 ? (
                                            <>
                                                {console.log(matpelGuru.length)}
                                                <h3 className="font-light text-lg ">Wali Kelas {kelasGuru.length > 0 ? kelasGuru[0].nama_kelas : "Belum Ada"}</h3>
                                                {/* <h3 className="font-light text-lg ">Wali Kelas Kelas A</h3> */}
                                                <h3 className="font-light text-lg ">Guru {
                                                    // JSON.stringify(matpelGuru)
                                                    matpelGuru.length > 0 ?
                                                        matpelGuru.filter(x => x.enable_flag == "Y").map((x) => {
                                                            return (<>
                                                                <div>{x.nama_mata_pelajaran} </div>
                                                            </>)
                                                        }) : (<>
                                                            Belum Ada
                                                        </>)
                                                }</h3>
                                            </>
                                        ) : level == 3 ? (
                                            <>
                                                <h3 className="font-light text-lg ">Guru IPA dan MTK</h3>
                                            </>
                                        ) : (
                                            <>
                                                <h3 className="font-light text-lg ">Admin</h3>
                                            </>
                                        )
                                    )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        level == 2 ? (
                            <>
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white"
                                >
                                    <div className="my-5 px-4 py-3 border-0">
                                        <div className="flex flex-wrap ">
                                            <div className="w-1/3">
                                                <h3 className="font-semibold text-3xl mb-4 ml-3">Highlight Nilai <span className="text-sm">IPA</span></h3>
                                                <img src="/images/dashboard/gambar2.png" className="mr-8" alt="logo" />

                                            </div>
                                            <div className="w-2/3">
                                                <div className="flex justify-evenly text-center mt-4">
                                                    <div className="px-2">
                                                        <img src="/images/dashboard/logo1.png" className="mx-auto mb-1" alt="logo" />
                                                        <div className="text-xs">Pengetahuan</div>
                                                        <div className="mt-2">
                                                            <div className="font-bold text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <img src="/images/dashboard/logo2.png" className="mx-auto mb-1" alt="logo" />
                                                        <div className="text-xs">Keterampilan</div>
                                                        <div className="mt-2">
                                                            <div className="font-bold text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <img src="/images/dashboard/logo3.png" className="mx-auto mb-1" alt="logo" />
                                                        <div className="text-xs">Tugas</div>
                                                        <div className="mt-2">
                                                            <div className="font-bold text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white"
                                >
                                    <div className="my-5 px-4 py-3 border-0">
                                        <div className="flex flex-wrap ">
                                            <div className="w-1/3">
                                                <h3 className="font-semibold text-3xl mb-4 ml-3">Highlight Nilai <span className="text-sm">IPA</span></h3>
                                                <img src="/images/dashboard/gambar2.png" className="mr-8" alt="logo" />

                                            </div>
                                            <div className="w-2/3">
                                                <div className="flex justify-evenly text-center mt-4">
                                                    <div className="px-2">
                                                        <img src="/images/dashboard/logo1.png" className="mx-auto mb-1" alt="logo" />
                                                        <div className="text-xs">Pengetahuan</div>
                                                        <div className="mt-2">
                                                            <div className="font-bold text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <img src="/images/dashboard/logo2.png" className="mx-auto mb-1" alt="logo" />
                                                        <div className="text-xs">Keterampilan</div>
                                                        <div className="mt-2">
                                                            <div className="font-bold text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <img src="/images/dashboard/logo3.png" className="mx-auto mb-1" alt="logo" />
                                                        <div className="text-xs">Tugas</div>
                                                        <div className="mt-2">
                                                            <div className="font-bold text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                            <div className="text-xs mb-1">Murid1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
                <div className="w-1/2 mb-12 pr-8">
                    {
                        level == 2 ? (
                            <>
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mt-40 mb-6 shadow-lg rounded-2xl bg-white"
                                >
                                    <div className="my-5 px-8 pt-3 pb-20 border-0 relative">
                                        <div className="absolute -bottom-20 right-0">
                                            <img src="/images/dashboard/gambar3.png" alt="logo" />

                                        </div>
                                        <div className="">
                                            <div className="font-semibold text-4xl mb-5">
                                                List Guru
                                            </div>
                                            <div className="flex flex-wrap w-full">
                                                <div className="w-1/2">
                                                    <div className="font-semibold text-xl mb-3">
                                                        Nama Guru
                                                    </div>

                                                    {loading ?
                                                        (
                                                            <div className="containerList loading">
                                                                <div className='content'>
                                                                    <div className='stripe small-stripe'></div>
                                                                    <div className='stripe small-stripe'></div>
                                                                    <div className='stripe small-stripe'></div>
                                                                </div>
                                                            </div>
                                                        ) :
                                                        listGuru.map((x) => (
                                                            <>
                                                                <div className="font-base text-xl  mb-3">
                                                                    {x.nama_guru}
                                                                </div>

                                                                {/* {Matpel_index(x.id)} */}
                                                                {/* <div>{tests.map((y) => console.log(y))}</div> */}


                                                            </>
                                                        ))
                                                    }
                                                </div>
                                                <div className="w-1/2">
                                                    <div className="font-semibold text-xl mb-3">
                                                        Mata Pelajaran
                                                    </div>
                                                    {loading ?
                                                        (
                                                            <div className="containerList loading">
                                                                <div className='content'>
                                                                    <div className='stripe small-stripe'></div>
                                                                    <div className='stripe small-stripe'></div>
                                                                    <div className='stripe small-stripe'></div>
                                                                </div>
                                                            </div>
                                                        ) :
                                                        listGuru.map((x) => (
                                                            <>
                                                                <div className="font-base text-xl  mb-3">
                                                                    {x.nama_mata_pelajaran == null ? "Belum Ada" : x.nama_mata_pelajaran}
                                                                </div>
                                                                {/* {Matpel_index(x.id)} */}
                                                                {/* <div>{tests.map((y) => console.log(y))}</div> */}


                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default DashboardPage;