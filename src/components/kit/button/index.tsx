interface Props{
    title:string
}

const MainButton = ({title}:Props) => {
    return ( <button className=" bg-secondary text-white px-5 pb-3 pt-1 rounded-full">{title}</button> );
}
 
export default MainButton;