import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddress, useMetamask } from "@thirdweb-dev/react";

// import { useStateContext } from "../context";
import CustomButton from "./CustomButton";

const Navbar = () => {
    const navigate = useNavigate();
    // const { connect, address } = useStateContext();
    const address = useAddress();
    const connect = useMetamask();

    return (
        <div>
            <div>
                <CustomButton
                    btnType="button"
                    title={address ? "Add a Book" : "Connect"}
                    styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                    handleClick={() => {
                        if (address) navigate("add");
                        else connect();
                    }}
                />
            </div>
        </div>
    );
};

export default Navbar;
