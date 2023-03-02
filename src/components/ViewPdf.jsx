import React,{ useState } from 'react';

import file from '../../public/CVJuanPabloOspinaRestrepo.pdf'


const ViewPdf =  ({children}) => {
    return (
        <>
            <a href={file} target='_blank' >
                {children}
            </a>
        </>
    );
};

export default ViewPdf;