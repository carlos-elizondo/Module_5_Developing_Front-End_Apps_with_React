import useFetch from "./useFetch";

const FetchYogaData = () => {
    const [data] = useFetch("https://api.npoint.io/4459a9a10e43812e1152");
    console.log(data);
    return (
        <>
            <ul className="list_data_main">
                <h1 className="usefetch_heading">Yoga Benefits</h1>
                {data &&
                    data.map((e, index) => (
                        <li key={index} className="list_data">
                            <h3>{e.name}</h3>
                            <p>
                                <strong>Benefits: </strong>
                                {e.benefits}
                            </p>
                            <p>
                                <strong>Time Duration: </strong>
                                <b>{e.time_duration}</b>
                            </p>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default FetchYogaData;
