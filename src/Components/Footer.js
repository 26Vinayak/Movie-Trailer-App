import React from 'react'
import './css/Footer.css';

const footerLinks = [
    {
        name: 'FAQ',
        path: '',
    },
    {
        name: 'Help Center',
        path: '',
    },
    {
        name: 'Account',
        path: '',
    },
    {
        name: 'Media Center',
        path: '',
    },
    {
        name: 'Investor Relations',
        path: '',
    },
    {
        name: 'Jobs',
        path: '',
    },
    {
        name: 'Redeem Gift Cards',
        path: '',
    },
    {
        name: 'Buy Gift Cards',
        path: '',
    },
    {
        name: 'Ways to Watch',
        path: '',
    },
    {
        name: 'Terms of Use',
        path: '',
    },
    {
        name: 'Privacy',
        path: '',
    },
    {
        name: 'Cookie Preferences',
        path: '',
    },
    {
        name: 'Impressum',
        path: '',
    },
    {
        name: 'Contact Us',
        path: '',
    },
    {
        name: 'Speed Test',
        path: '',
    },
    {
        name: 'Legal Notices',
        path: '',
    },
    {
        name: 'Netflix Originals',
        path: '',
    },
];
function Footer() {

    return (
        <div className = "footer_container">
            <div className="footer_inside_container">
                <h4>Questions? Call +918171693267</h4>
                <div className="footer_links">
                    {footerLinks.map((link) => <div key={link.name}><p>{link.name}</p></div>)}
                </div>
                <div className="footer_language_selector">
                    <select>
                        <option>
                            English
                        </option>
                        <option>
                            Hindi
                        </option>
                    </select>
                </div>
                <p>Netflx India</p>
            </div>
        </div>
    )
}

export default Footer;
