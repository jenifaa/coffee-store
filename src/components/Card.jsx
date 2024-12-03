
import { FaEye } from "react-icons/fa";
import { IoPencilOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const Card = ({card}) => {
    const {_id,name, chef, price, taste, category, details, photo} = card;
    return (
        <div className="flex items-center w-[450px] justify-between bg-base-200 px-6 py-5 rounded-xl">
            <div>
                <div><img className="" src={photo} alt="" /></div>
            </div>
            <div className="mr-3">
                <p className=""><span className="font-bold">Name :</span> {name}</p>
                <p><span className="font-bold">Price:</span> {price}</p>
                <p><span className="font-bold">Chef:</span> {chef}</p>
            </div>
            <div className="flex flex-col">
                <button className="p-2 rounded-lg bg-orange-300 mb-2"><FaEye /></button>
                <button className="text-white bg-black p-2 rounded-lg mb-2"><IoPencilOutline /></button>
                <button className="text-white bg-red-500 p-2 rounded-lg"><MdDelete /></button>
            </div>
        </div>
    );
};

export default Card;