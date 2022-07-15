import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { getId, getLevel } from "../../lib/common";

// import { LinkProps } from "next/link";
const Sidebar = () => {
    const [collapseShow, setCollapseShow] = useState("hidden");
    const [activeTab, setActiveTab] = useState();
    const [url, setUrl] = useState();
    const router = useRouter()
    const [level, setLevel] = useState("");

    useEffect(() => {
        setLevel(getLevel())
        // window.location.href.indexOf("/admin/detail-volunteer-admin") !== -1 ? setActiveTab("pengolahan-rapor") : null;
        // window.location.href.indexOf("/pengolahan-rapor") !== -1 ? setActiveTab("pengolahan-rapor") : null;
        router.pathname.includes("/pengolahanRapor") ? setActiveTab("pengolahanRapor") : null;
        router.pathname.includes("/mengelolaSiswa") ? setActiveTab("mengelolaSiswa") : null;
        router.pathname.includes("/mengelolaMataPelajaran") ? setActiveTab("mengelolaMataPelajaran") : null;
        router.pathname.includes("/mengelolaGuru") ? setActiveTab("mengelolaGuru") : null;
        router.pathname.includes("/mengelolaEkskul") ? setActiveTab("mengelolaEkskul") : null;
        router.pathname.includes("/pengolahanNilai") ? setActiveTab("pengolahanNilai") : null;
        router.pathname.indexOf("/dashboard") !== -1 ? setActiveTab("dashboard") : null;

        // window.location.href.indexOf("/dashboard") !== -1 ? setActiveTab("dashboard") : null;

        // setUrl(window.location.href);
        // console.log(router.pathname)
    });

    const handleTab1 = e => {
        e.preventDefault()
        setActiveTab("dashboard");
    };
    const handleTab2 = e => {
        e.preventDefault()
        setActiveTab("pengolahan-rapor");
    };
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-72 z-10 py-4">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto z-10">
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link
                        href="/dashboard"
                    >
                        <div
                            className="md:block text-center md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-xl  font-bold p-4 px-0"
                        >Sistem Manajemen <br /> Penilaian Mahasiswa</div>
                    </Link>
                    <img src="/images/login/logo.png" alt="" />
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        href="/dashboard"
                                    >
                                        <div
                                            className="md:block text-center md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm  font-bold p-4 px-0"
                                        >Sistem Manajemen <br /> Penilaian Mahasiswa</div>
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none mt-8">
                            <li className="items-center">
                                <Link
                                    href="/dashboard"

                                // onClick={handleTab1}
                                >
                                    <div style={{ cursor: "pointer" }}
                                        className={
                                            "text-base px-5 py-5 font-bold block " +
                                            (activeTab === "dashboard"
                                                ? "text-ketiga hover:text-utama bg-kedua "
                                                : "text-gray-700 hover:text-utama ")
                                        }>
                                        <i
                                            className={
                                                "fas fa-home mr-4 text-2xl " +
                                                (activeTab === "dashboard" ? "opacity-75" : "text-utama")
                                            }
                                        ></i>
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            {level == 2 ? (
                                <>
                                    <li className="items-center">
                                        <Link
                                            href="/pengolahanRapor"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "pengolahanRapor"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-user-friends mr-4 text-2xl " +
                                                        (activeTab == "pengolahanRapor"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Pengolahan Rapor
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link
                                            href="/pengolahanNilai"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "pengolahanNilai"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-file mr-6 text-2xl " +
                                                        (activeTab == "pengolahanNilai"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Pengolahan Nilai
                                            </div>
                                        </Link>
                                    </li>
                                </>
                            ) : level == 3 ? (
                                <>
                                    <li className="items-center">
                                        <Link
                                            href="/pengolahanNilai"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "pengolahanNilai"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-file mr-6 text-2xl " +
                                                        (activeTab == "pengolahanNilai"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Pengolahan Nilai
                                            </div>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="items-center">
                                        <Link
                                            href="/pengolahanRapor"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "pengolahanRapor"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-user-friends mr-4 text-2xl " +
                                                        (activeTab == "pengolahanRapor"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Pengolahan Rapor
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link
                                            href="/pengolahanNilai"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "pengolahanNilai"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-file mr-6 text-2xl " +
                                                        (activeTab == "pengolahanNilai"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Pengolahan Nilai
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link
                                            href="/mengelolaGuru"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "mengelolaGuru"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-user-friends mr-4 text-2xl " +
                                                        (activeTab == "mengelolaGuru"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Mengelola Guru
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link
                                            href="/mengelolaSiswa"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "mengelolaSiswa"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-user-friends mr-4 text-2xl " +
                                                        (activeTab == "mengelolaSiswa"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Mengelola Siswa
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link
                                            href="/mengelolaMataPelajaran"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "mengelolaMataPelajaran"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-file mr-6 text-2xl " +
                                                        (activeTab == "mengelolaMataPelajaran"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Mengelola Mata Pelajaran
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link
                                            href="/mengelolaEkskul"
                                        // onClick={handleTab2}
                                        >
                                            <div style={{ cursor: "pointer" }} className={
                                                "text-base px-5 py-5 font-bold block " +
                                                (activeTab == "mengelolaEkskul"
                                                    ? "text-ketiga hover:text-utama bg-kedua "
                                                    : "text-gray-700 hover:text-utama")
                                            }>
                                                <i
                                                    className={
                                                        "fas fa-file mr-6 text-2xl " +
                                                        (activeTab == "mengelolaEkskul"
                                                            ? "opacity-75"
                                                            : "text-utama")
                                                    }
                                                ></i>
                                                Mengelola Ekskul
                                            </div>
                                        </Link>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
