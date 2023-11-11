/* eslint-disable react/prop-types */


const SectionTitle = ({headerTitle, subtitle}) => {
    return (
        <div>
            <h3 className="text-center text-yellow-500">---{subtitle}---</h3>
            <h1 className="text-4xl  text-center border-y-4 pt-1 w-4/12 mx-auto pb-2 mb-4 uppercase">{headerTitle}</h1>
        </div>
    );
};

export default SectionTitle;