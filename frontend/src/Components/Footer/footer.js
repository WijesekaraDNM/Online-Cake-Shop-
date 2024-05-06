import React from 'react';
import classes from './footer.module.css';
export default function Footer() {

  return (
        <div className={classes.footer}>
            <div className={classes.detail}> 
                <div className={classes.col1}>
                    <div className={classes.logo}>
                        <div className={classes.log}>
                            <img className={classes.image} src={'/foods/CakeLogo.png'}  alt="MD CAkes"/>
                            <p className={classes.title}>
                                Cakes
                            </p>
                        </div>
                        <div  className={classes.description}>
                            <p>Sri Lanka's number 1 quality cake designers with mesmerrizing arts & mouth watering taste.</p>
                        </div>
                    </div>
                    <div className={classes.contact}>
                        <h2>
                            Contacts
                        </h2>
                        <table className={classes.table}>
                            <tr>
                                <td className={classes.data}>
                                    <img className={classes.icons} src={'/phone.png'}  alt="phone"/>
                                </td>
                                <td>
                                    01123456678
                                </td>
                            </tr>
                            <tr>
                                <td className={classes.data}>
                                    <img className={classes.icons} src={'/location.png'}  alt="location"/>
                                </td>
                                <td>
                                    230/9,MDCakes,Wattala Road, Colombo.
                                </td>
                            </tr>
                            <tr>
                                <td className={classes.data}>
                                    <img className={classes.icons} src={'/email.png'}  alt="email"/>
                                </td>
                                <td >
                                    mdcakes@gmail.com.
                                </td>
                            </tr>
                            <tr>
                                <td className={classes.data}>
                                    <img className={classes.icons} src={'/fax.png'}  alt="fax"/>
                                </td>
                                <td>
                                    2345671890.
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={classes.col2}>

                    <div className={classes.row1}>
                        <div className={classes.col11}>
                            <img className={classes.icon1}  src={'/qualityverified.png'} alt='quality' />
                            <div className={classes.description1}>
                                <h2>100% Best Quality</h2>
                                <p>We are always try to keep the value of your money</p>
                            </div>
                        </div>
                        <div className={classes.col22}>
                            
                        </div>
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.Links}>
                            <h3>Useful Links</h3>
                            <li>F&Q</li>
                            <li>Delivery</li>
                            <li>Contact</li>
                        </div>
                        <div className={classes.Account}>
                            <h3>My Account</h3>
                            <li>My Account</li>
                            <li>Other History</li>
                            <li>Discount</li>
                            <li>Returns</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.socialMedia}>
                <div className={classes.socialCol1}>
                    <img className={classes.icon} src={'/facebook.png'}  alt="fax"/>
                    <img className={classes.icon} src={'/whatsapp.png'}  alt="fax"/>
                    <img className={classes.icon} src={'/twitter.png'}  alt="fax"/>
                </div>
                <div className={classes.socialCol2}>
                    <img className={classes.icon} src={'/visa.png'}  alt="fax"/>
                    <img className={classes.icon} src={'/PayPal.png'}  alt="fax"/>
                    <img className={classes.icon} src={'/MasterCard.png'}  alt="fax"/>     
                </div>

            </div>
     </div>
        
    );
}
