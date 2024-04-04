import React from 'react'
import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import InfoIcon from '@mui/icons-material/Info';

export default function Footer() {
    return (
        <footer>
            <div className='contentWrapper'>
                <ul className='menuItems'>
                    <li className='menuItem'>Terms Of Use</li>
                    <li className='menuItem'>Privacy</li>
                    <li className='menuItem'>Blog</li>
                    <li className='menuItem'>FAQ</li>
                </ul>


                <div className='socialIcons'>
                    <a href="https://www.facebook.com/gao.leminh" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                        <span className='icon'>
                            <FacebookIcon />
                        </span>
                    </a>

                    <a href="https://www.instagram.com/dml_malicious/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>
                        <span className='icon'>
                            <InstagramIcon />
                        </span>
                    </a>

                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>
                        <span className='icon'>
                            <YoutubeIcon />
                        </span>
                    </a>

                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdml-portfolio.web.app%2F%3Ffbclid%3DIwAR1B2cRsSjM7CK-NVVsIPpIXEbt9Agw3EKUJcAxYelVfVzLki4ejoE71ytw&h=AT3z_o52w6ATnBVo94y8gyiVrfAsr7OxVuES6k-9YOgeA19GtzSKvgwEBw7-khmZlaQXA8NEHC6YVU9TKy8CC0m3vArinObEVSuTqg6hHEvHyjeU0uSOGJEs6yPa8xuplqehCQ" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                        <span className='icon'>
                            <InfoIcon />
                        </span>
                    </a>

                </div>

                <span className='infoText'>
                    &copy; 2003 - 2024 Ducflix, Inc.
                </span>
            </div>
        </footer>
    )
}
