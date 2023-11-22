import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useUtils from "../../hooks/useUtils/useUtils";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const PrimaryButton = ({ text, variant, link, func, extraClass, disabled }) => {
    const { buttonLoading } = useUtils();

    const baseClasses = `relative w-fit flex justify-center items-center overflow-hidden px-5 lg:py-[25.25px] py-[17.5px] text-sm font-bold capitalize rounded-full cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:translate-x-0 before:translate-y-72 hover:before:translate-y-0 before:transition-all before:duration-500 text-white disabled:text-red-500${
        extraClass || ""
    }`;

    const generatedClass =
        variant === "black"
            ? "bg-secondary-black before:bg-primary-green"
            : variant === "green"
            ? "bg-primary-green before:bg-secondary-black"
            : "bg-primary-green before:bg-white hover:text-primary-green";

    const classes = ${baseClasses} ${generatedClass};

    const buttonText = (
        <span className="z-10 min-w-[160px] lg:min-w-[220px] text-center transition-all duration-500">
            {buttonLoading ? <ButtonLoader /> : text}
        </span>
    );

    return link ? (
        disabled ? (
            <div className={`${classes} pointer-events-none opacity-50`}>
                {buttonText}
            </div>
        ) : (
            <Link className={classes} to={link}>
                {buttonText}
            </Link>
        )
    ) : disabled ? (
        <div className={`${classes} pointer-events-none opacity-50`}>{buttonText}</div>
    ) : (
        <button disabled={disabled} onClick={func} className={classes}>
            {buttonText}
        </button>
    );
};

PrimaryButton.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    link: PropTypes.string,
    func: PropTypes.func,
    extraClass: PropTypes.string,
    disabled: PropTypes.bool,
};
export default PrimaryButton;