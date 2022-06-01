import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/92707c783a2ed00d7750c2c1d939cd2d.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[2rem] object-fit: scale-down h-48 w-96 `,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Trade, collect, and sell extraordinary NFTs
                        </div>
                        <div className={style.description}>
                            NXU is the place to do all things nft
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Create</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img
                            className="rounded-t-lg"
                            src="https://images.ctfassets.net/a9237abdyvg9/2GDeLs0jA3u3jHJsIlBTGT/d06c08a6f7a8e1bbdb34d43d8d78bc5f/boredape1.jpeg"
                            alt=""
                        />
                        <div className={style.infoContainer}>
                            <img
                                className="h-[1.25rem] rounded-full"
                                src="https://images.ctfassets.net/a9237abdyvg9/2GDeLs0jA3u3jHJsIlBTGT/d06c08a6f7a8e1bbdb34d43d8d78bc5f/boredape1.jpeg"
                                alt=""
                            />
                            <div className={style.author}>
                                <div className={style.name}>Bored Ape #12563</div>
                                <a
                                    className="text-[#1868b7]"
                                    href="https://images.ctfassets.net/a9237abdyvg9/2GDeLs0jA3u3jHJsIlBTGT/d06c08a6f7a8e1bbdb34d43d8d78bc5f/boredape1.jpeg"
                                >
                                    Johnny Depp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero