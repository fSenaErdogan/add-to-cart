
import Hbside from "./Hbside"
import Pnside from "./Pnside"
import { useState, useEffect } from "react"


const Solsidebar = () => {

    const [categories, setcategories] = useState([])
    useEffect(() => {
        setcategories([
            {
                title: "Kadın",
                link: "/kadin",
                sub: [
                    {
                        title: "Ceket",
                        link: "/ceket"
                    },
                    {
                        title: "Ayakkabı",
                        link: "/ayakkabi"
                    },
                    {
                        title: "Çanta",
                        link: "/canta"
                    },
                    {
                        title: "Gömlekler & Bluzlar",
                        link: "/gomleklervebluzlar"
                    },
                    {
                        title: "Jean",
                        link: "/jean"
                    },
                    {
                        title: "Sweatshirt’ler & Kapüşonlular",
                        link: "/sweatshirtlervekapusonlular"
                    },
                ]
            },
            {
                title: "Erkek",
                link: "/erkek",
                sub: [
                    {
                        title: "Pantolon",
                        link: "/pantolon"
                    },
                    {
                        title: "Ayakkabı",
                        link: "/ayakkabi"
                    },
                    {
                        title: "Hırka & Kazak",
                        link: "/hirkavekazak"
                    },
                    {
                        title: "Gömlekler & Bluzlar",
                        link: "/gomleklervebluzlar"
                    },
                    {
                        title: "Jean",
                        link: "/jean"
                    },
                    {
                        title: "Sweatshirt’ler & Kapüşonlular",
                        link: "/sweatshirtlervekapusonlular"
                    },
                ]
            },
            {
                title: "Çocuk",
                link: "/cocuk",
                sub: [
                    {
                        title: "Mont",
                        link: "/mont",
                    }, {
                        title: "Eldiven",
                        link: "/eldiven"
                    },
                    {
                        title: "Tişört",
                        link: "/tisort"
                    },
                    {
                        title: "Ayakkabı",
                        link: "/ayakkabi"
                    },
                ]
            }
        ])
    }, [])

    return (
        <>
            {/* SOL SİDEBAR */}
            <div className='w-1/5 p-2 pt-3 transition-all delay-200'>
                {
                    categories.length > 0 && categories.map((categorie, index) => (
                        <div key={index} className="pl-1 mb-4">
                            <Hbside link={categorie.link}>{categorie.title}</Hbside>
                            {categorie?.sub?.length > 0 && categorie.sub.map((subCategorie, subIndex) => (
                                <div key={subIndex} className="pl-2">
                                    <Pnside link={subCategorie.link}>{subCategorie.title}</Pnside>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Solsidebar