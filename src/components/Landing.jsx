import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import ViewPdf from './ViewPdf';
import '../styles/Lading.scss'

const Landing = () => {
	const { state } = useContext(AppContext);

	return (
        <div>
            <div className='home'>
				<div className='home--container'>
					<div className='home--container-greetings'>{state.Greetings}</div>
					<div className='home--container-iam'>{state.IAm}</div>
					<div className='home--container-name'><span>{state.Name}</span> {state.LastName}</div>
					<div className='home--container-profession'>{state.Profession}</div>
					<div className='home--container--data'>
						<div className='home--container--data-download'><ViewPdf>{state.Download}</ViewPdf></div>
						<div className="home--container--data-redes">
							<a href="https://www.linkedin.com/in/ospinajuanp/" target="_blank">
								<i className="fa-brands fa-linkedin"></i>
							</a>
							
							<a href="https://github.com/ospinajuanp" target="_blank">
								<i className=" fa-brands fa-github-alt"></i>
							</a>

							<a href="https://twitter.com/OspinaJuanP" target="_blank">
								<i className="fa-brands fa-twitter"></i>
							</a>

							<a href="https://www.instagram.com/ospinajuanp/" target="_blank">
								<i className="fa-brands fa-instagram"></i>
							</a>

							<a href="https://www.facebook.com/OspinaJuanP/" target="_blank">
								<i className="fa-brands fa-facebook"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Landing;