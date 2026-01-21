import '../index.css'
import { HashLink } from 'react-router-hash-link'

function Header(){
    return(
        <div className="fixed top-0 w-full z-50">
            <div className="flex w-full p-4 justify-between items-center backdrop-blur-lg shadow-sm ">
                <div className="div">
                    <img src='./siyocraftlogo.png'style={{height:'60px', width:'200px', objectFit:'fill'}}/>
                </div>
                <div className="mr-4 font-semibold text-xl">
                <ul className="flex text-gray-600 gap-4">
                    <HashLink id ='navbtn' smooth to="/#home">HOME</HashLink>
                     <HashLink id ='navbtn' smooth to="/#about">ABOUT</HashLink>
                      <HashLink id ='navbtn' smooth to="/#service">SERVICES</HashLink>
                       <HashLink id ='navbtn' smooth to="/#portfolio">PORTFOLIO</HashLink>
                        <HashLink id ='navbtn' smooth to="/#contact">CONTACT</HashLink>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;