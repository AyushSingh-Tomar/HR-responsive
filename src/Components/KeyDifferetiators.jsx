
import React from "react";
import CommonHeading from "./CommonHeading";
import bgImage from "../assets/KeyDifferentiatorsBackGroundImage.png";
import logo2 from "../assets/logo2.png";

const KeyDifferentiators = () => {
    const differentiators = [
        { title: "Cost Effective:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." },
        { title: "Experience & Expertise:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." },
        { title: "Expertise:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." },
        { title: "Execution:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." }
    ];

    return (
        <div style={{ marginTop: "4vw", position: "relative",  width: "100%" }}>
            <CommonHeading title="Key Differentiators" />
            <div className="mt-[5%] ml-[2%]">
            <div style={{
                position: "relative",
                backgroundColor: "#006699",
                color: "white",
                padding: "3rem",
                // borderRadius: "10px",
                overflow: "hidden",
                margin: "2vw auto",
                marginLeft:"5%",
                width: "95%",
                maxWidth: "1400px",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1
                }}>
                    <img
                        src={bgImage}
                        alt="Background pattern"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "blur(2px)"
                        }}
                    />
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(58, 153, 201, 0.5)",
                        backdropFilter: "blur(4px)",
                    }} />
                </div>

                <div style={{ 
                    position: "relative", 
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "95%",
                    textAlign: "left"
                }}>
                    <ul style={{
                        listStyleType: "disc",
                        paddingLeft: "2rem",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        lineHeight: "1.8",
                        fontWeight: "400"
                    }}>
                        {differentiators.map((item, index) => (
                            <li key={index} style={{
                                marginBottom: "2.5rem",
                                paddingRight: "1rem"
                            }}>
                                <span style={{
                                    fontWeight: "600",
                                    fontSize: "clamp(2rem, 2vw, 1.5rem)"
                                }}>{item.title}</span> {" "}
                                <span style={{
                                    fontSize: "clamp(2rem, 1.8vw, 1.2rem)",
                                    fontWeight: "400"
                                }}>{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <img 
                    src={logo2} 
                    alt="Logo" 
                    style={{
                        position: "absolute",
                        bottom: "1.5vw",
                        right: "1.5vw",
                        height: "5vw",
                        zIndex: 4
                    }}
                />
            </div>
            </div>
        </div>
    );
};

export default KeyDifferentiators;