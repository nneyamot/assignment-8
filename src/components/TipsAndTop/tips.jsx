
const Tips = () => {
    return (
        <div className="space-y-5 shadow-2xl p-5">
            <h1 className="font-extrabold text-2xl">Qurbani Tips</h1>
            <ol className="marker:text-green-800 marker:font-bold space-y-2 list-decimal ml-10 ">
                <li>Choose a healthy animal</li>
                <li>Check age and weight</li>
                <li>Keep the animal fed</li>
                <li>Follow Islamic Guideness </li>
            </ol>
            <button className="btn text-white bg-green-800 ml-5">Read More</button>
        </div>
    );
};

export default Tips;