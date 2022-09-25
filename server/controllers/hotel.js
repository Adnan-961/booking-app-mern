import Hotel from "../models/Hotel.js";


export const createHotel= async(req,res,next)=>{
const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (error) {
    next(error);
  }
}



export const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body} ,{new:true})
        res.status(200).json(updatedHotel)
      } catch (error) {
        res.status(500).json(error);
      }
} 
export const deleteHotel = async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(`hotel with id: ${req.params.id} has been deleted`)
      } catch (error) {
        res.status(500).json(error);
      }
}

