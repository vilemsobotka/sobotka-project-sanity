type articleProps = {
    title: string;
    picture: string;
    author: string;
    category: string;
    intro: string;
    text: string;
    date: string;
    main: boolean;
}

export default function Article(props: articleProps)
{
    return(
    <div className = {props.main ? "rounded-lg shadow-lg" : "rounded-md shadow-md w-80"}>
        <img className="rounded-t-md" src = {props.picture}></img>
        <h1 className="text-xl font-bold text-center">{props.title}</h1>
        <h3 className="text-center">by: {props.author}</h3>
        {props.main ? props.intro : <></>}
        <div className="flex flex-row ">
            <p className="bg-teal-500 rounded-full px-1 mx-4">{props.category}</p>
            <p>{props.date}</p>
        </div>
    </div>
    )
}