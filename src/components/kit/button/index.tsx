interface Props{
    title:string
}

const MainButton = ({title}:Props) => {
    return ( <button className=" bg-secondary text-white px-5 pb-2 pt-2 rounded-full">{title}</button> );
}
 
export default MainButton;