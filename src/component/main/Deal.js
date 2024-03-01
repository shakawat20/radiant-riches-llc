import React from 'react';
import img1 from '../../images/image.png'

const Deal = () => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "333px",padding:"10px",margin:"20px" }}>
            <figure className="px-10 pt-10">
                <img src={img1} style={{ width: "141px", height: "103px" }} alt="Shoes" className="rounded-xl" />
            </figure>

            <div style={{ display: "flex", marginLeft: "15px", marginTop: "20px" ,color:"#074786"}}>
                <div style={{ width: "69px", height: "28px", color: "#074786", backgroundColor: "#F2F4F7", borderRadius: "5px", fontSize: "14px", lineHeight: "20px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px" }}>20% off</div>
                <div style={{ width: "100px", height: "28px", color: "#074786", backgroundColor: "#F2F4F7", borderRadius: "5px", fontSize: "14px", lineHeight: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>Limited time</div>
            </div>

            <div style={{ height: "24px", textAlign: "center", color: "#626E79", fontWeight: "700", margin: "20px" }}>
                Webbuilder 1
            </div>
            <div style={{ height: "24px", textAlign: "center", color: "#626E79", fontWeight: "400", fontSize: "16px", width: "284px" }}>
                Computer Modern clasic with wix suppo
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{width:"71px",height:"28px",color:"#5C6874",fontWeight:"400",lineHeight:"28px"}}>
                    $39.96
                </div>
                <div style={{width:"48px",height:"20px",color:"#5C6874",fontWeight:"400",lineHeight:"20px",fontSize:"14px"}}>
                    $39.96
                </div>
                <div style={{height:"20px",fontWeight:"400",lineHeight:"20px",fontSize:"14px",color:"red"}}>
                    (20% off)
                </div>
            </div>
            <div className="card-body items-center text-center">

                <div className="card-actions">
                    <button className="btn btn-primary " style={{ backgroundColor: "#1B88F4", width: "292px", height: "48px" }} >Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Deal;