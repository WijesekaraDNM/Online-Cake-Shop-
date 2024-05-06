import { useState } from 'react';
import React from 'react';
import classes from './homePage.module.css';


const ReadMoreReadLess = () =>{

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    
  return (
        <div className={classes.k}>
            <div className={classes.bg}>     
                <div className={classes.about}>
                    <div className={classes.topic}>
                        Marvelous & Delicious Cakes<br></br> for Everyone
                    </div>
                     <div >
                        <div className={classes.p}> 
                            At MD Cakes, it's our mission to bring you the 
                            largest selction of quality cakes on the market.
                            Along with a vast wealth of knowledge in the 
                            products we sell, MD Cakes carries everything
                             you could possibly imagine and more. We're here
                            for our customers, and want each one of them to 
                            have a unique, one of a kind experience at our 
                            amazing Cake Shop. 
                            {showMore && (
                                <>
                                    <div className={classes.About}>
                                        About Us
                                    </div>
                                    <div className={classes.include}>
                                        Founded in 1985, MD Cakes has been serving 
                                        our proud customers for quite some time now, 
                                        becoming the most popular ake Shop around. 
                                        We are a proud member of the Colombo local 
                                        merchant community, and love every opportunity 
                                        to interact with our customers as we provide 
                                        them with the freshest and most delicious ingredients. 
                                        We have a wide selection of quality products that 
                                        we’re sure you’ll just love. Stop by to have a taste!
                                    </div>
                                
                                </>
                            )}
                              <button className={classes.button} onClick={toggleShowMore}>
                                {showMore ? 'Read less' : 'Read more...'}
                             </button>
                        </div>
                    </div>
                </div>
            
                <div className={classes.circle}>   
                    <img className={classes.image2} src={"/foods/Piece.png"} alt=""/>
                </div>
            </div>
         </div>

  );

};
export default ReadMoreReadLess;

