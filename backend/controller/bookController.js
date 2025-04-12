import Book from "../modals/book.js"

export const getBook=async(req,res)=>{
    try {
        const book=await Book.find()
        res.status(200).json({
            sucess:true,
            book
        })
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({
            sucess:false,
            message:error.message
        })
    }
}