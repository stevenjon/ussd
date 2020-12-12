import React from 'react';
import '../App.css'

const Footer = () => {
    return (
        <div>
         <div className='Footer'>
            <div className='left'>
            <h4 className='h4info'> Sayt haqida </h4>
            <h6 className='FooterInfo'>
            Ushbu sayt UzMobile aloqa operatorining rasmiy dilleri - "LUCKY NET" M.CH.J tomonidan taqdim etilmoqda. 
            Sayt orqali UzMobile operatorining kunlik, haftalik, oylik internet to'plamlarini osonlik bilan faollashtirishingiz  mumkin.
            </h6>
            </div>
        <div className='right'>
        <h4 className='h4info' >Biz ijtimoiy tarmoqlarda </h4>
        <h6 className='FooterInfo'>
        Telegram orqali murojaat: <a href='https://t.me/USSD_MEGABAYT_uzmobile_mobiuz'> Telegram kanal</a>
        </h6>
        <h6 className='TarBot'>
   USSD-Yordamchi: <a href='https://t.me/Ussdmegabayt_bot'>Botga murojaat</a> 
   </h6>
        </div>
        
      </div>
        </div>
    )
}

export default Footer
