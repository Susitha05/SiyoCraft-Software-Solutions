import Header from "./assets/header";
import './index.css'
import { HiOutlineArrowDown, HiOutlineDeviceMobile, HiOutlineGlobe, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiOutlineUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRef } from "react";


 
function Landpage(){
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const serviceRef = useRef(null)
    const portfolioRef = useRef(null)
    const contactRef = useRef(null)
    
    const scrollTo =(ref:any) =>{
        ref.current.scrollIntoView({behavior :"smooth"})
    }

    return(
        <>
        <div>
            <Header/>
            <div id="home" ref={homeRef} className="grid grid-cols-2 h-screen bg-gradient-to-r from-blue-900 to-black backdrop-blur-xl p-5">
                <div id='slide-in' className="ml-2 flex flex-col w-full justify-center items-center text-white ">
                    <label className="text-[75px] uppercase font-bold ">
                        Explore Technology Solutions.
                    </label>
                    <p className="mt-2 break-words align-middle text-xl gap-2 leading-loose">
                        Discover smarter, faster, and more efficient ways to bring your ideas to life. We provide modern digital tools, secure systems, 
                        and innovative solutions designed to help businesses grow, adapt, and stay ahead in a rapidly changing world.
                    </p>
                    <button className="mt-5 p-5 px-20 text-lg bg-black rounded-full shadow-4xl border-2 border-white/70 font-bold" onClick={() => scrollTo(portfolioRef)}>PORTFOLIO</button>
                </div>
                <span className="mt-6 flex flex-col items-end col-start-2">
                    <img src="./bigpic.png" alt="cover-pic" style={{height:'880px',width:'800px', objectFit:'cover'}}/>
                </span>
                <div className="col-span-2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    >
                        <button className="flex gap-2 items-center py-1 px-5 bg-white/50 rounded-full font-semibold">
                            <HiOutlineArrowDown/>
                            <label>Scroll Down</label>
                        </button>
                    </motion.div>
                </div>
            </div>
            <div id="about" ref={aboutRef} className="slide-in grid grid-cols-7 w-full flex-col items-start mt-8">
                <label className="flex col-span-2 justify-center text-[50px] text-black/70 font-bold">ABOUT US</label>
            </div>
            <div className="flex justify-center"><hr className="justify-center rounded-full border-[3px] border-black/70 border-2 w-5/6"/></div>
            <div className="grid grid-cols-2 flex-col items-center w-full mt-6">
                <div className="mt-4 flex justify-center">
                    <img src="./aboutpic.png" className="rounded-2xl" style={{width:'600px', height:'500px',objectFit:'cover'}}/>
                </div>
                <div className="p-8 flex items-center rounded-2xl w-[800px] col-start-2 backdrop-blur-lg shadow-md">
                    <p className="text-[20px] text-justify leading-8">
                        Siyocraft Software Solutions is a growing tech company dedicated to building smart, scalable, and secure digital solutions for businesses of all sizes. We develop enterprise-level software, premium websites, and automated systems that simplify operations and drive growth. With a passion for innovation and a commitment to customer success, we aim to become a trusted partner for businesses moving toward digital transformation.
                        We focus on crafting solutions that combine powerful functionality with clean, intuitive design. Our team follows modern development standards to ensure performance, efficiency, and long-term reliability. By understanding each client’s unique requirements, we create customized systems that truly solve real-world challenges. We emphasize strong security practices to protect data and maintain trust. With continuous improvements and dedicated support, we ensure our solutions evolve alongside your business needs. At Siyocraft, our mission is to help organizations become more efficient, more connected, and more competitive in the digital era.
                    </p>
                </div>
            </div>
            <div id="service" ref={serviceRef} className="grid grid-cols-8 w-full items-start mt-8">
                    <label className="col-start-7 col-span-2  text-[50px] text-black/70 font-bold">OUR SERVICES</label>
            </div>
            <div className="flex justify-center">
                <hr className="justify-center rounded-full border-[3px] border-black/70 border-2 w-5/6"/>
            </div>
            <div className="grid grid-cols-12 flex-col w-full items-center mt-8">
                <div className="col-start-2 col-span-5">
                    <span className=" justify-start flex" >
                        <label className="flex items-center text-4xl gap-4 font-bold">
                            <HiOutlineGlobe className="w-10 h-10"/>
                            Develop Business Websites
                        </label>
                    </span>
                    <span className=" justify-start flex" >
                        <p className="ml-4 mt-4 text-justify text-lg">
                            We specialize in building fast, secure, and responsive business websites using the Programming Languages
                            Our development process ensures clean architecture, modern 
                            UI/UX, and scalable performance that can grow with your business. We focus on delivering websites
                            that are easy to manage, optimized for speed, and built with the latest industry standards.
                        </p>
                    </span>
                    <span className="col-start-2 col-span-5 justify-start flex mt-4" >
                        <label className="flex items-center text-4xl gap-4 font-bold">
                            <HiOutlineDeviceMobile className="w-10 h-10"/>
                            Develop Business Software Applications
                        </label>
                    </span>
                    <span className="col-start-2 col-span-5 justify-start flex" >
                        <p className="ml-4 mt-4 text-justify text-lg">
                            We design and build custom business software applications tailored to automate workflows, 
                            improve efficiency, and support data-driven decision-making. Our development process focuses on 
                            scalability, high performance, and secure architecture to ensure the software can grow alongside 
                            your business needs. We follow modern engineering practices such as modular system design, 
                            API-driven communication, and optimized database structures.
                        </p>
                    </span>
                    <span className="col-start-2 col-span-5 justify-start flex mt-4" >
                        <label className="flex items-center text-4xl gap-4 font-bold">
                            <HiOutlineUserGroup className="w-10 h-10"/>
                            Develop Customized Software/Web Applications
                        </label>
                    </span>
                    <span className="col-start-2 col-span-5 justify-start flex" >
                        <p className="ml-4 mt-4 text-justify text-lg">
                            We create fully customized web applications such as blog platforms, personal websites, 
                            and content-driven pages designed to match your style and goals. Our solutions are built 
                            with modern frameworks to ensure fast performance, responsive layouts, and an easy content-management 
                            experience. Whether you want a professional portfolio, a feature-rich blog, or a unique personal site, 
                            we develop clean, secure, and user-friendly applications that reflect your identity. Each design is 
                            crafted from scratch, giving you full control over features, branding, and future scalability.
                        </p>
                    </span>
                </div>
                <div className=" flex w-full col-start-8 col-span-4 justify-center">
                    <img src="./cog2.gif" style={{width:'500px', height:'500px'}}/>
                </div>
                <div className="items-center mt-12 col-start-2 col-span-10">
                    <div className="ml-6 py-1 w-[1650px] overflow-hidden bg-gray-300/30 rounded-md shadow">
                        <motion.div
                        className="flex items-center gap-20 whitespace-nowrap"
                        animate={{ x: ["-5%", "5%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        >
                            <span><img src="./react.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./js.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./node.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./mysql.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./aws.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./firebase.png" style={{width:'50px', height:'50px',objectFit:'contain'}}/></span>
                            <span><img src="./vs.png" style={{width:'50px', height:'50px', objectFit:'contain'}}/></span>
                            <span><img src="./as.png" style={{width:'50px', height:'50px', objectFit:'contain'}}/></span>
                            <span><img src="./react.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./js.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./aws.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./firebase.png" style={{width:'50px', height:'50px', objectFit:'contain'}}/></span>
                            <span><img src="./as.png" style={{width:'50px', height:'50px', objectFit:'contain'}}/></span>
                            <span><img src="./react.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./js.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                            <span><img src="./aws.png" style={{width:'60px', height:'60px', objectFit:'contain'}}/></span>
                        </motion.div>
                    </div>
                </div>
                <div id="portfolio" ref={portfolioRef} className="mt-10 flex col-start-2 col-span-10 px-5 py-15 justify-center items-center rounded-2xl backdrop-blur-lg shadow-sm">
                    <span className="flex flex-col justify-center items-center gap-4">
                        <img src="./Coding.gif" style={{objectFit:'contain'}}/>
                        <label className="text-lg font-semibold text-black/50">Our portfolio is currently under development. We appreciate your understanding.</label>
                    </span>
                </div>
            </div>
            <div id="contact" ref={contactRef} className="grid grid-cols-3 mt-10 p-6 bg-blue-950">
                <div className="w-full px-5 col-span-1 border-r-2 border-r-white/60 mt-5">
                    <p className="text-justify leading-10 text-white/60">
                        Siyocraft Software Solutions is a Sri Lankan software and web development company delivering smart, secure, and scalable 
                        digital solutions for businesses and individuals. We specialize in enterprise-level software, custom web 
                        applications, and modern websites designed to improve efficiency and strengthen digital presence. With a
                        strong focus on quality, performance, and innovation, we build solutions that support growth and 
                        long-term success.
                    </p>
                </div>
                <div className="flex col-span-2">
                    <div className="flex items-center justify-center w-1/3 px-5 col-span-1 border-r-2 border-r-white/60 mt-5 text-lg gap-8">
                    <ul className="flex flex-col gap-y-6 text-white/60">
                        <li onClick={() => scrollTo(homeRef)}>{'>'}Home</li>
                        <li onClick={() => scrollTo(aboutRef)}> {'>'}About</li>
                        <li onClick={() => scrollTo(portfolioRef)}> {'>'}Portfolio</li>
                        <li> {'>'}FQA</li>
                    </ul>
                    </div>
                    <div className="flex items-center p-5">
                        <div className="flex flex-col gap-y-6">
                            <span className="flex gap-2 items-center">
                                <HiOutlineMail className="w-8 h-8 text-white/60"/>
                                <label className="text-[18px]  text-white/70">siyocraftlk@gmail.com</label>
                            </span>
                            <span className="flex gap-2 items-center">
                                <HiOutlinePhone className="w-8 h-8 text-white/60"/>
                                <label className="text-[18px]  text-white/70">+94 762 374 448 </label>
                            </span>
                            <span className="flex gap-2 items-center">
                                <img src="./facebook1.png" className="w-8 h-8 text-white/60"/>
                                <label className="text-[18px]  text-white/70">SiyoCraft Software Solutions </label>
                            </span>
                            <span className="flex gap-2 items-center">
                                <HiOutlineLocationMarker className="w-8 h-8 text-white/60"/>
                                <label className="text-[18px]  text-white/70">Sri Lanka </label>
                            </span>
                        </div>
                        <div className="flex flex-col ml-20 items-center justify-end ">
                            <img src="./siyocraftlogo.png" style={{width:'300px'}}/>
                            <span className="mt-4 flex col-span-3 items-end w-full justify-center text-white/60">All Right Reserved @ SIYOCRAFT Software solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Landpage;