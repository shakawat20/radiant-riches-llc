import React from 'react';
import img1 from '../../images/image.png'
const Card = () => {
    return (
        <div style={{ width: "1024px", height: "255px", display: "flex", justifyContent: "space-evenly", marginTop: "70px"}}>
        <div style={{ width: "136px", height: '34px', backgroundColor: "#FF7724", color: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", position: "relative", left: "20px" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 1.6665C4.375 1.32133 4.65482 1.0415 5 1.0415H15C15.3452 1.0415 15.625 1.32133 15.625 1.6665V7.35278C15.625 10.5234 13.1236 13.1248 10 13.1248C6.87644 13.1248 4.375 10.5234 4.375 7.35278V1.6665ZM5.625 2.2915V7.35278C5.625 9.86744 7.60071 11.8748 10 11.8748C12.3993 11.8748 14.375 9.86744 14.375 7.35278V2.2915H5.625Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0415 4.58301C1.0415 4.23783 1.32133 3.95801 1.6665 3.95801H4.99984C5.34502 3.95801 5.62484 4.23783 5.62484 4.58301V8.74967C5.62484 9.09485 5.34502 9.37467 4.99984 9.37467C2.92768 9.37467 1.0415 7.64239 1.0415 4.58301ZM2.32395 5.20801C2.50507 6.88881 3.41739 7.77588 4.37484 8.03944V5.20801H2.32395Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.375 4.58301C14.375 4.23783 14.6548 3.95801 15 3.95801H18.3333C18.6785 3.95801 18.9583 4.23783 18.9583 4.58301C18.9583 7.64239 17.0722 9.37467 15 9.37467C14.6548 9.37467 14.375 9.09485 14.375 8.74967V4.58301ZM15.625 5.20801V8.03944C16.5824 7.77588 17.4948 6.88881 17.6759 5.20801H15.625Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12.708C10.3452 12.708 10.625 12.9878 10.625 13.333V14.9997C10.625 15.3449 10.3452 15.6247 10 15.6247C9.65482 15.6247 9.375 15.3449 9.375 14.9997V13.333C9.375 12.9878 9.65482 12.708 10 12.708Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25514 14.6726C7.36887 14.4877 7.57042 14.375 7.78752 14.375H12.101C12.3111 14.375 12.5071 14.4805 12.6228 14.6559L14.2717 17.1559C14.3983 17.3478 14.4093 17.5938 14.3003 17.7963C14.1913 17.9987 13.9799 18.125 13.75 18.125H6.25C6.0236 18.125 5.81491 18.0026 5.70445 17.805C5.59398 17.6073 5.59902 17.3654 5.71762 17.1726L7.25514 14.6726ZM8.13687 15.625L7.36812 16.875H12.5891L11.7646 15.625H8.13687Z" fill="white" />
            </svg>

            <p style={{ paddingLeft: "10px" }}>Best Choice</p>


        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", right: "40px" }}>
            <div style={{ height: "44px", width: "44px", border: "1px solid #E1E4E6", borderRadius: "90%", display: "flex", justifyContent: "center", alignItems: "center", color: "#626E79", position: "relative", right: "90%", top: "8%" }}>1</div>
            <img src={img1} alt="" style={{ width: "141px", height: "103" }} />
            <div style={{ width: "68px", height: "20px", textAlign: "center" }}>
                Builder 1
            </div>


        </div>

        <div style={{ width: "490px", height: "72px", marginLeft: "20px", paddingTop: "30px" }}>
            <p style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', }}>
                <span style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', }}> WixPro 72-Inch Responsive Website Builder- </span>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <p style={{
                fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left',
            }}>
                <span style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', }}> Main highlights</span> <br />    &nbsp; &nbsp; &nbsp;   [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
            </p>

            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", paddingTop: "10px" }} >
                <p style={{ width: "85px", height: "24px", fontSize: "16px", lineHeight: "24px", color: "#1B88F4" }}>
                    Show more
                </p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z" fill="#1B88F4" />
                </svg>





            </div>

        </div>


        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width: "135px", height: "118px", backgroundColor: "#F3F9FF", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                <div style={{ width: "50px", height: "48px", fontFamily: "inter", fontWeight: "400", lineHeight: "48px", fontSize: "32px" }}>
                    9.8
                </div>
                <p style={{ width: "80px", height: "20px", fontSize: "14px", lineHeight: "20px", color: "#074786", marginBottom: "10px" }}>
                    Exceptional
                </p>

                <svg width="66" height="11" viewBox="0 0 66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_601_219)">
                        <path d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z" fill="#FFB80F" />
                        <path d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z" fill="#FFB80F" />
                        <path d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z" fill="#FFB80F" />
                        <path d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z" fill="#FFB80F" />
                        <path d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z" fill="#FFB80F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_601_219">
                            <rect width="66" height="11" fill="white" />
                        </clipPath>
                    </defs>
                </svg>




            </div>
            <button style={{
                width: "232px",
                height: "48px",
                backgroundColor: "#1B88F4",
                color: "white",
                borderRadius: "15px"
            }}> View </button>
        </div>









    </div>

    );
};

export default Card;