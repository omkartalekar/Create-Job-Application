import React from 'react'

import JobDetailsPart2 from './page/JobDetailsPart2';
import JobDetailsPart1 from './page/JobDetailsPart1';

const PrimaryButton = ({ text, gradientColors }) => {

    // const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [isShow, setIsShow] = useState(false);
    // const [isSelected1, setIsSelected1] = useState(false);
    // const [isSelected2, setIsSelected2] = useState(false);


    // const toggleSelection = (circleNumber) => {
    //     if (circleNumber === 1) {
    //         setIsSelected1(true);
    //         setIsSelected2(false);

    //     } else if (circleNumber === 2) {
    //         setIsSelected2(true);
    //         setIsSelected1(false);
    //     }
    // };

    // const show = () => {
    //     setIsPopupOpen(false);
    //     setIsShow(true);

    // };

    // const openPopup = () => {
    //     setIsPopupOpen(true);
    // };

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", }}>
            {/* {!isPopupOpen && (<div style={{
                background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
                color: 'white',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '8px',
                border: '1px solid black',
            }}
                onClick={openPopup}
            >
                {text}
            </div>)} */}


            <JobDetailsPart1 />
            <JobDetailsPart2 />





        </div >


    )
}

export default PrimaryButton;